const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeNavigation(restoreFocus=false){const wasOpen=toggle?.getAttribute('aria-expanded')==='true';toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');nav?.classList.remove('open');if(wasOpen&&restoreFocus)toggle?.focus()}
toggle?.setAttribute('aria-label','Open navigation');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav?.classList.toggle('open',open)});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeNavigation()});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeNavigation()});
matchMedia('(min-width:1025px)').addEventListener('change',()=>closeNavigation());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNavigation(true)});
document.querySelector('[data-top]')?.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
const form=document.querySelector('#enquiry-form');
if(form){const service=new URLSearchParams(location.search).get('service');if(service&&[...form.elements.service.options].some(o=>o.value===service))form.elements.service.value=service;form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const subject=`Project enquiry: ${d.get('service')} — ${d.get('name')}`;const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nBusiness: ${d.get('business')||'Not provided'}\nPhone: ${d.get('phone')||'Not provided'}\nService: ${d.get('service')}\n\n${d.get('message')}`;location.href=`mailto:growveradigitall@gamil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email draft is ready to open. Send it from your email app. If no app opens, email growveradigitall@gamil.com directly.'})}
