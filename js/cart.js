 let cartWrapper = document.querySelector(".cart-wrapper");


let cartButtons = document.querySelectorAll("[data-cart]");


cartButtons.forEach(function(item){
	item.addEventListener("click", function(){
																				
		let card = this.closest(".card");
		
		let id = card.dataset.id;
		
		let counterElement = card.querySelector("[data-counter]");
		
		let counter = card.querySelector("[data-counter]").innerText;
		
		let itemInCart = cartWrapper.querySelector(`[data-id="${id}"]`);
		
		  if(cartWrapper.querySelector(`[data-id="${id}"]`)){
					
					let counterElement = itemInCart.querySelector("[data-counter]");
					
					counterElement.innerText = parseInt(counterElement.innerText) + parseInt(counter);

					
				
				} else {
						
					let imgSrc =card.querySelector(".product-img").getAttribute("src");
		
		let title = card.querySelector(".item-title").innerText;

		let itemsInBox = card.querySelector("[data-items-in-box]").innerText;
		
		let weight = card.querySelector(".price__weight").innerText;

	 let price = card.querySelector(".price__currency").innerText; 
		
	
		
 
		
		let cartItemHTML = `<div class="cart-item" data-id="${id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${title}</div>
										<div class="cart-item__weight">${itemsInBox} / ${weight}</div>
          <div class="cart-item__details">

										<div class="items items--small counter-wrapper">
										  <div class="items__control"data-action="minus">-</div>
										  <div class="items__current" data-counter>${counter}</div>
										  <div class="items__control" data-action="plus">+</div>
									 </div>

											<div class="price">
												<div class="price__currency">${price}</div>
											</div>

										</div>
								</div>
								</div>
							</div>`;
		
	
		
		 
	   cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
		  
		
	}
		
		toggleCartStatus();
		
	  counterElement.innerText = 1;
	});																		
																				
});


function toggleCartStatus () {
	
	if(cartWrapper.querySelectorAll(".cart-item").length > 0){
		document.querySelector("[data-cart-empty]").classList.add("none");
		
		document.querySelector(".cart-total").classList.remove("none");
		
			document.querySelector("#order-form").classList.remove("none");
					
	} else {
		
    document.querySelector("[data-cart-empty]").classList.remove("none");
	
		  document.querySelector(".cart-total").classList.add("none");
		
		  document.querySelector("#order-form").classList.add("none");
	}
	
	let totalPrice = 0;
	
	cartWrapper.querySelectorAll(".cart-item").forEach(function(item){
		
		let counter = item.querySelector("[data-counter]").innerText;
		let priceOneItem = item.querySelector(".price__currency").innerText;
		
		let price = parseInt(counter) * parseInt(priceOneItem);
		totalPrice = totalPrice + price;
	  
	})

	document.querySelector(".total-price").innerText = totalPrice;
  
 let deliveryCost = document.querySelector(".delivery-cost").innerText;

  if(totalPrice > 999){
			
			document.querySelector(".delivery-cost").innerText = "Бесплатно";
		}else {
			document.querySelector(".delivery-cost").innerText = "300 тенге";
		}
}

