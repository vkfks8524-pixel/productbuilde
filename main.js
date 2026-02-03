// 1. 데이터베이스 (우리가 작성한 15개 글 내용)
const posts = [
    { id: 15, cat: "IT Info", title: "챗GPT(ChatGPT)를 활용해 엑셀 함수 및 매크로 작성하는 법", date: "2026-02-02", content: "직장인에게 엑셀은 필수입니다. 챗GPT를 이용해 복잡한 IF 함수와 VLOOKUP, 그리고 VBA 매크로까지 1분 만에 작성하는 실전 프롬프트를 소개합니다. 이제 함수를 외우지 마세요." },
    { id: 14, cat: "IT Info", title: "스마트폰 와이파이 속도가 느릴 때 공유기 설정 체크리스트", date: "2026-02-02", content: "기가 인터넷을 쓰는데도 와이파이가 느리다면? 공유기 위치 선정과 2.4GHz/5GHz 대역폭 설정, 채널 간섭 해결을 통해 속도를 2배 높이는 방법을 알려드립니다." },
    { id: 13, cat: "Review", title: "VPN 사용 이유와 무료 vs 유료 VPN 장단점 비교 분석", date: "2026-02-02", content: "보안과 우회를 위해 VPN을 고민 중이신가요? 무료 VPN의 위험성과 유료 VPN의 노로그(No-log) 정책의 중요성, 그리고 상황별 추천 서비스를 비교합니다." },
    { id: 12, cat: "Hardware", title: "SSD와 HDD 차이점 비교 및 내 컴퓨터에 맞는 업그레이드 팁", date: "2026-02-02", content: "컴퓨터 속도를 높이는 가장 확실한 방법은 SSD 교체입니다. HDD와의 기술적 차이를 이해하고, 운영체제용 SSD와 저장용 HDD를 조합하는 가성비 세팅을 추천합니다." },
    { id: 11, cat: "Trouble", title: "윈도우 블루스크린(BSOD) 발생 원인과 대표적인 해결책 3가지", date: "2026-02-02", content: "갑작스러운 블루스크린에 당황하지 마세요. 드라이버 충돌, 시스템 파일 손상(sfc /scannow), 램 접촉 불량 등 대표적인 원인 3가지와 자가 해결법을 정리했습니다." },
    { id: 10, cat: "IT Info", title: "아이폰 사진 컴퓨터로 옮기는 가장 빠른 방법 (케이블/클라우드)", date: "2026-02-02", content: "윈도우 PC에서 아이폰 사진을 옮길 때 발생하는 '장치에 도달할 수 없음' 오류 해결법과, 케이블 없이 대용량 파일을 전송하는 클라우드 활용 팁을 소개합니다." },
    { id: 9, cat: "Review", title: "유튜브 프리미엄 없이 광고 제거하는 브라우저 확장 프로그램 팁", date: "2026-02-02", content: "PC 환경에서 유튜브 광고를 효과적으로 차단하는 방법. 브레이브 브라우저와 애드가드(AdGuard) 등 검증된 도구를 통해 쾌적한 시청 환경을 만드는 법을 알아봅니다." },
    { id: 8, cat: "Tip", title: "PDF 파일을 워드(Word)나 한글(HWP)로 변환하는 무료 방법", date: "2026-02-02", content: "수정이 불가능한 PDF 파일을 알PDF, iLovePDF 사이트, 구글 드라이브 OCR 기능을 활용해 편집 가능한 워드나 한글 파일로 변환하는 방법을 소개합니다." },
    { id: 7, cat: "Recovery", title: "삭제된 파일 복구 프로그램 사용법 및 주의사항 (Recuva)", date: "2026-02-02", content: "실수로 휴지통을 비웠을 때 데이터를 살리는 골든타임. 무료 복구 툴 Recuva 사용법과 데이터 영구 손실을 막기 위해 절대 하지 말아야 할 행동(덮어쓰기 방지)을 알려드립니다." },
    { id: 6, cat: "Security", title: "랜섬웨어 예방을 위한 윈도우 디펜더 보안 설정 필수 가이드", date: "2026-02-02", content: "유료 백신 없이도 랜섬웨어를 막을 수 있습니다. 윈도우 디펜더의 숨겨진 기능인 '제어된 폴더 액세스'를 활성화하여 해커로부터 소중한 데이터를 지키는 방법입니다." },
    { id: 5, cat: "Tip", title: "이미지 용량 줄이는 사이트 및 프로그램 추천 (WebP 변환)", date: "2026-02-02", content: "블로그 로딩 속도를 높이는 이미지 최적화. 화질 저하 없이 용량을 줄이는 TinyPNG 사이트와 구글이 권장하는 차세대 포맷 WebP 변환 방법을 소개합니다." },
    { id: 4, cat: "Review", title: "무료 동영상 편집 프로그램 추천 TOP 5 (워터마크 없음)", date: "2026-02-02", content: "워터마크 없이 사용할 수 있는 진짜 무료 영상 편집 툴. 다빈치 리졸브, 캡컷(PC), 브루, 샷컷 등 사용자 목적에 맞는 최적의 프로그램을 비교 추천합니다." },
    { id: 3, cat: "Tip", title: "구글 크롬 브라우저 메모리 부족 해결 및 속도 향상 방법", date: "2026-02-02", content: "램을 많이 차지하는 크롬 브라우저를 가볍게 만드는 법. 메모리 절약 모드 활성화와 불필요한 확장 프로그램 정리, 하드웨어 가속 설정으로 웹 서핑 속도를 높이세요." },
    { id: 2, cat: "Tip", title: "노트북 배터리 수명 늘리는 관리 방법 및 윈도우 설정 팁", date: "2026-02-02", content: "노트북 배터리를 오래 쓰려면 100% 충전을 피해야 합니다. 제조사별 배터리 보호 모드 설정과 윈도우 전원 옵션을 활용해 배터리 웨어율을 낮추는 비법을 공개합니다." },
    { id: 1, cat: "Optimization", title: "윈도우 11 컴퓨터 속도 느려졌을 때 최적화 설정 방법 5가지", date: "2026-02-02", content: "컴퓨터가 느려졌다고 느낄 때 포맷 전 확인해야 할 5가지. 시작 프로그램 정리, 시각 효과 끄기, 전원 옵션 고성능 변경만으로 쾌적한 PC 환경을 만들 수 있습니다." }
];

// 2. 초기 실행
window.onload = function() {
    renderHome();
    renderRecentPosts();
    
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
        localStorage.setItem('theme', theme);
    });
};

// 3. 홈 화면 렌더링 (글 목록)
function renderHome() {
    const main = document.getElementById('main-content');
    let html = '';
    
    posts.forEach((post, index) => {
        html += `
        <article class="post-card" onclick="renderPost(${post.id})">
            <span class="category-badge">${post.cat}</span>
            <h2 class="card-title">${post.title}</h2>
            <p class="card-excerpt">${post.content}</p>
            <div style="margin-top:15px; font-size:14px; color:#888;">Posted on ${post.date} &middot; Read More &rarr;</div>
        </article>
        `;
        if ((index + 1) % 5 === 0) {
            html += `
            <article class="post-card ad-card">
                <h3 class="widget-title">Advertisement</h3>
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-format="fluid"
                     data-ad-layout-key="-fb-1s+6d+7g+85"
                     data-ad-client="ca-pub-7587676721583907"
                     data-ad-slot="2345678901"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </article>
            `;
        }
    });
    main.innerHTML = html;
    window.scrollTo(0,0);
}

// 4. 글 상세 화면 렌더링
function renderPost(id) {
    const post = posts.find(p => p.id === id);
    const main = document.getElementById('main-content');
    
    let fullContent = `
        <div class="back-btn" onclick="renderHome()">&larr; 목록으로 돌아가기</div>
        <article class="article-view">
            <header class="article-header">
                <span class="category-badge" style="font-size:14px;">${post.cat}</span>
                <h1 class="article-title">${post.title}</h1>
                <div class="article-meta">작성일: ${post.date} &middot; 작성자: TechInsight</div>
            </header>
            <div class="article-body">
                <p>${post.content}</p>
                <p>이 내용은 사용자들이 가장 많이 궁금해하는 핵심 정보를 바탕으로 작성되었습니다. 아래에서 단계별 해결 방법을 확인하세요.</p>
                
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-layout="in-article"
                     data-ad-format="fluid"
                     data-ad-client="ca-pub-7587676721583907"
                     data-ad-slot="3456789012"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>

                <h2>1. 문제의 원인과 분석</h2>
                <p>대부분의 경우 설정의 미세한 차이나 소프트웨어적인 충돌로 인해 발생합니다. 전문가들은 기본적인 설정 점검을 가장 먼저 권장합니다.</p>
                <ul>
                    <li>최신 버전 업데이트 여부 확인</li>
                    <li>불필요한 백그라운드 프로세스 종료</li>
                    <li>설정 메뉴 내의 옵션 활성화 여부 체크</li>
                </ul>

                <h2>2. 따라하기 쉬운 해결 가이드</h2>
                <p>위의 원인을 해결하기 위해 다음 단계를 순서대로 진행해 보시기 바랍니다. 누구나 쉽게 따라 할 수 있도록 정리했습니다.</p>
                
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-layout="in-article"
                     data-ad-format="fluid"
                     data-ad-client="ca-pub-7587676721583907"
                     data-ad-slot="4567890123"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>

                <h2>결론</h2>
                <p>오늘 소개한 팁을 적용하면 IT 기기 사용 환경이 훨씬 쾌적해질 것입니다. 작은 설정의 변화가 큰 생산성 향상을 가져옵니다.</p>
            </div>
        </article>
    `;
    main.innerHTML = fullContent;
    window.scrollTo(0,0);
}

// 5. 정책 페이지 렌더링 (Privacy Policy 등)
function renderPage(type) {
    const main = document.getElementById('main-content');
    let title = "", content = "";

    if (type === 'privacy') {
        title = "Privacy Policy (개인정보처리방침)";
        content = `
            <p>TechInsight ("us", "we", or "our") operates the TechInsight website.</p>
            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <h2>Cookies Data</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. This site uses Google AdSense.</p>
        `;
    } else if (type === 'terms') {
        title = "Terms of Service (이용약관)";
        content = "<p>By accessing this website we assume you accept these terms and conditions.</p>";
    } else {
        title = "Disclaimer (면책 조항)";
        content = "<p>The information provided by TechInsight is for general informational purposes only. All information on the Site is provided in good faith.</p>";
    }

    main.innerHTML = `
        <div class="back-btn" onclick="renderHome()">&larr; 홈으로</div>
        <article class="article-view">
            <h1 class="article-title">${title}</h1>
            <div class="article-body">${content}</div>
        </article>
    `;
    window.scrollTo(0,0);
}

// 6. 사이드바 최근 글 목록 자동 생성
function renderRecentPosts() {
    const list = document.getElementById('recent-list');
    posts.slice(0, 5).forEach(post => {
        const li = document.createElement('li');
        li.style.marginBottom = "10px";
        li.style.cursor = "pointer";
        li.innerHTML = `<span onclick="renderPost(${post.id})">👉 ${post.title}</span>`;
        // The hover effect will be handled by CSS in dark mode
        const span = li.querySelector('span');
        span.addEventListener('mouseover', () => {
            if (!document.body.classList.contains('dark-mode')) {
                span.style.color = '#0056b3';
            }
        });
        span.addEventListener('mouseout', () => {
            if (!document.body.classList.contains('dark-mode')) {
                span.style.color = '#333';
            }
        });
        list.appendChild(li);
    });
}
