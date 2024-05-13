import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/getCountries';
import Header from './Header';
import { useRouter } from 'next/router';

const CountriesList = () => {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = data.countries;


    const handleClick = (countryId) => {
        router.push(`/countryList/${countryId}`);
    };

    return (
        <div>
            <h2>Country List</h2>
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>
                        <button onClick={() => handleClick(country.id)}>
                            {country.name} {country.emoji}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;


