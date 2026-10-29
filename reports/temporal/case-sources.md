# Источники кейсов и совместимости

Проверено 29 октября 2026. В начало доклада вошли шесть кейсов и воспроизводимый пример сериализации даты. Непроверенные частные истории сохранены ниже, но не представлены аудитории как установленные факты. Текст спикера находится в HTML-комментариях, скрытых заметках и speaker-notes.md.

## Кейсы на слайдах

| Кейс | Источник | Уточнение |
| --- | --- | --- |
| Y2K | [Отчёт комитета Сената США](https://www.govinfo.gov/content/pkg/GOVPUB-Y1_3-PURL-LPS90964/pdf/GOVPUB-Y1_3-PURL-LPS90964.pdf) | Около $100 млрд — оценка затрат правительства и бизнеса США на подготовку, не прямого ущерба. Для выступления выбрана оценка с первичным источником вместо общей мировой суммы. [Переданная обзорная ссылка](https://en.wikipedia.org/wiki/Year_2000_problem#Costs). |
| Co-op Bank | [The Register, исправленный URL](https://www.theregister.com/2014/04/15/co_op_bank_programming_error_fine/) | £110 млн — резерв на возврат процентов. Версия о 368 вместо 365 дней приписана прессе; банк не подтвердил журналистам причину в коде. Не называть штрафом или доказанным ущербом от одной ошибки. |
| Azure | [Разбор Microsoft](https://azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012/) | К году даты сертификата прибавили 1 и получили 29.02.2013. У инцидента было несколько фаз; формулировка «вся платформа лежала ровно 12 часов» убрана. [Переданная ссылка iTnews](https://www.itnews.com.au/news/microsoft-issues-azure-credits-for-leap-day-outage-309944) не открылась при проверке. |
| Telstra | [Независимый отчёт TAP](https://www.telstra.com.au/content/dam/tcom/dynamic-media-projects/luke-campbell/TAPFindingsforTelstraOutage.pdf) | GPS-карта после обслуживания передавала дату 2006 года; отсутствовало критическое обновление прошивки. Не используем раннюю идентификацию оборудования и предполагаемый штраф как итог расследования. [Ранняя публикация ACS](https://ia.acs.org.au/article/2026/telstra-outage-blamed-on-known-bug-in-obsolete-server.html). |
| Moment.js | [Debian: CVE-2022-31129](https://security-tracker.debian.org/tracker/CVE-2022-31129) | Квадратичная сложность парсинга некоторых строк, исправлено в 2.29.4. Этот CVE не подтверждает аналогичную уязвимость Day.js. |
| Blockscout | [Issue #3101](https://github.com/blockscout/frontend/issues/3101) | Прочитано через GitHub. Описан сдвиг дня графика в UTC−03:00; issue закрыто. Пример на слайде явно задаёт America/Sao_Paulo, поэтому не зависит от зоны ноутбука. |
| toISOString и смена месяца | Воспроизводимый учебный пример в HTML | Полночь 01.09 при +03:00 превращается в 31.08 в UTC. Это не подтверждение истории о 328 счетах. При отрицательном смещении локальный поздний вечер может стать следующим днём UTC. |

## Переданные истории, которые пока не подтверждены

Недоступность страницы в инструменте проверки сама по себе не означает, что история ложная. Для добавления этих историй как фактов нужен доступный текст или первичный разбор.

| Кейс | Переданная ссылка | Почему не включён как реальный инцидент |
| --- | --- | --- |
| AWS, огромные прогнозные суммы | [AWS Builder Center](https://builder.aws.com/content/2026/07/18/the-quadrillion-dollar-typo-what-aws-got-right-by-joking) | Страница недоступна при проверке. В переданном описании причина — unit pricing, связь с датами не установлена. Не смешивать прогноз и реальные списания. |
| YC-компания, $100 000 | [LinkedIn / Omkar Sonawane](https://www.linkedin.com/posts/omkar-sonawane_a-yc-company-lost-100k-last-month-their-activity-7210569832063811584-UkzK) | Текст недоступен; компания, сумма и механизм не подтверждены. |
| QuantFin Research, 8 лакхов | [LinkedIn / QuantFin](https://www.linkedin.com/posts/quantfin-research-pvt-ltd_techdebt-quantfail-lessonslearned-activity-7196143520246980608-p1Hj) | Текст недоступен; денежная оценка не подтверждена. |
| 328 счетов | [DEV Community](https://dev.to/garethbaumgart/toisostring-put-328-invoices-in-the-wrong-tax-month-4j7c) | Текст недоступен. Вместо утверждения о реальных потерях добавлен самостоятельный пример. |
| Medusa / Date.parse("100") | [DEV Community](https://dev.to/medusajs/medusa-v2-in-production-three-bugs-that-each-ate-a-weekend-4i1e) | Текст недоступен. Нестандартный парсинг не следует выдавать за переносимую гарантию Date.parse. |
| Табель фрилансера | [Tencent Cloud](https://cloud.tencent.cn/developer/article/2456789) | Текст недоступен; направление сдвига в переданном описании требует исправления: отрицательное смещение при переводе в UTC может дать следующий день. |
| Safari / Invalid Date | [Medium](https://medium.com/@sophia_li/how-a-simple-date-broke-my-app-in-safari-but-worked-fine-in-chrome-9a7e3b2f1c8d) | Текст недоступен. Общая проблема нестандартных строк уже отражена в слайде о парсинге; конкретная история не подтверждена. |

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

Текст спикера на всех 39 слайдах отредактирован как последовательное повествование. Убраны редакторские указания из произносимого текста, повторные вступления и неподтверждённые обобщения о валидации. Примеры Date связываются с последующим объяснением Temporal; тайминг остаётся ориентировочным планом на 30 минут, включая вопросы. HTML-комментарии, скрытые заметки и отдельный Markdown синхронизированы.
