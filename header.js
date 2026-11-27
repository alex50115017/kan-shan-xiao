(() => {
  const style = document.createElement("style");

  style.textContent = `
    #site-header {
      background: #294b3a;
      font-family: Arial, "Microsoft JhengHei", sans-serif;
      line-height: 1.8;
    }

    #site-header * {
      box-sizing: border-box;
    }

    #site-header header {
      background: #294b3a;
      text-align: center;
      padding: 25px 15px 0;
    }

    #site-header .logo {
      display: block;
      width: 100%;
      max-width: 720px;
      height: auto;
      margin: auto;
    }

    #site-header .main-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px 25px;
      background: #294b3a;
      padding: 22px 15px;
      position: relative;
      z-index: 10;
    }

    #site-header .main-nav a,
    #site-header .main-nav summary {
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-size: 16px;
    }

    #site-header .main-nav details {
      position: relative;
    }

    #site-header .main-nav summary {
      list-style: none;
    }

    #site-header .main-nav summary::-webkit-details-marker {
      display: none;
    }

    #site-header .main-nav summary::after {
      content: " ▾";
    }

    #site-header .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #294b3a;
      min-width: 210px;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 8px 20px #0003;
      text-align: left;
    }

    #site-header .dropdown-menu details {
      margin-bottom: 12px;
    }

    #site-header .dropdown-menu summary {
      background: #416b52;
      border-radius: 7px;
      padding: 8px 12px;
      text-align: center;
    }

    #site-header .dropdown-menu a {
      display: block;
      padding: 7px 12px;
    }

    #site-header .dropdown-menu a:hover {
      background: #416b52;
      border-radius: 6px;
    }

    @media (max-width: 768px) {
      #site-header .main-nav {
        gap: 10px 18px;
      }

      #site-header .main-nav a,
      #site-header .main-nav summary {
        font-size: 15px;
      }

      #site-header .dropdown-menu {
        min-width: 190px;
      }
    }
  `;

  function loadHeader() {
    const container = document.getElementById("site-header");

    if (!container) return;

    document.head.appendChild(style);

    container.innerHTML = `
      <header>
        <a href="index.html" aria-label="返回首頁">
          <img
            class="logo"
            src="kanshanxiao-logo.png"
            alt="看山小登山團隊 Logo"
          >
        </a>
      </header>

      <nav class="main-nav">
        <a href="index.html#about">關於我們</a>

        <details>
          <summary>登山行程</summary>

          <div class="dropdown-menu">

            <details>
              <summary>新手入門</summary>
              <a href="xiangshan.html">象山</a>
              <a href="qixingshan.html">七星山</a>
              <a href="guanyinshan.html">觀音山</a>
            </details>

            <details>
              <summary>中級訓練</summary>
              <a href="tamanshan.html">塔曼山</a>
              <a href="manabangshan.html">馬那邦山</a>
              <a href="baxianshan.html">八仙山</a>
            </details>

            <details>
              <summary>高級挑戰</summary>
              <a href="yushan.html">玉山主峰</a>
              <a href="hehuanmain.html">合歡主峰</a>
              <a href="jiaminghu.html">嘉明湖</a>
            </details>

          </div>
        </details>

        <a href="gear.html">登山裝備</a>

        <details>
          <summary>山林知識</summary>

          <div class="dropdown-menu">
            <a href="lnt.html">無痕山林七大原則</a>
          </div>
        </details>

        <a href="contact.html">聯絡我們</a>
      </nav>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHeader);
  } else {
    loadHeader();
  }
})();
