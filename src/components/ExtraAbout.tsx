import React from 'react';
import styled from 'styled-components';

const ExtraAbout: React.FC = () => {
  return (
    <SectionContainer>
      <MainTitle>מנחים נוספים</MainTitle>
      <TeachersContainer>
        <Teacher>
          <Text>
            <Title>מתן אגמי</Title>
            מוזיקאי מוכשר ובעל 7 שנות ניסיון טיפולי  כNLP Master, המשלב ידע מעמיק בגישה מעשית ליצירת שינוי אישי ומשמעותי. מנחה מדיטציות מרגיעות ומעצימות, המשלבות מוזיקה חיה, ומאפשרות חיבור עמוק ומאזן בין הגוף לנפש. לאורך השנים הוביל סדנאות התפתחות אישית, הן פרטניות והן קבוצתיות, תוך יצירת סביבה תומכת ומעוררת השראה.
            </Text>
          <Image src={`https://prod-green-market.s3.amazonaws.com/dani/matan.jpeg`} alt="Teacher A" />
          </Teacher>

        <Teacher>
          <Image src={`https://prod-green-market.s3.amazonaws.com/dani/yontan.jpeg`} alt="Teacher B" />
          <Text>
            <Title>יונתן שפרלד</Title>
            יוצר מרחבי לב לביטוי חופשי,
            בשנתיים האחרונות יוצר מעגלי שירה מגוונים בגוואטמלה, קופנגן וישראל,
            יזם ויוצר ב"די מהתחלה" מסיבות אקסטטיות מיוחדות.
            יוצר ומוזיקאי ב"קולנו" מעגל שירה אקסטטי
            מוביל את אקסטטיק דאנס מכמורת ומורה ליוגה.
            יונתן מביא איתו את היכולת לגרום לכל אחד להרגיש שייך בטוח ונעים
          </Text>
        </Teacher>
      </TeachersContainer>
    </SectionContainer>
  );
};

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: #f9f9f9;
   border: 1px solid #ccc;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const MainTitle = styled.div`
  font-family: "Meddon", serif !important;
  direction: rtl;
text-align: center;
font-size: 54px;
color : #484c52;
transition: font-size 0.3s ease;
margin-bottom:-54px;
@media(max-width: 768px) {
  fontsize:36px;
    margin-bottom: -52px;
    
  }
`

const TeachersContainer = styled.div`
  display: flex;
justify-content: center;
gap:80px;
flex-wrap: wrap;
border: 1px solid #ccc;
padding: 64px;
@media (max-width: 768px) {
  flex-direction: column;
  gap: 16px;
}
  
`

const Title = styled.div`
font-family: "Assistant", serif;
  //   font-family: "Meddon", serif !important;
text-align: right;
font-size: 36px;
color : #484c52;
transition: font-size 0.3s ease;
margin: 0;  

  @media (max-width: 768px) {
  fontsize:  24px;
  line-height: 1.2;
}
`

const Teacher = styled.div`
  display: flex;
  flex-direction: column;
  alig n -items: center;
  width :  300px;
  text-align: right;
  @media (max-width: 768px) {
    width: 100%;
   
  }
`
const Text = styled.p`
  font-size: 18px;
color: #333;
margin-bottom: 16px;
 margin-top: 0;
  direction: rtl;
font-family: Amatic SC;
font-size: 22px;
@media(max - width: 768px) {
  font-size: 18px;
} 
`
  
  

const Image = styled.img`
  width: 100%;
height: 35 0px;
border-radius: 8px;
export default ExtraAbout;
`

export default ExtraAbout;
