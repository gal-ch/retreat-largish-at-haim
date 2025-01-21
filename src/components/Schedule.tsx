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
                    <Image src={require(`../assets/images/${day.image}`)} alt={`${day.title} image`} />
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

`;

const TextAndTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 8px;
  font-family: "Assistant", serif;
  color: #4f595a;
  
`;

const Time = styled.div`
  font-weight: bold;
  font-size: 28px;
  font-family: "Macondo", serif;
  @media (max-width: 768px) {
    font-size: 24px;
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



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import styled from 'styled-components';
// import { useInView } from 'react-intersection-observer';

// interface ImageLayoutProps {
//     images?: { name: string; xs: number }[];
// }

// const Schedule: React.FC<ImageLayoutProps> = ({ images }) => {
//     const [value, setValue] = React.useState('1');
//     const [fade, setFade] = React.useState(false);

//     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//         setFade(true); // Trigger fade out
//         setTimeout(() => {
//             setValue(newValue); // Update tab content
//             setFade(false); // Trigger fade in
//         }, 300); // Duration matches the transition timing
//     };

//     const { ref, inView } = useInView({
//         triggerOnce: true, // Play animation only once
//         threshold: 0.3, // Trigger when 30% of the component is in view
//     });



//     // Day schedules
//     const dayOne = (
//         <>
//             <TextAndTime>
//                 <Time>14:00-18:00 </Time>  הגעה והתארגנות
//             </TextAndTime>
//             <TextAndTime>
//                 <Time>18:00-19:00 </Time>  תרגול יוגה ויניאסה פתיחה דניאל ריגס
//             </TextAndTime>
//             <TextAndTime>
//                 <Time>19:30-21:00 </Time>  ארוחת ערב 
//             </TextAndTime>
//             <TextAndTime>
//                 <Time>21:00-21:30 </Time>  מעגל פתיחה
//             </TextAndTime>
//             <TextAndTime>
//                 <Time>21:30-22:00 </Time>  סדנת נוכחות בחוסר וודאות, תרגלים קבוצתיים ומדיטציה
//             </TextAndTime>
//             <TextAndTime>
//                 <Time>22:00-00:00 </Time>  מעגל שירה ונגינה (מתן אגמי ויונתן שפלן)
//             </TextAndTime>
//         </>
//     );

//     const dayTwo = (
//         <div style={{}}>
//             <p>
//                 <strong>07:00</strong>:  שיעור יוגה זריחה טרללה או יותר נכון דני דופקת על דלתות
//             </p>
//             <p>
//                 <strong>08:30</strong>: ארוחת בוקר
//             </p>
//             <p>
//                 <strong>10:00</strong>: סדנת סאונד הילינג
//             </p>
//             <p>
//                 <strong>13:00</strong>: ארוחת צהריים וזמן חופשי
//             </p>
//             <p>
//                 <strong>17:00</strong>: שיעור יוגה דינמי
//             </p>
//             <p>
//                 <strong>18:30</strong>: ארוחת ערב
//             </p>
//             <p>
//                 <strong>20:00</strong>:  מעגל שירה
//             </p>
//         </div>
//     );

//     const dayThree = (
//         <>
//             <p>
//                 <strong>07:00</strong>:  שיעור יוגה לשורדים האחרונים
//             </p>
//             <p>
//                 <strong>08:30</strong>: ארוחת בוקר
//             </p>
//             <p>
//                 <strong>10:00</strong>: the pen has drop
//             </p>
//             <p>
//                 <strong>12:00</strong>: פרידה וסיום ויאללה תאילנד איר ווי כום
//             </p>
//         </>
//     );

//     return (
//         <StyledBox ref={ref} isVisible={inView}
//             sx={{ flexGrow: 1, maxWidth: '100%', margin: '16px', padding: 2, justifyContent: 'center' }}>
//             <Title>מה בתוכנית?</Title>
//             <Box sx={{ width: '100%', typography: 'body1' }}>
//                 <TabContext value={value} >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center', // Align tabs to the right
//                             borderBottom: 1,
//                             borderColor: 'divider',
//                             marginBottom: 2,
//                         }}
//                     >
//                         <TabList onChange={handleChange} aria-label="trip schedule tabs">
//                             <StyledTab sx={{ fontSize: '1rem' }} label="יום שבת ה-1.3" value="3" />
//                             <StyledTab sx={{ fontSize: '22px' }} label="יום שישי ה-28.2" value="2" />
//                             <StyledTab sx={{ fontSize: '22px' }} label="יום חמישי ה-27.2" value="1" />
//                         </TabList>
//                     </Box>
//                     <StyledTabPanel fade={fade} key={value}>
//                         {value === '1' && dayOne}
//                         {value === '2' && dayTwo}
//                         {value === '3' && dayThree}
//                     </StyledTabPanel>
//                 </TabContext>
//             </Box>
//         </StyledBox>
//     );
// };

// const TextAndTime = styled.div`
// display: flex;
//     justify-content: start; 
//     align-items: center;
//       font-size: 24px;
//       gap: 8px;



// `

// const Time = styled.div`
//   font-family: "Macondo", serif;
//   font-size: 34px;
// `
// const Title = styled.div`
//   font-family: "Meddon", serif !important;
//   direction: rtl;
//   text-align: center;
//   font-size: 54px;
//   color: #484c52;
//   transition: font-size 0.3s ease; 
//   @media (max-width: 768px) {
//     line-height: 70px;
//   }
// `;

// const StyledBox = styled(Box) <{ isVisible: boolean }>`
//     opacity: ${(props) => (props.isVisible ? 1 : 0)};
//     transform: ${(props) =>
//         props.isVisible
//             ? 'translateY(0) scale(1) rotate(0deg)' // Visible state
//             : 'translateY(100px) scale(0.9) rotate(-5deg)'}; // Hidden state
//     transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
// `;

// const StyledTab = styled(Tab)`
//     font-weight: bold; 
// `;

// // Styled TabPanel with centered content
// const StyledTabPanel = styled.div<{ fade: boolean }>`
//     border: 1px solid #ccc;
//     height:  60vh;
//     border-radius: 8px;
//     padding: 16px;
//     margin-top: 16px;
//     color: #4f595a;
//     text-align: right; 
//     flex-direction: column;    
//     justify-content: center; 
//     align-items: center;
//         opacity: ${(props) => (props.fade ? 0 : 1)};
//     transform: ${(props) => (props.fade ? 'translateY(10px)' : 'translateY(0)')};
//     transition: opacity 0.3s ease, transform 0.3s ease;
//     p {
//         margin: 8px 0;
//         font-size: 1.1em;
//         line-height: 1.5;
//         display: flex;
//         direction: rtl; 
//     }

//     strong {
//         margin-left: 8px;
//         color: #555;
//     }
// `;

// export default Schedule;