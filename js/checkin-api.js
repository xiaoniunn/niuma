/**
 * NIUMA 打卡数据 API 模块
 * 处理所有打卡相关的数据请求和响应
 */

class CheckinAPI {
    // 调整baseURL为根路径（根据实际域名配置，此处留空由端点自行拼接完整路径）
    constructor(baseURL = '') {
        this.baseURL = baseURL;
        this.cache = new Map();
        this.cacheTimeout = 5 * 60 * 1000; // 5分钟缓存
    }


    /**
     * 通用API请求方法
     * @param {string} endpoint - API端点
     * @param {Object} options - 请求选项
     * @returns {Promise} API响应
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            return {
                success: true,
                data: data,
                timestamp: Date.now()
            };
        } catch (error) {
            console.error(`API请求失败 [${endpoint}]:`, error);
            return {
                success: false,
                error: error.message,
                timestamp: Date.now()
            };
        }
    }

    /**
     * 获取缓存数据
     * @param {string} key - 缓存键
     * @returns {Object|null} 缓存的数据或null
     */
    getCache(key) {
        const cached = this.cache.get(key);
        if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
            return cached.data;
        }
        this.cache.delete(key);
        return null;
    }

    /**
     * 设置缓存数据
     * @param {string} key - 缓存键
     * @param {Object} data - 要缓存的数据
     */
    setCache(key, data) {
        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    /**
     * 获取今日打卡统计数据
     * 对应接口: http://xiangliang.jiuer.top/nmdata/todayStats
     * @returns {Promise} 今日打卡统计
     */
    async getTodayStats() {
        const cacheKey = 'today_stats';
        const cached = this.getCache(cacheKey);
        if (cached) return { success: true, data: cached };

        // 调整端点路径
        const result = await this.request('/nmdata/todayStats');
        if (result.success) {
            this.setCache(cacheKey, result.data);
        }
        return result;
    }

    /**
     * 获取今日打卡排行榜
     * 对应接口: http://xiangliang.jiuer.top/nmdata/todayRanking?limit=xxx
     * @param {number} limit - 返回数量限制，默认10
     * @returns {Promise} 今日排行榜数据
     */
    async getTodayRanking(limit = 10) {
        const cacheKey = `today_ranking_${limit}`;
        const cached = this.getCache(cacheKey);
        if (cached) return { success: true, data: cached };

        // 调整端点路径
        const result = await this.request(`/nmdata/todayRanking?limit=${limit}`);
        if (result.success) {
            this.setCache(cacheKey, result.data);
        }
        return result;
    }

    /**
     * 获取月度打卡排行榜
     * 对应接口: http://xiangliang.jiuer.top/nmdata/monthlyRanking?limit=xxx&month=xxx
     * @param {number} limit - 返回数量限制，默认10
     * @param {string} month - 月份，格式：YYYY-MM，默认当前月
     * @returns {Promise} 月度排行榜数据
     */
    async getMonthlyRanking(limit = 10, month = null) {
        const currentMonth = month || new Date().toISOString().slice(0, 7);
        const cacheKey = `monthly_ranking_${currentMonth}_${limit}`;
        const cached = this.getCache(cacheKey);
        if (cached) return { success: true, data: cached };

        // 调整端点路径
        const result = await this.request(`/nmdata/monthlyRanking?limit=${limit}&month=${currentMonth}`);
        if (result.success) {
            this.setCache(cacheKey, result.data);
        }
        return result;
    }

    /**
     * 获取月度打卡趋势数据
     * 对应接口: http://xiangliang.jiuer.top/nmdata/monthlyTrend?month=xxx
     * @param {string} month - 月份，格式：YYYY-MM，默认当前月
     * @returns {Promise} 月度趋势数据
     */
    async getMonthlyTrend(month = null) {
        const currentMonth = month || new Date().toISOString().slice(0, 7);
        const cacheKey = `monthly_trend_${currentMonth}`;
        const cached = this.getCache(cacheKey);
        if (cached) return { success: true, data: cached };

        // 调整端点路径
        const result = await this.request(`/nmdata/monthlyTrend?month=${currentMonth}`);
        if (result.success) {
            this.setCache(cacheKey, result.data);
        }
        return result;
    }

    /**
     * 获取用户个人打卡记录
     * 对应接口: http://xiangliang.jiuer.top/nmdata/userHistory?userId=xxx&days=xxx
     * @param {string} userId - 用户ID
     * @param {number} days - 获取最近多少天的记录，默认30天
     * @returns {Promise} 用户打卡记录
     */
    async getUserCheckinHistory(userId, days = 30) {
        const cacheKey = `user_history_${userId}_${days}`;
        const cached = this.getCache(cacheKey);
        if (cached) return { success: true, data: cached };

        // 调整端点路径（将userId改为查询参数）
        const result = await this.request(`/nmdata/userHistory?userId=${userId}&days=${days}`);
        if (result.success) {
            this.setCache(cacheKey, result.data);
        }
        return result;
    }

    /**
     * 提交用户打卡
     * 对应接口: http://xiangliang.jiuer.top/nmdata/submitCheckin
     * @param {Object} checkinData - 打卡数据
     * @returns {Promise} 打卡结果
     */
    async submitCheckin(checkinData) {
        // 调整端点路径
        const result = await this.request('/nmdata/submitCheckin', {
            method: 'POST',
            body: JSON.stringify(checkinData)
        });
        
        // 打卡成功后清除相关缓存
        if (result.success) {
            this.clearRelatedCache();
        }
        
        return result;
    }

    /**
     * 清除相关缓存
     */
    clearRelatedCache() {
        const keysToDelete = [];
        for (const key of this.cache.keys()) {
            if (key.includes('today_') || key.includes('monthly_')) {
                keysToDelete.push(key);
            }
        }
        keysToDelete.forEach(key => this.cache.delete(key));
    }

    /**
     * 清除所有缓存
     */
    clearAllCache() {
        this.cache.clear();
    }

    /**
     * 获取模拟数据（用于开发测试）
     */
    getMockData() {
        return {
            todayStats: {
                todayCheckins: 156,
                totalUsers: 2847,
                consecutiveDays: 89,
                growthRate: 12
            },
            dailyRanking: [
                { rank: 1, name: "牛马001", time: "05:30", avatar: "https://picsum.photos/id/1001/100", streak: 45, userId: "user001" },
                { rank: 2, name: "勤奋小牛", time: "05:45", avatar: "https://picsum.photos/id/1002/100", streak: 38, userId: "user002" },
                { rank: 3, name: "早起鸟儿", time: "06:00", avatar: "https://picsum.photos/id/1003/100", streak: 42, userId: "user003" },
                { rank: 4, name: "晨光使者", time: "06:15", avatar: "https://picsum.photos/id/1004/100", streak: 28, userId: "user004" },
                { rank: 5, name: "坚持达人", time: "06:30", avatar: "https://picsum.photos/id/1005/100", streak: 35, userId: "user005" },
                { rank: 6, name: "奋斗青年", time: "06:45", avatar: "https://picsum.photos/id/1006/100", streak: 22, userId: "user006" },
                { rank: 7, name: "梦想追逐", time: "07:00", avatar: "https://picsum.photos/id/1007/100", streak: 31, userId: "user007" },
                { rank: 8, name: "努力小马", time: "07:15", avatar: "https://picsum.photos/id/1008/100", streak: 19, userId: "user008" },
                { rank: 9, name: "拼搏战士", time: "07:30", avatar: "https://picsum.photos/id/1009/100", streak: 26, userId: "user009" },
                { rank: 10, name: "毅力之星", time: "07:45", avatar: "https://picsum.photos/id/1010/100", streak: 33, userId: "user010" }
            ],
            monthlyRanking: [
                { rank: 1, name: "牛马001", count: 28, avatar: "https://picsum.photos/id/1001/100", userId: "user001" },
                { rank: 2, name: "勤奋小牛", count: 27, avatar: "https://picsum.photos/id/1002/100", userId: "user002" },
                { rank: 3, name: "早起鸟儿", count: 26, avatar: "https://picsum.photos/id/1003/100", userId: "user003" },
                { rank: 4, name: "晨光使者", count: 25, avatar: "https://picsum.photos/id/1004/100", userId: "user004" },
                { rank: 5, name: "坚持达人", count: 24, avatar: "https://picsum.photos/id/1005/100", userId: "user005" },
                { rank: 6, name: "奋斗青年", count: 23, avatar: "https://picsum.photos/id/1006/100", userId: "user006" },
                { rank: 7, name: "梦想追逐", count: 22, avatar: "https://picsum.photos/id/1007/100", userId: "user007" },
                { rank: 8, name: "努力小马", count: 21, avatar: "https://picsum.photos/id/1008/100", userId: "user008" },
                { rank: 9, name: "拼搏战士", count: 20, avatar: "https://picsum.photos/id/1009/100", userId: "user009" },
                { rank: 10, name: "毅力之星", count: 19, avatar: "https://picsum.photos/id/1010/100", userId: "user010" }
            ],
            monthlyTrend: {
                labels: Array.from({length: 30}, (_, i) => i + 1),
                data: Array.from({length: 30}, () => Math.floor(Math.random() * 50) + 100)
            }
        };
    }

    /**
     * 使用模拟数据（开发模式）
     * @param {boolean} useMock - 是否使用模拟数据
     */
    setMockMode(useMock = true) {
        this.mockMode = useMock;
        if (useMock) {
            console.log('🔧 打卡API已切换到模拟数据模式');
        }
    }

    /**
     * 模拟API请求延迟
     * @param {number} delay - 延迟时间（毫秒）
     */
    async mockDelay(delay = 500) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    /**
     * 获取今日统计数据（支持模拟模式）
     */
    async getTodayStatsWithMock() {
        if (this.mockMode) {
            await this.mockDelay();
            return {
                success: true,
                data: this.getMockData().todayStats,
                timestamp: Date.now()
            };
        }
        return this.getTodayStats();
    }

    /**
     * 获取今日排行榜（支持模拟模式）
     */
    async getTodayRankingWithMock(limit = 10) {
        if (this.mockMode) {
            await this.mockDelay();
            return {
                success: true,
                data: this.getMockData().dailyRanking.slice(0, limit),
                timestamp: Date.now()
            };
        }
        return this.getTodayRanking(limit);
    }

    /**
     * 获取月度排行榜（支持模拟模式）
     */
    async getMonthlyRankingWithMock(limit = 10) {
        if (this.mockMode) {
            await this.mockDelay();
            return {
                success: true,
                data: this.getMockData().monthlyRanking.slice(0, limit),
                timestamp: Date.now()
            };
        }
        return this.getMonthlyRanking(limit);
    }

    /**
     * 获取月度趋势（支持模拟模式）
     */
    async getMonthlyTrendWithMock() {
        if (this.mockMode) {
            await this.mockDelay();
            return {
                success: true,
                data: this.getMockData().monthlyTrend,
                timestamp: Date.now()
            };
        }
        return this.getMonthlyTrend();
    }
}

// 创建全局API实例
window.checkinAPI = new CheckinAPI('https://xiangliang.jiuer.top');

// 默认启用模拟模式（开发环境）
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.checkinAPI.setMockMode(false);
    //设置接口URL
}

// 导出API类（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CheckinAPI;
}
