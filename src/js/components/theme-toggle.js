class ThemeToggle extends HTMLElement {
    webComponentSelectors = 'blog-post-card, blog-header'

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.isDark = false;
    }

    connectedCallback() {
        this.render();
        this.initializeTheme();
        this.setupEventListeners();
    }

    initializeTheme() {
        // Проверяем сохраненную тему или системную настройку
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        this.isDark = shouldBeDark;
        this.updateTheme(shouldBeDark);
        this.addListener();
    }

    addListener() {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        darkModeMediaQuery.addEventListener('change', (event) => {
            this.isDark = false;
            if (event.matches) {
                this.isDark = true;
            }

            this.updateTheme(this.isDark);
        });
    }

    updateTheme(dark) {
        const html = document.documentElement;
        const webComponents = document.querySelectorAll(this.webComponentSelectors);

        if (dark) {
            html.setAttribute('data-theme', 'dark');
            webComponents.forEach(component => component.setAttribute('theme', 'dark'));
        } else {
            html.setAttribute('data-theme', 'light');
            webComponents.forEach(component => component.setAttribute('theme', 'light'));
        }

        localStorage.setItem('theme', dark ? 'dark' : 'light');

        const button = this.shadowRoot.querySelector('.theme-button');
        if (dark) {
            button.setAttribute('aria-label', 'Переключить на светлую тему');
            this.setAttribute('theme', 'dark');
        } else {
            button.setAttribute('aria-label', 'Переключить на темную тему');
            this.setAttribute('theme', 'light');
        }
    }

    setupEventListeners() {
        const button = this.shadowRoot.querySelector('.theme-button');
        button.addEventListener('click', () => {
            this.isDark = !this.isDark;
            this.updateTheme(this.isDark);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
         --background: #fff;
        
          display: block;
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 50;
          cursor: pointer;
        }
        
        :host([theme="dark"]) {
          --background: oklch(.145 0 0);
          
          .sun {
            display: block;
          }
        
          .moon {
            display: none;
          }
        }

        .theme-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          aspect-ratio: 1;
          background: var(--background);
          border-radius: 50%;
          border: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: all var(--default-transition);
        }

        .theme-button:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.05);
        }

        .theme-icon {
          width: 18px;
          fill: none;
          aspect-ratio: 1;
          stroke-width: 2;
          transition: stroke var(--default-transition), fill 0.3s var(--default-transition);
        }
        
        .sun {
          display: none;
        }
      </style>

      <button class="theme-button" aria-label="Переключить тему">
        <svg class="theme-icon" viewBox="0 0 24 24">
        <g class="moon" stroke="#374151">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </g>
        <g class="sun" fill="#fbbf24">
            <path d="M11 22V20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22ZM5.63281 16.9531C6.02334 16.5626 6.65635 16.5626 7.04688 16.9531C7.4374 17.3436 7.4374 17.9767 7.04688 18.3672L5.63672 19.7773C5.24617 20.1676 4.61308 20.1678 4.22266 19.7773C3.83224 19.3869 3.83244 18.7538 4.22266 18.3633L5.63281 16.9531ZM16.9531 16.9531C17.3436 16.5626 17.9767 16.5626 18.3672 16.9531L19.7773 18.3633C20.1676 18.7538 20.1678 19.3869 19.7773 19.7773C19.3869 20.1678 18.7538 20.1676 18.3633 19.7773L16.9531 18.3672C16.5626 17.9767 16.5626 17.3436 16.9531 16.9531ZM15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12ZM4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4ZM22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H22ZM4.22266 4.22266C4.61308 3.83224 5.24617 3.83244 5.63672 4.22266L7.04688 5.63281C7.4374 6.02334 7.4374 6.65635 7.04688 7.04688C6.65635 7.4374 6.02334 7.4374 5.63281 7.04688L4.22266 5.63672C3.83244 5.24617 3.83224 4.61308 4.22266 4.22266ZM18.3633 4.22266C18.7538 3.83244 19.3869 3.83224 19.7773 4.22266C20.1678 4.61308 20.1676 5.24617 19.7773 5.63672L18.3672 7.04688C17.9767 7.4374 17.3436 7.4374 16.9531 7.04688C16.5626 6.65635 16.5626 6.02334 16.9531 5.63281L18.3633 4.22266ZM11 4V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/>
        </g>
        </svg>
      </button>
    `;
    }
}

customElements.define('theme-toggle', ThemeToggle);