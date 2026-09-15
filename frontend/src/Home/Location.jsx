import { useEffect } from "react";

export function Location() {
  useEffect(() => {
    const location=()=>{
        const loc=navigator.geolocation.getCurrentPosition(async (position)=>{
           const latitude=position.coords.latitude;
             const longitude=position.coords.longitude;

        
const response = await fetch("https://foodrush-backend-l966.onrender.com/restaurants/nearby", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ latitude, longitude })
}
        )
            const result=await  response.json()
            result.results.map((res)=>{
console.log(res.name)
            });
});


    }

location();

  },[]);
}