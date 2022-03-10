import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const url ='https://restcountries.com/v2/all?fields=name,region,area'

const Countries = () => {
    const [countries, setCountries ] =useState([])

        const fetchCountryData =async() => {
            const response =await fetch(url)
            const countries =await response.json()
            setCountries(countries)
            console.log(countries)
        }
        useEffect(() => {
        fetchCountryData()
    }, [])

    return (
        <>
            <section className='grid'>
            {countries.map((country) => {
           const {name , region, area, independent} = country
                return <article key={name}>
                    <div className='details'>
                        <h3 className='country-name'>{name}</h3>
                        <h4>
                            Region: <span>{region}</span>
                        </h4>
                        <h4>
                            Area: <span>{area}</span>
                        </h4>
                        <h4>
                            Independent:<span>{independent}</span>
                        </h4>
                    </div>
           </article>
            })}
            </section>
        </>
    )
}

export default Countries;