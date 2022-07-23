import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';


const Home = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://swapi.dev/api/people');
            setResults(data?.results);
        })()
    }, [])
    return (
        <div>
            <Posts results={results} />
        </div>
    );
};

export default Home;