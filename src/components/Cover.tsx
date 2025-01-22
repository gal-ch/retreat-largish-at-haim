import { Box, Button } from "@mui/material";
import styled from "styled-components";
interface CoverProps {
    language: 'En' | 'He';
    toggleLanguage: () => void;
}

const Cover: React.FC<CoverProps> = ({ language, toggleLanguage }) => {
    return (
        <>
            <Box
                sx={{
                    position: "relative", 
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden",
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1, 
                    }}
                >
                    <source src={"./assets/videos/main.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <TextContainer>
                    <Title>ריטריט להרגיש את החיים</Title>
                    <Title style={{ fontSize: '64px' }}>אוהל יעל</Title>

                    <Title style={{ fontWeight: '800',   fontFamily: "Secular One, serif"}}>27/2-1/3</Title>
                    <Button
                        variant="outlined"
                        target="_blank"
                        href="https://wa.me/+972542029014?text=היי דניאל, אשמח לפרטים לגבי הריטריט הקרוב :)"
                        sx={{

                            border: "1px solid white",
                            color: "white",
                            backgroundColor: "transparent", 
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            },
                            borderRadius: "8px",
                            padding: "16px 42px", 
                            fontSize: '22px'
                        }}
                    >
                        להזמנת מקום לחצו כאן
                    </Button>
                </TextContainer>
            </Box>
        </>
    );
};

const TextContainer = styled.div`
  border: 1px solid #ccc;
  width: 95%;
  height: 85%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 100px;
  margin: 16px 0 32px 0;
    font-weight: 700;
  font-style: normal;
   font-family: "Amatic SC", serif;
  color: white;
  @media (max-width: 768px) {
    font-size: 50px;
    font-weight: 600;
  }
`;


export default Cover;
