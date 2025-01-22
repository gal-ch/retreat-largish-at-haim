import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  title: string;
  text: string;
  extraTitle?: string;
  smalleImage: string;
  bigImage: string;
  leftOrder: boolean;
  backgroundColor: string;
  seconderyText?: string;
  extraElement?: React.ReactNode;
  className?: string;
  points?: string[];
  id?: string;
}

const About: React.FC<AboutProps> = ({
  title,
  extraTitle,
  bigImage,
  smalleImage,
  leftOrder,
  backgroundColor,
  extraElement,
  id,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Play animation only once
    threshold: 0.2, // Trigger when 30% of the component is in view
  });

  return (
    <MainContainer
      id={id}
      ref={ref}
      backgroundColor={backgroundColor}
      isVisible={inView}
    >
      <SectionContent leftOrder={leftOrder}>
        <Container>
          <Titles>
            {extraTitle &&
              <ExtraTitle>{extraTitle}</ExtraTitle>
            }
            <Title>{title}</Title>
          </Titles>
          <Text>
            <p>
               מורה ליוגה בוגרת לימודי <b>אשטנגה וויניאסה</b>. עם ניסיון עשיר בהדרכה, בעבר <b>אסיסטנטית</b> בקורס מורי אשטנגה ב"אור היוגה" תל אביב. בעלת <b> סטודיו, "Dani Power Yoga"</b>, לקבוצות קטנות בתל אביב. 
               <br/>
               <b>יזמית יוגה למען הקהילה</b> , מנחת <b>אירועי יוגה</b> - שיעורי פתוחים למען הקהילה.
               ניסיון עשיר בריטריטים לעשרות משתתפים בארץ ובעולם.
            </p>
            <p>
              בעלת תואר בעבודה סוציאלית, וניסיון טיפולי והדרכתי במסגרת עמותה לילדים לאוטיזם ומתרגלת פרונטלית במכללת ספיר.
              הידע והניסיון שנרכש תומכים בהדרכה והליווי של המתרגלים ומשתתפי הריטריטים.
            </p>
            <p>
              מנחה את שני סגנונות התרגול אשטנגה וויאנסה בשילוב אלמנטים מעולמות הפאוור והרוקט יוגה על מנת לאפשר למתרגלים להתנסות בחציית גבולות מרחשבתיים, מעכבים, וחיבור לאלמנטים ילדיים ושובבים.
              היכולת לנוע בין מדיטציה בתנועה, אתגור מנטלי ופיזי וביטוי הילד הפנימי.
            </p>
            <p>
              באופן אישי היוגה הצילה אותי מהתקפי חרדה בתקופה שבה הרגשתי לאחוז במציאות, המזרן מאז ועד היום מהווה מקדש לגוף ולנפש ועל כן אני מאמינה את היוגה צריך להנגיש לכמה שיותר אנשים בלי הבדלי גיל, מצב כלכלי ורמת קושי כלכלי.
              לכולנו יש דבר משותף אחד, נשמה שצריכה תחזוק והעבודה עם הגוף והנשימה היא הדרך הטובה ביותר לעשות זאת.
            </p>

          </Text>
        </Container>
        <Images>
          <img
            className="large-image"
            src={`https://prod-green-market.s3.amazonaws.com/dani/${bigImage}`}
            alt="Main"
          />
          <img
            className="small-image"
            src={`https://prod-green-market.s3.amazonaws.com/dani/${smalleImage}`}
            alt="Secondary"
            style={{
              borderRadius: '32px'
            }}
          />
        </Images>
      </SectionContent>
      {extraElement}
    </MainContainer>
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
  border-radius: 4px;
  padding: 16px;
  color: #4f595a;
   line-height: 1.5;
  font-family: Amatic SC;
  font-size: 22px;
  @media (max-width: 768px) {
    max-width: 95%;
    font-size: 18px;

  }
`;


// Styled Components
const MainContainer = styled.div<{ backgroundColor: string; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible
      ? 'translateY(0) scale(1) rotate(0deg)' /* Visible state */
      : 'translateY(100px) scale(0.9) rotate(-5deg)'}; 
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  gap: 16px;

  @media (max-width: 768px) {
    padding-top: 46px;
    height: auto; 
    gap: 12px; 
  }
`;

const SectionContent = styled.div<{ leftOrder: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: ${(props) => (props.leftOrder ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on mobile */
    gap: 8px;
    text-align: center; /* Center-align text for better mobile readability */
  }
`;

const Images = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
  margin-right: 8px;

  .large-image {
    width: 50vw;
    height: 100vh;
    z-index: 1;

    @media (max-width: 768px) {
      width: 80vw; 
      height: 50vh;
    }
  }

  .small-image {
    width: 25vw;
    height: auto;
    position: absolute;
    bottom: 0px;
    right: -50px;
    z-index: 2;

    @media (max-width: 768px) {
      width: 60vw; 
      position: relative; 
      bottom: 170px;
      margin-top: 16px; 
    }
  }
`;

export default About;
