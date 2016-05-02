var dogFood = (function () {
  var privateDogFood = [];
  console.log(this.responseText);

  return{
    loadDogFood: function (){
      var loadDog = new XMLHttpRequest();

      loadDog.addEventListener("load", function () {
        privateDogFood = JSON.parse(this.responseText).dog;
        console.log("privateDogFood", privateDogFood);

        var dogList = document.getElementById("dog_food_list");
        var output= "";
        console.log(output);

        for (var i = 0; i < privateDogFood.length; i++) {
         var currentDogFood = privateDogFood[i]

         output += `<h1>${currentDogFood.name}</h1>`;
         output += `<p>${currentDogFood.types}</p>`;
         output += `<p>${currentDogFood.volumes}</p>`;
        }

        dogList.innerHTML = output;
      });

      loadDog.open("GET", "dog.json");
      loadDog.send();
    }
  }
})();

dogFood.loadDogFood();