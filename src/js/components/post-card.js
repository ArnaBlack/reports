class BlogPostCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'date', 'image-url', 'excerpt', 'links'];
  }

  connectedCallback() {
    this.render();
    this.updateTheme();
  }

  attributeChangedCallback() {
    this.render();
  }

  updateTheme() {
      const html = document.documentElement;
      const theme = html.getAttribute('data-theme');

      if (theme === 'dark') {
          this.setAttribute('theme', 'dark');
      }
  }

  render() {
    const title = this.getAttribute('title') || '';
    const date = this.getAttribute('date') || '';
    const imageUrl = this.getAttribute('image-url') || '';
    const excerpt = this.getAttribute('excerpt') || '';
    const linksJson = this.getAttribute('links') || '[]';
    
    let links = [];
    try {
      links = JSON.parse(linksJson);
    } catch (e) {
      console.error('Invalid links JSON:', e);
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary-color: var(--primary);
          --card-background: #ffffff;
          --border-color: rgba(0, 0, 0, 0.1);
          --text: var(--text-03);
          --link: var(--secondary);
          --link-hover: var(--primary);
          --link-visited: var(--secondary-light);
          
          display: block;
          height: 100%;
          line-height: 1.625;
          font-size: 14px;
          color: var(--text);
          transition: all 0.3s ease;
        }

        :host([theme="dark"])  {
        --card-background: #1f2937;
        --border-color: rgba(255, 255, 255, 0.1);
        
         .image {
             filter: invert(1);
         }
        }

        .card {
          background: var(--card-background);
          border-radius: 10px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          height: 100%;
        }

        .card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .image-container {
          position: relative;
          height: 168px;
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--default-transition);
        }

        .card:hover .image {
          transform: scale(1.05);
        }

        .content {
          padding: 21px;
        }

        .date-container {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .calendar-icon {
          width: 14px;
          aspect-ratio: 1;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        .title {
          margin: 0 0 0.10px 0;
          color: var(--primary-color);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .excerpt {
          color: var(--text-secondary);
          margin-bottom: 14px;
        }

        .links-container {
          display: flex;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .link {
          color: var(--link);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .link:hover {
          color: var(--link-hover);
          transform: translateY(-1px);
        }
        
        .link:visited {
          color: var(--link-visited);
        }
      </style>

      <article class="card">
        <div class="image-container">
          <img src="${imageUrl}" alt="${title}" class="image" />
        </div>
        
        <div class="content">
          <div class="date-container">
            <svg class="calendar-icon" viewBox="0 0 24 24">
              <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
            </svg>
            <time datetime="${date}">${date}</time>
          </div>
          
          <h2 class="title">${title}</h2>
          
          <p class="excerpt">${excerpt}</p>
          
          <ul class="links-container">
            ${links.map(link => `
                <li>
                  <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link">
                    ${link.label}
                  </a>
                </li>
            `).join('')}
          </ul>
        </div>
      </article>
    `;
  }
}

customElements.define('blog-post-card', BlogPostCard);