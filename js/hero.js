/* Hero: tema claro/escuro e toolpath 2D (GSAP) */
(function(){
  // Tema (escuro por defeito)
  var root=document.documentElement;
  document.getElementById('theme').addEventListener('click',function(){
    root.setAttribute('data-theme',root.getAttribute('data-theme')==='dark'?'light':'dark');
  });

  // Toolpath: espiral retangular, como um corte de "pocketing" numa CNC
  var cx=800,cy=400,hw=330,hh=300,step=34,pts=[],i=0;
  var l=cx-hw,r=cx+hw,t=cy-hh,b=cy+hh;
  pts.push([l,t]);
  while(r-l>step*2 && b-t>step*2){
    pts.push([r,t]);pts.push([r,b]);pts.push([l,b]);
    l+=step;t+=step;pts.push([l,t]);
    r-=step;b-=step;
    if(r-l<=step*2||b-t<=step*2)break;
    pts.push([r,t]);
    i++;
  }
  var path=document.getElementById('cut');
  path.setAttribute('d','M'+pts.map(function(p){return p.join(' ')}).join(' L'));
  path.setAttribute('pathLength','1');
  path.style.strokeDasharray='1';

  var head=document.getElementById('head'),total=path.getTotalLength();
  var X=document.getElementById('x'),Y=document.getElementById('y'),Z=document.getElementById('z');
  function place(p,cutting){
    var pt=path.getPointAtLength(p*total);
    head.setAttribute('cx',pt.x);head.setAttribute('cy',pt.y);
    
  }

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!window.gsap){
    path.style.strokeDashoffset='0';place(1,false);
    return;
  }

  // Uma sequência de abertura: título entra, o toolpath desenha-se
  var state={p:0};
  path.style.strokeDashoffset='1';
  var tl=gsap.timeline();
  tl.from('.hero [data-in]',{opacity:0,y:24,scale:1.02,duration:1.1,ease:'power2.out',stagger:.18})
    .set(head,{opacity:1},.4)
    .to(state,{p:1,duration:7,ease:'power1.inOut',
      onUpdate:function(){path.style.strokeDashoffset=1-state.p;place(state.p,true)},
      onComplete:function(){place(1,false);gsap.to(head,{opacity:0,duration:1.2})}},.4);
})();
