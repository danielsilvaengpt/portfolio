/* Secoes: contagem do 72%, linha do tempo da Experiencia e creditos do Contacto */
try{
(function(){
  var cases=document.querySelectorAll('.case'),n=document.querySelector('[data-count]');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window)){cases.forEach(function(c){c.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;
    e.target.classList.add('in');io.unobserve(e.target);
    if(n&&e.target.contains(n)){var end=+n.dataset.count,t0=performance.now();
      (function f(t){var k=Math.min((t-t0)/1400,1);n.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0);}
  })},{threshold:.35});
  cases.forEach(function(c){io.observe(c)});
})();
}catch(e){console.error("[sections]",e)}

try{
(function(){
  var tl=document.getElementById('tl'),items=tl.querySelectorAll('.tl-item');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){tl.style.setProperty('--p',1);items.forEach(function(i){i.classList.add('on')});return;}
  var tick=false;
  function update(){
    tick=false;var vh=window.innerHeight,y=vh*.6,r=tl.getBoundingClientRect();
    tl.style.setProperty('--p',Math.max(0,Math.min(1,(y-r.top)/r.height)));
    items.forEach(function(i){i.classList.toggle('on',i.getBoundingClientRect().top<y)});
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(update)}},{passive:true});
  window.addEventListener('resize',update);update();
})();
}catch(e){console.error("[sections]",e)}

try{
(function(){
  var c=document.querySelector('.contact');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){c.classList.add('static');return;}
  new IntersectionObserver(function(e,o){if(e[0].isIntersecting){c.classList.add('in');o.disconnect()}},{threshold:.4}).observe(c);
})();
}catch(e){console.error("[sections]",e)}
