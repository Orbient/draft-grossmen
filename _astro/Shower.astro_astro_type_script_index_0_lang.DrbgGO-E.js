import"./smooth.Dnk5cn4c.js";import{t as e}from"./gsap.CvDoa17S.js";var t=document.querySelector(`[data-sh]`),n=t.querySelector(`[data-shape]`),r=t.querySelector(`[data-dim]`),i=t.querySelector(`[data-price]`),a=e=>t.querySelector(`input[name="${e}"]:checked`),o={clear:[`#cfe0df`,.28],satin:[`#eef0f0`,.92],grey:[`#4d5357`,.58],sand:[`url(#sand)`,1]},s={swing:`
      <rect class="glass" x="70" y="60" width="104" height="380"/>
      <rect class="glass" x="180" y="60" width="160" height="380"/>
      <path class="metal-s" d="M60 70h14M60 430h14"/>
      <rect class="metal" x="168" y="110" width="18" height="26"/><rect class="metal" x="168" y="364" width="18" height="26"/>
      <rect class="metal" x="318" y="210" width="5" height="96"/>
      <path class="hint" d="M340 448a160 160 0 0 0-160-160" />`,slide:`
      <path class="metal-s" d="M50 62h320"/>
      <rect class="glass" x="70" y="66" width="160" height="374"/>
      <rect class="glass" x="190" y="72" width="160" height="368"/>
      <circle class="metal" cx="212" cy="66" r="6"/><circle class="metal" cx="328" cy="66" r="6"/>
      <circle class="metal" cx="92" cy="62" r="6"/><circle class="metal" cx="208" cy="62" r="6"/>
      <rect class="metal" x="206" y="214" width="5" height="96"/>
      <path class="hint" d="M300 460h-70M240 454l-10 6 10 6"/>`,corner:`
      <path class="metal-s" d="M60 92L160 62h210"/>
      <path class="glass" d="M66 96L160 68v372L66 470z"/>
      <rect class="glass" x="166" y="68" width="196" height="372"/>
      <circle class="metal" cx="188" cy="62" r="6"/><circle class="metal" cx="300" cy="62" r="6"/>
      <circle class="metal" cx="90" cy="85" r="5.5"/><circle class="metal" cx="136" cy="71" r="5.5"/>
      <rect class="metal" x="176" y="214" width="5" height="96"/><rect class="metal" x="146" y="220" width="5" height="96"/>
      <path class="hint" d="M66 470l94-30h210"/>`,trap:`
      <path class="glass" d="M60 100L130 64v376L60 468z"/>
      <rect class="glass" x="136" y="64" width="148" height="376"/>
      <path class="glass" d="M290 64l70 36v368l-70-28z"/>
      <rect class="metal" x="128" y="112" width="16" height="24"/><rect class="metal" x="128" y="366" width="16" height="24"/>
      <rect class="metal" x="262" y="210" width="5" height="96"/>
      <path class="hint" d="M60 468l70-28h160l70 28"/>`},c=(c=!0)=>{let l=a(`type`),u=a(`glass`),d=a(`metal`);n.innerHTML=s[l.value];let[f,p]=o[u.value];n.querySelectorAll(`.glass`).forEach(e=>{e.setAttribute(`fill`,f),e.setAttribute(`fill-opacity`,String(p)),e.setAttribute(`stroke`,`#7d8a8c`),e.setAttribute(`stroke-width`,`1`)}),n.querySelectorAll(`.metal`).forEach(e=>{e.setAttribute(`fill`,d.dataset.c),e.setAttribute(`stroke`,`rgba(0,0,0,.25)`),e.setAttribute(`stroke-width`,`.6`)}),n.querySelectorAll(`.metal-s`).forEach(e=>{e.setAttribute(`stroke`,d.dataset.c),e.setAttribute(`stroke-width`,`4`),e.setAttribute(`fill`,`none`)}),n.querySelectorAll(`.hint`).forEach(e=>{e.setAttribute(`stroke`,`currentColor`),e.setAttribute(`stroke-width`,`.7`),e.setAttribute(`stroke-dasharray`,`3 4`),e.setAttribute(`fill`,`none`),e.setAttribute(`opacity`,`.5`)}),r.textContent=l.dataset.size.replace(` мм`,``),t.querySelectorAll(`[data-ph]`).forEach(e=>e.classList.toggle(`is-on`,e.dataset.ph===l.value));let m=+l.dataset.base+ +u.dataset.add+ +d.dataset.add,h=+i.dataset.v||m;i.dataset.v=String(m);let g={v:h};c?e.to(g,{v:m,duration:.7,ease:`power3.out`,onUpdate:()=>{i.textContent=(Math.round(g.v/100)*100).toLocaleString(`ru-RU`)}}):i.textContent=m.toLocaleString(`ru-RU`),c&&e.fromTo(n,{opacity:.2},{opacity:1,duration:.6,ease:`power2.out`})};t.addEventListener(`change`,()=>c()),c(!1),t.querySelector(`[data-send]`).addEventListener(`click`,()=>{let e=a(`type`),t=a(`glass`),n=a(`metal`);window.dispatchEvent(new CustomEvent(`pick`,{detail:`Душевая: ${e.dataset.t.toLowerCase()}, стекло ${t.dataset.t.toLowerCase()}, фурнитура ${n.dataset.t.toLowerCase()}, ориентир от ${i.dataset.v&&(+i.dataset.v).toLocaleString(`ru-RU`)} ₽`}))});