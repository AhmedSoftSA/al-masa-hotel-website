document.addEventListener("DOMContentLoaded",function(){
  const nav=document.getElementById("mainNav");
  const hbtn=document.getElementById("hamburgerBtn");
  const links=document.getElementById("navLinks");
  const form=document.getElementById("bookingForm");
  const note=document.getElementById("formNote");

  function setNavState(){
    nav.classList.toggle("scrolled",window.scrollY>36);
  }
  setNavState();
  window.addEventListener("scroll",setNavState,{passive:true});

  hbtn.addEventListener("click",function(){
    const open=links.classList.toggle("active");
    nav.classList.toggle("open",open);
    document.body.classList.toggle("menu-open",open);
    hbtn.setAttribute("aria-expanded",String(open));
  });

  links.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click",function(){
      links.classList.remove("active");
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      hbtn.setAttribute("aria-expanded","false");
    });
  });

  const observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){observer.observe(el);});

  form.addEventListener("submit",function(event){
    event.preventDefault();
    note.textContent="تم إرسال طلب الحجز بنجاح. سيتواصل معكم فريق الاستقبال قريبًا.";
    form.reset();
  });
});
