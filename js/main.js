let body = document.querySelector("body");

body.addEventListener("click", function (event){
	
	  if(event.target.hasAttribute("data-action")){
			   let counterWrapper = event.target.closest(".counter-wrapper");
						 let counter = counterWrapper.querySelector("[data-counter]");
		   
		   if(event.target.dataset.action === "plus"){
						
						
						 counter.innerText = ++counter.innerText;
					}else {
							
						
						 if(parseInt(counter.innerText) > 1){
		 
				   counter.innerText = --counter.innerText;
	
		   } else if(parseInt(counter.innerText) === 1 && counter.closest(".cart-wrapper")){
														
														counter.closest(".cart-item").remove();
						       
							}
					}
				     toggleCartStatus();
			}
});

/*let buttons = document.querySelectorAll("[data-action]");

buttons.forEach(function(item){
	
	item.addEventListener("click", function(){
		  
		
		
	});
});*/








/* let buttonsPlus = document.querySelectorAll('[data-action="plus"]');

buttonsPlus.forEach(function(item){
item.addEventListener("click", function(){
	
	let counterWrapper = this.closest(".counter-wrapper");
	  let counter = counterWrapper.querySelector("[data-counter]");
	console.log(counter);
	
  counter.innerText = ++counter.innerText;
});
	
});



 let buttonsMinus = document.querySelectorAll('[data-action="minus"]');

   buttonsMinus.forEach(function(item){
   item.addEventListener("click", function(){
   let counterWrapper = this.closest(".counter-wrapper");
	  let counter = counterWrapper.querySelector("[data-counter]");
	
	   if(parseInt(counter.innerText) > 1){
		 
				counter.innerText = --counter.innerText;
	
		   }
			});
	});*/
