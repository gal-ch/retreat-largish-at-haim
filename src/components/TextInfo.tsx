import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Example icon

// Props interface
interface TextBoxProps {
  title: string;
  text: string;
  extraTitle?: string
  seconderyText: string
  points: string[]
}

const TextInfo: React.FC<TextBoxProps> = ({ title, text, extraTitle, seconderyText = '', points = [] }) => {
  console.log(extraTitle);

  return (
    <Container>
      <Titles>
        {extraTitle &&
          <ExtraTitle>{extraTitle}</ExtraTitle>
        }
        <Title>{title}</Title>
      </Titles>
      <Text>

        <p>{text}</p>
        <p>{seconderyText}</p>
        {points.length > 0 && (
          <PointsList>
            {points.map((point, index) => (
              <Point key={index}>
                <IconWrapper>
                  <CheckCircleIcon fontSize="small" />
                </IconWrapper>
                <p>{point}</p>
              </Point>
            ))}
          </PointsList>
        )}
      </Text>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  @media (max-width: 768px) {
    max-width: 85%;
    display: flex;
    align-items: center;
    gap: 16px;
}
`;

const Titles = styled.div`
  font-size: 54px;

  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ExtraTitle = styled.div`
  font-size: 56px;
  font-family: "Noto Serif", serif;
  width: 600px;
  margin-left: -115px;
  margin-bottom: -32px;
  color: #686868;

`

const Title = styled.div`
font-family: "Assistant", serif;
  // font-family: "Meddon", serif !important;
  text-align: right;
  font-size: 54px;
  color: #484c52;
  margin-bottom: -32px;
  transition: font-size 0.3s ease; 
  @media (max-width: 768px) {
    line-height: 70px;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-style: normal;
  text-align: center;
  width: fit-content;
  max-width: 700px;
  direction: rtl;
  line-height: 1.5;
  border-radius: 4px;
  padding: 16px;
  font-size: 22px;
  color: #4f595a;
  font-family: Amatic SC;
  @media (max-width: 768px) {
    max-width: 95%;
    font-size: 18px;

  }
`;

const PointsList = styled.ul`
  margin-top: 16px;
  padding-left: 20px;
  list-style: none;
`;

const Point = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  color: #364233;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  margin-right: 8px;
  color: #4f595a;
  display: flex;
  align-items: center;
`;

export default TextInfo;

