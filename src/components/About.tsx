import React from 'react';
import styled from 'styled-components';
import TextInfo from './TextInfo';
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
  text,
  seconderyText,
  extraTitle,
  bigImage,
  smalleImage,
  leftOrder,
  backgroundColor,
  extraElement,
  points,
  id,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Play animation only once
    threshold: 0.3, // Trigger when 30% of the component is in view
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
            <p>מורה ליוגה בוגרת לימודי אשטנגה וויניאסה. לאורך השנים צברתי ניסיון עשיר בהדרכה, כולל תפקיד אסיסטנטית בקורס מורי אשטנגה ב"אור היוגה תל אביב" והקמה של הסטודיו שלי, "Dani Power Yoga", בו אני מלמדת קבוצות קטנות באווירה חמה ומזמינה. אני יזמית יוגה למען הקהילה, מארגנת אירועי יוגה בחוף הים וריטריטים יומיים שמחברים בין תרגול יוגה לחוויות ייחודיות. בנוסף, העברתי ריטריטים לקבוצות גדולות בסיני ורואה בכך שליחות לחבר אנשים לעצמם ולקהילה.<br /><br />
              בעבר עסקתי בעבודה סוציאלית, טיפלתי בילדים ובזוגות, ניהלתי צוותים ולימדתי באקדמיה לעבודה סוציאלית. הניסיון הזה משפיע על הגישה האישית והחומלת שאני מביאה לכל שיעור ולכל מפגש עם מתרגלים. והטיולים שלי ברחבי העולם אפשרו לי ללמוד לעומק שיטות יוגה מגוונות, ואני שואפת להביא את החיבור הזה לכל שיעור.<br /><br />
              השיעורים שלי מתאימים לכל הרמות ומשלבים דינאמיות, אתגר, שקט פנימי, רגעי קלילות וחיבור רוחני. אני מאמינה שכדי להיות נוכחים בחיים, עלינו להרגיש נוכחים בתוך הגוף שלנו. כשאנחנו עולים על המזרן, אנחנו לא רק מתרגלים פיזית, אלא גם מפתחים דיאלוג פנימי, קשב, חוצים חסמים ומגלים כוחות פנימיים.<br /><br />
              היוגה שינתה את חיי. היא עזרה לי להתמודד עם התקפי חרדה ומצבי קיצון, החזירה לי תחושת שליטה פנימית ויכולת להתמודד עם אתגרים. אני מאמינה שהכוחות הללו קיימים בכל אחד מאיתנו, והיוגה היא הדרך לגלות אותם ולהביא אותם לידי ביטוי בחיינו.<br /><br />
            </p>
          </Text>
        </Container>
        <Images>
          <img
            className="large-image"
            src={require(`../assets/images/${bigImage}`)}
            alt="Main"
          />
          <img
            className="small-image"
            src={require(`../assets/images/${smalleImage}`)}
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
  // font-family: "Meddon", serif !important;
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
  // border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  font-size: 18px;
  color: #4f595a;
  @media (max-width: 768px) {
    max-width: 95%;
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
