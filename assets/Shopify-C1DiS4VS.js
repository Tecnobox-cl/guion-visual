import{c as d,b,a as p,_ as u}from"./tb-cinta-Bkwbsi2E.js";import{_ as m,a as f,b as v,c as h}from"./tb-barras-D6MYbsLZ.js";import{j as e,S as x,B as _,a as g,b as j,c as y}from"./index-D5q30Vbt.js";import{k}from"./tb-kit-By7ihJfo.js";const S=`{%- comment -%} Cubo 3D de carga (el isotipo). {% render 'tb-cubito', lado: 18 %} {%- endcomment -%}\r
<span class="tb-cubito" style="--l: {{ lado | default: 16 }}px" role="img" aria-label="Cargando"><span class="tb-cubito__cuerpo"><i class="tb-cubito__cara"></i><i class="tb-cubito__cara"></i><i class="tb-cubito__cara"></i><i class="tb-cubito__cara"></i><i class="tb-cubito__cara"></i><i class="tb-cubito__cara"></i></span></span>\r
`,s=`{%- comment -%}\r
  Tecnobox · kit v2. Va en layout/theme.liquid, dentro de <head>:\r
    {% render 'tb-head' %}\r
  Carga fuentes, tokens, kit y el JS mínimo (defer). Sin dependencias.\r
{%- endcomment -%}\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Chivo+Mono:wght@500;700&display=swap">\r
{{ 'tb-tokens.css' | asset_url | stylesheet_tag }}\r
{{ 'tb-kit.css' | asset_url | stylesheet_tag }}\r
<script src="{{ 'tb-kit.js' | asset_url }}" defer><\/script>\r
`,q=`/* ==========================================================================\r
   Tecnobox · tokens v2 — "Todo llega en una caja"\r
   Archivo pensado para el tema de Shopify: assets/tb-tokens.css\r
   (se carga en layout/theme.liquid ANTES de tb-kit.css).\r
   Paleta MEDIDA con código sobre el logo oficial y tiotecnobox.cl (28-sept-2026).\r
   Los componentes piden ROLES (--tb-acento-texto), nunca hex.\r
   ========================================================================== */\r
\r
:root {\r
  /* ——— Marca: nombres propios, valores medidos ——— */\r
  --tb-lima: #97c93a;          /* logo: isotipo y "box" (7.636 px medidos) */\r
  --tb-lima-hundido: #6f9a24;  /* canto inferior de la tecla lima (profundidad) */\r
  --tb-lima-brillo: #b9e36a;   /* borde de luz / neón */\r
  --tb-musgo: #4f7a0f;         /* verde para TEXTO sobre claro (AA 5,1) */\r
  --tb-bosque: #3f6315;        /* texto sobre Brote */\r
  --tb-brote: #f0f7df;         /* lavado "Disponible online" */\r
  --tb-menta: #a7e9de;         /* sello de descuento */\r
  --tb-hoja: #284a10;          /* texto sobre menta */\r
  --tb-carbon: #0e0e0e;        /* cabecera, tinta, cantos */\r
  --tb-noche: #000000;\r
  --tb-grafito: #13160f;       /* escena de neón */\r
  --tb-papel: #f6f6f1;         /* papel térmico: tickets y etiquetas */\r
  --tb-reticula: #e7ecdc;      /* líneas de la retícula isométrica */\r
  --tb-oferta: #e5372b;\r
  --tb-oferta-texto: #c42a1f;  /* rojo para texto chico y fondo con texto blanco (AA 5,7) */\r
\r
  /* ——— Tipografía ——— */\r
  --tb-f-titulo: "Space Grotesk Variable", "Space Grotesk", "Segoe UI", system-ui, sans-serif;\r
  --tb-f-cuerpo: "Inter Variable", "Inter", -apple-system, "Segoe UI", Roboto, sans-serif;\r
  --tb-f-dato: "Chivo Mono", ui-monospace, "Cascadia Mono", Menlo, monospace;\r
\r
  /* ——— Isometría: todo sale del isotipo (hexágono de 30°) ——— */\r
  --tb-iso-angulo: 30deg;\r
  --tb-iso-paso: 28px;         /* lado de la celda de la retícula */\r
  --tb-iso-proyeccion: rotateX(54.7356deg) rotateZ(45deg); /* vista isométrica real */\r
\r
  /* ——— Espacio (base 4) ——— */\r
  --tb-e-1: 4px; --tb-e-2: 8px; --tb-e-3: 12px; --tb-e-4: 16px; --tb-e-5: 24px;\r
  --tb-e-6: 32px; --tb-e-7: 48px; --tb-e-8: 72px; --tb-e-9: 112px;\r
\r
  /* ——— Forma: cantos vivos de caja ——— */\r
  --tb-r-1: 3px; --tb-r-2: 6px; --tb-r-3: 10px; --tb-r-4: 16px; --tb-r-pildora: 999px;\r
\r
  /* ——— Profundidad: sombras DURAS de caja, no nubes grises ——— */\r
  --tb-canto: 4px;             /* grosor del canto de las cajas y teclas */\r
  --tb-sombra-caja: 6px 6px 0 0 var(--tb-carbon);\r
  --tb-sombra-caja-alta: 10px 10px 0 0 var(--tb-carbon);\r
  --tb-sombra-flotante: 0 18px 40px -18px rgba(14, 14, 14, .45);\r
  --tb-neon: 0 0 0 1px rgba(185, 227, 106, .35), 0 0 28px rgba(151, 201, 58, .45);\r
\r
  /* ——— Movimiento ——— */\r
  --tb-d-1: 120ms; --tb-d-2: 240ms; --tb-d-3: 520ms; --tb-d-4: 900ms;\r
  --tb-curva: cubic-bezier(.2, .8, .2, 1);\r
  --tb-resorte: cubic-bezier(.34, 1.56, .64, 1);\r
  --tb-golpe: cubic-bezier(.7, 0, .2, 1);\r
\r
  /* ——— Capas ——— */\r
  --tb-z-cabecera: 40; --tb-z-cajon: 70; --tb-z-ticket: 80; --tb-z-modal: 90;\r
}\r
\r
/* ===== Roles · CLARO (la tienda) ===== */\r
:root,\r
[data-tb-tema="claro"] {\r
  --tb-fondo: #ffffff;\r
  --tb-fondo-2: #f7f8f5;\r
  --tb-superficie: #ffffff;\r
  --tb-hundida: #eef1ea;\r
  --tb-linea: #e3e7dd;\r
  --tb-linea-fuerte: #0e0e0e;\r
  --tb-texto: #0e0e0e;\r
  --tb-texto-2: #3a3f44;\r
  --tb-texto-3: #5b616b;\r
  --tb-acento: var(--tb-lima);\r
  --tb-acento-texto: var(--tb-musgo);\r
  --tb-sobre-acento: #0e0e0e;\r
  --tb-invertida: #0e0e0e;\r
  --tb-sobre-invertida: #ffffff;\r
  --tb-bien: #2f7d32;  --tb-bien-suave: #e6f4e7;\r
  --tb-atencion: #8a5a00; --tb-atencion-suave: #fff4d6;\r
  --tb-grave: #c42a1f; --tb-grave-suave: #fdebe9;\r
  --tb-info: #1f5fa8;  --tb-info-suave: #e7f0fb;\r
}\r
\r
/* ===== Roles · OSCURO (la escena de neón) ===== */\r
[data-tb-tema="oscuro"] {\r
  --tb-fondo: #0b0d0c;\r
  --tb-fondo-2: #101310;\r
  --tb-superficie: #151915;\r
  --tb-hundida: #0e110e;\r
  --tb-linea: #252b24;\r
  --tb-linea-fuerte: #97c93a;\r
  --tb-texto: #f3f6ef;\r
  --tb-texto-2: #c9cfc4;\r
  --tb-texto-3: #9ba493;\r
  --tb-acento: var(--tb-lima);\r
  --tb-acento-texto: var(--tb-lima);\r
  --tb-sobre-acento: #0e0e0e;\r
  --tb-invertida: #f3f6ef;\r
  --tb-sobre-invertida: #0e0e0e;\r
  --tb-reticula: #1b2119;\r
  --tb-papel: #eeeee6;\r
  --tb-sombra-caja: 6px 6px 0 0 #97c93a;\r
  --tb-sombra-caja-alta: 10px 10px 0 0 #97c93a;\r
  --tb-bien: #6fcf73;  --tb-bien-suave: #13261a;\r
  --tb-atencion: #f0b93a; --tb-atencion-suave: #2a2210;\r
  --tb-grave: #ff7b6e; --tb-grave-suave: #2e1512;\r
  --tb-info: #7fb2f0;  --tb-info-suave: #122033;\r
}\r
`,C=`/* ==========================================================================\r
   Tecnobox · kit v2 — comportamiento mínimo, sin dependencias.\r
   Va al tema de Shopify como assets/tb-kit.js (con defer). Todo por atributos\r
   data-*, así las secciones Liquid no necesitan JS propio.\r
     data-tb-abrir-cajon      abre el cajón del carrito\r
     data-tb-cerrar-cajon     lo cierra (también Esc y el velo)\r
     data-tb-cantidad         stepper: botones [data-tb-menos] [data-tb-mas] y [data-tb-valor]\r
     data-tb-cinta            cinta de envío: data-meta (centavos) y data-total (centavos)\r
     window.tbTicket(opts)    imprime un ticket (aviso) abajo a la derecha\r
   ========================================================================== */\r
(function () {\r
  "use strict";\r
  var pesos = function (centavos) {\r
    return "$" + Math.round(centavos / 100).toLocaleString("es-CL");\r
  };\r
\r
  /* ——— Cajón del carrito ——— */\r
  function cajon() { return document.querySelector("[data-tb-cajon]"); }\r
  function abrirCajon() {\r
    var c = cajon(); if (!c) return;\r
    c.setAttribute("data-abierto", "true");\r
    c.removeAttribute("inert");\r
    var foco = c.querySelector("[data-tb-cerrar-cajon], button, a");\r
    if (foco) foco.focus();\r
    document.documentElement.style.overflow = "hidden";\r
  }\r
  function cerrarCajon() {\r
    var c = cajon(); if (!c) return;\r
    c.setAttribute("data-abierto", "false");\r
    c.setAttribute("inert", "");\r
    document.documentElement.style.overflow = "";\r
  }\r
  document.addEventListener("click", function (e) {\r
    var t = e.target.closest ? e.target : e.target.parentElement;\r
    if (t.closest("[data-tb-abrir-cajon]")) { e.preventDefault(); abrirCajon(); }\r
    else if (t.closest("[data-tb-cerrar-cajon]")) { e.preventDefault(); cerrarCajon(); }\r
  });\r
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarCajon(); });\r
\r
  /* ——— Cantidad ——— */\r
  document.addEventListener("click", function (e) {\r
    var b = e.target.closest && e.target.closest("[data-tb-menos], [data-tb-mas]");\r
    if (!b) return;\r
    var caja = b.closest("[data-tb-cantidad]"); if (!caja) return;\r
    var v = caja.querySelector("[data-tb-valor]");\r
    var n = parseInt(v.value || v.textContent, 10) || 1;\r
    n = b.hasAttribute("data-tb-mas") ? n + 1 : Math.max(1, n - 1);\r
    if ("value" in v && v.tagName === "INPUT") v.value = n; else v.textContent = n;\r
    caja.dispatchEvent(new CustomEvent("tb:cantidad", { bubbles: true, detail: n }));\r
  });\r
\r
  /* ——— Cinta de envío ——— */\r
  function pintarCinta(el) {\r
    var meta = parseInt(el.getAttribute("data-meta"), 10) || 2000000;\r
    var total = parseInt(el.getAttribute("data-total"), 10) || 0;\r
    var avance = Math.min(1, total / meta);\r
    el.style.setProperty("--avance", avance.toFixed(3));\r
    el.setAttribute("data-lista", avance >= 1 ? "true" : "false");\r
    var texto = el.querySelector("[data-tb-cinta-texto]");\r
    if (texto) {\r
      var regalo = el.getAttribute("data-regalo") || "300000";\r
      texto.innerHTML = avance >= 1\r
        ? "Listo: te regalamos <b>" + pesos(+regalo) + "</b> en tu envío."\r
        : "Te faltan <b>" + pesos(meta - total) + "</b> para que te regalemos <b>" + pesos(+regalo) + "</b> en tu envío.";\r
    }\r
  }\r
  window.tbPintarCintas = function () { document.querySelectorAll("[data-tb-cinta]").forEach(pintarCinta); };\r
\r
  /* ——— Tickets (avisos) ——— */\r
  window.tbTicket = function (o) {\r
    o = o || {};\r
    var pila = document.querySelector(".tb-tickets");\r
    if (!pila) { pila = document.createElement("div"); pila.className = "tb-tickets"; pila.setAttribute("aria-live", "polite"); document.body.appendChild(pila); }\r
    var hora = new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" });\r
    var t = document.createElement("div");\r
    t.className = "tb-ticket tb-ticket--" + (o.tono || "bien");\r
    t.setAttribute("role", o.tono === "grave" ? "alert" : "status");\r
    t.innerHTML = '<div class="tb-ticket__cabeza"><span class="tb-ticket__estado">' + (o.estado || "Listo") + "</span><span>Tecnobox · " + hora + "</span></div>" +\r
      '<strong class="tb-ticket__titulo"></strong>' + (o.texto ? '<p class="tb-ticket__texto"></p>' : "") +\r
      (o.deshacer ? '<div class="tb-ticket__acciones"><button type="button" class="tb-tecla tb-tecla--papel tb-tecla--s">Deshacer</button></div>' : "");\r
    t.querySelector(".tb-ticket__titulo").textContent = o.titulo || "";\r
    if (o.texto) t.querySelector(".tb-ticket__texto").textContent = o.texto;\r
    var quitar = function () { t.style.transition = "opacity .25s"; t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 260); };\r
    if (o.deshacer) t.querySelector("button").addEventListener("click", function () { o.deshacer(); quitar(); });\r
    pila.appendChild(t);\r
    while (pila.children.length > 3) pila.firstChild.remove();\r
    setTimeout(quitar, o.duracion || 4200);\r
    return t;\r
  };\r
\r
  function iniciar() {\r
    window.tbPintarCintas();\r
    var c = cajon(); if (c && c.getAttribute("data-abierto") !== "true") c.setAttribute("inert", "");\r
  }\r
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();\r
})();\r
`,E=Object.assign({"../shopify/sections/tb-grilla-cajas.liquid":u,"../shopify/snippets/tb-barras.liquid":h,"../shopify/snippets/tb-caja.liquid":p,"../shopify/snippets/tb-cajon.liquid":b,"../shopify/snippets/tb-cinta.liquid":d,"../shopify/snippets/tb-cubito.liquid":S,"../shopify/snippets/tb-etiqueta.liquid":v,"../shopify/snippets/tb-head.liquid":s,"../shopify/snippets/tb-sello.liquid":f,"../shopify/snippets/tb-tecla.liquid":m}),n=t=>(new Blob([t]).size/1024).toFixed(1).replace(".",",")+" KB",o=[{carpeta:"assets",archivos:[{nombre:"tb-tokens.css",peso:n(q),que:"Colores, fuentes, sombras de caja, claro y oscuro."},{nombre:"tb-kit.css",peso:n(k),que:"Las 15 piezas del kit (teclas, cajas, etiquetas…)."},{nombre:"tb-kit.js",peso:n(C),que:"Cajón, cantidad, cinta y tickets. Sin dependencias."}]},...["snippets","sections"].map(t=>({carpeta:t,archivos:Object.entries(E).filter(([a])=>a.includes(`/${t}/`)).map(([a,r])=>{const i=a.split("/").pop(),c=(r.match(/\{%-? comment -?%\}\s*([\s\S]*?)\{%-? endcomment/)?.[1]??"").split(`
`).map(l=>l.trim()).filter(Boolean)[0]?.replace(/\s*(Parámetros|Uso)?:$/,"").replace(/\.\s*Producto REAL de Shopify$/," con un producto real de Shopify.")??"";return{nombre:i,peso:n(r),que:c}})}))],T=[{n:"01",t:"Duplica el tema",d:"En Shopify: Tienda online → Temas → ⋯ → Duplicar. Todo se prueba en la copia; la tienda en vivo no se toca hasta publicar.",codigo:""},{n:"02",t:"Sube los archivos",d:"Editar código → sube los 3 archivos a assets/, los snippets a snippets/ y la sección a sections/. Todos llevan prefijo tb-: no pisan nada del tema.",codigo:""},{n:"03",t:"Carga el kit en el <head>",d:"En layout/theme.liquid, justo antes de </head>. Carga fuentes, tokens, kit y el JS con defer.",codigo:"{% render 'tb-head' %}"},{n:"04",t:"Usa las piezas",d:"Desde cualquier plantilla o sección. La grilla de cajas aparece sola en el editor: Agregar sección → Tecnobox · Cajas.",codigo:`{% render 'tb-caja', product: product %}
{% render 'tb-tecla', texto: 'Agregar al carro', tecla: '⏎' %}
{% render 'tb-cinta' %}`}];function A(){return e.jsxs(x,{id:"instalar",ancho:!0,titulo:"Cuatro pasos y el kit está en el tema.",bajada:"El kit es CSS y JS sin dependencias con clases tb-*, más snippets Liquid que leen los objetos reales de Shopify (precio, compare_at_price, inventario, carro). Funciona sobre cualquier tema Online Store 2.0 sin reemplazarlo: se suma encima, pieza por pieza.",children:[e.jsxs("div",{className:"instalar",children:[e.jsx("ol",{className:"instalar__pasos",children:T.map(t=>e.jsxs("li",{className:"instalar__paso",children:[e.jsx("span",{className:"instalar__n",children:t.n}),e.jsxs("div",{children:[e.jsx("strong",{children:t.t}),e.jsx("p",{children:t.d}),t.codigo&&e.jsx("pre",{children:e.jsx("code",{children:t.codigo})})]})]},t.n))}),e.jsxs("aside",{className:"instalar__bulto",children:[e.jsxs("div",{className:"instalar__etiqueta",children:[e.jsxs("div",{className:"instalar__fila",children:[e.jsx("span",{children:"TECNOBOX · KIT SHOPIFY"}),e.jsx("span",{children:"V2"})]}),e.jsxs("div",{className:"instalar__destino",children:[e.jsx("span",{className:"tipo-etiqueta__rotulo",children:"CONTENIDO"}),e.jsxs("strong",{children:[o.reduce((t,a)=>t+a.archivos.length,0)+1," archivos"]}),e.jsx("p",{children:"assets · snippets · sections · LEEME.md"})]}),e.jsxs("div",{className:"instalar__fila instalar__fila--centro",children:[e.jsx(_,{codigo:"TBXKIT2026",alto:40}),e.jsx(g,{tipo:"envio",children:"Theme Check ✓"})]})]}),e.jsx("a",{className:"tb-tecla tb-tecla--l tb-tecla--ancha","data-tecla":"↓",href:j("tecnobox-kit-shopify.zip"),download:!0,children:e.jsx("span",{children:"Descargar el kit (.zip)"})})]})]}),e.jsx("div",{className:"arbol","aria-label":"Archivos que van al tema",children:o.map(t=>e.jsxs("details",{className:"arbol__carpeta",open:!0,children:[e.jsxs("summary",{children:[e.jsx("span",{className:"arbol__icono","aria-hidden":"true"}),t.carpeta,"/",e.jsxs("small",{children:[t.archivos.length," archivos"]})]}),e.jsx("ul",{children:t.archivos.map(a=>e.jsxs("li",{children:[e.jsx("code",{children:a.nombre}),e.jsx("span",{children:a.que}),e.jsx("b",{children:a.peso})]},a.nombre))})]},t.carpeta))}),e.jsx("div",{className:"compat",children:[["Sin dependencias","Ni jQuery, ni apps, ni frameworks. tb-kit.js es un archivo de funciones que se engancha por atributos data-tb-*."],["Funciona sin JS","El '+' de cada caja usa el formulario nativo {% form 'product' %}: si el JS falla, igual agrega al carro."],["Precios reales","Precio con money_without_trailing_zeros; el % sale de compare_at_price. Sin precio anterior, no hay descuento."],["Editor de temas","La sección trae {% schema %}: ceja, título, banda, colección y cantidad se cambian sin tocar código."],["Modo oscuro",'data-tb-tema="oscuro" en cualquier contenedor pasa esa zona a la escena de neón.'],["Accesible","Teclas de 44 px, foco lima visible, Esc cierra el cajón, avisos con role=status y movimiento reducido respetado."]].map(([t,a])=>e.jsxs("div",{children:[e.jsx("strong",{children:t}),e.jsx("p",{children:a})]},t))}),e.jsxs("details",{className:"instalar__head",children:[e.jsx("summary",{children:"Ver snippets/tb-head.liquid"}),e.jsx("pre",{className:"gv-visor__codigo",children:e.jsx("code",{children:s})})]}),e.jsx("div",{className:"muestrario",children:e.jsx(y,{variante:"carbon",onClick:()=>document.getElementById("teclas")?.scrollIntoView({behavior:"smooth"}),children:"Volver a las piezas"})})]})}function I(){return e.jsx(A,{})}export{I as Shopify};
