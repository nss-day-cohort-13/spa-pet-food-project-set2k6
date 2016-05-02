var DogFood = (function (originalDogFood) {
  var privateDogFood;
  // console.log(this.responseText);

    originalDogFood.loadDogFood = function (){
      var loadDog = new XMLHttpRequest();

      loadDog.addEventListener("load", function () {
        privateDogFood = JSON.parse(this.responseText).dog_brands;
        console.log("privateDogFood", privateDogFood);

        DogFood.setDogFood(privateDogFood);

      });

      loadDog.open("GET", "dog.json");
      loadDog.send();
    }

    return originalDogFood;


})(DogFood || {});


DogFood.loadDogFood();


