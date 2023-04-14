let links=document.querySelectorAll("a");
let sections=document.querySelectorAll("section");
console.log(links);

window.addEventListener("scroll",function(e){
  
  sections.forEach(function (section){
    let windowTop=window.scrollY;
    let offsetfromTop=section.offsetTop-150;
    
    let ids=section.getAttribute("id");
    console.log(windowTop);
    console.log(offsetfromTop);
    
    
    
    if(  windowTop>=offsetfromTop)
    {
      links.forEach(function (linkOne){
        linkOne.classList.remove("active");
        
        document.querySelector("a[href*=" + ids + "]").classList.add("active");
        
        
  
      });
    }
  });
});