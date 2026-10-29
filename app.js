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
if(form){
  const service=new URLSearchParams(location.search).get('service');
  if(service&&[...form.elements.service.options].some(option=>option.value===service))form.elements.service.value=service;
  form.addEventListener('submit',event=>{
    event.preventDefault();if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form)),recipient=form.dataset.recipient;
    const subject=`Project enquiry: ${data.service} — ${data.name}`;
    const body=`Name: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.business||'Not provided'}\nPhone: ${data.phone||'Not provided'}\nService: ${data.service}\n\n${data.message}`;
    const gmail='https://mail.google.com/mail/?'+new URLSearchParams({view:'cm',fs:'1',to:recipient,su:subject,body}).toString();
    const mail='mailto:'+recipient+'?'+new URLSearchParams({subject,body}).toString().replaceAll('+','%20');
    document.querySelector('#form-fallback')?.remove();
    const status=document.querySelector('#form-status');status.textContent='Your draft is ready. Review it in Gmail and press Send there. No email has been sent by this website.';delete status.dataset.state;
    const box=document.createElement('div');box.id='form-fallback';
    for(const [label,url]of [['Open Gmail draft',gmail],['Use email app',mail]]){const link=document.createElement('a');link.className='outline-button';link.textContent=label;link.href=url;if(url===gmail){link.target='_blank';link.rel='noopener noreferrer'}box.append(link)}
    status.after(box);window.open(gmail,'_blank','noopener,noreferrer');
  });
}
