var searchBtn = document.querySelector(".search-container button")
var h2 = document.querySelector(".current-container h2")
var cityInput = document.querySelector("input[name='city-name']").value;
console.log(cityInput)

// city input value
var date = moment().format("M/D/YYYY")

var apiKey =  "&appid=a27be585bc997b59e02877d017f61c9d";

//search button click
searchBtn.addEventListener("click", function(){
    h2.textContent = cityInput + date
})


var cityInputHandler = function(event){
    event.preventDefault();
    
    //check if input is valid
    if(!cityInput){
        alert("You need to search for a city!");
        return false;
    }

    //reset input form
    document.querySelector("input[name='city-name']").value = "";
    


}








    