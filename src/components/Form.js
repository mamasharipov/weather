import { useState } from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('');
    return (
        <div className="form">
            <div>       <input onChange={(event)=>{
                setCity(event.target.value);
            }} type={"text"} />
            <button onClick={()=>{
                getWeather(city);
            }}>get</button></div>
     
        </div>
    );
}

export default Form;
