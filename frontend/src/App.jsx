import {HomePage} from "./Pages/HomePage.jsx"
import {useEffect} from "react"
import './App.css'
function App() {
    useEffect(() => {
       navigator.geolocation.getCurrentPosition(
            (position) => {

             const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log("latitude:", latitude);
                console.log("longitude:", longitude);

            },
            (error) => {
                console.log("location permission denied");
            }
        );

    }, []);

return(
  <>
  
<HomePage/>

  </>
)

}

export default App
