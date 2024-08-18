import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});


const Dates = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ? (
            <Box>
                <Row>
                    <CalendarMonthIcon /> Date: {new Date().toLocaleDateString()}
                </Row>
            </Box>
        ) : null // Add appropriate fallback if needed
    );
};

export default Dates;