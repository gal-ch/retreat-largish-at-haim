import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import styled from 'styled-components';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#e0e0e0' }}>
            <Title>אירועים קודמים</Title>
            <ImageList
                sx={{ width: '95%', height: '100vh', }}
                variant="quilted"
                cols={4}
                rowHeight={300}
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
            
        </Box>
    );
}

const Title = styled.div`
  margin: 24px;
  font-family: "Meddon", serif !important;
  font-size: 3rem;
  color: #484c52;
  transition: font-size 0.3s ease; 
  @media (max-width: 768px) {
    line-height: 70px;
  }
`;

const itemData = [
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery7.jpg`,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: `https://prod-green-market.s3.amazonaws.com/dani/gallery23.png`,
        title: 'Burger',
    },
    {
        img: `https://prod-green-market.s3.amazonaws.com/dani/gallery25.jpeg`,
        title: 'Camera',
    },
    {
        img: `https://prod-green-market.s3.amazonaws.com/dani/gallery18.jpg`,
        title: 'Coffee',
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery22.png`,
        title: 'Hats',
        cols: 2,
    },
    {
        img: `https://prod-green-market.s3.amazonaws.com/dani/gallery12.png`,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery19.jpg`,
        title: 'Basketball',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery24.png`, title: 'Fern',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery13.JPG`, title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/retreat2.png`, title: 'Tomato basil',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery16.png`, title: 'Sea star',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery17.jpg`, title: 'Bike',
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery9.png`, title: 'Bike',
        cols: 2,
    },
    
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery3.png`, title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery21.jpeg`, title: 'Bike',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery2.jpg`, title: 'Bike',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery26.jpeg`, title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery27.png`, title: 'Bike',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery28.png`, title: 'Bike',
    },
    {
        img:  `https://prod-green-market.s3.amazonaws.com/dani/gallery28.jpg`, title: 'Bike',
        cols: 2,
    },
];
