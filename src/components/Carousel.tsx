import * as React from "react";
import styled from "styled-components";
import Box from "@mui/joy/Box";

interface TextBoxProps {
  videos: string[];
}

const Carousel: React.FC<TextBoxProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <Button onClick={handlePrev} position="left">❮</Button>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <CarouselTrack
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {videos.map((video, index) => (
            <CardWrapper key={index}>
                <Video src={video} controls width={'100%'} />
            </CardWrapper>
          ))}
        </CarouselTrack>
      </Box>
      <Button onClick={handleNext} position="right">❯</Button>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  // width: 80%;
  // max-width: 800px;
  margin: auto;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const CardWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`;

const Video = styled.video`
  border-radius: 5px;
  display: block;
`;

const Button = styled.button<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.position === "left" ? "left: 10px;" : "right: 10px;")}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default Carousel;
