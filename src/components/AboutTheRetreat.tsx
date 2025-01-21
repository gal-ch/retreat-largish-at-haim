import React from 'react';
import styled from 'styled-components';

const AboutTheRetreat: React.FC = () => {
  return (
    <Container>
      <Text>
        <p style={{ fontFamily: 'Amatic SC', fontWeight: 600, fontSize: '34px' }}>האם אתה מרגיש רצון להתחבר אל עצמך מחדש? אל המקורות הפנימיים שלך?</p>
        <p>
          ברוכים הבאים למסע של גילוי פנימי, בו ניצור מקום לפסק זמן מהשגרה, נשחרר מתחים ונחבר בין הגוף, הנפש והנשימה.
          במהלך הריטריט נצלול לתוך חוויה של חיבור עצמי וקהילתי.
          נהעמיק את החיבור לגוף ולנפש, נפתח חיבור אותנטי אל עצמנו, ונשחרר דפוסים שאינם משרתים אותנו יותר. <br /><br />
          זוהי קריאה לפתוח את הלב, להרגיש לעומק את כל קשת הרגשות ולתת מקום לאותנטיות שלכם לפרוץ החוצה. בסביבה טבעית ומזמינה, תמצאו מרחב נטול שיפוטיות שבו תוכלו לנסות דברים חדשים, להתחבר לטבע, ליצור קשרים משמעותיים עם אחרים ולחוות את החיים בווליום גבוה ובנוכחות מלאה.
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

