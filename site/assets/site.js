'use strict';
const menuButton=document.querySelector('.mobile-toggle');
const menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menü';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Bezárás':'Menü';menu.classList.toggle('open',open);});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus();}});
matchMedia('(min-width:801px)').addEventListener('change',closeMenu);
document.querySelectorAll('.package-choice').forEach(a=>a.addEventListener('click',()=>{const field=document.querySelector('#contact-message');if(!field.value.trim())field.value='Érdeklődöm a(z) '+a.dataset.package+' iránt. ';}));
document.querySelectorAll('.appointment-form').forEach(form=>form.addEventListener('submit',async event=>{
 event.preventDefault();
 const status=form.querySelector('[role="status"]'),button=form.querySelector('button[type="submit"]');
 let config;
 try{const response=await fetch('assets/config.json',{cache:'no-store'});if(!response.ok)throw new Error('config');config=await response.json();}catch{status.textContent='Az űrlap beállításai most nem érhetők el. Próbáld újra később.';return;}
 if(!config.formsEnabled){status.textContent='Az űrlap előkészítés alatt áll. Az adatokat nem küldtük el. Az élesítés után itt kérhetsz időpontot.';return;}
 button.disabled=true;button.textContent='Küldés folyamatban…';status.textContent='';
 try{
  const payload=new URLSearchParams(new FormData(form));
  const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:payload.toString()});
  if(!response.ok)throw new Error('submit');
  form.reset();window.location.assign('koszonjuk.html');
 }catch{status.textContent='Az üzenetet nem sikerült elküldeni. Ellenőrizd a kapcsolatodat, és próbáld újra. A kitöltött mezőket megtartottuk.';button.disabled=false;button.textContent='Küldés';}
}));
