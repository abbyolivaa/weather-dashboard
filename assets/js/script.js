var searchBtn = $(".search-container button")
var h2 = $(".current-container h2")

// city input value
var date = moment().format("M/D/YYYY")

var apiKey =  "&appid=a27be585bc997b59e02877d017f61c9d";

//key count for local storage

searchBtn.click(function () {
    let searchInput = $(".search-bar").val();
    // Variable for current weather working 
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + apiKey + "&units=imperial";
    // Variable for 5 day forecast working
    let urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + apiKey + "&units=imperial";

    if(searchInput===""){
        console.log(searchInput);
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function(response){
            // list-group append an li to it with just set text
            console.log(response.name);
            let cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.name + "</li>");
            // Local storage
            let local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount++;
        })
    
    }   

})
