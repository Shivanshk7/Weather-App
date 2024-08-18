import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import loader from '../images/sun-cloudy.gif';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    fontSize: 20,
    padding: 30.3,
    textAlign: 'center'
});

const Container = styled(Box)({
    background: '#6495ed',
    padding: 78,
    borderRadius: '0 0 20px 0',
    textAlign: 'center'
});

const Information = ({ result }) => {
    const { name, sys, main, weather, clouds } = result || {};

    if (!result || Object.keys(result).length === 0) {
        return (
            <Container>
                <img src={loader} alt="Loading..." style={{ width: "76.3%", WebkitUserDrag: "none" }} />
                <Typography>
                    <h1>Please enter the values to check weather</h1>
                </Typography>
            </Container>
        );
    }

    if (!name || !sys || !main || !weather || !clouds) {
        return (
            <Container>
                <Error>
                    <Typography>
                        <h2>Weather information not available. Please check the city name and try again.</h2>
                    </Typography>
                </Error>
            </Container>
        );
    }

    return (
        <Container>
            <Box>
                <Row><CalendarMonthIcon />Date: {new Date().toLocaleDateString()}</Row>
                <Row><LocationOn />Location: {name}, {sys.country}</Row>
                <Row><ThermostatIcon />Temperature: {main.temp}</Row>
                <Row><Opacity />Humidity: {main.humidity}</Row>
                <Row><Brightness5 />Sun Rise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</Row>
                <Row><Brightness6 />Sun Set: {new Date(sys.sunset * 1000).toLocaleTimeString()}</Row>
                <Row><Dehaze />Weather: {weather[0].main}</Row>
                <Row><Cloud />Clouds: {clouds.all}%</Row>
            </Box>
        </Container>
    );
};

export default Information;
