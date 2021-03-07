const selectedlink = document.querySelectorAll('.nav-link');

selectedlink.forEach(link =>{
   link.classList.remove('active');
   link.addEventListener('click', ()=>{
     for(let links of selectedlink){
       if(links.classList.contains('active')){
          links.classList.remove('active');
       }
     }
      link.classList.add('active');
   })
})