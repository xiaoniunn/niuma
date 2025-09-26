/**
 * 语言切换功能
 * 支持中英文切换
 */

// 默认语言为中文
let currentLanguage = localStorage.getItem('language') || 'zh';

// 语言数据
const translations = {
    zh: {
        // 导航
        'nav-about': '关于我们',
        'nav-token': '代币信息',
        'nav-community': '社区',
        'nav-roadmap': '路线图',
        'nav-buy': '如何购买',
        'language-switch': '切换到英文',
        'current-lang': '中文',
        
        // 英雄区域
        'hero-title': '牛马精神，永不言弃',
        'hero-subtitle': '致敬每一个勤劳肯干的"牛马"，我们用汗水铸就价值',
        'hero-button': '立即购买',
        'hero-button-learn': '了解更多',
        
        // 关于我们
        'about-title': '什么是<span class="text-primary">NIUMA</span>',
        'about-desc': 'NIUMA是一个致敬每一位勤劳肯干的人的社区代币，我们相信通过持续努力和坚持不懈，每个人都能创造价值。NIUMA代币基于XLayer构建，享有低Gas费和快速交易的优势。',
        'feature-1-title': '社区驱动',
        'feature-1-desc': '完全由社区管理和发展，没有预留，没有团队份额',
        'feature-2-title': '零税收',
        'feature-2-desc': '买卖NIUMA代币无需支付任何税费，让您的资产最大化',
        'feature-3-title': 'XLayer优势',
        'feature-3-desc': '基于XLayer构建，享有低Gas费和快速交易的优势',
        'story-title': '牛马精神',
        'story-desc': '在中文互联网文化中，"牛马"一词常被用来自嘲为勤劳工作的人。NIUMA代币正是为了致敬这些默默付出、不求回报的人们而创建。我们相信，每一个"牛马"的努力都值得被看见和尊重。',
        
        // 代币信息
        'token-title': 'NIUMA代币信息',
        'token-desc': 'NIUMA代币是一个基于XLayer的社区驱动型代币，总供应量为1,000,000,000,000枚',
        'token-supply': '总供应量',
        'token-supply-value': '1,000,000,000,000',
        'token-contract': '合约地址',
        'token-network': '网络',
        'token-network-value': 'XLayer',
        'token-decimals': '小数位',
        'token-decimals-value': '18',
        
        // 新增的代币相关翻译
        'hero-badge': 'XLayer上的Meme币',
        'hero-heading': '我们是<span class="text-primary">NIUMA</span><br>致敬每一个<span class="text-primary">牛马</span>',
        'hero-description': 'NIUMA币代表着勤劳、坚韧与团结的"牛马精神"。我们是社区的基石，用汗水铸就价值，在XLayer链上共创未来。',
        'join-community': '加入2,000+社区成员',
        'token-supply-label': '总供应量',
        'token-supply-value': '10 亿',
        'token-chain-label': '链',
        'token-chain-value': '<img src="image/logo.svg" alt="XLayer" class="w-4 h-4"> XLayer',
        'scroll-down': '向下滚动',
        'about-badge': '关于NIUMA',
        'about-heading': '牛马觉醒：<span class="text-primary">从自嘲到信念，从工具人到造梦者。</span>',
        'about-description': '在 Web3 世界，我们不再是被定义的工具，而是自己的主人，是集体精神的觉醒。',
        'story-p1': ' $NIUMA 社区，是你我的故事 —— 平凡人在 Web3 相遇，从此不再是螺丝钉，而是同路人。',
        'story-p2': '以东方 "牛马精神" 聚首，无华丽包装、无资本助推，凭热爱与憧憬，让每个成员用创意鲜活社区灵魂。',
        'story-p3': '共启 BASIS 计划：推出牛马周边，让链上信仰走进日常。',
        'story-p4': '并肩竞逐：搭建 Web3 市场、进驻主流电商，让牛马精神走向全球。',
        'story-p5': '社区共创 IP：探索 NFT 授权机制，让社区成为最大合伙人，共定品牌未来。',
        'token-badge': '代币详情',
        'token-heading': 'NIUMA <span class="text-primary">代币信息</span>',
        'token-description': '了解NIUMA代币的基本信息、经济模型和技术细节',
        'token-basic-info': '代币基本信息',
        'token-name-label': '代币名称',
        'token-contract-label': '合约地址',
        'token-total-supply-label': '总供应量',
        'token-total-supply-value': '10亿 NIUMA',
        'token-decimals-label': '小数位数',
        'token-launch-time-label': '发行时间',
        'token-launch-time-value': '2025年Q3',
        'token-distribution': '代币分配',
        'token-community-reserve': '社区储备',
        'token-liquidity': '流动性',
        'token-team-advisors': '团队与顾问',
        'token-marketing': '营销与合作',
        'price-chart': '价格图表',
        'why-xlayer': '为什么选择XLayer？',
        'xlayer-description': 'XLayer是OKX推出的高性能公链，为NIUMA提供了安全、快速、低成本的交易体验，是meme币发展的理想平台。',
        'xlayer-feature-1': '高性能交易处理，支持高TPS',
        'xlayer-feature-2': '超低Gas费，适合小额交易',
        'xlayer-feature-3': '与OKX生态深度整合，易于上所',
        'xlayer-feature-4': '强大的安全保障和去中心化特性',
        'token-allocation-title': '代币分配',
        'token-allocation-liquidity': '流动性池',
        'token-allocation-community': '社区奖励',
        'token-allocation-marketing': '市场营销',
        'token-allocation-burn': '永久销毁',
        'token-price-title': 'NIUMA价格走势',
        'token-xlayer-title': 'XLayer的优势',
        'token-xlayer-desc': 'XLayer是一个高性能的Layer 2解决方案，为NIUMA代币提供了以下优势：',
        'token-xlayer-feature-1': '极低的Gas费用',
        'token-xlayer-feature-2': '快速交易确认',
        'token-xlayer-feature-3': '与以太坊生态系统完全兼容',
        'token-xlayer-feature-4': '高安全性和去中心化',
        
        // 社区
        'community-title': '加入<span class="text-primary">NIUMA</span>大家庭',
        'community-desc': '无论你是经验丰富的加密货币爱好者，还是刚刚入门的新手，我们都欢迎你加入NIUMA社区，一起传播牛马精神，共创价值。',
        
        // 新增的社区相关翻译
        'community-power': '社区力量',
        'join-our': '加入我们的',
        'niuma-community': '牛马社区',
        'community-strength': 'NIUMA的力量来自于社区，每一位成员都是我们大家庭的重要组成部分',
        'telegram': 'Telegram',
        'telegram-description': '加入我们的Telegram群组，获取最新消息和社区讨论',
        'join-now': '立即加入 <i class="fa fa-external-link"></i>',
        'twitter': 'Twitter',
        'twitter-description': '关注我们的Twitter，获取最新动态和市场信息',
        'follow-now': '立即关注 <i class="fa fa-external-link"></i>',
        'community-activities': '社区活动',
        'niuma-ama': 'NIUMA线上AMA',
        'ama-description': '与项目团队面对面交流，解答社区疑问，分享未来规划',
        'coming-soon': '敬请期待',
        'niuma-promotion': 'NIUMA推广竞赛',
        'promotion-description': '邀请好友加入社区，赢取丰厚NIUMA奖励，排名前100名均可获奖',
        'reward-amount': '100万NIUMA',
        
        // 路线图
        'roadmap-title': '发展路线图',
        'roadmap-desc': 'NIUMA的发展之路才刚刚开始，我们有一个清晰的愿景和路线图，将不断为社区创造更多价值。',
        
        // 新增的路线图相关翻译
        'future-planning': '未来规划',
        'niuma': 'NIUMA',
        'roadmap': '路线图',
        'roadmap-description': '我们的发展计划，与社区共同成长',
        'completed': '已完成',
        'phase-one-title': '阶段一：夯实基础，塑造品牌',
        'phase-one-description': '这是我们新征程的起点，我们将把每一个基础打牢。',
        'phase-one-item-1': 'IP 具象化： 打造独一无二的牛马IP角色，让我们的精神有血有肉，拥有全球认可的面孔。',
        'phase-one-item-2': '品牌化： 推动版权申请、建立官网，让 $NIUMA 成为一个不容质疑的文化品牌。',
        'phase-one-item-3': '双线出击： 在 Web2（微信职场表情包）和 Web3（Meme 包）同时引爆，让牛马精神渗透到每一个角落。',
        'in-progress': '进行中',
        'phase-two-title': '阶段二：价值落地，走向实体',
        'phase-two-description': '在这一阶段，我们将把精神力量转化为 tangible（可触及的）的价值。',
        'phase-two-item-1': '周边孵化： 推出首批牛马品牌周边，让信仰不再只存在于链上，而是走进你的日常生活。',
        'phase-two-item-2': '渠道全覆盖： 搭建 Web3 市场，并进驻淘宝等主流电商平台，让牛马精神走向全球。',
        'phase-two-item-3': '社区共创： 探索基于 NFT 的 IP 授权机制，让社区成为我们品牌最大的合伙人，共同决定IP的未来发展。',
        'planned': '计划中',
        'phase-three-title': '阶段三：文化构建，内容为王',
        'phase-three-description': '我们将从产品向内容生态延伸，打造一个拥有完整世界观的文化帝国。',
        'phase-three-item-1': '内容矩阵： 打造完整的牛马世界观，包括漫画、动画短片和故事线，让我们的故事能够永流传。',
        'phase-three-item-2': '跨界联动： 与其他文化品牌和项目深度合作，共同推出联名产品或活动，将牛马文化推向更广阔的圈层。',
        'phase-three-item-3': 'IP 授权： 开放IP授权合作，让更多创意者能够基于牛马精神进行再创作，丰富整个文化生态。',
        'vision': '愿景',
        'phase-four-title': '阶段四：生态繁荣，价值永存',
        'phase-four-description': '这是我们最长远的愿景，我们将建立一个可持续、能自我acee的利润分配机制，让每一位社区成员都能分享到生态成长的红利。',
        'phase-four-item-1': '价值闭环： 将文化价值与金融价值深度结合，建立一套可持续的利润分配机制，让每一位社区成员都能分享到生态成长的红利。',
        'phase-four-item-2': 'DAO 治理： 逐步建立一个完全去中心化的 DAO 治理结构，将项目的最终决策权交到社区手中。',
        'phase-four-item-3': '最终愿景： 让 $NIUMA 不再是一个 Meme，而是一个能持续创造真实价值、改变世界的文化品牌，永远传承"牛马"的坚韧精神。',
        'roadmap-phase-1': '阶段一',
        'roadmap-phase-1-item-1': '概念构思与团队组建',
        'roadmap-phase-1-item-2': '智能合约开发与审计',
        'roadmap-phase-1-item-3': '官方网站上线',
        'roadmap-phase-1-item-4': '社交媒体渠道建立',
        'roadmap-phase-2': '阶段二',
        'roadmap-phase-2-item-1': '代币发行与流动性添加',
        'roadmap-phase-2-item-2': '社区建设与初期营销',
        'roadmap-phase-2-item-3': '首次交易所上线',
        'roadmap-phase-2-item-4': '社区空投活动',
        'roadmap-phase-3': '阶段三',
        'roadmap-phase-3-item-1': '主流交易所上线',
        'roadmap-phase-3-item-2': '社区治理机制实施',
        'roadmap-phase-3-item-3': '生态系统扩展',
        'roadmap-phase-3-item-4': '战略合作伙伴关系建立',
        'roadmap-phase-4': '阶段四',
        'roadmap-phase-4-item-1': '全球市场扩张',
        'roadmap-phase-4-item-2': '实用场景开发',
        'roadmap-phase-4-item-3': '跨链整合',
        'roadmap-phase-4-item-4': '可持续发展计划实施',
        
        // 如何购买
        'buy-badge': '加入我们',
        'buy-title': '如何购买<span class="text-primary">NIUMA</span>',
        'buy-description': '简单几步，即可成为NIUMA社区的一员',
        'buy-step-1-title': '创建钱包',
        'buy-step-1-desc': '下载并安装支持XLayer链的钱包，如MetaMask、OKX钱包等，并创建或导入您的钱包。',
        'buy-step-2-title': '获取OKB',
        'buy-step-2-desc': '在OKX等交易所购买XLayer链的原生代币OKB用于Gas费，并转入您的钱包。',
        'buy-step-3-title': '购买NIUMA',
        'buy-step-3-desc': '在支持XLayer链的去中心化交易所（如OKX DEX）上，使用OKB兑换NIUMA代币。',
        'buy-step-4-title': '加入社区',
        'buy-step-4-desc': '加入我们的Telegram群组，参与讨论，获取最新信息，与其他NIUMA成员一起成长。',
        'buy-okx-title': '在OKX钱包购买$NIUMA',
        'buy-contract-address': 'CA:0x87669801a1fad6dad9db70d27ac752f452989667',
        'buy-go-to-buy': '去购买',
        'buy-trading-pair': 'NIUMA/USDT',
        'buy-market-cap': '市值：$255K',
        'buy-button': '买入',
        'sell-button': '卖出',
        'join-community-title': '加入<span class="text-primary">NIUMA</span>大家庭',
        'join-community-desc': '无论你是经验丰富的加密货币爱好者，还是刚刚入门的新手，我们都欢迎你加入NIUMA社区，一起传播牛马精神，共创价值。',
        
        // 页脚
        'footer-description': '致敬每一个勤劳肯干的"牛马"，我们用汗水铸就价值。',
        'footer-quick-links': '快速链接',
        'footer-about': '关于我们',
        'footer-token': '代币信息',
        'footer-community': '社区',
        'footer-roadmap': '路线图',
        'footer-buy': '如何购买',
        'footer-resources': '资源',
        'footer-whitepaper': '白皮书',
        'footer-audit': '合约审计',
        'footer-faq': '常见问题',
        'footer-tutorial': '教程',
        'footer-xlayer-guide': 'XLayer指南',
        'footer-legal': '法律',
        'footer-privacy': '隐私政策',
        'footer-terms': '服务条款',
        'footer-disclaimer': '免责声明',
        'footer-copyright': '&copy; 2023 NIUMA. 保留所有权利。',
        'footer-disclaimer-text': 'NIUMA是一个社区驱动的meme币，投资有风险，参与需谨慎。'
    },
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-token': 'Token',
        'nav-community': 'Community',
        'nav-roadmap': 'Roadmap',
        'nav-buy': 'How to Buy',
        'language-switch': 'Switch to Chinese',
        'current-lang': 'English',
        
        // Hero Section
        'hero-title': 'NIUMA Spirit, Never Give Up',
        'hero-subtitle': 'Honoring every hardworking "NIUMA", we create value through perseverance',
        'hero-button': 'Buy Now',
        'hero-button-learn': 'Learn More',
        
        // About Section
        'about-title': 'What is <span class="text-primary">NIUMA</span>',
        'about-desc': 'NIUMA is a community token that honors every hardworking person. We believe that through continuous effort and persistence, everyone can create value. NIUMA token is built on XLayer, enjoying the advantages of low gas fees and fast transactions.',
        'feature-1-title': 'Community Driven',
        'feature-1-desc': 'Fully managed and developed by the community, no reserves, no team shares',
        'feature-2-title': 'Zero Tax',
        'feature-2-desc': 'No tax fees for buying and selling NIUMA tokens, maximizing your assets',
        'feature-3-title': 'XLayer Advantages',
        'feature-3-desc': 'Built on XLayer, enjoying the advantages of low gas fees and fast transactions',
        'story-title': 'NIUMA Spirit',
        'story-desc': 'In Chinese internet culture, the term "NIUMA" is often used as self-deprecation for hardworking people. The NIUMA token was created to honor these people who work silently without asking for returns. We believe that every "NIUMA"s effort deserves to be seen and respected.',
        
        // Token Section
        'token-title': 'NIUMA Token Information',
        'token-desc': 'NIUMA token is a community-driven token based on XLayer with a total supply of 1,000,000,000,000 tokens',
        'token-supply': 'Total Supply',
        'token-supply-value': '1,000,000,000,000',
        'token-contract': 'Contract Address',
        'token-network': 'Network',
        'token-network-value': 'XLayer',
        'token-decimals': 'Decimals',
        'token-decimals-value': '18',
        
        // New token-related translations
        'hero-badge': 'Meme Coin on XLayer',
        'hero-heading': 'We are <span class="text-primary">NIUMA</span><br>Honoring every <span class="text-primary">hardworker</span>',
        'hero-description': 'NIUMA coin represents the spirit of diligence, resilience and unity. We are the cornerstone of the community, creating value through hard work, building the future together on XLayer.',
        'join-community': 'Join 2,000+ community members',
        'token-supply-label': 'Total Supply',
        'token-chain-label': 'Chain',
        'token-chain-value': '<img src="image/logo.svg" alt="XLayer" class="w-4 h-4"> XLayer',
        'scroll-down': 'Scroll Down',
        'about-badge': 'About NIUMA',
        'about-heading': 'NIUMA Awakening: <span class="text-primary">From Self-mockery to Belief, From Tool to Dream Maker.</span>',
        'about-description': 'In the Web3 world, we are no longer defined tools, but masters of ourselves, the awakening of collective spirit.',
        'story-p1': '$NIUMA Community is a story of you and me — ordinary people meet in Web3, and from then on, we are no longer small cogs in the machine, but fellow travelers.',
        'story-p2': 'Gathering with the Eastern "NIUMA spirit", without fancy packaging or capital support, relying on passion and longing, let every member use creativity to enliven the community soul.',
        'story-p3': 'Launch the BASIS Initiative together: Roll out Niuma-themed merchandise, bringing on-chain conviction into daily life.',
        'story-p4': 'Compete side by side: Build a Web3 marketplace and enter mainstream e-commerce platforms (e.g., Taobao), spreading the Niuma Spirit globally.',
        'story-p5': 'Community-co-created IP: Explore NFT-based IP licensing mechanisms, making the community our primary partner to jointly shape the future of the IP.',
        'token-badge': 'Token Details',
        'token-heading': 'NIUMA <span class="text-primary">Token Information</span>',
        'token-description': 'Learn about NIUMA token\'s basic information, economic model and technical details',
        'token-basic-info': 'Basic Token Information',
        'token-name-label': 'Token Name',
        'token-contract-label': 'Contract Address',
        'token-total-supply-label': 'Total Supply',
        'token-total-supply-value': '1 Billion NIUMA',
        'token-decimals-label': 'Decimals',
        'token-launch-time-label': 'Launch Time',
        'token-launch-time-value': 'Q3 2025',
        'token-distribution': 'Token Distribution',
        'token-community-reserve': 'Community Reserve',
        'token-liquidity': 'Liquidity',
        'token-team-advisors': 'Team & Advisors',
        'token-marketing': 'Marketing & Partnerships',
        'price-chart': 'Price Chart',
        'why-xlayer': 'Why Choose XLayer?',
        'xlayer-description': 'XLayer is a high-performance public chain launched by OKX, providing NIUMA with secure, fast, and low-cost trading experience, making it an ideal platform for meme coin development.',
        'xlayer-feature-1': 'High-performance transaction processing with high TPS support',
        'xlayer-feature-2': 'Ultra-low gas fees, suitable for small transactions',
        'xlayer-feature-3': 'Deep integration with OKX ecosystem, easy to list',
        'xlayer-feature-4': 'Strong security guarantees and decentralized features',
        'token-allocation-title': 'Token Allocation',
        'token-allocation-liquidity': 'Liquidity Pool',
        'token-allocation-community': 'Community Rewards',
        'token-allocation-marketing': 'Marketing',
        'token-allocation-burn': 'Permanent Burn',
        'token-price-title': 'NIUMA Price Chart',
        'token-xlayer-title': 'XLayer Advantages',
        'token-xlayer-desc': 'XLayer is a high-performance Layer 2 solution that provides the following advantages for NIUMA tokens:',
        'token-xlayer-feature-1': 'Extremely low gas fees',
        'token-xlayer-feature-2': 'Fast transaction confirmation',
        'token-xlayer-feature-3': 'Fully compatible with the Ethereum ecosystem',
        'token-xlayer-feature-4': 'High security and decentralization',
        
        // Community Section
        'community-power': 'Community Power',
        'join-our': 'Join Our',
        'niuma-community': 'NIUMA Community',
        'community-strength': 'NIUMA\'s strength comes from the community, every member is an important part of our big family',
        'community-title': 'Join the <span class="text-primary">NIUMA</span> Family',
        'community-desc': 'Whether you are an experienced cryptocurrency enthusiast or a newcomer, we welcome you to join the NIUMA community to spread the NIUMA spirit and create value together.',
        'community-join': 'Join Our',
        'community-name': 'NIUMA Community',
        'community-members': '2,000+ Members',
        'community-countries': '50+ Countries',
        'telegram': 'Telegram',
        'telegram-description': 'Join our Telegram group to get the latest news and community discussions',
        'join-now': 'Join Now <i class="fa fa-external-link"></i>',
        'twitter': 'Twitter',
        'twitter-description': 'Follow our Twitter for the latest updates and market information',
        'follow-now': 'Follow Now <i class="fa fa-external-link"></i>',
        'community-activities': 'Community Activities',
        'niuma-ama': 'NIUMA Online AMA',
        'ama-description': 'Face-to-face communication with the project team, answer community questions, and share future plans',
        'coming-soon': 'Coming Soon',
        'niuma-promotion': 'NIUMA Promotion Contest',
        'promotion-description': 'Invite friends to join the community, win generous NIUMA rewards, top 100 participants will receive prizes',
        'reward-amount': '1 Million NIUMA',
        'community-telegram': 'Telegram',
        'community-twitter': 'Twitter',
        'community-discord': 'Discord',
        'community-github': 'GitHub',
        'community-medium': 'Medium',
        'community-reddit': 'Reddit',
        'community-youtube': 'YouTube',
        'community-instagram': 'Instagram',
        'community-facebook': 'Facebook',
        'community-linkedin': 'LinkedIn',
        
        // Roadmap Section
        'future-planning': 'Future Planning',
        'niuma': 'NIUMA',
        'roadmap': 'Roadmap',
        'roadmap-description': 'Our development plan, growing together with the community',
        'roadmap-title': 'Development Roadmap',
        'roadmap-desc': 'NIUMA\'s development journey has just begun. We have a clear vision and roadmap to continuously create more value for the community.',
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'planned': 'Planned',
        'vision': 'Vision',
        'phase-one-title': 'Community Foundation',
        'phase-one-description': 'Build a strong community foundation and establish brand awareness',
        'phase-one-item-1': 'Launch NIUMA token on XLayer',
        'phase-one-item-2': 'Build initial community of 1,000+ members',
        'phase-one-item-3': 'Establish social media presence',
        'phase-two-title': 'Ecosystem Development',
        'phase-two-description': 'Expand ecosystem and enhance token utility',
        'phase-two-item-1': 'Launch staking and farming features',
        'phase-two-item-2': 'Partner with major DeFi protocols',
        'phase-two-item-3': 'Develop mobile app',
        'phase-three-title': 'Cultural Building',
        'phase-three-description': 'Strengthen community culture and expand global influence',
        'phase-three-item-1': 'Launch NFT collection',
        'phase-three-item-2': 'Organize global community events',
        'phase-three-item-3': 'Establish NIUMA DAO governance',
        'phase-four-title': 'Ecosystem Prosperity',
        'phase-four-description': 'Achieve ecosystem prosperity and sustainable value creation',
        'phase-four-item-1': 'Cross-chain bridge integration',
        'phase-four-item-2': 'Launch NIUMA metaverse',
        'phase-four-item-3': 'Achieve global recognition',
        'roadmap-phase-1': 'Phase 1',
        'roadmap-phase-1-item-1': 'Concept development and team formation',
        'roadmap-phase-1-item-2': 'Smart contract development and audit',
        'roadmap-phase-1-item-3': 'Official website launch',
        'roadmap-phase-1-item-4': 'Social media channel establishment',
        'roadmap-phase-2': 'Phase 2',
        'roadmap-phase-2-item-1': 'Token issuance and liquidity addition',
        'roadmap-phase-2-item-2': 'Community building and initial marketing',
        'roadmap-phase-2-item-3': 'First exchange listing',
        'roadmap-phase-2-item-4': 'Community airdrop activities',
        'roadmap-phase-3': 'Phase 3',
        'roadmap-phase-3-item-1': 'Mainstream exchange listing',
        'roadmap-phase-3-item-2': 'Community governance mechanism implementation',
        'roadmap-phase-3-item-3': 'Ecosystem expansion',
        'roadmap-phase-3-item-4': 'Strategic partnership establishment',
        'roadmap-phase-4': 'Phase 4',
        'roadmap-phase-4-item-1': 'Global market expansion',
        'roadmap-phase-4-item-2': 'Practical scenario development',
        'roadmap-phase-4-item-3': 'Cross-chain integration',
        'roadmap-phase-4-item-4': 'Sustainable development plan implementation',
        
        // How to Buy Section
        'buy-badge': 'Join Us',
        'buy-title': 'How to Buy <span class="text-primary">NIUMA</span>',
        'buy-description': 'Simple steps to become a member of the NIUMA community',
        'buy-step-1-title': 'Create Wallet',
        'buy-step-1-desc': 'Download and install wallets that support XLayer chain, such as MetaMask, OKX Wallet, etc., and create or import your wallet.',
        'buy-step-2-title': 'Get OKB',
        'buy-step-2-desc': 'Purchase OKB, the native token of XLayer chain, on exchanges like OKX for gas fees, and transfer to your wallet.',
        'buy-step-3-title': 'Buy NIUMA',
        'buy-step-3-desc': 'On decentralized exchanges that support XLayer chain (such as OKX DEX), use OKB to exchange for NIUMA tokens.',
        'buy-step-4-title': 'Join Community',
        'buy-step-4-desc': 'Join our Telegram to participate in discussions, get the latest information, and grow with other NIUMA members.',
        'buy-okx-title': 'Buy $NIUMA on OKX Wallet',
        'buy-contract-address': 'CA:0x87669801a1fad6dad9db70d27ac752f452989667',
        'buy-go-to-buy': 'Go to Buy',
        'buy-trading-pair': 'NIUMA/USDT',
        'buy-market-cap': 'Market Cap: $255K',
        'buy-button': 'Buy',
        'sell-button': 'Sell',
        'join-community-title': 'Join the <span class="text-primary">NIUMA</span> Family',
        'join-community-desc': 'Whether you are an experienced cryptocurrency enthusiast or a newcomer, we welcome you to join the NIUMA community to spread the NIUMA spirit and create value together.',
        'buy-title': 'How to Buy NIUMA',
        'buy-desc': 'Buying NIUMA tokens is very simple, just follow these steps:',
        'buy-step-1-title': 'Set Up Wallet',
        'buy-step-1-desc': 'Download and install MetaMask or other wallets that support XLayer, and add the XLayer network',
        'buy-step-2-title': 'Buy ETH',
        'buy-step-2-desc': 'Purchase ETH on an exchange and transfer it to your wallet',
        'buy-step-3-title': 'Connect to XLayer',
        'buy-step-3-desc': 'Bridge your ETH from Ethereum mainnet to XLayer network',
        'buy-step-4-title': 'Swap for NIUMA',
        'buy-step-4-desc': 'Use a decentralized exchange on XLayer, such as SushiSwap, to swap ETH for NIUMA tokens',
        
        // Footer
        'footer-description': 'Honoring every hardworking "NIUMA", we create value through perseverance.',
        'footer-quick-links': 'Quick Links',
        'footer-about': 'About',
        'footer-token': 'Token',
        'footer-community': 'Community',
        'footer-roadmap': 'Roadmap',
        'footer-buy': 'Buy',
        'footer-resources': 'Resources',
        'footer-whitepaper': 'Whitepaper',
        'footer-audit': 'Contract Audit',
        'footer-faq': 'FAQ',
        'footer-tutorial': 'Tutorial',
        'footer-xlayer-guide': 'XLayer Guide',
        'footer-legal': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-disclaimer': 'Disclaimer',
        'footer-copyright': '&copy; 2023 NIUMA. All rights reserved.',
        'footer-disclaimer-text': 'NIUMA is a community-driven meme coin, investment involves risks, please participate with caution.',
        
        // 社区治理模块
        'governance-badge': '社区治理',
        'governance-title': '社区治理与<span class="text-primary">透明管理</span>',
        'governance-description': '牛马（NIUMA）社区自成立以来，始终秉持公开透明、社区自治、共建共享的原则',
        'migration-title': '链迁移说明',
        'migration-description': '为适应发展方向与生态机会，牛马已完成从 Solana 链整体迁移至 X Layer 链',
        'migration-process': '迁移过程',
        'migration-step-1': 'Sol 链上的社区资产全部打入社区金库',
        'migration-step-2': '随后统一出售，并在 X Layer 上由开发者地址统一购买并派发',
        'migration-step-3': '所有多余代币，已全部纳入社区金库',
        'treasury-title': '社区金库与多签管理',
        'treasury-description': '目前，牛马资产由多个地址多签管理，完全由社区推动',
        'treasury-long-term-a': 'NIUMA 长期 A',
        'treasury-long-term-b': 'NIUMA 长期 B', 
        'treasury-project-support': 'NIUMA 项目支持',
        'treasury-daily-operations': 'NIUMA 日常',
        'copy-address': '复制地址',
        
        // 打卡页面翻译
        'checkin-title': '打卡数据',
        'checkin-subtitle': '社区打卡统计与排行',
        'today-checkin': '今日打卡',
        'total-members': '累计总人数',
        'consecutive-days': '连续打卡天数',
        'growth-rate': '增长率',
        'active-rate': '活跃度',
        'daily-ranking': '今日前10名',
        'monthly-ranking': '月度排行榜',
        'checkin-trend': '打卡趋势',
        'checkin-time': '打卡时间',
        'consecutive': '连续',
        'days': '天',
        'times': '次',
        'no-data': '暂无数据',
        'checkin-now': '立即打卡',
        'view-records': '查看记录',
        'refresh-data': '刷新数据',
        'loading': '加载中...',
        'error-occurred': '发生错误',
        'retry': '重试',
        'daily-checkin-count': '每日打卡人数',
        'checkin-motivation': '打卡激励',
        'checkin-motivation-text': '每一次打卡都是对自己的承诺，坚持下去！',
        'rank': '排名'
    },
    en: {
        'nav-home': 'Home',
        'nav-gallery': 'Gallery',
        'nav-about': 'About',
        'nav-token': 'Token',
        'nav-community': 'Community',
        'nav-roadmap': 'Roadmap',
        'nav-buy': 'Buy NIUMA',
        'language-switch': 'Switch to Chinese',
        'current-lang': 'English',
        
        'hero-title': 'NIUMA Spirit, Never Give Up',
        'hero-subtitle': 'Honoring every hardworking "NIUMA", we create value through perseverance',
        'hero-button': 'Buy Now',
        'hero-button-learn': 'Learn More',
        
        'about-title': 'What is <span class="text-primary">NIUMA</span>',
        'about-desc': 'NIUMA is a community token that honors every hardworking person. We believe that through continuous effort and perseverance, everyone can create value. NIUMA token is built on XLayer, enjoying low gas fees and fast transaction advantages.',
        'feature-1-title': 'Community Driven',
        'feature-1-desc': 'Fully managed and developed by the community, no reserves, no team allocation',
        'feature-2-title': 'Zero Tax',
        'feature-2-desc': 'No tax fees for buying and selling NIUMA tokens, maximizing your assets',
        'feature-3-title': 'XLayer Advantage',
        'feature-3-desc': 'Built on XLayer, enjoying low gas fees and fast transaction advantages',
        'story-title': 'NIUMA Spirit',
        'story-desc': 'In Chinese internet culture, "NIUMA" is often used to self-deprecatingly refer to hardworking people. NIUMA token was created to honor those who work silently and selflessly. We believe that every "NIUMA\'s" effort deserves to be seen and respected.',
        
        'token-title': 'NIUMA Token Information',
        'token-desc': 'NIUMA token is a community-driven token based on XLayer with a total supply of 1,000,000,000,000 tokens',
        'token-supply': 'Total Supply',
        'token-supply-value': '1,000,000,000,000',
        'token-contract': 'Contract Address',
        'token-network': 'Network',
        'token-network-value': 'XLayer',
        'token-decimals': 'Decimals',
        'token-decimals-value': '18',
        
        'hero-badge': 'Meme Coin on XLayer',
        'hero-heading': 'We are <span class="text-primary">NIUMA</span><br>Honoring every <span class="text-primary">hardworker</span>',
        'hero-description': 'NIUMA coin represents the hardworking, resilient and united "NIUMA spirit". We are the cornerstone of the community, creating value through sweat and building the future together on XLayer.',
        'join-community': 'Join 2,000+ Community Members',
        'token-supply-label': 'Total Supply',
        'token-supply-value': '1 Billion',
        'token-chain-label': 'Chain',
        'token-chain-value': '<img src="image/logo.svg" alt="XLayer" class="w-4 h-4"> XLayer',
        'scroll-down': 'Scroll Down',
        'about-badge': 'About NIUMA',
        'about-heading': 'NIUMA Awakening: <span class="text-primary">From Self-deprecation to Belief, From Tool to Dream Maker.</span>',
        'about-description': 'In the Web3 world, we are no longer defined tools, but our own masters, the awakening of collective spirit.',
        'story-p1': 'The $NIUMA community is our story - ordinary people meet in Web3, no longer screws, but companions.',
        'story-p2': 'Gathering with Eastern "NIUMA spirit", without fancy packaging or capital boost, with love and longing, let every member use creativity to enliven the community soul.',
        'story-p3': 'Launch BASIS plan together: launch NIUMA merchandise, let on-chain faith enter daily life.',
        'story-p4': 'Compete side by side: build Web3 market, enter mainstream e-commerce, let NIUMA spirit go global.',
        'story-p5': 'Community co-creation IP: explore NFT authorization mechanism, let the community become the biggest partner, jointly determine brand future.',
        'token-badge': 'Token Details',
        'token-heading': 'NIUMA <span class="text-primary">Token Information</span>',
        'token-description': 'Learn about NIUMA token\'s basic information, economic model and technical details',
        'token-basic-info': 'Token Basic Information',
        'token-name-label': 'Token Name',
        'token-contract-label': 'Contract Address',
        'token-total-supply-label': 'Total Supply',
        'token-total-supply-value': '1 Billion NIUMA',
        'token-decimals-label': 'Decimals',
        'token-launch-time-label': 'Launch Time',
        'token-launch-time-value': 'Q3 2025',
        'token-distribution': 'Token Distribution',
        'token-community-reserve': 'Community Reserve',
        'token-liquidity': 'Liquidity',
        'token-team-advisors': 'Team & Advisors',
        'token-marketing': 'Marketing & Partnerships',
        'price-chart': 'Price Chart',
        'why-xlayer': 'Why Choose XLayer?',
        'xlayer-description': 'XLayer is a high-performance public chain launched by OKX, providing NIUMA with secure, fast, and low-cost trading experience, making it an ideal platform for meme coin development.',
        'xlayer-feature-1': 'High-performance transaction processing with high TPS support',
        'xlayer-feature-2': 'Ultra-low gas fees, suitable for small transactions',
        'xlayer-feature-3': 'Deep integration with OKX ecosystem, easy to list',
        'xlayer-feature-4': 'Strong security guarantees and decentralized features',
        'token-allocation-title': 'Token Allocation',
        'token-allocation-liquidity': 'Liquidity Pool',
        'token-allocation-community': 'Community Rewards',
        'token-allocation-marketing': 'Marketing',
        'token-allocation-burn': 'Permanent Burn',
        'token-price-title': 'NIUMA Price Chart',
        'token-xlayer-title': 'XLayer Advantages',
        'token-xlayer-desc': 'XLayer is a high-performance Layer 2 solution that provides the following advantages for NIUMA tokens:',
        'token-xlayer-feature-1': 'Extremely low gas fees',
        'token-xlayer-feature-2': 'Fast transaction confirmation',
        'token-xlayer-feature-3': 'Fully compatible with the Ethereum ecosystem',
        'token-xlayer-feature-4': 'High security and decentralization',
        
        'community-power': 'Community Power',
        'join-our': 'Join Our',
        'niuma-community': 'NIUMA Community',
        'community-strength': 'NIUMA\'s strength comes from the community, every member is an important part of our big family',
        'community-title': 'Join the <span class="text-primary">NIUMA</span> Family',
        'community-desc': 'Whether you are an experienced cryptocurrency enthusiast or a newcomer, we welcome you to join the NIUMA community to spread the NIUMA spirit and create value together.',
        'community-join': 'Join Our',
        'community-name': 'NIUMA Community',
        'community-members': '2,000+ Members',
        'community-countries': '50+ Countries',
        'telegram': 'Telegram',
        'telegram-description': 'Join our Telegram group to get the latest news and community discussions',
        'join-now': 'Join Now <i class="fa fa-external-link"></i>',
        'twitter': 'Twitter',
        'twitter-description': 'Follow our Twitter for the latest updates and market information',
        'follow-now': 'Follow Now <i class="fa fa-external-link"></i>',
        'community-activities': 'Community Activities',
        'niuma-ama': 'NIUMA Online AMA',
        'ama-description': 'Face-to-face communication with the project team, answer community questions, and share future plans',
        'coming-soon': 'Coming Soon',
        'niuma-promotion': 'NIUMA Promotion Contest',
        'promotion-description': 'Invite friends to join the community, win generous NIUMA rewards, top 100 participants will receive prizes',
        'reward-amount': '1 Million NIUMA',
        'community-telegram': 'Telegram',
        'community-twitter': 'Twitter',
        'community-discord': 'Discord',
        'community-github': 'GitHub',
        'community-medium': 'Medium',
        'community-reddit': 'Reddit',
        'community-youtube': 'YouTube',
        'community-instagram': 'Instagram',
        'community-facebook': 'Facebook',
        'community-linkedin': 'LinkedIn',
        
        'future-planning': 'Future Planning',
        'niuma': 'NIUMA',
        'roadmap': 'Roadmap',
        'roadmap-description': 'Our development plan, growing together with the community',
        'roadmap-title': 'Development Roadmap',
        'roadmap-desc': 'NIUMA\'s development journey has just begun. We have a clear vision and roadmap to continuously create more value for the community.',
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'planned': 'Planned',
        'vision': 'Vision',
        'phase-one-title': 'Community Foundation',
        'phase-one-description': 'Build a strong community foundation and establish brand awareness',
        'phase-one-item-1': 'Launch NIUMA token on XLayer',
        'phase-one-item-2': 'Build initial community of 1,000+ members',
        'phase-one-item-3': 'Establish social media presence',
        'phase-two-title': 'Ecosystem Development',
        'phase-two-description': 'Expand ecosystem and enhance token utility',
        'phase-two-item-1': 'Launch staking and farming features',
        'phase-two-item-2': 'Partner with major DeFi protocols',
        'phase-two-item-3': 'Develop mobile app',
        'phase-three-title': 'Cultural Building',
        'phase-three-description': 'Strengthen community culture and expand global influence',
        'phase-three-item-1': 'Launch NFT collection',
        'phase-three-item-2': 'Organize global community events',
        'phase-three-item-3': 'Establish NIUMA DAO governance',
        'phase-four-title': 'Ecosystem Prosperity',
        'phase-four-description': 'Achieve ecosystem prosperity and sustainable value creation',
        'phase-four-item-1': 'Cross-chain bridge integration',
        'phase-four-item-2': 'Launch NIUMA metaverse',
        'phase-four-item-3': 'Achieve global recognition',
        'roadmap-phase-1': 'Phase 1',
        'roadmap-phase-1-item-1': 'Concept development and team formation',
        'roadmap-phase-1-item-2': 'Smart contract development and audit',
        'roadmap-phase-1-item-3': 'Official website launch',
        'roadmap-phase-1-item-4': 'Social media channel establishment',
        'roadmap-phase-2': 'Phase 2',
        'roadmap-phase-2-item-1': 'Token issuance and liquidity addition',
        'roadmap-phase-2-item-2': 'Community building and initial marketing',
        'roadmap-phase-2-item-3': 'First exchange listing',
        'roadmap-phase-2-item-4': 'Community airdrop activities',
        'roadmap-phase-3': 'Phase 3',
        'roadmap-phase-3-item-1': 'Mainstream exchange listing',
        'roadmap-phase-3-item-2': 'Community governance mechanism implementation',
        'roadmap-phase-3-item-3': 'Ecosystem expansion',
        'roadmap-phase-3-item-4': 'Strategic partnership establishment',
        'roadmap-phase-4': 'Phase 4',
        'roadmap-phase-4-item-1': 'Global market expansion',
        'roadmap-phase-4-item-2': 'Practical scenario development',
        'roadmap-phase-4-item-3': 'Cross-chain integration',
        'roadmap-phase-4-item-4': 'Sustainable development plan implementation',
        
        'buy-badge': 'Join Us',
        'buy-title': 'How to Buy <span class="text-primary">NIUMA</span>',
        'buy-description': 'Simple steps to become a member of the NIUMA community',
        'buy-step-1-title': 'Create Wallet',
        'buy-step-1-desc': 'Download and install wallets that support XLayer chain, such as MetaMask, OKX Wallet, etc., and create or import your wallet.',
        'buy-step-2-title': 'Get OKB',
        'buy-step-2-desc': 'Purchase OKB, the native token of XLayer chain, on exchanges like OKX for gas fees, and transfer to your wallet.',
        'buy-step-3-title': 'Buy NIUMA',
        'buy-step-3-desc': 'On decentralized exchanges that support XLayer chain (such as OKX DEX), use OKB to exchange for NIUMA tokens.',
        'buy-step-4-title': 'Join Community',
        'buy-step-4-desc': 'Join our Telegram to participate in discussions, get the latest information, and grow with other NIUMA members.',
        'buy-okx-title': 'Buy $NIUMA on OKX Wallet',
        'buy-contract-address': 'CA:0x87669801a1fad6dad9db70d27ac752f452989667',
        'buy-go-to-buy': 'Go to Buy',
        'buy-trading-pair': 'NIUMA/USDT',
        'buy-market-cap': 'Market Cap: $255K',
        'buy-button': 'Buy',
        'sell-button': 'Sell',
        'join-community-title': 'Join the <span class="text-primary">NIUMA</span> Family',
        'join-community-desc': 'Whether you are an experienced cryptocurrency enthusiast or a newcomer, we welcome you to join the NIUMA community to spread the NIUMA spirit and create value together.',
        'buy-title': 'How to Buy NIUMA',
        'buy-desc': 'Buying NIUMA tokens is very simple, just follow these steps:',
        'buy-step-1-title': 'Set Up Wallet',
        'buy-step-1-desc': 'Download and install MetaMask or other wallets that support XLayer, and add the XLayer network',
        'buy-step-2-title': 'Buy ETH',
        'buy-step-2-desc': 'Purchase ETH on an exchange and transfer it to your wallet',
        'buy-step-3-title': 'Connect to XLayer',
        'buy-step-3-desc': 'Bridge your ETH from Ethereum mainnet to XLayer network',
        'buy-step-4-title': 'Swap for NIUMA',
        'buy-step-4-desc': 'Use a decentralized exchange on XLayer, such as SushiSwap, to swap ETH for NIUMA tokens',
        
        'footer-description': 'Honoring every hardworking "NIUMA", we create value through perseverance.',
        'footer-quick-links': 'Quick Links',
        'footer-about': 'About',
        'footer-token': 'Token',
        'footer-community': 'Community',
        'footer-roadmap': 'Roadmap',
        'footer-buy': 'Buy',
        'footer-resources': 'Resources',
        'footer-whitepaper': 'Whitepaper',
        'footer-audit': 'Contract Audit',
        'footer-faq': 'FAQ',
        'footer-tutorial': 'Tutorial',
        'footer-xlayer-guide': 'XLayer Guide',
        'footer-legal': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-disclaimer': 'Disclaimer',
        'footer-copyright': '&copy; 2023 NIUMA. All rights reserved.',
        'footer-disclaimer-text': 'NIUMA is a community-driven meme coin, investment involves risks, please participate with caution.',
        
        // 社区治理模块
        'governance-badge': 'Community Governance',
        'governance-title': 'Community Governance & <span class="text-primary">Transparent Management</span>',
        'governance-description': 'Since its inception, the NIUMA community has upheld the principles of transparency, decentralization, and collective growth',
        'migration-title': 'Chain Migration',
        'migration-description': 'To align with new opportunities and future growth, NIUMA has completed a full migration from Solana to X Layer',
        'migration-process': 'Migration Process',
        'migration-step-1': 'All community assets on Solana were transferred into the community treasury',
        'migration-step-2': 'Assets were then liquidated, and via the developer address repurchased and redistributed on X Layer',
        'migration-step-3': 'All remaining tokens were allocated into the community treasury',
        'treasury-title': 'Community Treasury & Multisig',
        'treasury-description': 'Currently, NIUMA assets are secured under multisig wallets, fully governed by the community',
        'treasury-long-term-a': 'NIUMA Long-term A',
        'treasury-long-term-b': 'NIUMA Long-term B',
        'treasury-project-support': 'NIUMA Project Support',
        'treasury-daily-operations': 'NIUMA Daily Operations',
        'copy-address': 'Copy Address',
        
        // 打卡页面翻译
        'checkin-title': 'Check-in Data',
        'checkin-subtitle': 'Community Check-in Statistics and Rankings',
        'today-checkin': 'Today\'s Check-ins',
        'total-members': 'Total Members',
        'consecutive-days': 'Consecutive Days',
        'growth-rate': 'Growth Rate',
        'active-rate': 'Active Rate',
        'daily-ranking': 'Today\'s Top 10',
        'monthly-ranking': 'Monthly Ranking',
        'checkin-trend': 'Check-in Trend',
        'checkin-time': 'Check-in Time',
        'consecutive': 'Consecutive',
        'days': 'days',
        'times': 'times',
        'no-data': 'No data available',
        'checkin-now': 'Check-in Now',
        'view-records': 'View Records',
        'refresh-data': 'Refresh Data',
        'loading': 'Loading...',
        'error-occurred': 'An error occurred',
        'retry': 'Retry',
        'daily-checkin-count': 'Daily Check-in Count',
        'checkin-motivation': 'Check-in Motivation',
        'checkin-motivation-text': 'Every check-in is a commitment to yourself, keep going!',
        'rank': 'Rank'
    }
};

// 切换语言函数 - 已废弃，使用setLanguage代替
function switchLanguage() {
    setLanguage(currentLanguage === 'zh' ? 'en' : 'zh');
}

// 更新页面文本函数
function updatePageText() {
    console.log('更新页面文本');
    // 获取所有带有 data-lang-key 属性的元素
    const elements = document.querySelectorAll('[data-lang-key]');
    
    // 遍历元素并更新文本
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLanguage][key]) {
            // 如果翻译包含HTML，使用innerHTML，否则使用textContent
            if (translations[currentLanguage][key].includes('<')) {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        } else {
            console.log('Missing translation for key:', key, 'in language:', currentLanguage);
        }
    });

    if (currentLanguage === 'zh') {
        console.log('中文语言下');
        let elements1 = document.querySelectorAll('[data-cn]');
        console.log('中文语言下，更新元素数量:', elements1.length);
        // 中文语言下，更新
        elements1.forEach(element => {
            const enText = element.getAttribute('data-cn');
            if (enText) {
                element.textContent = enText;
            }
        });
    }else{
        console.log('英文语言下');
        // 英文语言下
       let elements1 = document.querySelectorAll('[data-en]');
       console.log('英文语言下，更新元素数量:', elements1.length);
        
        elements1.forEach(element => {
            const enText = element.getAttribute('data-en');
            if (enText) {
                element.textContent = enText;
            }
        });
    }
    
    // 更新下拉菜单中的当前语言显示
    const desktopLangText = document.querySelector('#language-toggle span');
    const mobileLangText = document.querySelector('#mobile-language-toggle span');
    
    if (desktopLangText) {
        desktopLangText.textContent = translations[currentLanguage]['current-lang'];
    }
    
    if (mobileLangText) {
        mobileLangText.textContent = translations[currentLanguage]['current-lang'];
    }
}

// 页面加载完成后初始化语言
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言切换按钮
    const desktopBtn = document.getElementById('language-toggle');
    const mobileBtn = document.getElementById('mobile-language-toggle');
    const langZh = document.getElementById('lang-zh');
    const langEn = document.getElementById('lang-en');
    const mobileLangZh = document.getElementById('mobile-lang-zh');
    const mobileLangEn = document.getElementById('mobile-lang-en');
    const mobileDropdown = document.getElementById('mobile-lang-dropdown');
    
    // 设置当前语言显示
    if (desktopBtn) {
        desktopBtn.querySelector('span').textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
    
    if (mobileBtn) {
        mobileBtn.querySelector('span').textContent = currentLanguage === 'zh' ? '中文' : 'English';
        
        // 移动端下拉菜单切换
        mobileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileDropdown.classList.toggle('hidden');
        });
    }
    
    // 语言切换事件
    if (langZh) {
        langZh.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('zh');
        });
    }
    
    if (langEn) {
        langEn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }
    
    if (mobileLangZh) {
        mobileLangZh.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('zh');
            mobileDropdown.classList.add('hidden');
        });
    }
    
    if (mobileLangEn) {
        mobileLangEn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
            mobileDropdown.classList.add('hidden');
        });
    }
    
    // 初始化页面文本
    updatePageText();
});

// 设置语言函数
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', currentLanguage);
    
    // 更新页面文本
    updatePageText();
    
    // 更新语言显示
    const desktopBtn = document.getElementById('language-toggle');
    const mobileBtn = document.getElementById('mobile-language-toggle');
    
    if (desktopBtn) {
        desktopBtn.querySelector('span').textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
    
    if (mobileBtn) {
        mobileBtn.querySelector('span').textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
    
    // 更新页面文本
    updatePageText();
}