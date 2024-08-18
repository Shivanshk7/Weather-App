import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { getWeather } from '../API/api';
import CreatableSelect from "react-select/creatable";

const Container = styled(Box)({
    background: '#00bfff',
    padding: 20,
    borderRadius: '0 20px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const GetButton = styled(Button)({
    background: '#0000ff',
    marginLeft: 10,
});

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: 200, // Fixed width for the dropdown
    }),
    control: (provided) => ({
        ...provided,
        minWidth: 200, // Ensure the control has the same width
    }),
};

const options = [
    { value: "Shimla", label: "Shimla" },
    { value: "Delhi", label: "Delhi" },
    { value: "New Delhi", label: "New Delhi" },
    { value: "Ghaziabad", label: "Ghaziabad" },
    { value: "Agra", label: "Agra" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Pune", label: "Pune" },
    { value: "Patna", label: "Patna" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Meerut", label: "Meerut" },
    { value: "Mysore", label: "Mysore" },
    { value: "Mirzapur", label: "Mirzapur" },
    { value: "Dehradun", label: "Dehradun" },
    { value: "Dharamshala", label: "Dharamshala" }
];

const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: '' });

    const handleChange = (selectedOption) => {
        setData({ city: selectedOption ? selectedOption.value : '' });
    };

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city);
        setResult(response);
    };

    return (
        <Container>
            <CreatableSelect
                styles={customStyles}
                options={options}
                onChange={handleChange}
                placeholder="Select or Enter City"
            />
            <GetButton
                variant="contained"
                onClick={getWeatherInfo}
            >
                Get Weather
            </GetButton>
        </Container>
    );
};

export default Form;
