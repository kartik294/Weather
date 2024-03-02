import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import WeatherCard from './WeatherCard'; // Assuming WeatherCard is in the same directory
import './index.css'

function SearchBar() {
    const [location, setLocation] = useState('');
    const [searchedLocation, setSearchedLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSearch = () => {
        setSearchedLocation(location);
    }

    return (
        <div className="search-bar-container">
            <div className="header">
                <h2 className="weather">Weather App</h2>
            </div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField
                    label="Location"
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </Box>
            {searchedLocation && <WeatherCard location={searchedLocation} />}
        </div>
    );
}

export default SearchBar;
