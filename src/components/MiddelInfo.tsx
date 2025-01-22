import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import GroupsIcon from '@mui/icons-material/Groups'; // Community icon
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // Yoga-related icon
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'; // Beginners and advanced
import FavoriteIcon from '@mui/icons-material/Favorite'; // Personal attention

interface MiddelInfoProps {
    points: string[];
}


const MiddelInfo: React.FC<MiddelInfoProps> = ({ points }) => {
    const sections = [
        {
            icon: <FavoriteIcon fontSize="large" />,
            text: points[0],
        },
        {
            icon: <AccessibilityNewIcon fontSize="large" />,
            text: points[1],
        },
        {
            icon: <SelfImprovementIcon fontSize="large" />,
            text: points[2],
        },
        {
            icon: <GroupsIcon fontSize="large" />,
            text: points[3],
        },
    ];

    return (
        <MainContainer>
            {sections.map((section, index) => (
                <Part key={index}>
                    <IconContainer>{section.icon}</IconContainer>
                    <Typography variant="body1" align="center">{section.text}</Typography>
                </Part>
            ))}
        </MainContainer>
    );
};

const MainContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  flex-wrap: wrap;
  color: #4f595a;
`;

const Part = styled(Box)`
  flex: 1 1 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

const IconContainer = styled(Box)`
  margin-bottom: 8px;
`;

export default MiddelInfo;
