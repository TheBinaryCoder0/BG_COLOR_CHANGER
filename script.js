const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click',function(e){ // YAHA e EK OBJECT HAI BAS (LIKE A VARIABLE)
    console.log(e);
    console.log(e.target); // ISSE PATA CHAL JAYEGA KI EVENT AA KAHA SE RAHA HAI
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }    
  })
} )
