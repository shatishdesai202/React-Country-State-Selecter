import React, {useState, useEffect} from 'react';

// importing COUNTRY AND STATE
import country from './DATA/country.json';
import stateX from './DATA/city.json';

import _ from 'underscore';


function App() {

    console.log(_.size(stateX));

    const [countryX, setCountryX] = useState("");
    // const [P, setP] = useState([]);


    const selectedCountry = (e) =>{

        setCountryX(e.target.value);
        
        // console.log(stateX[countryX]);
        // console.log(P)
        
    };
    
    useEffect( ()=>{
        // setCountryX(country[0].code);
        console.log(countryX);
        console.log(stateX[countryX]);
        // setP(stateX[countryX]);
        // console.log(stateX[countryX].length);
    
    },[countryX]);


    return (

        <div>

            <select onChange={selectedCountry}>
                {
                    country.map( (item) =>(
                    
                        <option key={item.code} value={item.code} >{item.name}</option>
                    ))
                }
            </select>

            <select>
                { !countryX &&  <option>*--NONE--*</option>}
                
                {   
                    countryX && stateX[countryX].map( (item) =>(
                                        
                        <option >{item}</option>
                    
                    ))                    
                }


            </select>


            
        </div>
    
    )
}

export default App
