const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

window.addEventListener('load',()=>{setTimeout(()=>$('.loader')?.classList.add('hide'),350);});
const loaderStyle=document.createElement('style');
loaderStyle.textContent='.loader.hide{opacity:0;visibility:hidden;transition:opacity .7s ease,visibility .7s}';
document.head.appendChild(loaderStyle);

const dot=$('.cursor-dot'), ring=$('.cursor-ring');
let mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
let ringX=mouseX, ringY=mouseY;

window.addEventListener('mousemove',e=>{
  mouseX=e.clientX; mouseY=e.clientY;
  if(dot){dot.style.left=mouseX+'px';dot.style.top=mouseY+'px';}
});
function animateCursor(){
  ringX += (mouseX-ringX)*.16;
  ringY += (mouseY-ringY)*.16;
  if(ring){ring.style.left=ringX+'px';ring.style.top=ringY+'px';}
  requestAnimationFrame(animateCursor);
}
animateCursor();

$$('a,.magnetic,.service-card,.gallery-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring?.classList.add('active'));
  el.addEventListener('mouseleave',()=>ring?.classList.remove('active'));
});

$$('.magnetic').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)*.13;
    const y=(e.clientY-r.top-r.height/2)*.13;
    el.style.transform=`translate(${x}px,${y}px)`;
  });
  el.addEventListener('mouseleave',()=>el.style.transform='');
});

let lastScroll=0;
function updateScroll(){
  const h=document.documentElement.scrollHeight-innerHeight;
  const progress=h>0 ? scrollY/h*100 : 0;
  const bar=$('.scroll-progress');
  if(bar)bar.style.width=progress+'%';
  const hero=$('.hero-image');
  if(hero)hero.style.transform=`scale(1.06) translateY(${scrollY*.035}px)`;
  lastScroll=scrollY;
}
window.addEventListener('scroll',updateScroll,{passive:true});
updateScroll();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('in');
}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
$$('.reveal').forEach(el=>io.observe(el));

// Add staggered reveals to major cards for a cinematic scroll-in.
$$('.service-card,.gallery-item,blockquote').forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(35px) scale(.98)';
  el.style.transition=`opacity .8s cubic-bezier(.16,1,.3,1) ${i*70}ms, transform .9s cubic-bezier(.16,1,.3,1) ${i*70}ms`;
  const cardIO=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='none';
      cardIO.unobserve(entry.target);
    }
  }),{threshold:.1});
  cardIO.observe(el);
});
