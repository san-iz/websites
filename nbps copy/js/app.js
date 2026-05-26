console.log("NBPS Website Loaded");

// simple smooth scroll
document.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click", e=>{
    if(a.hash){
      e.preventDefault();
      document.querySelector(a.hash).scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});