import React from 'react';
import styled from 'styled-components';

const AboutTheRetreat: React.FC = () => {
  return (
    <Container>
      <Text>
        <p style={{ fontFamily: 'Amatic SC', fontWeight: 600, fontSize: '34px' }}>
          ריטריט להרגיש את החיים<br/><br/>
          ברוכים הבאים לריטריט בצפון הארץ, סופשבוע גדוש ביוגה, מדיטציות, סדנאות חיבור עצמי וחשוב מכל לקחת חלק מקבוצה. זוהי הזמנה לריטריט ראשון מסוגו שמשלב שיעורי יוגה, מדיטציה, תנועה והמון מוזיקה. הריטריט הקרוב יהיה בסימן מציאת חופש פנימי, וחיבור קהילתי.
          יציאה משגרת החיים לכמה ימים בטבע של הצפון על מנת לנקות את המוכר והידוע ולהרכיב מחדש אמונות ותפיסות שיתמכו בנו בחזרה לשגרה.
     </p>
      </Text>
    </Container>
  );
};



const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgb(212, 217, 213);
  @media (max-width: 768px) {
    display: flex;
    height: auto;

}
`;

const Text = styled.div`
  font-weight: 400;
  font-style: normal;
  width: fit-content;
  max-width: 700px;
  direction: rtl;
  border-radius: 4px;
  padding: 28px;
  font-size: 22px;
  color: #4f595a;
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export default AboutTheRetreat;

