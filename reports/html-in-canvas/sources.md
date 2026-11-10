# Источники и оговорки

Проверено 10 ноября 2026. Примеры написаны для актуальной модели WICG (`content="drawable"`, `drawable`, автоматическая геометрия Canvas 2D). Это живое предложение; наличие методов не гарантирует одинаковое поведение в разных сборках. На слайдах отдельные фрагменты иллюстративны; цельный запускаемый пример находится в `demo/`.

- [WICG · актуальный explainer](https://github.com/WICG/html-in-canvas)
- [Chrome · HTML-in-Canvas](https://developer.chrome.com/blog/html-in-canvas)
- [Figma · собственный рендерер](https://www.figma.com/blog/figma-rendering-powered-by-webgpu/)
- [Figma · доступность холста](https://www.figma.com/blog/building-accessibility-into-a-canvas-based-product/)
- [Quest Signal · прототип](https://vav-labs.com/case-studies/quest-signal/)
- [Chrome · EditContext](https://developer.chrome.com/blog/introducing-editcontext-api)
- [Chrome · примеры](https://chrome.dev/html-in-canvas/)

## Что не утверждается

- Figma не представлена как пользователь HTML-in-Canvas.
- Нет заявлений о гарантированном ускорении, доступности или одинаковом поведении всех браузеров.
- Число 31.6 MiB — расчёт RGBA8-поверхности, не измерение памяти.
- Quest Signal — прототип. Демо редактора — учебное исследование, не production rich-text редактор.
- WebGL/WebGPU и worker показаны схемами и фрагментами, без самостоятельной реализации этих путей.
