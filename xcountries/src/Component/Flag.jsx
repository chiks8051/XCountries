import React, { useEffect, useState } from 'react';
import Card from './Cardholder';
import axios from 'axios';
import './Flag.css'

const Flag =  () =>{
    const [flags, setFlags] = useState([]);
    const endpoint = 'https://restcountries.com/v3.1/all';


    useEffect(() =>{
        const fetchFlag = async () =>{
            try {
                const response = await axios.get(endpoint);
                setFlags(response.data);
            } catch (error) {
                console.log("Error: ",error)
            }
        };
    
        fetchFlag();
    },[]);
    
    


    return(
        <div className='card-container'>
            {flags.map((country) => (
                <Card key={country.ccn3} country={country}/>
            ))}
        </div>
    );
}

export default Flag;