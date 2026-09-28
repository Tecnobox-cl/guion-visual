const t=`/* ==========================================================================\r
   Tecnobox · kit v2 — "Todo llega en una caja"\r
   CSS puro, sin dependencias, clases tb-*. Es el mismo archivo que va al tema\r
   de Shopify (assets/tb-kit.css). Cada pieza tiene su snippet en snippets/.\r
   Orden: tb-tokens.css → tb-kit.css → tb-kit.js (defer).\r
   ========================================================================== */\r
\r
/* ===== 0 · Base de las piezas ===== */\r
.tb, .tb *, .tb *::before, .tb *::after { box-sizing: border-box; }\r
.tb-solo-lector { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }\r
\r
/* ===== 1 · Retícula isométrica =====\r
   Tres familias de líneas (30°, 150° y vertical): el mismo ángulo del isotipo.\r
   Es el "papel técnico" de Tecnobox: fondo de portadas, banners y estados vacíos. */\r
.tb-iso {\r
  background-color: var(--tb-fondo);\r
  background-image:\r
    repeating-linear-gradient(30deg, var(--tb-reticula) 0 1px, transparent 1px var(--tb-iso-paso)),\r
    repeating-linear-gradient(150deg, var(--tb-reticula) 0 1px, transparent 1px var(--tb-iso-paso)),\r
    repeating-linear-gradient(90deg, color-mix(in srgb, var(--tb-reticula) 55%, transparent) 0 1px, transparent 1px calc(var(--tb-iso-paso) * 1.1547));\r
}\r
.tb-iso--neon {\r
  background-color: var(--tb-grafito);\r
  --tb-reticula: rgba(151, 201, 58, .11);\r
}\r
\r
/* ===== 2 · Tecla =====\r
   El botón es una tecla mecánica: tiene canto, se hunde al apretar y lleva su\r
   leyenda en la esquina (data-tecla). Lima = comprar. Una sola lima por pantalla. */\r
.tb-tecla {\r
  --c: var(--tb-lima); --canto: var(--tb-lima-hundido); --t: var(--tb-carbon);\r
  position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 10px;\r
  min-height: 48px; padding: 0 22px; margin-bottom: var(--tb-canto);\r
  font: 700 15px/1 var(--tb-f-titulo); letter-spacing: .01em; text-decoration: none; white-space: nowrap;\r
  color: var(--t); background: var(--c);\r
  background-image: linear-gradient(180deg, rgba(255,255,255,.30), rgba(255,255,255,0) 46%);\r
  border: 0; border-radius: var(--tb-r-3); cursor: pointer;\r
  box-shadow: 0 var(--tb-canto) 0 0 var(--canto), 0 calc(var(--tb-canto) + 8px) 16px -8px rgba(0,0,0,.45);\r
  transition: transform var(--tb-d-1) var(--tb-curva), box-shadow var(--tb-d-1) var(--tb-curva), filter var(--tb-d-1);\r
  -webkit-tap-highlight-color: transparent;\r
}\r
.tb-tecla:hover { transform: translateY(-1px); box-shadow: 0 calc(var(--tb-canto) + 1px) 0 0 var(--canto), 0 calc(var(--tb-canto) + 12px) 20px -8px rgba(0,0,0,.45); }\r
.tb-tecla:active, .tb-tecla[aria-pressed="true"] { transform: translateY(var(--tb-canto)); box-shadow: 0 0 0 0 var(--canto), 0 2px 6px -2px rgba(0,0,0,.4); }\r
.tb-tecla:focus-visible { outline: 3px solid var(--tb-carbon); outline-offset: 3px; }\r
.tb-tecla[data-tecla]::after {\r
  content: attr(data-tecla); position: absolute; top: 5px; right: 7px;\r
  font: 600 9px/1 var(--tb-f-dato); letter-spacing: .06em; opacity: .55;\r
}\r
.tb-tecla[data-tecla] { padding-right: 30px; }\r
.tb-tecla--carbon { --c: var(--tb-carbon); --canto: #000; --t: #fff; background-image: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,0) 46%); }\r
.tb-tecla--papel { --c: #fff; --canto: var(--tb-carbon); --t: var(--tb-carbon); outline: 1.5px solid var(--tb-carbon); outline-offset: -1.5px; }\r
.tb-tecla--papel:focus-visible { outline: 3px solid var(--tb-lima); outline-offset: 3px; }\r
.tb-tecla--oferta { --c: var(--tb-oferta-texto); --canto: #8e1d15; --t: #fff; }\r
.tb-tecla--s { min-height: 44px; padding: 0 14px; font-size: 13px; --tb-canto: 3px; border-radius: var(--tb-r-2); }\r
.tb-tecla--l { min-height: 58px; padding: 0 30px; font-size: 18px; --tb-canto: 5px; }\r
.tb-tecla--ancha { width: 100%; }\r
.tb-tecla:disabled, .tb-tecla[aria-disabled="true"] { --c: var(--tb-hundida); --canto: var(--tb-linea); --t: var(--tb-texto-3); cursor: not-allowed; transform: none; filter: saturate(.3); }\r
.tb-tecla__flecha { transition: transform var(--tb-d-2) var(--tb-curva); }\r
.tb-tecla:hover .tb-tecla__flecha { transform: translateX(3px); }\r
.tb-tecla.esta-cargando { pointer-events: none; }\r
.tb-tecla.esta-cargando > span:not(.tb-cubito) { opacity: .75; }\r
[data-tb-tema="oscuro"] .tb-tecla--carbon { --c: #f3f6ef; --canto: #9ba493; --t: #0e0e0e; }\r
\r
/* ===== 3 · Sello =====\r
   Las insignias son timbres de bodega: mono, en mayúsculas, levemente torcidos.\r
   Cada color tiene UN significado (medidos en la tienda). */\r
.tb-sello {\r
  display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 8px;\r
  font: 700 11px/1 var(--tb-f-dato); letter-spacing: .08em; text-transform: uppercase; white-space: nowrap;\r
  border: 1.5px solid currentColor; border-radius: var(--tb-r-1);\r
  transform: rotate(var(--giro, -1.5deg));\r
}\r
.tb-sello--online { color: var(--tb-bosque); background: var(--tb-brote); }\r
.tb-sello--descuento { color: var(--tb-hoja); background: var(--tb-menta); }\r
.tb-sello--envio { color: var(--tb-carbon); background: var(--tb-lima); }\r
.tb-sello--ultimas { color: #7a4f00; background: #fff4d6; }\r
.tb-sello--nuevo { color: #fff; background: var(--tb-carbon); border-color: var(--tb-carbon); }\r
.tb-sello--agotado { color: var(--tb-texto-3); background: transparent; border-style: dashed; }\r
.tb-sello--recto { --giro: 0deg; }\r
[data-tb-tema="oscuro"] .tb-sello--nuevo { color: var(--tb-carbon); background: #fff; border-color: #fff; }\r
\r
/* ===== 4 · Etiqueta de precio (colgante) =====\r
   El precio cuelga de la caja como una etiqueta de tienda: recorte en punta, ojal y canto.\r
   Anterior tachado arriba, final grande. Se endereza al pasar el mouse por la caja.\r
   El contorno es un drop-shadow en el envoltorio: sigue el recorte (un border no puede). */\r
.tb-etiqueta {\r
  position: relative; display: inline-block;\r
  filter: drop-shadow(1.5px 0 0 var(--tb-carbon)) drop-shadow(-1.5px 0 0 var(--tb-carbon)) drop-shadow(0 1.5px 0 var(--tb-carbon)) drop-shadow(0 -1.5px 0 var(--tb-carbon));\r
  transform: rotate(-3deg); transform-origin: 0 50%;\r
  transition: transform var(--tb-d-3) var(--tb-resorte);\r
}\r
.tb-etiqueta__papel {\r
  display: grid; justify-items: start; gap: 3px; min-width: 118px;\r
  padding: 9px 14px 9px 28px; color: var(--tb-carbon); background: var(--tb-papel);\r
  clip-path: polygon(15px 0, 100% 0, 100% 100%, 15px 100%, 0 50%);\r
  -webkit-mask: radial-gradient(circle 4.5px at 14px 50%, #0000 98%, #000) ;\r
          mask: radial-gradient(circle 4.5px at 14px 50%, #0000 98%, #000) ;\r
}\r
.tb-etiqueta__antes { font: 500 12px/1 var(--tb-f-dato); color: #5b616b; text-decoration: line-through; text-decoration-thickness: 1.5px; }\r
.tb-etiqueta__precio { font: 700 26px/1 var(--tb-f-titulo); letter-spacing: -.03em; }\r
.tb-etiqueta__sello { position: absolute; z-index: 1; top: -20px; right: -16px; }\r
.tb-etiqueta--s .tb-etiqueta__sello { top: -19px; right: -14px; height: 22px; padding: 0 6px; font-size: 10px; }\r
.tb-etiqueta--s .tb-etiqueta__papel { padding: 7px 10px 7px 25px; min-width: 92px; }\r
.tb-etiqueta--s .tb-etiqueta__precio { font-size: 19px; }\r
.tb-etiqueta--l .tb-etiqueta__papel { padding: 14px 22px 14px 34px; }\r
.tb-etiqueta--l .tb-etiqueta__precio { font-size: 42px; }\r
\r
/* ===== 5 · Caja (tarjeta de producto) =====\r
   Cada producto es una caja sellada: canto duro, cinta lima en la esquina.\r
   Al pasar el mouse la caja se levanta, la cinta se despega y la etiqueta se endereza. */\r
.tb-caja {\r
  position: relative; display: grid; grid-template-rows: auto 1fr;\r
  background: var(--tb-superficie); color: var(--tb-texto);\r
  border: 1.5px solid var(--tb-linea-fuerte); border-radius: var(--tb-r-2);\r
  box-shadow: var(--tb-sombra-caja);\r
  transition: transform var(--tb-d-2) var(--tb-curva), box-shadow var(--tb-d-2) var(--tb-curva);\r
  isolation: isolate; overflow: hidden;\r
}\r
.tb-caja:hover, .tb-caja:focus-within { transform: translate(-3px, -3px); box-shadow: var(--tb-sombra-caja-alta); }\r
.tb-caja::after { /* cinta de embalaje */\r
  content: "TECNOBOX · TECNOBOX · TECNOBOX";\r
  position: absolute; z-index: 2; top: 20px; right: -44px; width: 170px; padding: 5px 0;\r
  font: 700 9px/1 var(--tb-f-dato); letter-spacing: .14em; text-align: center; white-space: nowrap; overflow: hidden;\r
  color: var(--tb-carbon); background: var(--tb-lima);\r
  background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0 2px, transparent 2px 6px);\r
  transform: rotate(38deg); box-shadow: 0 2px 0 rgba(0,0,0,.15);\r
  transition: transform var(--tb-d-3) var(--tb-golpe), opacity var(--tb-d-3);\r
}\r
.tb-caja:hover::after, .tb-caja:focus-within::after { transform: rotate(38deg) translate(80px, -16px); opacity: 0; }\r
.tb-caja__foto { position: relative; display: block; aspect-ratio: 1; background: #fff; border-bottom: 1.5px solid var(--tb-linea-fuerte); overflow: hidden; }\r
.tb-caja__foto img { width: 100%; height: 100%; object-fit: contain; padding: 8%; transition: transform var(--tb-d-3) var(--tb-curva); }\r
.tb-caja:hover .tb-caja__foto img { transform: scale(1.06) translateY(-2%); }\r
.tb-caja__sellos { position: absolute; left: 10px; top: 10px; display: flex; flex-wrap: wrap; gap: 6px; z-index: 1; }\r
.tb-caja__cuerpo { display: grid; grid-template-rows: auto 1fr auto; gap: 12px; padding: 14px 14px 16px; }\r
.tb-caja__categoria { font: 600 10px/1 var(--tb-f-dato); letter-spacing: .12em; text-transform: uppercase; color: var(--tb-acento-texto); }\r
.tb-caja__nombre { margin: 0; font: 600 15px/1.3 var(--tb-f-cuerpo); color: var(--tb-texto); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.6em; }\r
.tb-caja__nombre a { color: inherit; text-decoration: none; }\r
.tb-caja__nombre a::before { content: ""; position: absolute; inset: 0; z-index: 0; } /* toda la caja es clic */\r
.tb-caja__pie { position: relative; z-index: 1; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 10px; }\r
.tb-caja:hover .tb-etiqueta, .tb-caja:focus-within .tb-etiqueta { transform: rotate(0deg); }\r
.tb-caja__agregar { width: 44px; min-height: 44px; padding: 0; font-size: 22px; }\r
\r
/* ===== 6 · Cinta de envío (progreso) =====\r
   La barra de "te regalamos $3.000 en tu envío desde $20.000" es cinta de embalaje\r
   que se estira sobre una línea perforada. Al completarse sella con el cubo. */\r
.tb-cinta { display: grid; gap: 10px; --avance: 0; }\r
.tb-cinta__texto { margin: 0; font: 500 14px/1.4 var(--tb-f-cuerpo); color: var(--tb-texto-2); }\r
.tb-cinta__texto b { color: var(--tb-texto); font-weight: 700; }\r
.tb-cinta__pista {\r
  position: relative; height: 22px;\r
  background: repeating-linear-gradient(90deg, var(--tb-linea) 0 8px, transparent 8px 13px) center / 100% 2px no-repeat;\r
}\r
.tb-cinta__tira {\r
  position: absolute; left: 0; top: 0; bottom: 0; width: calc(var(--avance) * 100%); min-width: 22px;\r
  background: var(--tb-lima);\r
  background-image: repeating-linear-gradient(-45deg, rgba(255,255,255,.28) 0 6px, transparent 6px 12px);\r
  border: 1.5px solid var(--tb-carbon); border-radius: 2px;\r
  transition: width var(--tb-d-4) var(--tb-resorte);\r
  overflow: hidden;\r
}\r
.tb-cinta__tira::after {\r
  content: "TECNOBOX · TECNOBOX · TECNOBOX · TECNOBOX · TECNOBOX · TECNOBOX · TECNOBOX";\r
  position: absolute; left: 6px; top: 50%; transform: translateY(-50%);\r
  font: 700 9px/1 var(--tb-f-dato); letter-spacing: .16em; color: var(--tb-carbon); white-space: nowrap; opacity: .7;\r
}\r
.tb-cinta__sello {\r
  position: absolute; right: -4px; top: 50%; width: 30px; height: 30px; transform: translate(0, -50%) scale(.8);\r
  opacity: .35; transition: opacity var(--tb-d-3), transform var(--tb-d-3) var(--tb-resorte);\r
}\r
.tb-cinta[data-lista="true"] .tb-cinta__sello { opacity: 1; transform: translate(0, -50%) scale(1.1); }\r
\r
/* ===== 7 · Ticket (avisos) =====\r
   Los avisos se imprimen como boleta térmica: papel, mono y borde dentado.\r
   Toasts: aparecen "imprimiéndose" de arriba hacia abajo. */\r
.tb-ticket {\r
  --tono: var(--tb-carbon);\r
  position: relative; display: grid; gap: 6px; padding: 14px 16px 22px;\r
  color: var(--tb-carbon); background: var(--tb-papel);\r
  font: 500 13px/1.45 var(--tb-f-dato);\r
  -webkit-mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50% / 14px 100%;\r
          mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50% / 14px 100%;\r
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.18));\r
}\r
.tb-ticket__cabeza { display: flex; justify-content: space-between; gap: 10px; padding-bottom: 8px; border-bottom: 1.5px dashed rgba(14,14,14,.35); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #5b616b; }\r
.tb-ticket__estado { display: inline-flex; align-items: center; gap: 6px; color: var(--tono); font-weight: 700; }\r
.tb-ticket__estado::before { content: ""; width: 9px; height: 9px; border-radius: 1px; background: var(--tono); transform: rotate(45deg); }\r
.tb-ticket__titulo { font: 700 16px/1.25 var(--tb-f-titulo); letter-spacing: -.01em; }\r
.tb-ticket__texto { margin: 0; color: #3a3f44; }\r
.tb-ticket__acciones { display: flex; gap: 8px; margin-top: 6px; }\r
.tb-ticket--bien { --tono: #2f7d32; }\r
.tb-ticket--atencion { --tono: #8a5a00; }\r
.tb-ticket--grave { --tono: #c42a1f; }\r
.tb-ticket--info { --tono: #1f5fa8; }\r
.tb-tickets { position: fixed; right: 16px; bottom: 16px; z-index: var(--tb-z-ticket); display: grid; gap: 10px; width: min(360px, calc(100vw - 32px)); }\r
.tb-tickets .tb-ticket { animation: tb-imprimir var(--tb-d-3) var(--tb-golpe) both; }\r
@keyframes tb-imprimir { from { clip-path: inset(0 0 100% 0); transform: translateY(-8px); } to { clip-path: inset(0 0 0 0); transform: none; } }\r
\r
/* ===== 8 · Código de barras =====\r
   Se genera desde el SKU real (snippet tb-barras). Va en etiquetas, tickets y correos. */\r
.tb-barras { display: inline-grid; gap: 4px; justify-items: center; color: var(--tb-carbon); }\r
.tb-barras__barras { display: flex; align-items: stretch; height: var(--alto, 34px); }\r
.tb-barras__barras i { display: block; background: currentColor; }\r
.tb-barras__barras i.v { background: transparent; }\r
.tb-barras__numero { font: 500 10px/1 var(--tb-f-dato); letter-spacing: .18em; }\r
\r
/* ===== 9 · Campos ===== */\r
.tb-campo { display: grid; gap: 6px; }\r
.tb-campo__rotulo { font: 700 10px/1 var(--tb-f-dato); letter-spacing: .12em; text-transform: uppercase; color: var(--tb-texto-2); }\r
.tb-campo__entrada {\r
  width: 100%; min-height: 48px; padding: 0 14px;\r
  font: 500 16px/1 var(--tb-f-cuerpo); color: var(--tb-texto); background: var(--tb-superficie);\r
  border: 1.5px solid var(--tb-linea-fuerte); border-radius: var(--tb-r-2);\r
  transition: box-shadow var(--tb-d-1), border-color var(--tb-d-1);\r
}\r
.tb-campo__entrada::placeholder { color: var(--tb-texto-3); }\r
.tb-campo__entrada:focus { outline: none; box-shadow: 4px 4px 0 0 var(--tb-lima); border-color: var(--tb-carbon); }\r
.tb-campo__ayuda { font: 400 13px/1.4 var(--tb-f-cuerpo); color: var(--tb-texto-3); }\r
.tb-campo[data-error] .tb-campo__entrada { border-color: var(--tb-grave); box-shadow: 4px 4px 0 0 var(--tb-grave-suave); }\r
.tb-campo[data-error] .tb-campo__ayuda { color: var(--tb-grave); font-weight: 600; }\r
.tb-campo[data-error] .tb-campo__ayuda::before { content: "✕ "; }\r
\r
/* ===== 10 · Cantidad (teclas chicas) ===== */\r
.tb-cantidad { display: inline-flex; align-items: center; gap: 6px; }\r
.tb-cantidad .tb-tecla { width: 44px; padding: 0; font-size: 20px; }\r
.tb-cantidad__valor { min-width: 44px; height: 44px; display: grid; place-items: center; font: 700 18px/1 var(--tb-f-dato); border: 1.5px solid var(--tb-linea-fuerte); border-radius: var(--tb-r-2); background: var(--tb-superficie); color: var(--tb-texto); }\r
\r
/* ===== 11 · Banda (cinta que corre) ===== */\r
.tb-banda { overflow: hidden; background: var(--tb-lima); color: var(--tb-carbon); border-block: 1.5px solid var(--tb-carbon); }\r
.tb-banda__pista { display: flex; width: max-content; animation: tb-banda 38s linear infinite; }\r
.tb-banda__pista span { padding: 9px 22px; font: 700 12px/1 var(--tb-f-dato); letter-spacing: .12em; text-transform: uppercase; white-space: nowrap; }\r
.tb-banda__pista span::after { content: "◆"; margin-left: 22px; font-size: 9px; vertical-align: 1px; }\r
.tb-banda:hover .tb-banda__pista { animation-play-state: paused; }\r
@keyframes tb-banda { to { transform: translateX(-50%); } }\r
\r
/* ===== 12 · Cabecera ===== */\r
.tb-cabecera { position: relative; z-index: var(--tb-z-cabecera); display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 18px; padding: 14px 20px; background: var(--tb-carbon); color: #fff; }\r
.tb-cabecera__logo img { display: block; height: 32px; width: auto; }\r
.tb-escaner { position: relative; max-width: 560px; width: 100%; justify-self: center; }\r
.tb-escaner input {\r
  width: 100%; min-height: 46px; padding: 0 16px 0 44px; border-radius: var(--tb-r-2);\r
  border: 1.5px solid #2c332a; background: #171a17; color: #fff; font: 500 15px/1 var(--tb-f-cuerpo);\r
}\r
.tb-escaner input::placeholder { color: #9ba493; }\r
.tb-escaner input:focus { outline: none; border-color: var(--tb-lima); box-shadow: var(--tb-neon); }\r
.tb-escaner__lupa { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 18px; height: 18px; color: #9ba493; }\r
.tb-escaner::after { /* línea de escáner */\r
  content: ""; position: absolute; left: 10px; right: 10px; top: 50%; height: 2px; border-radius: 2px;\r
  background: var(--tb-lima); box-shadow: 0 0 10px var(--tb-lima); opacity: 0; pointer-events: none;\r
}\r
.tb-escaner:focus-within::after { animation: tb-escanear 1.4s ease-in-out 1; }\r
@keyframes tb-escanear { 0% { opacity: 0; top: 20%; } 15% { opacity: .9; } 50% { top: 80%; } 85% { opacity: .9; } 100% { opacity: 0; top: 20%; } }\r
.tb-cabecera__acciones { display: flex; align-items: center; gap: 6px; }\r
.tb-icono-boton { position: relative; display: grid; place-items: center; width: 44px; height: 44px; border-radius: var(--tb-r-2); color: #fff; background: none; border: 0; cursor: pointer; }\r
.tb-icono-boton:hover { background: #1f241e; }\r
.tb-icono-boton svg { width: 22px; height: 22px; }\r
.tb-icono-boton__cuenta {\r
  position: absolute; top: 4px; right: 2px; min-width: 20px; height: 20px; padding: 0 5px; display: grid; place-items: center;\r
  font: 700 11px/1 var(--tb-f-dato); color: var(--tb-carbon); background: var(--tb-lima);\r
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); /* el hexágono del isotipo */\r
}\r
.tb-icono-boton__cuenta.golpe { animation: tb-golpe var(--tb-d-3) var(--tb-resorte); }\r
@keyframes tb-golpe { 0% { transform: scale(1); } 40% { transform: scale(1.45); } 100% { transform: scale(1); } }\r
\r
/* ===== 13 · Cajón del carrito ===== */\r
.tb-cajon { position: fixed; inset: 0; z-index: var(--tb-z-cajon); pointer-events: none; overflow: hidden; }\r
.tb-cajon__velo { position: absolute; inset: 0; background: rgba(14,14,14,.55); opacity: 0; transition: opacity var(--tb-d-2); }\r
.tb-cajon__panel {\r
  position: absolute; top: 0; right: 0; bottom: 0; width: min(420px, 100%); display: grid; grid-template-rows: auto 1fr auto;\r
  background: var(--tb-fondo); color: var(--tb-texto); border-left: 1.5px solid var(--tb-carbon);\r
  transform: translateX(104%); transition: transform var(--tb-d-3) var(--tb-golpe);\r
}\r
.tb-cajon[data-abierto="true"] { pointer-events: auto; }\r
.tb-cajon[data-abierto="true"] .tb-cajon__velo { opacity: 1; }\r
.tb-cajon[data-abierto="true"] .tb-cajon__panel { transform: none; }\r
.tb-cajon__cabeza { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; background: var(--tb-carbon); color: #fff; }\r
.tb-cajon__cabeza strong { font: 700 20px/1 var(--tb-f-titulo); }\r
.tb-cajon__cabeza span { font: 500 11px/1 var(--tb-f-dato); letter-spacing: .1em; color: var(--tb-lima); text-transform: uppercase; }\r
.tb-cajon__lista { overflow-y: auto; padding: 8px 18px; display: grid; align-content: start; }\r
.tb-linea-carro { display: grid; grid-template-columns: 64px 1fr auto; gap: 12px; align-items: center; padding: 12px 0; border-bottom: 1.5px dashed var(--tb-linea); }\r
.tb-linea-carro img { width: 64px; height: 64px; object-fit: contain; background: #fff; border: 1.5px solid var(--tb-linea-fuerte); border-radius: var(--tb-r-2); padding: 4px; }\r
.tb-linea-carro__nombre { font: 600 14px/1.3 var(--tb-f-cuerpo); }\r
.tb-linea-carro__detalle { font: 500 11px/1.3 var(--tb-f-dato); color: var(--tb-texto-3); }\r
.tb-linea-carro__precio { font: 700 16px/1 var(--tb-f-titulo); }\r
.tb-cajon__pie { display: grid; gap: 14px; padding: 16px 18px 20px; border-top: 1.5px solid var(--tb-carbon); background: var(--tb-fondo-2); }\r
.tb-cajon__total { display: flex; justify-content: space-between; align-items: baseline; font: 600 14px/1 var(--tb-f-dato); letter-spacing: .06em; text-transform: uppercase; }\r
.tb-cajon__total strong { font: 700 28px/1 var(--tb-f-titulo); letter-spacing: -.02em; text-transform: none; }\r
\r
/* ===== 14 · Cubito (carga) =====\r
   El isotipo en 3D real con CSS: es la carga de la tienda. */\r
.tb-cubito { --l: 14px; display: inline-block; width: var(--l); height: var(--l); perspective: 400px; }\r
.tb-cubito__cuerpo { display: block; position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transform: rotateX(-35.26deg) rotateY(45deg); animation: tb-girar 1.6s var(--tb-golpe) infinite; }\r
.tb-cubito__cara { position: absolute; inset: 0; border: 1.5px solid currentColor; background: var(--tb-lima); }\r
.tb-cubito__cara:nth-child(1) { transform: translateZ(calc(var(--l) / 2)); background: var(--tb-lima-hundido); }\r
.tb-cubito__cara:nth-child(2) { transform: rotateY(90deg) translateZ(calc(var(--l) / 2)); background: var(--tb-lima); }\r
.tb-cubito__cara:nth-child(3) { transform: rotateX(90deg) translateZ(calc(var(--l) / 2)); background: var(--tb-lima-brillo); }\r
.tb-cubito__cara:nth-child(4) { transform: rotateY(-90deg) translateZ(calc(var(--l) / 2)); }\r
.tb-cubito__cara:nth-child(5) { transform: rotateX(-90deg) translateZ(calc(var(--l) / 2)); }\r
.tb-cubito__cara:nth-child(6) { transform: rotateY(180deg) translateZ(calc(var(--l) / 2)); }\r
@keyframes tb-girar { 0% { transform: rotateX(-35.26deg) rotateY(45deg); } 100% { transform: rotateX(-35.26deg) rotateY(135deg); } }\r
\r
/* ===== 15 · Escena de neón (banners) ===== */\r
.tb-neon { position: relative; overflow: hidden; color: #fff; background: var(--tb-grafito); border-radius: var(--tb-r-4); isolation: isolate; }\r
.tb-neon::before { content: ""; position: absolute; inset: -40% -10% auto auto; width: 70%; aspect-ratio: 1; z-index: -1; background: radial-gradient(closest-side, rgba(151,201,58,.45), transparent 70%); filter: blur(10px); }\r
.tb-neon__titulo { font: 700 clamp(30px, 5vw, 64px)/.95 var(--tb-f-titulo); letter-spacing: -.035em; }\r
.tb-neon__titulo em { font-style: normal; color: var(--tb-lima); text-shadow: 0 0 22px rgba(151,201,58,.55); }\r
\r
/* ===== Movimiento reducido ===== */\r
@media (prefers-reduced-motion: reduce) {\r
  .tb-banda__pista, .tb-cubito__cuerpo, .tb-escaner::after { animation: none !important; }\r
  .tb-caja, .tb-tecla, .tb-etiqueta, .tb-cajon__panel, .tb-cinta__tira { transition-duration: .01ms !important; }\r
  .tb-tickets .tb-ticket { animation: none; }\r
}\r
`;export{t as k};
