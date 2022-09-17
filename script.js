const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".card > .caption > .buttons > button");
// const links = ["url('https://images.unsplash.com/photo-1567866885012-3c7171d2c5ac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTM2NjQ0Mw&ixlib=rb-1.2.1&q=85') no-repeat","url(https://images.unsplash.com/photo-1644007977391-1cdd0570697b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTU5MDk3Mg&ixlib=rb-1.2.1&q=85) no-repeat","url(https://images.unsplash.com/photo-1643056205382-779bfbe21a8b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTU5MTM4OQ&ixlib=rb-1.2.1&q=85) no-repeat"]
// cards[0].style.backgroundSize = "cover";
let i = 0;
const updateSlide = (n)=>{
  i = i + n;//i =0 here
  if(i == cards.length){
    i = 0;
  }
  if(i == -1){
    i = cards.length - 1;
  }
  let cardWidth = cards[0].getBoundingClientRect().width; 
  cards.forEach((card,ind) => {
    card.classList.remove("active");
        // card.style.transform='translateX(' + (-cardWidth * i) + 'px)';
        // card.style.transition="all 0.4s ease-in-out";
      });
  cards[i].classList.add("active");
} 
// cards.forEach((card,index) => {
//   card.style.background = links[index];
//   card.style.backgroundSize = "cover";
// });

buttons.forEach((button,index) =>{
  button.addEventListener("click",() => {
    if(index % 2 == 0){
      // even case
      updateSlide(-1);
    }else{
      // odd case
     updateSlide(1); 
    }
    
  })
});