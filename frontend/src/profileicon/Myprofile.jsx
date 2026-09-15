import { useEffect, useState } from "react"
import "../components_css/Myprofile.css"
export function Myprofile(){

    const [state,newstate] = useState({});
    const [edit,setEdit] = useState(false);

    const userid = localStorage.getItem("userid");

    useEffect(() => {

   async function getprofile() {

    const response = await fetch(`https://foodrush-backend-l966.onrender.com/myprofile/${userid}`);

    const result = await response.json();

    newstate(result);
}

        getprofile();

    }, []);

    function handleChange(e){

        newstate({
            ...state,
            [e.target.name]: e.target.value
        });

    }

    return(
    
        <div id="profile-bg">
            <h1 id="profile-title">My Profile</h1>

            <div id="profile-icon">

                <img
                    id="profile-img"
                    src="./profile.gif"
                    alt="profile-icon"
                />

            </div>

            <div>

                <h3 id="profile-name">{state.name}</h3>

                <h3 id="profile-email">{state.email}</h3>

            </div>


            <div>

                <h1 className="profile-info" >Personal Information</h1>


                <h3 className="profile-heading"   >Full Name</h3>

                {edit ? (

                    <input className="profile-value"
                        type="text"
                        name="name"
                        value={state.name || ""}
                        onChange={handleChange}
                    />

                ) : (

                    <h5>{state.name}</h5>

                )}


                <h3 className="profile-heading">Email</h3>

                {edit ? (

                    <input className="profile-value"
                        type="email"
                        name="email"
                        value={state.email || ""}
                        onChange={handleChange}
                    />

                ) : (

                    <h5>{state.email}</h5>

                )}


                <h3 className="profile-heading">Phone Number</h3>

                {edit ? (

                    <input className="profile-value"
                        type="text"
                        name="phone"
                        value={state.phone || ""}
                        onChange={handleChange}
                    />

                ) : (

                    <>
                     
                        <h5>{state.phone}</h5>
                    </>

                )}


                {edit ? (

                    <button className="btn"  onClick={() => setEdit(false)}>
                        Save
                    </button>

                ) : (

                    <button className="btn" onClick={() => setEdit(true)}>
                        Edit Profile
                    </button>

                )}

            </div>


            <div>

                <h1 className="profile-heading">Delivery Address</h1>

                {edit ? (

                    <input className="profile-value"
                        type="text"
                        name="address"
                        value={state.address || ""}
                        onChange={handleChange}/>

                ) : (

                    <h5>{state.address}</h5>

                )}
                

                {edit ? (

                    <button className="btn"  onClick={() => setEdit(false)}>
                        Save
                    </button>

                ) : (

                    <button className="btn" onClick={() => setEdit(true)}>
                        Edit Profile
                    </button>

                )}

            </div>
</div>
        
    )
}

