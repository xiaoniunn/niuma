/**
 * NIUMA网站主要JavaScript文件
 */

document.addEventListener('DOMContentLoaded', () => {
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
        }
    });
    
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuToggle.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // 关闭移动菜单（如果打开）
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 初始化价格图表（如果存在）
    const priceChartElement = document.getElementById('priceChart');
    if (priceChartElement) {
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
                    pointBackgroundColor: '#FF7A00',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(30, 41, 59, 0.9)',
                        borderColor: 'rgba(255, 122, 0, 0.3)',
                        borderWidth: 1,
                        padding: 12,
                        titleColor: '#F8FAFC',
                        bodyColor: '#F8FAFC',
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },  
                        ticks: {
                            color: 'rgba(248, 250, 252, 0.6)'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(248, 250, 252, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: 'rgba(248, 250, 252, 0.6)',
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    }
                }
            }
        });
        
        // 当语言切换时更新图表标签
        document.addEventListener('languageChanged', () => {
            priceChart.data.datasets[0].label = currentLanguage === 'zh' ? 'NIUMA 价格 (USDT)' : 'NIUMA Price (USDT)';
            priceChart.update();
        });
    }
});

// 创建自定义事件用于语言切换
const languageChangedEvent = new Event('languageChanged');

// 扩展语言切换函数，触发自定义事件
const originalSwitchLanguage = window.switchLanguage;
window.switchLanguage = function() {
    if (typeof originalSwitchLanguage === 'function') {
        originalSwitchLanguage();
    }
    document.dispatchEvent(languageChangedEvent);
};