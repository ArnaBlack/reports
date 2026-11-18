# Источники и оговорки

Проверено 10 ноября 2026. Примеры написаны для актуальной модели WICG (`content="drawable"`, `drawable`, автоматическая геометрия Canvas 2D). Это живое предложение; наличие методов не гарантирует одинаковое поведение в разных сборках. На слайдах отдельные фрагменты иллюстративны; цельный запускаемый пример находится в `demo/`.

- [WICG · актуальный explainer](https://github.com/WICG/html-in-canvas)
- [Chrome · документация HTML-in-Canvas](https://developer.chrome.com/docs/web-platform/html-in-canvas)
- [Chrome · HTML-in-Canvas](https://developer.chrome.com/blog/html-in-canvas)
- [Figma · собственный рендерер](https://www.figma.com/blog/figma-rendering-powered-by-webgpu/)
- [Figma · доступность холста](https://www.figma.com/blog/building-accessibility-into-a-canvas-based-product/)
- [Chrome · коллекция демо](https://chrome.dev/html-in-canvas/)
- [Chrome · OffscreenCanvas и worker](https://chrome.dev/html-in-canvas/demos/offscreen-html-in-canvas.html)
- [Chrome · интерактивная HTML-форма](https://chrome.dev/html-in-canvas/demos/text-input.html)

- [MDN · совместимость drawElementImage](https://github.com/mdn/browser-compat-data/blob/main/api/CanvasRenderingContext2D.json)

Поддержка браузеров для слайда «Где API уже доступен» сверена 13 ноября 2026 по Chrome for Developers и MDN Browser Compatibility Data.

## Что не утверждается

- Figma не представлена как пользователь HTML-in-Canvas.
- Нет заявлений о гарантированном ускорении, доступности или одинаковом поведении всех браузеров.
- Около 32 МиБ на слайде — расчёт памяти для одного несжатого изображения (RGBA8), а не измерение расхода памяти приложения.
- Наш редактор постера — учебное демо, а не готовый редактор документов.
- WebGL/WebGPU и worker не реализованы в нашем редакторе постера. На слайдах приведены отдельные примеры API и ссылки на внешние демо Chrome.

## Шрифты и чёткость текста

- [MDN · загрузка шрифтов для canvas](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)
- [Chrome · координаты, плотность пикселей и сглаживание](https://developer.chrome.com/docs/web-platform/html-in-canvas/concepts)

Загрузка шрифта и масштаб влияют на результат рисования. Общего утверждения, что кастомные шрифты или жирное начертание в canvas работают неправильно, в докладе нет. HTML-in-Canvas также не гарантирует совпадение субпиксельного сглаживания с обычным DOM (см. ограничения в WICG explainer).

## Статус предложения

Сверено 18 ноября 2026: репозиторий WICG описывает HTML-in-Canvas как living explainer. Выпуск реализации не означает завершённую стандартизацию.

- [WICG · как предложения переходят к стандартизации](https://wicg.github.io/admin/charter.html)
- [WHATWG · обсуждение HTML-in-Canvas](https://github.com/whatwg/html/issues/10650)
