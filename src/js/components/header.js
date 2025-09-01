class BlogHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          --avatar-border: #ffffff;
          --icon-size: 16px;
          
          display: block;
        }
        
        :host([theme="dark"]) {
              --avatar-border: oklch(.373 .034 259.733);
        }

        .header {
          background: var(--header-gradient);
          padding-block: var(--spacing-56);
        }

        .container {
           max-width: var(--container-max-width);
           margin: 0 auto;
           padding-inline: var(--spacing-16);
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-28);
        }

        @media (min-width: 768px) {
          .content {
            flex-direction: row;
          }
        }

        .avatar-container {
          position: relative;
        }

        .avatar {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--avatar-border);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .info {
          flex: 1;
          text-align: center;
        }

        @media (min-width: 768px) {
          .info {
            text-align: left;
          }
        }

        .name {
          font-size: 40px;
          margin-bottom: var(--spacing-16);
          color: var(--primary);
        }

        @media (min-width: 768px) {
          .name {
            font-size: 48px;
          }
        }

        .description {
          font-size: 18px;
          color: var(--text-01);
          margin-bottom: var(--spacing-16);
          line-height: 1.625;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-8);
          color: var(--text-02);
          margin-bottom: var(--spacing-16);
        }

        @media (min-width: 768px) {
          .location {
            justify-content: flex-start;
          }
        }
        
        .icon {
         width: var(--icon-size);
         aspect-ratio: 1;
         stroke: currentColor;
         fill: none;
         stroke-width: 2;
        }

        .social-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-16);
          margin: 0;
          padding: 0;
          list-style: none;
        }

        @media (min-width: 768px) {
          .social-links {
            justify-content: flex-start;
          }
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-8);
          color: var(--secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: var(--primary);
        }
        
        .social-link:visited {
            color: var(--secondary-light);
        }
      </style>

      <header class="header">
        <div class="container">
          <div class="content">
            <div class="avatar-container">
              <div class="avatar">
                <img src="src/picture/me.webp" alt="Анна Расторгуева" />
              </div>
            </div>
            
            <div class="info">
              <h1 class="name">Анна Расторгуева</h1>
              <p class="description">
                Привет! Я Senior Frontend Developer, выступаю на конференциях.
                В своем блоге я делюсь своими докладами: вы можете посмотреть записи моих выступлений и изучить слайды презентаций.
              </p>
              
              <div class="location">
                <svg class="icon" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Москва, Россия</span>
              </div>
              
              <ul class="social-links">
              <li>
                <a href="https://t.me/arnablack" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg class="icon" viewBox="0 0 24 24">
<path xmlns="http://www.w3.org/2000/svg" d="M13.5469 12.638C12.3375 13.7944 11.7213 14.6466 11.2687 15.205C11.9205 15.6009 16.6293 18.4898 18.9828 20C19.2621 13.9086 20.444 7.46193 21 5C16.4379 6.15736 7.09914 10.0761 3 11.8909L8.0431 13.7944C9.55894 12.7925 13.3725 10.4133 16.5 8.91181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://github.com/arnablack" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `;
    }
}

customElements.define('blog-header', BlogHeader);