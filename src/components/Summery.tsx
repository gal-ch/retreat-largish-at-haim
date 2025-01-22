import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const Summery: React.FC = () => {

  return (
    <Container>
      <Title>אז מה צריך לדעת?</Title>
      <Text>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto', // Allow height to adjust dynamically
            flex: 1,
            textAlign: 'right',
            direction: 'rtl',
            padding: { xs: 2, md: 6 }, // Responsive padding
          }}
        >
          <Typography variant="h6" component="div" margin={0} fontFamily={ "Amatic SC"}>
            <SmallTitle>מה להביא?</SmallTitle>
            <p>בגדים נוחים לתרגול יוגה ולסדנאות, בקבוק מים אישי, פיג'מה, בגדים לבנים לקבלת שבת, שמיכה/ שאל, כרית, מגבת, שמיכה ומצעים לשינה.</p>
            <SmallTitle>ארוחות</SmallTitle>
            <p>הריטריט כולל בתוכו ארוחות מזינות ועשירות מלאות פינוקים בטוב טעם. שתייה חמה וקלה ונשנושים לאורך כל הריטריט.</p>
            <SmallTitle>אפשרויות לינה</SmallTitle>
            <p>הלינה היא משותפת בחלל הגלמפינג על מזרנים שמסופקים על ידי המקום.</p>
            <SmallTitle> עלויות:</SmallTitle>
            <p>הרשמה מוקדמת עד 29.1: 1475 ש״ח</p>
            <p> מכירת אמצע עד 5.2: 1650 ש״ח</p>
            <p> מכירת נזכרתי מאוחר מזל שלא מידי: 1850 ש״ח</p>


          </Typography>
          {/* <LoadScript googleMapsApiKey="">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript> */}
        </Box>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  margin: 32px;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 32px;
    gap: 16px;
  }
`;

const Title = styled.div`
  z-index: 3;
  font-family: "Assistant", serif !important;
  // font-family: "Meddon", serif !important;
  font-size: 3rem;
  color: #484c52;
  margin-bottom: -30px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: -37px;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-style: normal;
  max-width: 700px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  font-size: 1rem;
  color: #4f595a;
  box-sizing: border-box;
   line-height: 1.5;
  font-family: "Amatic SC", serif !important;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
    padding: 12px;
  }
`;

const SmallTitle = styled.div`
  font-family: "Amatic SC", serif !important;
  font-weight: 600;
  font-size: 24px;
  color: #484c52;
  text-align: right;
  line-height: 0.6;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2;
  }
`

export default Summery;
