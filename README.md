# Weather API Dashboard

## Description
```
I was given the task to to make a website that you can search for a city and it will give you the weather forecast for that day, and also the next 5 day forecast of that city. In order to get the city name that you search for to pull up you had to make a fetch request to the api requesting for the latitude and longitude coordinates. I got a little stuck trying to figure out how I am going to display the results of my fetch request, to rewrite the html in my javascript and have the data and cities to display like that. So once I created the function to grab the city cooridantes by the value of the input and also created the function to fetch and parse through all the weather details I need to display on my page then I created my function replace the default stuff I have on my page and replace it with all the data in the same format I have in the html.

[github repo link](https://github.com/NickHudson119/Weather-API-Dashboard) 
```
## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Screenshots
![screenshot 1](./assets/image/Screenshot%202023-10-30%20134439.png)
![screenshot 2](./assets/image/Screenshot%202023-10-30%20134455.png)
![screenshot 3](./assets/image/Screenshot%202023-10-30%20134503.png)