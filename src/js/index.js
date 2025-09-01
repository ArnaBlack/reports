// Импортируем веб-компоненты
import './components/header.js';
import './components/post-card.js';
import './components/theme-toggle.js';

// Данные постов
const blogPosts = [
    {
        id: 2,
        title: "Анимации без js",
        date: "26 июня 2025",
        imageUrl: "src/picture/posts/post2.webp",
        excerpt: "Современный CSS: мощные анимации без JavaScript — от плавных попапов до скролл-эффектов. Разбираем новые свойства и фишки, которые заменяют JS.",
        links: [
            { label: "Слайды", url: "reports/animation-without-js/index.html" },
            { label: "Видео", url: "https://my.mts-link.ru/MTC/489022046/record-new/96552483" }
        ]
    },
    {
        id: 1,
        title: "Css-анимации. Изнутри браузера",
        date: "22 апреля 2024",
        imageUrl: "src/picture/posts/post1.webp",
        excerpt: "Расскажу какие процессы запускает браузер при отрисовке страницы, что происходит при анимации. Сколько стоит анимация тех или иных свойств. Покажу демку и как дебажить эти процессы",
        links: [
            { label: "Слайды", url: "reports/css-triggers/index.html" },
            { label: "Видео", url: "https://vkvideo.ru/video-225485687_456239017" }
        ]
    },
];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('blog-posts');

    // Рендерим посты
    blogPosts.forEach(post => {
        const liElement = document.createElement('li');
        liElement.classList.add('post-item')

        const postElement = document.createElement('blog-post-card');
        postElement.setAttribute('title', post.title);
        postElement.setAttribute('date', post.date);
        postElement.setAttribute('image-url', post.imageUrl);
        postElement.setAttribute('excerpt', post.excerpt);
        postElement.setAttribute('links', JSON.stringify(post.links));

        liElement.appendChild(postElement);
        postsContainer.appendChild(liElement);
    });
});