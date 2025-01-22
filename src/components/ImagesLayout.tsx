import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styled from 'styled-components';

interface ImageLayoutProps {
    images: { name: string; xs: number }[];
}

const ImageLayout: React.FC<ImageLayoutProps> = ({ images }) => {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%', margin: 'auto' }}>
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 6, md: image.xs }}>
                        <StyledImage
                            src={require(`../assets/images/${image.name}`)}
                            alt={`Image ${index + 1}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const StyledImage = styled.img`
  width: 100%;
  height: 250px; 
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export default ImageLayout;
