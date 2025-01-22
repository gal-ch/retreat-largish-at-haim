import React from 'react';
import styled from 'styled-components';
import TextInfo from './TextInfo';
import { useInView } from 'react-intersection-observer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael13.png',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael2.avif',
        title: 'Burger',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael3.avif',
        title: 'Camera',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael11.png',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael5.png',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael6.png',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael7.png',
        title: 'Basketball',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael8.png',
        title: 'Fern',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael9.png',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael1.avif',
        title: 'Tomato basil',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael12.png',
        title: 'Sea star',
    },
    {
        img: 'https://prod-green-market.s3.amazonaws.com/dani/ohelyael4.avif',
        title: 'Bike',
        cols: 2,
    },
];


interface ThePlaceProps {
    title: string;
    text: string;
    extraTitle?: string;
    images: string[];
    leftOrder: boolean;
    backgroundColor: string;
    seconderyText?: string;
    extraElement?: React.ReactNode;
    className: string;
    points?: string[];
    id?: string;
}

const ThePlace: React.FC<ThePlaceProps> = ({
    title,
    text,
    seconderyText,
    extraTitle,
    images,
    leftOrder,
    backgroundColor,
    extraElement,
    points,
    id,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: image,
            // srcSet: `${image}?w=${size * cols}&h=${size * rows
            //     }&fit=crop&auto=format&dpr=2 2x`,
        };
    }



    return (
        <MainContainer
            id={id}
            ref={ref}
            backgroundColor={backgroundColor}
            isVisible={inView}
        >
            <SectionContent>
                <TextInfo
                    extraTitle={extraTitle}
                    title={title}
                    text={text}
                    seconderyText={seconderyText || ''}
                    points={points || []}
                />
                <ImageList
                    sx={{ width: 500, height: 550 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </SectionContent>
        </MainContainer>
    );
};

// Styled Components
const MainContainer = styled.div<{ backgroundColor: string; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
        props.isVisible
            ? 'translateY(0) scale(1) rotate(0deg)' /* Visible state */
            : 'translateY(100px) scale(0.9) rotate(-5deg)'}; 
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  gap: 8px;
  @media (max-width: 768px) {
    padding-top: 46px;
      height: auto;

  }
`;

const SectionContent = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Images = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 8px;
  .large-image {
    width: 50vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
  }

  .small-image {
    width:30vw;;
    height: 400px;
    position: absolute;
    bottom: 0px;
    right: -50px;
    z-index: 2;
  }
`;

export default ThePlace;
