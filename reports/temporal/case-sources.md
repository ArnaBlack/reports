# Источники кейсов и совместимости

Кейсы обновлены 30 октября 2026. В докладе четыре JavaScript/TypeScript-кейса: Novu, Medusa, Moment.js и Blockscout, а также учебный пример toISOString. Заметки спикера — только в speaker-notes.md; всего 48 слайдов. Денежные суммы убытков для этих кейсов не подтверждены и не приводятся.

## Кейсы и происхождение кода

| Слайды | Источники | Что подтверждено и как показан код |
| --- | --- | --- |
| Novu, 04–05 | [Разбор команды](https://dev.to/novu/we-had-a-date-bug-that-happened-two-times-a-year-and-we-didnt-know-you-might-have-it-too-56o6), [патч #4071](https://github.com/novuhq/novu/pull/4071/files), [обсуждение date-fns #3506](https://github.com/date-fns/date-fns/issues/3506) | По сообщению команды, два теста блокировали деплои. Слайд 04 — код воспроизведения из статьи, импорт функций date-fns подразумевается; результаты показаны для UTC. Слайд 05 — две строки до/после из apps/api/migrations/expire-at/expire-at.migration.ts. Комментарии добавлены для доклада. Замена месяца на 30 дней — выбор правила хранения, не универсальное исправление календарной арифметики. |
| Medusa, 06–07 | [Исходник v2.18.0](https://github.com/medusajs/medusa/blob/v2.18.0/packages/modules/fulfillment/src/utils/utils.ts), [issue #16300](https://github.com/medusajs/medusa/issues/16300) | Backend: числовые значения проходят isDate и сравниваются как даты. На слайде 06 — дословные фрагменты isDate и тела gte; внешний объект, сигнатура gte и остальные ветки опущены. На слайде 07 — минимальное воспроизведение механизма из issue, составленное для доклада. Поведение строк «100» и «50» показано для Node.js/V8, не гарантируется стандартом. Issue сообщает о фильтрации доставки, без денежной оценки. |
| Moment.js, 08 | [PR #6015](https://github.com/moment/moment/pull/6015/files), [CVE-2022-31129](https://security-tracker.debian.org/tracker/CVE-2022-31129) | Реальные строки до/после из preprocessRFC2822, src/lib/create/from-string.js. Остальная цепочка опущена, поясняющие комментарии добавлены. Исправление выпущено в 2.29.4. Подтверждена уязвимость ReDoS, а не конкретная атака с финансовым ущербом. |
| Blockscout, 09 | [Issue #3101](https://github.com/blockscout/frontend/issues/3101) | Frontend: сдвиг календарных дней в графике. Код — сокращённое воспроизведение автора issue, не исходник компонента. Убраны приглашения REPL и toUTCString, результаты сокращены в комментариях. Для запуска нужна зона UTC−03:00, например America/Sao_Paulo. |
| toISOString, 10 | Учебный пример | Полночь 01.09 при +03:00 становится 31.08 в UTC. Не выдаётся за подтверждённую историю о 328 счетах. |

Y2K, Co-op Bank, Azure и Telstra убраны из слайдов: по запросу доклад сосредоточен на JavaScript-проектах. Пример C++ удалён. Название статьи Novu «дважды в год» не повторяем как общее правило: эффект зависит от дат и длины соседних месяцев.

## Поддержка Temporal

Снимок данных на 29.10.2026, а не обещание неизменной совместимости.

- [MDN Browser Compat Data](https://github.com/mdn/browser-compat-data/blob/main/javascript/builtins/Temporal.json): Chrome 144, Edge — mirror Chrome, Firefox 139, Safari — preview, Safari iOS — false; Node.js 26.0.0, Bun 1.4.0, Deno 2.7.
- [Node.js 26.0.0](https://nodejs.org/en/blog/release/v26.0.0): Temporal включён по умолчанию.
- [Bun 1.4](https://bun.com/blog/bun-v1.4): Temporal включён по умолчанию; в настройках возможен принудительный отказ от него. Проверяйте реальную среду через feature detection.

## Форматирование

- [Date.prototype.toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString): в реализациях с Intl делегирует ему форматирование; для повторяющихся операций удобно переиспользовать форматтер.
- [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat): format, formatToParts, formatRange. Методы Date не объявлены устаревшими.

## Мини-квиз и редактура повествования

- [The JavaScript Date Quiz](https://jsdate.wtf/) — ссылка для самостоятельного прохождения. Автор указывает Node.js 24.4.0 и BST (UTC+1). Два примера в докладе сформулированы отдельно; это не утверждение о дословном составе вопросов сайта.
- [MDN: конструктор Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) — один числовой аргумент означает миллисекунды от Unix epoch; конструктор с компонентами нормализует переполнение. Показаны числовые `0` и `13`, не строки `"0"` и `"13"`.
- [TC39: PlainDate.from](https://tc39.es/proposal-temporal/docs/plaindate.html#from) — невалидная строка вызывает исключение, для объектов `overflow` по умолчанию равен `constrain`; строгая проверка требует `reject`.

