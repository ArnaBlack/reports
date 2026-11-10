'use strict';
const $ = id => document.getElementById(id);
const canvas = $('poster');
const title = $('title');
const ctx = canvas.getContext('2d');
const W = 960, H = 540;
const scene = { x:110, y:140, angle:0, occlusion:false };
let boxW = 420, boxH = 180;
let native = false, ready = false, exportPending = false;
let dpr = Math.min(window.devicePixelRatio || 1, 2);
let probeTimer;
const background = new Image();
// Reject an unreadable image at load time instead of tainting the poster.
background.crossOrigin = 'anonymous';
const status = $('status');
const message = $('message');
const hasAPI = 'drawElementImage' in CanvasRenderingContext2D.prototype &&
  'requestPaint' in HTMLCanvasElement.prototype &&
  'updateElementGeometry' in HTMLCanvasElement.prototype;

function requestFrame() {
  if (native && ready) canvas.requestPaint();
}
function fallback(reason) {
  clearTimeout(probeTimer);
  native = false;
  canvas.hidden = true;
  $('fallback').hidden = false;
  $('fallback-text').textContent = $('copy').value;
  for (const name of ['x','y','angle','occlusion','focus','export']) $(name).disabled = true;
  status.textContent = 'DOM-просмотр: нативный путь недоступен';
  message.textContent = reason + ' Здесь можно править текст и ширину; композиция и экспорт отключены.';
}
function render() {
  ctx.reset();
  ctx.scale(dpr,dpr);
  ctx.fillStyle = '#123b30';
  ctx.fillRect(0,0,W,H);
  if (background.naturalWidth) {
    const scale = Math.max(W/background.naturalWidth,H/background.naturalHeight);
    const width = background.naturalWidth*scale;
    const height = background.naturalHeight*scale;
    ctx.drawImage(background,(W-width)/2,(H-height)/2,width,height);
  }
  ctx.fillStyle = '#071b16aa';
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle = '#ec9e7d';
  ctx.beginPath(); ctx.arc(810,260,150,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#c7eadb';
  ctx.font = '18px PT, sans-serif';
  ctx.fillText('PLATFORM / 2026',80,65);
  ctx.fillText('HTML · CSS · Графика',80,480);
  ctx.save();
  ctx.translate(scene.x,scene.y);
  ctx.rotate(scene.angle*Math.PI/180);
  ctx.drawElementImage(title,0,0,boxW,boxH);
  ctx.restore();
  if (scene.occlusion) {
    ctx.fillStyle = '#ec9e7d';
    ctx.fillRect(360,190,240,90);
  }
}
function saveBlob(blob) {
  $('export').disabled = false;
  if (!blob) { message.textContent = 'Браузер не создал PNG.'; return; }
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = 'html-in-canvas-poster.png';
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url),1000);
  message.textContent = `PNG готов: ${canvas.width} × ${canvas.height} пикселей.`;
}
canvas.addEventListener('paint', () => {
  if (!native || !ready) return;
  try {
    render();
    clearTimeout(probeTimer);
    status.textContent = 'Нативный HTML-in-Canvas · Canvas 2D';
    $('export').disabled = exportPending;
    if (exportPending) {
      exportPending = false;
      try { canvas.toBlob(saveBlob,'image/png'); }
      catch (error) {
        $('export').disabled = false;
        message.textContent = `Экспорт не выполнен: ${error.message}`;
      }
    }
  } catch (error) {
    fallback(`Проба отрисовки не прошла: ${error.message}`);
  }
});
new ResizeObserver(([entry]) => {
  const box = entry.borderBoxSize[0];
  boxW = box.inlineSize; boxH = box.blockSize;
  requestFrame();
}).observe(title);
for (const name of ['width','x','y','angle']) {
  $(name).addEventListener('input', () => {
    const value = Number($(name).value);
    $(name+'-value').value = String(value);
    if (name === 'width') {
      title.style.width = `${value}px`;
      $('fallback-text').style.width = `${value}px`;
    } else scene[name] = value;
    requestFrame();
  });
}
// Safe text insertion; no untrusted HTML is parsed.
$('copy').addEventListener('input', () => {
  title.textContent = $('copy').value;
  $('fallback-text').textContent = $('copy').value;
  requestFrame();
});
title.addEventListener('input', () => { $('copy').value = title.textContent; });
$('occlusion').addEventListener('change', () => {
  scene.occlusion = $('occlusion').checked;
  requestFrame();
});
$('focus').addEventListener('click', () => {
  title.focus();
  message.textContent = 'Попробуйте ввод, выделение, Tab и клик по перекрытому участку.';
});
$('export').addEventListener('click', () => {
  if (!native) return;
  title.blur();
  exportPending = true;
  $('export').disabled = true;
  requestFrame();
});
$('reset').addEventListener('click', () => {
  title.replaceChildren('Встречаемся ');
  const strong = document.createElement('strong');
  strong.textContent = 'в браузере'; title.append(strong);
  $('copy').value = title.textContent;
  for (const [name,value] of Object.entries({width:420,x:110,y:140,angle:0})) {
    $(name).value = String(value);
    $(name).dispatchEvent(new Event('input'));
  }
  scene.occlusion = false; $('occlusion').checked = false;
  $('fallback-text').textContent = title.textContent;
  message.textContent = ''; requestFrame();
});
async function start() {
  if (location.protocol === 'file:') {
    fallback('Демо открыто с диска. Для работы с изображениями и экспорта откройте его через локальный сервер.');
    const link = document.createElement('a');
    link.href = 'http://localhost:8000/reports/html-in-canvas/demo/';
    link.textContent = 'Открыть демо через localhost';
    message.append(document.createElement('br'), link);
    message.append(document.createElement('br'),
      'Если сервер ещё не запущен: из папки reports выполните python3 -m http.server 8000.');
    return;
  }
  if (!hasAPI || new URLSearchParams(location.search).has('fallback')) {
    fallback(hasAPI ? 'Включён демонстрационный fallback.' : 'Нужна реализация актуального API.');
    return;
  }
  native = true;
  background.src = '../../../src/picture/sb-background/image1.jpeg';
  await Promise.all([
    background.decode().catch(() => {
      throw new Error('Не удалось загрузить фон с разрешением на экспорт. Проверьте адрес локального сервера и доступность изображения.');
    }),
    document.fonts.load('700 54px PT'),
    document.fonts.load('18px PT')
  ]);
  canvas.width = Math.round(W*dpr); canvas.height = Math.round(H*dpr);
  ready = true;
  probeTimer = setTimeout(() => fallback('Браузер не прислал paint для текущей разметки.'),4000);
  requestFrame();
}
start().catch(error => fallback(error.message));
