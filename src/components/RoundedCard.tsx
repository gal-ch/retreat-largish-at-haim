import React from 'react';
import styled from 'styled-components';

interface CardProps {
    image: string;
    title: string;
    description?: string;
}

const RoundedCard: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <CardContainer>
            <ImageWrapper>
                <CardImage src={require(`../assets/images/${image}`)} alt={title} />
            </ImageWrapper>
            <CardContent>
                <CardTitle>{title}</CardTitle>
            </CardContent>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    width: 300px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    &:hover {
        transform: translateY(-8px);
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const CardTitle = styled.h4`
    margin: 0;
    color: #4f595a;
`;

export default RoundedCard;
