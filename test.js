var DogFood = (function (originalDogFood) {


originalDogFood.setDogFood = function (privateDogFood) {
	var dogList = document.getElementById("dog_food_list");
	var catList = document.getElementById("cat_food_list");
        var output= "";
        console.log("anything", privateDogFood);

        if (privateDogFood.dog_brands){
        	var KindOfFood = privateDogFood.dog_brands;
        }
        else if (privateDogFood){
        	var KindOfFood = privateDogFood.cat_brands;
        }

        for (var i = 0; i < privateDogFood.length; i++) {
         console.log("privateDogFood", privateDogFood);
         var currentDogFood = privateDogFood[i];
         console.log(currentDogFood.length);
         		output += `<div class='Output'>`;
         output += `<h1>${currentDogFood.name}</h1>`;


						if (KindOfFood === privateDogFood.cat_brands) {
						output += `<h3>breeds:</h3><h4>`
							for (var c = 0; c < currentDogFood.breeds; c++) {
							output += `${currentDogFood.breeds[c] + ", "}`;
			}

							output += `</h4>`;
						};


         	for (var j = 0; j < currentDogFood.types.length; j++) {
         	var currentDogFoodType = currentDogFood.types[j];
         	console.log("current_dog_food_type",currentDogFoodType);
         	output += `<p>${currentDogFood.types[j].type}</p>`;


         		for (var k = 0; k < currentDogFoodType.volumes.length; k++) {
         			var currentDogFoodTypeVol = currentDogFoodType.volumes[k];
         			console.log("current_dog_food_vol", currentDogFoodTypeVol);
         			output += `<p>${currentDogFoodTypeVol.name} : $${currentDogFoodTypeVol.price}</p>`;
         		}

         	}
        }



        dogList.innerHTML = output;
        catList.innerHTML = output;

      }

        return originalDogFood;


})(DogFood || {}) ;



