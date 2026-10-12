/* Cena 3D (Three.js): braco robotico em wireframe controlado pelo scroll, e rede de dados por projeto */
(function(){
  var cv=document.getElementById('gl');
  if(!window.THREE){cv.style.display='none';return;}
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,small=innerWidth<=820,sm=small,K=small?.55:1;
  var r;try{r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true})}catch(e){cv.style.display='none';return}
  r.setPixelRatio(Math.min(devicePixelRatio,1.5));
  var scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60);
  scene.fog=new THREE.Fog(0x0A0C10,7,15);
  var g=new THREE.Group(),inner=new THREE.Group();inner.position.set(-1.9,0,0);g.add(inner);scene.add(g);
  function cl(v,a,b){return Math.max(a,Math.min(b,v))}
  function ease(x){return x*x*(3-2*x)}
  function hs(i,k){var v=Math.sin(i*12.9898+k*78.233)*43758.5453;return v-Math.floor(v)}
  function LM(){return new THREE.LineBasicMaterial({transparent:true})}
  var armMat=LM(),jointMat=LM(),plateMat=LM(),trailMat=LM(),edgeMat=LM(),groundMat=LM();
  function PM(sz,vc){return new THREE.PointsMaterial({size:sz,transparent:true,depthWrite:false,vertexColors:!!vc})}
  var tipMat=PM(.16),sparkMat=PM(.05),pulseMat=PM(.13),nodeMat=PM(small?.12:.1,true);

  // ---- Braco industrial de 6 eixos (estilo ABB/KUKA), em wireframe ----
  var Y1=new THREE.Vector3(0,1,0),dir=new THREE.Vector3();
  function taper(rt,rb,mat,seg){var gm=new THREE.CylinderGeometry(rt,rb,1,seg||8,1);gm.translate(0,.5,0);
    var m=new THREE.LineSegments(new THREE.EdgesGeometry(gm,15),mat);inner.add(m);return m}
  function cover(rad,len,mat){var m=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.CylinderGeometry(rad,rad,len,12,1),15),mat);inner.add(m);return m}
  function box(w,h,d,mat){var m=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(w,h,d)),mat);inner.add(m);return m}
  function put(m,A,B){dir.subVectors(B,A);var len=dir.length();m.position.copy(A);m.scale.set(1,len,1);m.quaternion.setFromUnitVectors(Y1,dir.normalize())}
  var plinth=cover(.62,.22,armMat);plinth.position.y=.11;
  var ring=cover(.48,.1,armMat);ring.position.y=.27;
  var turret=box(.7,.76,.56,armMat);turret.position.y=.6;
  var c1=cover(.2,.66,jointMat),c2=cover(.17,.52,jointMat),c3=cover(.11,.3,jointMat);
  var a1=taper(.12,.19,armMat),a2=taper(.085,.14,armMat),strut=taper(.03,.04,armMat,6);
  var fl=taper(.08,.08,armMat,10),spn=taper(.055,.06,armMat,8),cone=taper(.012,.05,armMat,8);
  var tipG=new THREE.BufferGeometry();tipG.setAttribute('position',new THREE.BufferAttribute(new Float32Array(3),3));
  var tip=new THREE.Points(tipG,tipMat);inner.add(tip);
  var SH=.9,L1=1.7,L2=1.5,FL=.15,SPL=.28,CNL=.1,L3=FL+SPL+CNL;
  var V3=THREE.Vector3,Sv=new V3(0,SH,0),Ev=new V3(),Wv=new V3(),Fv=new V3(),Pv=new V3(),Tv=new V3(),Sd=new V3(),Rv=new V3(),Pt=new V3();
  function pose(tx,ty,tz){ // cinematica inversa: yaw da base + ombro + cotovelo; ferramenta vertical
    var wy=ty+L3,rd=Math.hypot(tx,tz),psi=Math.atan2(tz,tx),dy=wy-SH,
        d=cl(Math.hypot(rd,dy),Math.abs(L1-L2)+.05,L1+L2-.02),
        th=Math.atan2(dy,rd)+Math.acos(cl((L1*L1+d*d-L2*L2)/(2*L1*d),-1,1)),
        er=L1*Math.cos(th),ey=SH+L1*Math.sin(th),co=Math.cos(psi),si=Math.sin(psi);
    Ev.set(er*co,ey,er*si);Wv.set(tx,wy,tz);Fv.set(tx,wy-FL,tz);Pv.set(tx,wy-FL-SPL,tz);Tv.set(tx,ty,tz);
    Sd.set(-si,0,co);turret.rotation.y=-psi;
    c1.position.copy(Sv);c1.quaternion.setFromUnitVectors(Y1,Sd);
    c2.position.copy(Ev);c2.quaternion.copy(c1.quaternion);c3.position.copy(Wv);c3.quaternion.copy(c1.quaternion);
    put(a1,Sv,Ev);put(a2,Ev,Wv);put(fl,Wv,Fv);put(spn,Fv,Pv);put(cone,Pv,Tv);
    Rv.set(-.4*co,.5,-.4*si);Pt.lerpVectors(Sv,Ev,.4);Pt.y-=.12;put(strut,Rv,Pt);
    tip.position.copy(Tv);
  }

  // ---- Chao, placa (peca) e toolpath ----
  var gv=[],q,e;
  for(q=-6;q<=6;q++){gv.push(q*.8,0,-5,q*.8,0,5,-5,0,q*.8,5,0,q*.8)}
  var gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(new Float32Array(gv),3));
  inner.add(new THREE.LineSegments(gg,groundMat));
  var pv=[];
  for(q=0;q<=7;q++){e=1.3+1.7*q/7;pv.push(e,.005,-.75,e,.005,.75)}
  for(q=0;q<=5;q++){e=-.75+1.5*q/5;pv.push(1.3,.005,e,3,.005,e)}
  var pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(new Float32Array(pv),3));
  inner.add(new THREE.LineSegments(pg,plateMat));
  var st=.22,l=1.42,rr=2.88,t=-.65,b=.65,pp=[[l,t]];
  for(;;){
    pp.push([rr,t]);t+=st;if(t>b)break;
    pp.push([rr,b]);rr-=st;if(rr<l)break;
    pp.push([l,b]);b-=st;if(b<t)break;
    pp.push([l,t]);l+=st;if(l>rr)break;
  }
  var cum=[0],k;for(k=1;k<pp.length;k++)cum.push(cum[k-1]+Math.hypot(pp[k][0]-pp[k-1][0],pp[k][1]-pp[k-1][1]));
  var total=cum[cum.length-1];
  function at(p){var d=p*total;for(var m=1;m<cum.length;m++)if(d<=cum[m]){var f=(d-cum[m-1])/(cum[m]-cum[m-1]||1);
    return [pp[m-1][0]+(pp[m][0]-pp[m-1][0])*f,pp[m-1][1]+(pp[m][1]-pp[m-1][1])*f]}return pp[pp.length-1]}
  var Ns=260,tp=new Float32Array(Ns*3);
  for(q=0;q<Ns;q++){var ta=at(q/(Ns-1));tp[q*3]=ta[0];tp[q*3+1]=.012;tp[q*3+2]=ta[1]}
  var trG=new THREE.BufferGeometry();trG.setAttribute('position',new THREE.BufferAttribute(tp,3));
  inner.add(new THREE.Line(trG,trailMat));

  // ---- Faiscas na ponta (so enquanto corta) ----
  var NS=small?8:16,SP=new Float32Array(NS*3),SV=new Float32Array(NS*3),SL=new Float32Array(NS);
  var sG=new THREE.BufferGeometry();sG.setAttribute('position',new THREE.BufferAttribute(SP,3));
  var sparks=new THREE.Points(sG,sparkMat);sparks.frustumCulled=false;inner.add(sparks);

  // ---- Rede de dados: o mesmo conjunto de pontos reorganiza-se em cada projeto ----
  var M=60,CY=1.15,NA=new Float32Array(M*3),NP=new Float32Array(M*3),NC=new Float32Array(M*3);
  var PR=[ // etapas: [n de nos, forma, raio]; a soma e sempre 60
    [[22,'cloud',.75],[16,'grid',.5],[12,'cyl',.45],[6,'ring',.4],[4,'line',.5]],
    [[18,'cloud',.7],[8,'line',.6],[22,'star',.8],[12,'bars',.5]],
    [[16,'grid',.55],[26,'layers',.7],[8,'cloud',.5],[10,'bars',.5]],
    [[14,'grid',.5],[10,'line',.6],[14,'ring',.45],[22,'cyl',.5]],
    [[16,'cloud',.7],[14,'helix',.5],[14,'grid',.5],[16,'ring',.55]]];
  function off(kd,k,n,rd,sd){
    var a=0,c,rw,cc2,o,bi,lv,ly;
    switch(kd){
      case 'cloud':return [(hs(sd,4)-.5)*.5,(hs(sd,2)-.5)*2*rd,(hs(sd,3)-.5)*2*rd];
      case 'grid':c=Math.ceil(Math.sqrt(n));rw=Math.floor(k/c);cc2=k%c;return [0,(rw-(Math.ceil(n/c)-1)/2)*.26,(cc2-(c-1)/2)*.26];
      case 'ring':a=k/n*6.283;return [0,Math.sin(a)*rd,Math.cos(a)*rd];
      case 'line':return [0,(k-(n-1)/2)*(rd*2/Math.max(1,n-1)),0];
      case 'star':if(k===0)return [0,0,0];o=k<=6?1:2;a=(k<=6?k/6:(k-6)/(n-7))*6.283;return [0,Math.sin(a)*rd*o*.5,Math.cos(a)*rd*o*.5];
      case 'bars':bi=k%4;lv=Math.floor(k/4);return [0,lv*.2-.3,(bi-1.5)*.3];
      case 'layers':ly=k%4;lv=Math.floor(k/4);return [(ly-1.5)*.32,(lv-3)*.2*(1.2-ly*.15),(hs(sd,5)-.5)*.5];
      case 'cyl':return [(k%3-1)*.25,(Math.floor(k/3)-n/6)*.22,(hs(sd,6)-.5)*.3];
      default:a=k/n*12.566;return [(k/n-.5)*.9,Math.sin(a)*rd,Math.cos(a)*rd];
    }
  }
  var LT=[],EA=[],STC=[],maxE=0;
  PR.forEach(function(st,p){
    var lt=new Float32Array(M*3),ed=[],cx=[],S=st.length,idx=0,starts=[];
    st.forEach(function(sg,si){var x0=-.2+4*(si/(S-1));cx.push(x0);starts.push(idx);
      for(var kq=0;kq<sg[0];kq++){var o=off(sg[1],kq,sg[0],sg[2],p*100+idx);lt[idx*3]=x0+o[0];lt[idx*3+1]=CY+o[1];lt[idx*3+2]=o[2];idx++}});
    for(var si=0;si<S-1;si++){var s0=starts[si],n0=st[si][0],s1=starts[si+1],n1=st[si+1][0];
      for(var kq=0;kq<n0;kq++){var j1=Math.floor(kq*n1/n0);ed.push(s0+kq,s1+j1,s0+kq,s1+(j1+1+kq%2)%n1)}}
    LT.push(lt);EA.push(ed);STC.push(cx);maxE=Math.max(maxE,ed.length);
  });
  for(q=0;q<M;q++){var an=at(q/(M-1));NA[q*3]=an[0];NA[q*3+1]=.03;NA[q*3+2]=an[1]}
  var nG=new THREE.BufferGeometry();
  nG.setAttribute('position',new THREE.BufferAttribute(NP,3));nG.setAttribute('color',new THREE.BufferAttribute(NC,3));
  var nodes=new THREE.Points(nG,nodeMat);nodes.frustumCulled=false;inner.add(nodes);
  var EP=new Float32Array(maxE*3),eG=new THREE.BufferGeometry();eG.setAttribute('position',new THREE.BufferAttribute(EP,3));
  var eL=new THREE.LineSegments(eG,edgeMat);eL.frustumCulled=false;inner.add(eL);
  var NPU=14,PUP=new Float32Array(NPU*3),puG=new THREE.BufferGeometry();puG.setAttribute('position',new THREE.BufferAttribute(PUP,3));
  var pulses=new THREE.Points(puG,pulseMat);pulses.frustumCulled=false;inner.add(pulses);

  // etiquetas HTML ligadas as etapas 3D (texto vem da lista de fluxo de cada projeto)
  var LTX=[],labs=[],Lv=new THREE.Vector3(),labW=document.createElement('div');
  labW.className='labels';document.body.appendChild(labW);
  function refreshLabels(){LTX.length=0;document.querySelectorAll('.case').forEach(function(c){LTX.push(Array.prototype.map.call(c.querySelectorAll('.flow li'),function(li){return li.childNodes[0].textContent.trim()}))});labs.forEach(function(l){delete l.dataset.k})}
  for(q=0;q<5;q++){var lbe=document.createElement('div');lbe.className='lb';labW.appendChild(lbe);labs.push(lbe)}
  refreshLabels();
  var aT=1e9,pT=1e9,cc=[];
  function ab(el){return el.getBoundingClientRect().top+sy()}
  function cache(){var A=document.getElementById('sobre'),P=document.getElementById('projetos');
    aT=A?ab(A):innerHeight;pT=P?ab(P):innerHeight*2;cc=[];
    document.querySelectorAll('.case').forEach(function(c){cc.push(ab(c)+c.offsetHeight/2)})}
  window.__refresh=function(){refreshLabels();cache()};

  var amber=new THREE.Color(),cyan=new THREE.Color(),muted=new THREE.Color(),bgc=new THREE.Color(),tmp=new THREE.Color();
  function cols(){
    var s=getComputedStyle(document.documentElement);
    amber.set(s.getPropertyValue('--amber').trim());cyan.set(s.getPropertyValue('--cyan').trim());
    muted.set(s.getPropertyValue('--muted').trim());bgc.set(s.getPropertyValue('--bg').trim());
    scene.fog.color.copy(bgc);
    var light=document.documentElement.getAttribute('data-theme')==='light',bl=light?THREE.NormalBlending:THREE.AdditiveBlending;
    [armMat,jointMat,plateMat,trailMat,edgeMat,groundMat,tipMat,sparkMat,pulseMat,nodeMat].forEach(function(m){m.blending=bl;m.needsUpdate=true});
    armMat.color.copy(muted);groundMat.color.copy(muted);jointMat.color.copy(amber);plateMat.color.copy(amber);trailMat.color.copy(amber);
    edgeMat.color.copy(cyan);tipMat.color.copy(amber);sparkMat.color.copy(amber);pulseMat.color.copy(cyan);
  }
  cols();
  function sy(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
  function size(){sm=innerWidth<=820;document.documentElement.classList.toggle('has3d',!sm);r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();cache()}
  var lowQ=false,fN=0,fT=0,sS=sy()/innerHeight,mx=0,my=0,t0=performance.now(),lastT=t0,last='';
  addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
  document.getElementById('theme').addEventListener('click',function(){setTimeout(cols,0)});
  var RX=document.getElementById('x'),RY=document.getElementById('y'),RZ=document.getElementById('z');

  function frame(now){
    requestAnimationFrame(frame);
    var dt=Math.min(.05,(now-lastT)/1000);lastT=now;
    // qualidade adaptativa: se a media de frames for lenta, reduz resolucao e efeitos
    if(++fN>40&&fN<=160){fT+=dt;if(fN===160&&fT/120>.028){lowQ=true;r.setPixelRatio(1);r.setSize(innerWidth,innerHeight,false)}}
    var T=reduce?9:(now-t0)/1000,fade=reduce?1:cl(T/1.5,0,1);
    // scroll suavizado (independente do frame rate), em "ecras": 0-1,5 = desenho do toolpath; 1,4-2,7 = pontos viram rede de dados
    sS+=(sy()/innerHeight-sS)*(reduce?1:1-Math.exp(-dt*5.5));
    var vh=innerHeight,sP=sS*vh,vc=sP+vh/2,lc=cc.length-1,fx=0;
    if(lc>=0){if(vc>=cc[lc])fx=lc;else if(vc>cc[0]){for(var ci=0;ci<lc;ci++)if(vc<cc[ci+1]){fx=ci+(vc-cc[ci])/(cc[ci+1]-cc[ci]);break}}}
    var fo=lc>=0?ease(cl((vc-cc[lc])/(vh*.9),0,1)):0;
    var cp=ease(cl(sP/(aT*1.25),0,1)),mo=ease(cl((sP-aT*.85)/Math.max(1,pT-aT*.85-vh*.4),0,1));

    var pt=at(cp),pl=cl(cp/.04,0,1),ty=.02+.55*(1-pl),hm=ease(cl(mo*2.2,0,1));
    var tx=pt[0]+(2.1-pt[0])*hm,tz=pt[1]*(1-hm),tyy=ty+(.95-ty)*hm;
    var idle=reduce?0:(1-cl(cp/.02,0,1))*.05;
    pose(tx+idle*Math.sin(T*.9),tyy,tz+idle*Math.cos(T*.7));
    spn.rotation.y=reduce?0:T*12;
    var txt=((tx-1.3)/1.7*120).toFixed(1)+'|'+((tz+.75)/1.5*92).toFixed(1)+'|'+(tyy*10).toFixed(1);
    if(txt!==last){last=txt;var v=txt.split('|');RX.textContent=v[0];RY.textContent=v[1];RZ.textContent=v[2]}

    trG.setDrawRange(0,Math.max(2,Math.ceil(cp*Ns)));
    // faiscas
    var cutting=!reduce&&!lowQ&&cp>.04&&cp<.99&&mo<.2;sparks.visible=cutting;
    if(cutting){for(var i=0;i<NS;i++){var j=i*3;SL[i]-=dt;
      if(SL[i]<=0){SL[i]=.25+Math.random()*.35;SP[j]=Tv.x;SP[j+1]=Tv.y+.02;SP[j+2]=Tv.z;
        SV[j]=(Math.random()-.5)*1.4;SV[j+1]=.8+Math.random()*1.2;SV[j+2]=(Math.random()-.5)*1.4}
      SV[j+1]-=3.2*dt;SP[j]+=SV[j]*dt;SP[j+1]=Math.max(.01,SP[j+1]+SV[j+1]*dt);SP[j+2]+=SV[j+2]*dt}
      sG.attributes.position.needsUpdate=true}

    var pa=Math.min(4,Math.floor(fx)),pb=Math.min(4,pa+1),bl=ease(fx-pa),LA=LT[pa],LB2=LT[pb];
    for(var n=0;n<M;n++){
      var u=ease(cl(mo*1.35-(n/M)*.35,0,1)),jj=n*3,
          gx=LA[jj]+(LB2[jj]-LA[jj])*bl,gy=LA[jj+1]+(LB2[jj+1]-LA[jj+1])*bl,gz=LA[jj+2]+(LB2[jj+2]-LA[jj+2])*bl;
      NP[jj]=NA[jj]+(gx-NA[jj])*u;NP[jj+1]=NA[jj+1]+(gy-NA[jj+1])*u+Math.sin(Math.PI*u)*.7+(u>=1?Math.sin(T*.8+n)*.03:0);NP[jj+2]=NA[jj+2]+(gz-NA[jj+2])*u;
      tmp.copy(amber).lerp(cyan,u);NC[jj]=tmp.r;NC[jj+1]=tmp.g;NC[jj+2]=tmp.b;
    }
    nG.attributes.position.needsUpdate=true;nG.attributes.color.needsUpdate=true;
    nG.setDrawRange(0,mo>0?M:Math.ceil(cp*M));
    var pi=Math.round(cl(fx,0,4)),ce=EA[pi],ev=cl(1-Math.abs(fx-pi)*2.4,0,1),eo=cl((mo-.55)/.4,0,1);
    eL.visible=eo>0;pulses.visible=eo>.6&&!lowQ;
    if(eo>0){eG.setDrawRange(0,ce.length);
      for(var z=0;z<ce.length;z++){EP[z*3]=NP[ce[z]*3];EP[z*3+1]=NP[ce[z]*3+1];EP[z*3+2]=NP[ce[z]*3+2]}
      eG.attributes.position.needsUpdate=true;
      for(var p=0;p<NPU;p++){var ei=2*Math.floor(hs(p,5)*(ce.length/2)),A=ce[ei]*3,B=ce[ei+1]*3,fr=(T*.35+hs(p,9))%1;
        PUP[p*3]=NP[A]+(NP[B]-NP[A])*fr;PUP[p*3+1]=NP[A+1]+(NP[B+1]-NP[A+1])*fr;PUP[p*3+2]=NP[A+2]+(NP[B+2]-NP[A+2])*fr}
      puG.attributes.position.needsUpdate=true}

    var f=fade*(sm?.55:1),ar=1-.8*mo;
    armMat.opacity=.8*f*ar;jointMat.opacity=.95*f*ar;tipMat.opacity=f*ar;sparkMat.opacity=f;
    plateMat.opacity=.3*f*(1-.7*mo);trailMat.opacity=.95*f*(1-.5*mo);groundMat.opacity=.13*f*(1-.4*mo);
    var qf=1-.78*fo;nodeMat.opacity=.95*f*(1-.3*mo)*qf;edgeMat.opacity=.5*f*eo*ev*(1-.3*mo)*qf;pulseMat.opacity=f*eo*ev*qf;

    var halfW=2.84*cam.aspect;
    // ajuste ao ecra: a cena nunca ultrapassa o viewport (a largura util da cena e ~2,7 unidades de cada lado)
    var gx=sm?0:halfW*.46,sc=Math.min((sm?.6:.85)+(sm?.25:.15)*mo,(halfW-gx)/2.7);
    g.position.set(gx,sm?1.1-.9*mo:-.2,0);g.scale.setScalar(sc);
    g.rotation.y=-.2+sS*.04+(reduce?0:Math.sin(T*.2)*.05);
    // camara em orbita lenta com o scroll
    var ang=-.12+sS*.035+(reduce?0:mx*.12),R=7.3;
    cam.position.set(Math.sin(ang)*R,3+.5*mo-(reduce?0:my*.3),Math.cos(ang)*R);cam.lookAt(0,.7,0);cam.updateMatrixWorld();scene.updateMatrixWorld();
    var showL=!sm&&eo>.6,txs=LTX[pi]||[];
    for(var li=0;li<labs.length;li++){var lb=labs[li];
      if(!showL||li>=txs.length){lb.style.display='none';continue}
      if(lb.dataset.k!==pi+'-'+li){lb.textContent=txs[li];lb.dataset.k=pi+'-'+li}
      Lv.set(STC[pi][li],CY+.95,0);inner.localToWorld(Lv);Lv.project(cam);
      lb.style.display='block';lb.style.opacity=(eo*ev*(1-fo)).toFixed(2);
      lb.style.transform='translate('+((Lv.x*.5+.5)*innerWidth).toFixed(1)+'px,'+((-Lv.y*.5+.5)*innerHeight).toFixed(1)+'px) translate(-50%,-100%)'}
    r.render(scene,cam);
  }
  if(!small)document.documentElement.classList.add('has3d');
  size();addEventListener('resize',size);addEventListener('load',cache);setTimeout(cache,1200);
  requestAnimationFrame(frame);
})();
