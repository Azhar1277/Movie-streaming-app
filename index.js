let header = document.querySelector('header');


window.addEventListener('scroll',() => {
  header.classList.toggle('shadow',window.scrollY > 0);
} );





var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
      delay:5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard:true,
    
   
  });

 //swiper
 var swiper = new Swiper(".coming-container", {

  spaceBetween:20,
  //loop:true,

 freeMode: true,

 //speed:1000,

 // pagination: {
  //  el: ".swiper-pagination",
   // clickable: true,
 // },
  //centeredSlides:true,


  breakpoints: {
    0: {
      slidesPerView:2,
      
    },
    568: {
      slidesPerView: 3,
      
    },
    768: {
      slidesPerView: 4,
    
    },
    968: {
      slidesPerView:5,
      
    },
   
  },
  keyboard:true,
 // mousewheel:true,





  //navigation: {
    //nextEl: ".swiper-button-next",
   // prevEl: ".swiper-button-prev",
 // },

});




//video 
let video = document.getElementById("video1");
let btn = document.getElementById('myBtn1')
function myFunction(){
    if(video.paused){
        video.play();
        

    }
    else{
   
        video.pause();
        
    }
  };

  let list = document.querySelector('.list')
let watch = document.querySelector('.watchlist')

let closeCart1 = document.querySelector('#close-list')

function myFunction2(){
  
  list.onclick = function (){
    watch.classList.add("active");


 };
 closeCart1.onclick = function ()  {
    watch.classList.remove("active");


 };

}







//working js


let menu = document.querySelector('#menu-icon')
let sideBar = document.querySelector('.side')
let closeCart = document.querySelector('#close-cart') 

menu.onclick = function() {
    sideBar.classList.add("active");

}
closeCart.onclick = function() {
    sideBar.classList.remove("active");

};

//search bar
function search(){
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.ox');
  let I = document.getElementsByClassName('movie-tittle');
  for(var i = 0; i<I.length; i++){
    let a=item[i].getElementsByClassName('movie-tittle')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1){
      item[i].style.display="";
    }
    else{
      item[i].style.display="none";
    }
  }

}

 

//mvie1
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready);
}
else{
    ready();
  }


  // making function

  function ready(){
    //remove item

    var removeCartButtons = document.getElementsByClassName('wish-remove');
    console.log(removeCartButtons)
    for(var i =0; i<removeCartButtons.length;i++ ){
      var button =  removeCartButtons[i];
      button.addEventListener("click", removeCartItem)
    }

    //add to watch
    var addWatchList = document.getElementsByClassName('wish')
    for(var i = 0; i < addWatchList.length;i++ ){
      var button = addWatchList[i];
      button.addEventListener("click", addWatchListClicked);
    }  


  }

  function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
   
   }

  


   function addWatchListClicked(event){
    var button = event.target;
    var movieList = button.parentElement;
    var tittle = movieList.getElementsByClassName("movie-tittle")[0].innerText;
    
    
   
    
    var movieImg = movieList.getElementsByClassName("pro-img")[0].src;
    addToWatchList(tittle,movieImg);
    
  
   }
      
   

   function addToWatchList(tittle,movieImg){
    var movieBox = document.createElement('div');
    movieBox.classList.add('wish-box');
    var movieItems = document.getElementsByClassName("wishlist-content")[0];
    var movieItemsNames = movieItems.getElementsByClassName("wish-tittle");
    for(var i =0; i< movieItemsNames.length; i++ ){
     if(movieItemsNames[i].innerText == tittle){
        alert("already added to cart");
        return;
     }
     
    }



    var cartBoxContent = `
                       <img src="${movieImg}" alt="" class="wish-img">
                     <div class="details-box">
                  <div class="wish-tittle">${tittle}</div>
                  </div>
                   <i class='bx bxs-trash-alt wish-remove'></i>
                  
                          
    
                        `;


movieBox.innerHTML = cartBoxContent;
movieItems.append(movieBox);
movieBox.getElementsByClassName("wish-remove")[0].addEventListener('click', removeCartItem);
//cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged);


      
 }
  














