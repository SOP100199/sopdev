// links Gsap{
var tl =gsap.timeline();
gsap.from("#landing-l img",{
   opacity:0,
   duration:1.5,
   
})
gsap.from("#sidebar",{
   x:-100,
   opacity:0,
   duration:1,
})
gsap.from("#landing-r h1,#landing-r p,#element",{
   opacity:0,
   y:-100,
   duration:1,
   stagger:0.1,
   
})
gsap.from(".links,.logo ,#search,#nav-btn",{
   stagger:0.1,
   y:20,
   opacity:0,
})

gsap.from("#prof-content p,#prof-m-r h2",{
   opacity:0,
   y:-30,
  stagger:0.1,
})



gsap.from("#prof-m-l,#prof-m-l img ",{
   stagger:0.5,
   opacity:0,
   duration:2,
})

gsap.from("#r-l-1",{
   y:-100,
   opacity:0,
   duration:0.5,
   delay:0.2,
   scrollTrigger:{
      scroller:"body",
      trigger:"#r-l-1",
      // scrub:1,
   }
})
gsap.from("#r-l-2",{
   opacity:0,
   y:-100,
   duration:0.5,
   delay:0.2,
   scrollTrigger:{
      scroller:"body",
      trigger:"#r-l-2",
      // scrub:1,
   }
})
gsap.from("#r-l-3",{
   opacity:0,
   y:-100,
   duration:0.5,
   delay:0.2,
   scrollTrigger:{
      scroller:"body",
      trigger:"#r-l-3",
      // scrub:1,
   }
})
gsap.from("#r-r-1",{
   opacity:0,
   y:-100,
   duration:0.5,
   delay:0.2,
   ease:"break.out",
   scrollTrigger:{
      scroller:"body",
      trigger:"#r-l-1",
      // scrub:1,
   }
})
gsap.from("#r-r-2",{
   opacity:0,
   y:-100,
   duration:0.5,
   delay:0.2,
   scrollTrigger:{
      scroller:"body",
      trigger:"#r-r-2",
      // scrub:1,
   }
})

// blog-alert

const blogalert=()=>{
   let blg_alt=document.querySelector("#blog-alert")

   setTimeout(function(){ blg_alt.style.display= "none"},2000);
}
blogalert();
// function redir(){

//    let rdr=document.querySelector("#redirecting")
//    setTimeout(function(){ rdr.style.display= "none"},2000);
// }
   
const mobile_view = ()=>{
   // console.log(cross.style.backgroundColor = "red");
   bars.addEventListener("click",function(){
      let slider= document.querySelector("#links-mobile");
      let bars=document.querySelector("#bars");
      let xmark=document.querySelector("#xmark");
      slider.style.display = "flex";
      slider.style.transform = "translateX(0)"; 
      xmark.style.zIndex = "1002";
      slider.style.transitionTiming="5";
      xmark.style.display ="flex";
      bars.style.display ="none";

       
       
      gsap.from("#links-mobile li a , #mobile-btn",{
         y:-10,
         opacity:0,
         duration:0.1,
         delay:0.2,
         stagger:0.1,
         ease:"power2.in"
      })
      
   })
   xmark.addEventListener("click",function(){
      let slider= document.querySelector("#links-mobile");
      let bars=document.querySelector("#bars");
      let xmark=document.querySelector("#xmark");
      slider.style.display = "";
      slider.style.transform = "translateX(240%)"; 
      xmark.style.zIndex = "1002";
      slider.style.transition="5";
      xmark.style.display ="none";
      bars.style.display = "flex";

 
      
   })

}
mobile_view();




function non_download(){

    document.addEventListener('contextmenu', event => event.preventDefault());
}

// Loader JS
window.addEventListener("load",function(){
   function timeout(){
     // body.style.overflow="hidden";
      loader.style.display = "none";
   }
  let loader = document.querySelector("#loader");
  let body =document.body;
setTimeout(function() {timeout()}, 1000);
 })
 // Type JS    
var typed = new Typed('#element', {
 strings: ['Programmer', 'Hacker','OU Student','Martial-Artist' ,'Programmer','Hacker','OU Student','Martial-Artist' ,'Programmer'],
 typeSpeed: 100,
});
  


// Mode

const mode= ()=>{
   
   let moon =document.querySelector("#moon")
   let sun =document.querySelector("#sun")
   let bdy =document.body;
   let foot =document.querySelector("footer")
   let search =document.querySelector("#inp-text")
  let search_i =document.querySelector("#search-i")
   moon.addEventListener("click",function(){
      moon.style.display ="none";
      sun.style.display ="flex";
      bdy.style.background = "black";
      bdy.style.color = "white";
      foot.style.color = "black";
       search.style.background ="transparent";
       search_i.style.background ="transparent";
   })
 
   sun.addEventListener("click", function(){
      moon.style.display ="flex";
      moon.style.color ="black";
      sun.style.display ="none";
      bdy.style.background = "white";
      bdy.style.color = "black";
      foot.style.color = "black";
      search.style.background ="white";
   })
 
}

   mode();


   const srch = ()=>{
      let search =document.querySelector("#inp-text").value;
      let search_i =document.querySelector("#search-i")
      const inputWord = document.getElementById('inp-text').value.trim().toLowerCase();
         search_i.addEventListener('click',function(){
            if(search == "sop"){
            }
            else if( !search.length){
               print("not")
                  
            }
            else{
 alert("asdllj")
            }
         })
      
   }
   srch();