document.addEventListener('DOMContentLoaded',function(){
  const nav=document.getElementById('mainNav');
  window.addEventListener('scroll',function(){
    if(window.scrollY>40){nav.classList.add('scrolled');}else{nav.classList.remove('scrolled');}
  });
  const hbtn=document.getElementById('hamburgerBtn');
  const links=document.querySelector('.nav-links');
  hbtn.addEventListener('click',function(){links.classList.toggle('active');});
  const observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('visible');} });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
  const form=document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      alert('تم إرسال طلب الحجز بنجاح، سيتواصل معكم فريق الاستقبال قريباً.');
      form.reset();
    });
  }
});
