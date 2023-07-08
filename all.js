gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar",{

    scrollTrigger:{
        markers:false,
        start:"top -4%",
        
        trigger:".carousel",
        toggleClass:{ targets:".navbar",className:"navbar-active" },
    }
})



const app = Vue.createApp({
    data(){
      return{
        text:"這是一段文字",
        isLoading:false,
        books:[
          {url:"https://www.usr-c.chass.ncku.edu.tw/_files/ugd/fb5084_e89d2121f9294af48be9e18732f801bb.pdf",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/295647944.svg"},
          {url:"https://heyzine.com/flip-book/d742071706.html",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/335816405.svg"},
          {url:"https://chass.ncku.edu.tw/p/405-1011-248346,c29432.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/604452906.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29969.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/687312243.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29969.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/280143126.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29969.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/315209585.jpg"},
  
          {url:"https://chass.ncku.edu.tw/p/412-1011-29969.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/678766270.jpg"},
  
          {url:"https://issuu.com/ncku.usr/docs/ncku_usr_annualreport_2021.pdf",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/714588472.png"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29969.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/626613929.jpg"},
  
          ],
          items:[
  
   {url:"https://chass.ncku.edu.tw/p/412-1011-29879.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/520447732.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29662.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg"},
   {url:"https://chass.ncku.edu.tw/p/412-1011-29967.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/724022916.svg"},
         
          {url:"https://chass.ncku.edu.tw/p/412-1011-29181.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/410925049.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29358.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/134632792.svg"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29847.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/0510.jpeg"},
  
          {url:"https://chass.ncku.edu.tw/p/412-1011-29316.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/484616892.png"},
          {url:"https://chass.ncku.edu.tw/p/412-1011-29307.php?Lang=zh-tw",image:"https://chass.ncku.edu.tw/var/file/11/1011/img/560660349.png"},
  
          ]  
      }
    },
    mounted(){
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
          this.isLoading = false
      }, 2000)
    }
  })
  
  app.component('loading',VueLoading.Component)
  app.mount('#app')
  
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  let tl = gsap.timeline({});
 

    tl.fromTo(".nav-item",{stagger:{from: "random", 
    amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
    amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2});

 
  AOS.init();


  

