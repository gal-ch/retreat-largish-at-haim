import React, { useState } from 'react';
import { Box } from '@mui/material';
import ImageLayout from './ImagesLayout';
import styled from 'styled-components';
import TextInfo from './TextInfo';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
    title: string;
    text: string;
    extraTitle?: string;
    images?: { name: string; xs: number }[];
    leftOrder: boolean;
    backgroundColor: string;
    seconderyText?: string;
    extraElement?: React.ReactNode;
    className: string;
    points?: string[];
    id?: string
}

const Section: React.FC<SectionProps> = ({
    title, text, seconderyText, extraTitle, images, leftOrder, backgroundColor, extraElement, points, id
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Play animation only once
      threshold: 0.3, // Trigger when 10% of the component is in view
    });
  
    return (
      <MainContainer
        id={id}
        ref={ref}
        backgroundColor={backgroundColor}
        isVisible={inView}
      >
        <SectionContent leftOrder={leftOrder}>
          <TextInfo
            title={title}
            text={text}
            extraTitle={extraTitle}
            seconderyText={seconderyText || ''}
            points={points || []}
          />
          {images?.length ? <ImageLayout images={images} /> : null}
        </SectionContent>
        {extraElement}
      </MainContainer>
    );
  };
  const MainContainer = styled.div<{ backgroundColor: string; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0px;
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.isVisible ? 1 : 0)}; /* Fade-in effect */
  transform: ${(props) =>
    props.isVisible
      ? 'translateY(0) scale(1) rotate(0deg)' /* Visible state */
      : 'translateY(100px) scale(0.9) rotate(-5deg)'}; /* Hidden state */
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1); /* Dramatic easing curve */
  gap: 8px;
  @media (max-width: 768px) {
    padding-top: 46px;


    }

`;
  
  const SectionContent = styled.div<{ leftOrder: boolean }>`
    display: flex;
    margin: 16px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.leftOrder ? 'row' : 'row-reverse')};
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
  `;
  
  export default Section;
  