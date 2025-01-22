import { AppBar, Button, Toolbar, IconButton } from "@mui/material"
import { useState } from "react"
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact: React.FC = () => {
    return (
        <Container>
            <Text>
                <h3>אני רוצה להירשם</h3>
                <IconButton
                    sx={{
                        borderRadius: 20,
                        marginRight: 2,
                    }}
                    href="https://www.instagram.com/yourusername/"
                    target="_blank"
                >
                    <InstagramIcon sx={{ fontSize: 40, color: '#4f595a' }} />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 20,
                    }}
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                >
                    <WhatsAppIcon sx={{ fontSize: 40, color: '#4f595a' }} />
                </IconButton>
            </Text>
            <ImageContainer>
                <img
                    src={`https://prod-green-market.s3.amazonaws.com/dani/retreat4.png`}
                    style={{ width: '100%', height: '300px', borderRadius: '8px', position: 'relative', objectFit: 'cover' }}
                />
            </ImageContainer>
        </Container>
    );
};

// Styled-components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(162, 191, 199, 0.4);
  padding: 32px;
  position: relative; 
`;




const Text = styled.div`
  max-width: 500px;
  border: 0.5px solid black;
  border-radius: 4px;
  padding: 20px 120px;
  font-family: "Noto Serif", serif;
  font-size: 24px;
  position: absolute; 
  z-index: 10; 
  left: 33%;
  color: #4f595a;
    @media (max-width: 768px) {
      left: 10%;
  max-width: 400px;

  }

`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateX(-50%);
  left: 20%;
`;

export default Contact;