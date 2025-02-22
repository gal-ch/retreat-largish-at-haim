import React from 'react';
import styled from 'styled-components';
import TextInfo from './TextInfo';
import { useInView } from 'react-intersection-observer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: 'ohelyael13.png',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'ohelyael2.avif',
        title: 'Burger',
    },
    {
        img: 'ohelyael3.avif',
        title: 'Camera',
    },
    {
        img: 'ohelyael11.png',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'ohelyael5.png',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'ohelyael6.png',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'ohelyael7.png',
        title: 'Basketball',
    },
    {
        img: 'ohelyael8.png',
        title: 'Fern',
    },
    {
        img: 'ohelyael9.png',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'ohelyael1.avif',
        title: 'Tomato basil',
    },
    {
        img: 'ohelyael12.png',
        title: 'Sea star',
    },
    {
        img: 'ohelyael4.avif',
        title: 'Bike',
        cols: 2,
    },
];


interface ThePlaceProps {
    title: string;
    text: string;
    extraTitle?: string;
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
    backgroundColor,
    points,
    id,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    function srcset(image: string, _size: number, _rows = 1, _cols = 1) {
        return {
            src: require(`../assets/images/${image}`),
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

export default ThePlace;
