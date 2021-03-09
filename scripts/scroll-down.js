//navbar link scroll
document.addEventListener("DOMContentLoaded", () => {
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    const listOfLinks = document.querySelectorAll("a[href^='#articleLink");
    
    listOfLinks.forEach(function (link) {
      link.addEventListener('click',  () => {
        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlighted')) {
            link.classList.remove('highlighted');
          }
        });
        link.classList.add('highlighted');
        
        let ref = link.href.split('#articleLink');
        ref = "#article" + ref[1];
       
        if (isIE11) {
          window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.querySelector(ref).offsetTop
          });
        }
      })
    })
  })
  