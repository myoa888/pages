// 软件数据
const softwareData = {
    // 精选推荐
    recommend: [
        {
            id: 1,
            name: '曲谱收藏夹',
            icon: '🎵',
            desc: '个人曲谱管理神器，支持自动播放和节拍器',
            url: 'software/music-score-bookmark/index.html',
            category: '音乐工具'
        },
        {
            id: 2,
            name: 'Chrome浏览器',
            icon: '🌐',
            desc: '快速、安全的网页浏览器',
            url: '#',
            category: '浏览器'
        },
        {
            id: 3,
            name: 'WPS Office',
            icon: '📊',
            desc: '国产办公软件套装',
            url: '#',
            category: '办公软件'
        },
        {
            id: 4,
            name: 'VS Code',
            icon: '💻',
            desc: '轻量级代码编辑器',
            url: '#',
            category: '开发工具'
        },
        {
            id: 5,
            name: '网易云音乐',
            icon: '🎶',
            desc: '在线音乐播放软件',
            url: '#',
            category: '音频播放'
        },
        {
            id: 6,
            name: '微信',
            icon: '💬',
            desc: '即时通讯软件',
            url: '#',
            category: '社交软件'
        },
        {
            id: 7,
            name: '钉钉',
            icon: '📌',
            desc: '企业办公通讯软件',
            url: '#',
            category: '办公软件'
        },
        {
            id: 8,
            name: '腾讯会议',
            icon: '📹',
            desc: '视频会议软件',
            url: '#',
            category: '办公软件'
        }
    ],
    // 热门排行
    ranking: [
        { id: 1, name: '微信', icon: '💬', downloads: '1258432', size: '245MB' },
        { id: 2, name: 'QQ', icon: '🐧', downloads: '987654', size: '186MB' },
        { id: 3, name: '钉钉', icon: '📌', downloads: '876543', size: '312MB' },
        { id: 4, name: 'WPS Office', icon: '📊', downloads: '765432', size: '156MB' },
        { id: 5, name: 'Chrome浏览器', icon: '🌐', downloads: '654321', size: '98MB' },
        { id: 6, name: '腾讯会议', icon: '📹', downloads: '543210', size: '178MB' },
        { id: 7, name: '网易云音乐', icon: '🎵', downloads: '432109', size: '134MB' },
        { id: 8, name: 'WinRAR', icon: '📦', downloads: '321098', size: '3.2MB' }
    ],
    // 最新更新
    latest: [
        { name: '曲谱收藏夹 v1.0', version: '2026-05-18' },
        { name: 'Chrome 125.0', version: '2026-05-18' },
        { name: '微信 3.9.5', version: '2026-05-17' },
        { name: 'WPS Office 2026', version: '2026-05-16' },
        { name: 'VS Code 1.90', version: '2026-05-15' }
    ],
    // 党建文章
    djArticles: [
        { id: 1, tag: '理论学习', title: '深入学习贯彻习近平新时代中国特色社会主义思想', date: '2026-06-01', url: 'software/dangjian/articles/article1.html' },
        { id: 2, tag: '政策解读', title: '党的二十大精神解读与实践指引', date: '2026-05-25', url: 'software/dangjian/articles/article2.html' },
        { id: 3, tag: '党史学习', title: '从百年党史中汲取奋进力量', date: '2026-05-18', url: 'software/dangjian/articles/article3.html' },
        { id: 4, tag: '党风廉政', title: '新时代党风廉政建设与反腐败斗争', date: '2026-05-10', url: 'software/dangjian/articles/article4.html' }
    ],
    // 热门软件
    hotSoftware: [
        {
            id: 1,
            name: '曲谱收藏夹',
            icon: '🎵',
            desc: '免费的个人曲谱管理工具，支持上传、整理曲谱，内置节拍器和自动播放功能，帮助音乐爱好者高效练琴。永久免费，无广告。',
            downloads: '108,520',
            size: '5MB',
            category: '音乐工具',
            url: 'software/music-score-bookmark/index.html'
        },
        {
            id: 2,
            name: 'Adobe Photoshop 2026',
            icon: '🎨',
            desc: '全球最专业的图片编辑软件，提供强大的图像处理、图形设计和照片修饰功能。',
            downloads: '1,258,432',
            size: '3.5GB',
            category: '图形图像'
        },
        {
            id: 3,
            name: 'Microsoft Office 365',
            icon: '📁',
            desc: '微软官方办公软件套装，包含Word、Excel、PowerPoint等组件。',
            downloads: '987,654',
            size: '4.2GB',
            category: '办公软件'
        },
        {
            id: 4,
            name: 'Visual Studio Code',
            icon: '💻',
            desc: '微软推出的轻量级、免费开源代码编辑器，支持多种编程语言。',
            downloads: '876,543',
            size: '120MB',
            category: '开发工具'
        },
        {
            id: 5,
            name: '腾讯视频',
            icon: '🎬',
            desc: '在线视频播放软件，提供海量影视剧集、综艺节目、体育赛事等。',
            downloads: '765,432',
            size: '126MB',
            category: '视频播放'
        },
        {
            id: 6,
            name: '搜狗输入法',
            icon: '⌨️',
            desc: '智能拼音输入法，提供流畅的文字输入体验和丰富的表情包。',
            downloads: '654,321',
            size: '52MB',
            category: '输入法'
        }
    ]
};

// 渲染精选推荐
function renderRecommend() {
    const grid = document.getElementById('recommendGrid');
    if (!grid) return;

    grid.innerHTML = softwareData.recommend.map(item => `
        <div class="recommend-item">
            <div class="icon">${item.icon}</div>
            <div class="name">${item.name}</div>
            <div class="desc">${item.desc}</div>
            <div class="actions">
                <a href="${item.url}" class="btn btn-outline">详情</a>
                <a href="#" class="btn">下载</a>
            </div>
        </div>
    `).join('');
}

// 渲染排行榜
function renderRanking(type = 'day') {
    const list = document.getElementById('rankingList');
    if (!list) return;

    // 根据类型排序（这里简化处理，实际应根据类型从后端获取）
    const sorted = [...softwareData.ranking];

    list.innerHTML = sorted.slice(0, 8).map((item, index) => {
        const rankClass = index === 0 ? 'top1' : index === 1 ? 'top2' : index === 2 ? 'top3' : 'default';
        return `
            <div class="ranking-item">
                <span class="rank ${rankClass}">${index + 1}</span>
                <div class="icon">${item.icon}</div>
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="meta">${item.size} | ${parseInt(item.downloads).toLocaleString()}次下载</div>
                </div>
                <a href="#" class="download-btn">下载</a>
            </div>
        `;
    }).join('');
}

// 渲染最新更新
function renderLatest() {
    const list = document.getElementById('latestUpdates');
    if (!list) return;

    list.innerHTML = softwareData.latest.map(item => `
        <li>
            <div class="update-icon">📥</div>
            <div class="update-info">
                <div class="name">${item.name}</div>
                <div class="version">${item.version}</div>
            </div>
        </li>
    `).join('');
}

// 渲染热门软件
function renderHotSoftware() {
    const list = document.getElementById('hotSoftware');
    if (!list) return;

    list.innerHTML = softwareData.hotSoftware.map(item => `
        <div class="software-card">
            <div class="icon">${item.icon}</div>
            <div class="content">
                <div class="name">${item.name}</div>
                <div class="desc">${item.desc}</div>
                <div class="meta">
                    <span>下载：${item.downloads}</span>
                    <span>大小：${item.size}</span>
                    <span>分类：${item.category}</span>
                </div>
            </div>
            <a href="${item.url || '#'}" class="btn">详情</a>
        </div>
    `).join('');
}

// 轮播图切换
function initCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    indicators.forEach((ind, index) => {
        ind.addEventListener('click', () => showSlide(index));
    });

    // 自动轮播
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        showSlide(nextIndex);
    }, 5000);
}

// 排行榜标签切换
function initRankingTabs() {
    const tabs = document.querySelectorAll('.ranking-tabs span');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderRanking(tab.dataset.type);
        });
    });
}

// 搜索功能
function initSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');

    const handleSearch = () => {
        const keyword = input.value.trim();
        if (keyword) {
            alert(`搜索：${keyword}\n功能开发中...`);
            // 实际项目中跳转到搜索结果页
            // window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
        }
    };

    btn.addEventListener('click', handleSearch);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}

// 返回顶部
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderRecommend();
    renderRanking();
    renderLatest();
    renderHotSoftware();
    renderDjArticles();
    initCarousel();
    initRankingTabs();
    initSearch();
    initBackToTop();
});
