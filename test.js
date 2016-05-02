var DogFood = (function (originalDogFood) {


originalDogFood.setDogFood = function (privateDogFood) {
	var dogList = document.getElementById("dog_food_list");
        var output= "";
        console.log("anything", privateDogFood);

        for (var i = 0; i < privateDogFood.length; i++) {
         console.log("privateDogFood", privateDogFood);
         var currentDogFood = privateDogFood[i]
         console.log(currentDogFood.length);


         output += `<h1>${currentDogFood.name}</h1>`;
         output += `<p>${currentDogFood.type}</p>`;
         output += `<p>${currentDogFood.types}</p>`;
         output += `<p>${currentDogFood.volumes}</p>`;
         output += `<p>${currentDogFood.price}</p>`;
        }


        dogList.innerHTML = output;
      }

        return originalDogFood;


})(DogFood || {}) ;