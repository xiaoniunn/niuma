/**
 * NIUMA网站主要JavaScript文件
 * 修复空锚点选择器错误
 */

// 初始化头部事件
function initHeaderEvents() {
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    if (navbar) {
        checkScrollPosition(navbar);
        window.addEventListener('scroll', () => checkScrollPosition(navbar));
    }
}

// 检查滚动位置并更新导航栏样式
function checkScrollPosition(navbar) {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
    }
}

// 初始化价格图表
function initPriceChart() {
    const priceChartElement = document.getElementById('priceChart');
    if (priceChartElement && typeof Chart !== 'undefined') {
        const ctx = priceChartElement.getContext('2d');
        const priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['8/26', '9/5', '9/10', '9/15', '9/19'],
                datasets: [{
                    label: currentLanguage === 'zh' ? 'NIUMA 价格 (USDT)' : 'NIUMA Price (USDT)',
                    data: [0.00005, 0.0001, 0.00015, 0.0002, 0.000261],
                    borderColor: '#FF7A00',
                    backgroundColor: 'rgba(255, 122, 0, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#FF7A00'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: 'rgba(248, 250, 252, 0.6)' } },
                    y: { 
                        grid: { color: 'rgba(248, 250, 252, 0.1)' },
                        ticks: { 
                            color: 'rgba(248, 250, 252, 0.6)',
                            callback: (v) => `$${v}`
                        }
                    }
                }
            }
        });

        document.addEventListener('languageChanged', () => {
            priceChart.data.datasets[0].label = currentLanguage === 'zh' ? 'NIUMA 价格 (USDT)' : 'NIUMA Price (USDT)';
            priceChart.update();
        });
    }
}

// 初始化语言切换
function initLanguageSwitch() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('#lang-zh')) {
            // 切换到中文
            console.log('切换到中文');
            e.preventDefault();
            setLanguage('zh');
        }
        if (e.target.closest('#lang-en')) {
             console.log('切换到英文');
            e.preventDefault();
            setLanguage('en');
        }
        if (e.target.closest('#mobile-lang-zh')) {
            e.preventDefault();
            setLanguage('zh');
            document.getElementById('mobile-lang-dropdown')?.classList.add('hidden');
        }
        if (e.target.closest('#mobile-lang-en')) {
            e.preventDefault();
            setLanguage('en');
            document.getElementById('mobile-lang-dropdown')?.classList.add('hidden');
        }
    });
}

// 语言切换函数
function switchLanguage(lang) {
    currentLanguage = lang;
    const langElement = document.querySelector('[data-lang-key="current-lang"]');
    if (langElement) {
        langElement.textContent = lang === 'zh' ? '中文' : 'English';
    }
    document.dispatchEvent(new Event('languageChanged'));
}

// 平滑滚动 - 修复选择器错误
function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        // 处理空锚点 "#" 的情况
        if (targetId === '#') {
            // 可以选择滚动到顶部或不执行任何操作
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        // 验证选择器有效性
        try {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // 关闭移动菜单
                const mobileMenu = document.getElementById('mobile-menu');
                const menuToggle = document.getElementById('menu-toggle');
                if (mobileMenu && !mobileMenu.classList.contains('hidden') && menuToggle) {
                    mobileMenu.classList.add('hidden');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        } catch (error) {
            console.error('无效的选择器:', targetId, error);
        }
    });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    window.initHeaderEvents = initHeaderEvents; // 暴露全局
    initPriceChart();
    initLanguageSwitch(); 
    initSmoothScroll();


let currentLanguage1 = localStorage.getItem('language') || 'zh';
setTimeout(() => {
    setLanguage(currentLanguage1);
}, 100);

});
