const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const msg=document.getElementById('formMessage');msg.textContent='Thanks. Your information has been captured in this demo. Connect the form to Formspree, HubSpot, or your CRM before launch.';msg.style.color='#78f1b0';});
