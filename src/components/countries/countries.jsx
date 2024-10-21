import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'


const countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>countries: {countries.length}</h3>
            <div className="countries">
            {
                countries.map(country => <Country max={country}></Country>)
            }
            </div>
        </div>
    );
};

export default countries;