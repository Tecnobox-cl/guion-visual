const e=`{%- comment -%}\r
  Tecla (botón). Parámetros:\r
    texto     (obligatorio)\r
    url       si viene, es un <a>; si no, un <button>\r
    variante  '' (lima: comprar) | 'carbon' | 'papel' | 'oferta'\r
    tam       '' | 's' | 'l'\r
    tecla     leyenda en la esquina, ej. '⏎'\r
    tipo      'button' | 'submit'  (por defecto 'button')\r
    flecha    true para agregar →\r
  Uso: {% render 'tb-tecla', texto: 'Agregar al carro', tipo: 'submit', tecla: '⏎' %}\r
{%- endcomment -%}\r
{%- capture clases -%}tb-tecla{% if variante != blank %} tb-tecla--{{ variante }}{% endif %}{% if tam != blank %} tb-tecla--{{ tam }}{% endif %}{%- endcapture -%}\r
{%- if url != blank -%}\r
  <a href="{{ url }}" class="{{ clases }}"{% if tecla != blank %} data-tecla="{{ tecla }}"{% endif %}><span>{{ texto }}</span>{% if flecha %}<span class="tb-tecla__flecha" aria-hidden="true">→</span>{% endif %}</a>\r
{%- else -%}\r
  <button type="{{ tipo | default: 'button' }}" class="{{ clases }}"{% if tecla != blank %} data-tecla="{{ tecla }}"{% endif %}><span>{{ texto }}</span>{% if flecha %}<span class="tb-tecla__flecha" aria-hidden="true">→</span>{% endif %}</button>\r
{%- endif -%}\r
`,a=`{%- comment -%}\r
  Sello (insignia). tipo: online | descuento | envio | ultimas | nuevo | agotado\r
  Uso: {% render 'tb-sello', tipo: 'online', texto: 'Disponible online' %}\r
{%- endcomment -%}\r
<span class="tb-sello tb-sello--{{ tipo }}">{{ texto }}</span>\r
`,t=`{%- comment -%}\r
  Etiqueta de precio colgante. Toma el precio REAL de la variante:\r
    {% render 'tb-etiqueta', variante: product.selected_or_first_available_variant, tam: 's' %}\r
  Si hay compare_at_price mayor, muestra el anterior tachado y el sello de %.\r
{%- endcomment -%}\r
{%- liquid\r
  assign precio = variante.price\r
  assign antes = variante.compare_at_price\r
  assign dcto = 0\r
  if antes > precio\r
    assign dcto = antes | minus: precio | times: 100 | divided_by: antes\r
  endif\r
-%}\r
<div class="tb-etiqueta{% if tam != blank %} tb-etiqueta--{{ tam }}{% endif %}">\r
  <div class="tb-etiqueta__papel">\r
    {%- if dcto > 0 -%}<s class="tb-etiqueta__antes">{{ antes | money_without_trailing_zeros }}</s>{%- endif -%}\r
    <strong class="tb-etiqueta__precio">{{ precio | money_without_trailing_zeros }}</strong>\r
  </div>\r
  {%- if dcto > 0 -%}<span class="tb-etiqueta__sello tb-sello tb-sello--descuento">-{{ dcto }}%</span>{%- endif -%}\r
</div>\r
`,n=`{%- comment -%}\r
  Código de barras decorativo desde un código real (SKU, orden de flete, pedido).\r
  Mismo algoritmo que el guion: cada dígito define el ancho de su barra y de su espacio.\r
  Uso: {% render 'tb-barras', codigo: variant.sku, alto: 30 %}\r
{%- endcomment -%}\r
{%- assign letras = codigo | split: '' -%}\r
<span class="tb-barras" style="--alto: {{ alto | default: 34 }}px" aria-label="Código {{ codigo }}">\r
  <span class="tb-barras__barras" aria-hidden="true"><i style="width:2px"></i><i class="v" style="width:1px"></i><i style="width:1px"></i>\r
    {%- for l in letras -%}\r
      {%- assign d = l | plus: 0 | modulo: 10 -%}\r
      {%- assign b = d | modulo: 3 | plus: 1 -%}\r
      {%- assign e = d | plus: 1 | modulo: 2 | plus: 1 -%}\r
      <i class="v" style="width:{{ e }}px"></i><i style="width:{{ b }}px"></i>\r
    {%- endfor -%}\r
    <i class="v" style="width:1px"></i><i style="width:1px"></i><i class="v" style="width:1px"></i><i style="width:2px"></i></span>\r
  <span class="tb-barras__numero">{{ codigo }}</span>\r
</span>\r
`;export{e as _,a,t as b,n as c};
