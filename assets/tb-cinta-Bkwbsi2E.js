const a=`{%- comment -%}\r
  Caja (tarjeta de producto). Producto REAL de Shopify:\r
    {% render 'tb-caja', product: product %}\r
  Sellos automáticos: descuento (compare_at_price), últimas unidades (≤ 5 en inventario),\r
  agotado. El "+" agrega al carro con el formulario nativo de Shopify (sin JS).\r
{%- endcomment -%}\r
{%- liquid\r
  assign v = product.selected_or_first_available_variant\r
  assign ultimas = false\r
  if v.inventory_management == 'shopify' and v.inventory_quantity > 0 and v.inventory_quantity <= 5\r
    assign ultimas = true\r
  endif\r
-%}\r
<article class="tb-caja">\r
  <a class="tb-caja__foto" href="{{ product.url }}" tabindex="-1" aria-hidden="true">\r
    {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy', sizes: '(min-width: 990px) 25vw, 50vw', alt: product.title }}\r
  </a>\r
  <div class="tb-caja__sellos">\r
    {%- if product.available == false -%}{% render 'tb-sello', tipo: 'agotado', texto: 'Agotado' %}\r
    {%- elsif ultimas -%}{% render 'tb-sello', tipo: 'ultimas', texto: 'Últimas unidades' %}\r
    {%- else -%}{% render 'tb-sello', tipo: 'online', texto: 'Disponible online' %}{%- endif -%}\r
  </div>\r
  <div class="tb-caja__cuerpo">\r
    <span class="tb-caja__categoria">{{ product.type | default: product.collections.first.title }}</span>\r
    <h3 class="tb-caja__nombre"><a href="{{ product.url }}">{{ product.title | split: ' | ' | first }}</a></h3>\r
    <div class="tb-caja__pie">\r
      {% render 'tb-etiqueta', variante: v, tam: 's' %}\r
      {%- if product.available -%}\r
        {%- form 'product', product -%}\r
          <input type="hidden" name="id" value="{{ v.id }}">\r
          <button type="submit" class="tb-tecla tb-tecla--s tb-caja__agregar" aria-label="Agregar {{ product.title | escape }} al carro">+</button>\r
        {%- endform -%}\r
      {%- endif -%}\r
    </div>\r
  </div>\r
</article>\r
`,t=`{%- comment -%}\r
  Sección: grilla de cajas (productos de una colección) con banda y título.\r
  Se agrega desde el editor de temas: "Tecnobox · Cajas".\r
{%- endcomment -%}\r
<section class="tb tb-iso tb-seccion-grilla">\r
  {%- if section.settings.banda != blank -%}\r
    <div class="tb-banda"><div class="tb-banda__pista">\r
      {%- for i in (1..8) -%}<span>{{ section.settings.banda }}</span>{%- endfor -%}\r
    </div></div>\r
  {%- endif -%}\r
  <div class="tb-seccion-grilla__interior">\r
    <p class="tb-caja__categoria">{{ section.settings.ceja }}</p>\r
    <h2 class="tb-seccion-grilla__titulo">{{ section.settings.titulo }}</h2>\r
    <div class="tb-seccion-grilla__cajas">\r
      {%- for product in section.settings.coleccion.products limit: section.settings.cantidad -%}\r
        {% render 'tb-caja', product: product %}\r
      {%- endfor -%}\r
    </div>\r
  </div>\r
</section>\r
{% stylesheet %}\r
  .tb-seccion-grilla { padding: 0 20px 64px; }\r
  .tb-seccion-grilla .tb-banda { margin: 0 -20px 44px; }\r
  .tb-seccion-grilla__interior { max-width: 1200px; margin: 0 auto; }\r
  .tb-seccion-grilla__titulo { font: 700 clamp(30px, 4vw, 52px)/1 var(--tb-f-titulo); letter-spacing: -.03em; margin: 8px 0 28px; }\r
  .tb-seccion-grilla__cajas { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 22px; }\r
{% endstylesheet %}\r
{% schema %}\r
{\r
  "name": "Tecnobox · Cajas",\r
  "settings": [\r
    { "type": "text", "id": "ceja", "label": "Ceja", "default": "Juegos de mesa" },\r
    { "type": "text", "id": "titulo", "label": "Título", "default": "Menos pantalla, más mesa" },\r
    { "type": "text", "id": "banda", "label": "Texto de la banda", "default": "Te regalamos $3.000 en tu envío desde $20.000" },\r
    { "type": "collection", "id": "coleccion", "label": "Colección" },\r
    { "type": "range", "id": "cantidad", "label": "Productos", "min": 4, "max": 12, "step": 4, "default": 8 }\r
  ],\r
  "presets": [{ "name": "Tecnobox · Cajas" }]\r
}\r
{% endschema %}\r
`,e=`{%- comment -%}\r
  Cajón del carrito. Va una vez, al final de <body> en theme.liquid: {% render 'tb-cajon' %}\r
  Se abre con cualquier elemento que tenga data-tb-abrir-cajon (ej. el ícono del carro).\r
{%- endcomment -%}\r
<div class="tb-cajon" data-tb-cajon data-abierto="false" inert>\r
  <div class="tb-cajon__velo" data-tb-cerrar-cajon></div>\r
  <aside class="tb-cajon__panel" role="dialog" aria-modal="true" aria-label="Tu caja">\r
    <header class="tb-cajon__cabeza">\r
      <div><span>Tu caja · {{ cart.item_count }} producto{% if cart.item_count != 1 %}s{% endif %}</span><br><strong>Revisa y paga</strong></div>\r
      <button type="button" class="tb-icono-boton" data-tb-cerrar-cajon aria-label="Cerrar carrito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg></button>\r
    </header>\r
    <div class="tb-cajon__lista">\r
      {%- for item in cart.items -%}\r
        <div class="tb-linea-carro">\r
          {{ item.image | image_url: width: 160 | image_tag: alt: item.product.title }}\r
          <div><div class="tb-linea-carro__nombre">{{ item.product.title | split: ' | ' | first }}</div><div class="tb-linea-carro__detalle">× {{ item.quantity }} · SKU {{ item.sku }}</div></div>\r
          <div class="tb-linea-carro__precio">{{ item.final_line_price | money_without_trailing_zeros }}</div>\r
        </div>\r
      {%- else -%}\r
        <p class="tb-caja__nombre">Tu caja está vacía.</p>\r
      {%- endfor -%}\r
    </div>\r
    <footer class="tb-cajon__pie">\r
      {% render 'tb-cinta' %}\r
      <div class="tb-cajon__total"><span>Total</span><strong>{{ cart.total_price | money_without_trailing_zeros }}</strong></div>\r
      {% render 'tb-tecla', texto: 'Ir a pagar', url: routes.cart_url, tam: 'l', flecha: true %}\r
    </footer>\r
  </aside>\r
</div>\r
`,n=`{%- comment -%}\r
  Cinta de envío: "te regalamos $3.000 en tu envío desde $20.000".\r
  Lee el total REAL del carro. meta y regalo en CLP (se pueden mover a settings del tema).\r
    {% render 'tb-cinta', meta: 20000, regalo: 3000 %}\r
{%- endcomment -%}\r
{%- assign meta_c = meta | default: 20000 | times: 100 -%}\r
{%- assign regalo_c = regalo | default: 3000 | times: 100 -%}\r
<div class="tb-cinta" data-tb-cinta data-meta="{{ meta_c }}" data-total="{{ cart.total_price }}" data-regalo="{{ regalo_c }}">\r
  <p class="tb-cinta__texto" data-tb-cinta-texto>\r
    {%- if cart.total_price >= meta_c -%}Listo: te regalamos <b>{{ regalo_c | money_without_trailing_zeros }}</b> en tu envío.\r
    {%- else -%}Te faltan <b>{{ meta_c | minus: cart.total_price | money_without_trailing_zeros }}</b> para que te regalemos <b>{{ regalo_c | money_without_trailing_zeros }}</b> en tu envío.{%- endif -%}\r
  </p>\r
  <div class="tb-cinta__pista" aria-hidden="true">\r
    <div class="tb-cinta__tira"></div>\r
    <svg class="tb-cinta__sello" viewBox="0 0 100 100"><path d="M50 6 88 28v44L50 94 12 72V28Z" fill="#fff" stroke="#0e0e0e" stroke-width="7" stroke-linejoin="round"/><path d="M50 6 88 28 50 50 12 28Z" fill="#97c93a" stroke="#0e0e0e" stroke-width="7" stroke-linejoin="round"/></svg>\r
  </div>\r
</div>\r
`;export{t as _,a,e as b,n as c};
