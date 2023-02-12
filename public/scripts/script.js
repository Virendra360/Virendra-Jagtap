// Js code

function navToGitHub(event)
{
    
     switch(event.target.name) {
        case "roadtojscode":
              location.href ="https://github.com/Virendra360/RoadToJsDev.git";
          break;
        case "liveweathercode":
            location.href ="https://github.com/Virendra360/WeatherApp.git";
          break;
        default:
                 alert("Something went wrong!!")
      }

}

function openProject(event)
{
    
    switch(event.target.name) {
        case "roadtojsdemo":
              location.href ="https://road-to-js-dev-virendra360.vercel.app/";
          break;
        case "liveweatherdemo":
            location.href ="https://weather-app-versel-virendra360.vercel.app/";
          break;
        default:
                 alert("Something went wrong!!")
      }

}

// navigate to home from error page
function navToHome()
{
  location.href ="/";
}