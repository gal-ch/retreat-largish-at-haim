import React from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
    name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
    return (
        <Typography
            variant="h3"
            align="center"
            sx={{
                fontWeight: 'bold',
                marginBottom: '40px',
            }}
        >
            {name}
        </Typography>
    );
};


export default Title;