/* Efeitos de texto (revelacao de titulos e paragrafos) */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.3});
  function split(h){var tx=h.textContent.trim();h.setAttribute('aria-label',tx);
    h.innerHTML=tx.split(/\s+/).map(function(w,i){return '<span class="w" aria-hidden="true"><span class="wi" style="--d:'+(i*70)+'ms">'+w+'</span></span>'}).join(' ')}
  window.__split=split;
  document.querySelectorAll('.about .lead,.ph h2,.case h3,.exp h2,.skl h2,.edu h2').forEach(function(h){split(h);h.classList.add('sp');io.observe(h)});
  document.querySelectorAll('.about .t,.ph p,.desc,.exp>p,.skl>p,.tl-item ul,.sg>div,.medal').forEach(function(el){el.classList.add('fu');io.observe(el)});
})();
