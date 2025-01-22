import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Schedule: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const schedules = [
        {
            title: 'יום חמישי 27/2',
            image: 'retreat8.png',
            content: (
                <>
                    <TextAndTime>
                        הגעה והתארגנות <Time>14:00-18:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        תרגול יוגה ויניאסה פתיחה דניאל ריגס <Time>18:00-19:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        ארוחת ערב  <Time>19:30-21:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        מעגל פתיחה  <Time>21:00-21:30</Time>
                    </TextAndTime>
                    <TextAndTime>
                        סדנת נוכחות בחוסר וודאות מתן אגמי <Time>21:30-22:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        מעגל שירה ונגינה<Time>22:00-00:00</Time>
                    </TextAndTime>
                </>
            ),
        },
        {
            title: 'יום שישי 28/2',
            image: 'yoga2.jpg',
            content: (
                <>
                    <TextAndTime>
                    פרניאמה (תרגול נשימה) ומדיטציה דניאל ריגס <Time>08:00-8:30</Time>
                    </TextAndTime>
                    <TextAndTime>
                        תרגול יוגה אשטנגה דניאל ריגס  <Time>08:30-10:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        ארוחת בוקר <Time>10:00-11:30</Time>
                    </TextAndTime>
                    <TextAndTime>
                        זמן חופשי   <Time>11:30-14:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        תרגול ויניאסה דניאל ריגס <Time>17:30-19:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        קבלת שבת ארוחת ערב  <Time>19:30-21:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        סדנת תנועה יונתן שפלן <Time>21:00-22:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        מעגלת תפליה ושירה של לב מתן אגמי<Time>22:00-00:00</Time>
                    </TextAndTime>
                </>
            ),
        },
        {
            title: 'יום שבת 1/3',
            image: 'retreat9.png',
            content: (
                <>
                    <TextAndTime>
                        הליכה מדטטיבית בטבע
                        <Time>08:00-09:00</Time>
                    </TextAndTime>
                    <TextAndTime>
                        שיעור יוגה ארבעת האלמנטים דניאל ריגס<Time>09:00-10:30</Time>
                    </TextAndTime>
                    <TextAndTime>
                        ארוחת בוקר<Time>10:30-11:30</Time>
                    </TextAndTime>
                    <TextAndTime>
                        מעגל פרידה וסיום <Time>11:30-12:00</Time>
                    </TextAndTime>
                </>
            ),
        },
    ];

    return (
        <ScheduleContainer ref={ref} isVisible={inView}>
            <Title>מה בתוכנית?</Title>
            {schedules.map((day, index) => (
                <DayRow key={day.title} reverse={index % 2 === 1}>
                    <Image src={`https://prod-green-market.s3.amazonaws.com/dani/${day.image}`} alt={`${day.title} image`} />
                    <DayContent>
                        <DayTitle>{day.title}</DayTitle>
                        {day.content}
                    </DayContent>
                </DayRow>
            ))}
        </ScheduleContainer>
    );
};

const ScheduleContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  width: 100%;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
        props.isVisible
            ? 'translateY(0) scale(1) rotate(0deg)' /* Visible state */
            : 'translateY(100px) scale(0.9) rotate(-5deg)'}; 
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
`;

const DayRow = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 16px;
  justify-content: center;
`;

const Image = styled.img`
  width: 40%;
  height: 370px;
  border-radius: 8px;
  object-fit: cover;
`;

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
`;

const DayTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
    margin: 0;
    font-family: "Assistant", serif;
    color: #685741;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TextAndTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 8px;
  font-family: "Amatic SC", serif;
  color: #4f595a;  
  @media (max-width: 768px) {
    font-size: 12px;
    gap: 6px;

  }
`;

const Time = styled.div`
  font-weight: bold;
  font-size: 28px;
  font-family: "Macondo", serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  font-family: "Meddon", serif !important;
  direction: rtl;
  text-align: center;
  font-size: 54px;
  color: #484c52;
  transition: font-size 0.3s ease; 
  @media (max-width: 768px) {
    line-height: 70px;
  }
`;

export default Schedule;