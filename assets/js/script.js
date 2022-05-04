var searchBtn = $(".search-btn")
var clearBtn = $(".clear-btn")
var futureBox = $('.future-container')

var h2 = $(".current-container h2")
var currentCity= $('#current-city');
var currentTemp = $('#current-temp');
var currentWind = $("#current-wind")
var currentHumidity=$('#current-humid')

// city input value
var date = moment().format("M/D/YYYY")

var apiKey =  "&appid=a27be585bc997b59e02877d017f61c9d";

clearBtn.click(function () {
    futureBox.addClass('hide');
})

searchBtn.click(function () {
    futureBox.removeClass('hide');
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
            currentCity.text(response.name);
            currentHumidity.text(response.main.humidity+'%');
            currentTemp.text(response.main.temp + ' F');
            currentWind.text(response.wind.speed +" mph");
            let cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.name + "</li>");
            // Local storage
            localStorage.setItem(response.name, 'city');
        })

        $.ajax({
            url: urlFiveDay,
            method:"GET"
        }).then(function(response){
            for(var i =0; i< response.list.length; i++){
                var date = response.list[i].dt_txt;
                if(date.endsWith('12:00:00')) {
                    console.log(response.list[i])
                    console.log(date)
                    var weather = `
                    <div class="future">
                        <div class="day-1-date">
                            <h4>${moment(date).format("M/D/YYYY")}</h4>
                            <div class="icon">${response.list[i].weather.icon}</div>
                            <div class="future-conditions">temperature: ${response.list[i].main.temp} F </div>
                            <div class="future-conditions">wind:${response.list[i].wind.speed} mph</div>
                            <div class="future-conditions">humidity: ${response.list[i].main.humidity}%</div>
                        </div>
                    </div>`
                    $('.future-box').append(weather)
                    clearBtn.click(function () {
                        weather = ``;
                    })
                }
            }
        })
    
    }   

})




