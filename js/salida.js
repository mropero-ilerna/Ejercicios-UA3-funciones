(function () {
  var panel = document.getElementById('salida');
  var comps = document.getElementById('comprobaciones');
  var S = window.SALIDA = { log: [], alert: [], checks: [], errors: [] };
  var buf = null;
  function fmt(x) { if (x !== null && typeof x === 'object') { try { return JSON.stringify(x); } catch (e) {} } return String(x); }
  function txt(a) { return Array.prototype.map.call(a, fmt).join(' '); }
  function linea(texto, cls, prefijo) {
    if (!panel) return;
    var d = document.createElement('div');
    d.className = 'whitespace-pre-wrap break-words py-0.5 ' + cls;
    if (prefijo) { var p = document.createElement('span'); p.className = 'mr-2 select-none text-slate-500'; p.textContent = prefijo; d.appendChild(p); }
    d.appendChild(document.createTextNode(texto)); panel.appendChild(d);
  }
  function fila(texto, ok) {
    if (!comps) return;
    var d = document.createElement('div');
    d.className = 'flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-snug ring-1 ' + (ok ? 'bg-emerald-50 text-emerald-900 ring-emerald-200' : 'bg-rose-50 text-rose-900 ring-rose-200');
    var i = document.createElement('span');
    i.className = 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ' + (ok ? 'bg-emerald-500' : 'bg-rose-500');
    i.textContent = ok ? '✓' : '✕';
    var t = document.createElement('span'); t.textContent = texto;
    d.appendChild(i); d.appendChild(t); comps.appendChild(d);
  }
  var origLog = console.log.bind(console);
  console.log = function () {
    var t = txt(arguments);
    if (buf) { buf.log.push(t); return; }
    origLog.apply(null, arguments); S.log.push(t); linea(t, 'text-slate-100', '›');
  };
  window.alert = function () {
    var t = txt(arguments);
    if (buf) { buf.alert.push(t); return; }
    S.alert.push(t); linea(t, 'text-amber-300', 'alert');
  };
  window.addEventListener('error', function (e) { S.errors.push(e.message); linea('Error: ' + e.message, 'text-rose-300', '✕'); });
  window.capturar = function (fn) {
    var prev = buf; buf = { log: [], alert: [] };
    try { fn(); } finally { var r = buf; buf = prev; }
    return r;
  };
  window.probar = function (desc, fn) {
    var ok = false;
    try { ok = !!fn(); } catch (e) { ok = false; }
    S.checks.push(ok); fila(desc, ok);
  };
  window.logContiene = function () {
    var items = Array.prototype.slice.call(arguments), i = 0;
    S.log.forEach(function (l) { if (i < items.length && l === items[i]) i++; });
    return i === items.length;
  };
  window.resumen = function () {
    var n = S.checks.length, ok = S.checks.filter(Boolean).length, todo = ok === n && n > 0;
    if (panel && !panel.firstChild) {
      var v = document.createElement('div'); v.className = 'italic text-slate-500';
      v.textContent = 'Todavía no hay salida. Escribe tu código en el fichero .js y recarga la página.'; panel.appendChild(v);
    }
    var r = document.getElementById('resumen');
    if (r) { r.textContent = ok + ' de ' + n + ' comprobaciones correctas' + (todo ? ' — ¡bien hecho!' : ''); r.className = 'text-sm font-bold ' + (todo ? 'text-emerald-700' : 'text-ink'); }
    var b = document.getElementById('barra');
    if (b) { b.style.width = (n ? Math.round(ok * 100 / n) : 0) + '%'; b.className = 'h-full rounded-full transition-all duration-700 ' + (todo ? 'bg-emerald-500' : 'bg-olive'); }
  };
})();
