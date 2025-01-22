import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

interface FourBoxSectionProps {
  imageOne: string;
  imageTwo: string;
}

const FourBoxSection: React.FC<FourBoxSectionProps> = ({ imageOne, imageTwo }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Row 1 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and above
        }}
      >
        {/* Image 1 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: { xs: 300, md: 500 }, // Adjust height for responsiveness
            backgroundColor: '#acb6b6',
            flex: 1,
          }}
        >
          <img
            src={`https://prod-green-market.s3.amazonaws.com/dani/gallery10.png`}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', 
            }}
          />
        </Box>
        {/* Text 1 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: { xs: 300, md: 500 },
            backgroundColor: '#e2e2e2',
            flex: 1,
            textAlign: 'right',
            direction: 'rtl',
          }}
        >
          <Typography variant="h6" align="center" component="div" margin={2} color="#4f595a" fontFamily={"Amatic SC"}>
            <SmallTitle>תרגולי היוגה</SmallTitle>
            <p>תרגולי יוגה בשיטת ויניאסה אשטנגה, נלמד להניע את האנרגיה בגוף, תוך כדי חיזוק הקשר בין הגוף, הנשימה והמיינד. התרגול יהווה הזדמנות לפתח תשומת לב פנימית ולחוות את הרגע באופן מעמיק.</p>
            <p>כאשר אנו ניצבים על המזרן, אנחנו לא באים רק לבצע תרגילים – אלא באים להיפגש עם עצמנו. אנחנו לומדים כיצד לפגוש את הגוף בתנאים משתנים, כיצד לעקוב אחרי דפוסי הפעולה שלנו, כיצד לשמור על שקט פנימי בזמן המאמץ ולגלות את האיזון בין כיווץ להתרחבות, כמו פעימות הלב.
            </p>
            <p>במהלך הריטריט נחקור את תרגול היוגה בצורות מגוונות, נעמיק את ההבנה שלנו, ונצלול יחד לתוך החוויה העמוקה והאותנטית של היוגה, תוך שילוב של פילוסופיה ונשימה כחלק בלתי נפרד מהתרגול הפיזי.</p>
          </Typography>
        </Box>
      </Box>

      {/* Row 2 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and above
        }}
      >
        {/* Text 2 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: { xs: 300, md: 450 },
            backgroundColor: '#d9e8e8',
            direction: 'rtl',
            flex: 1,
          }}
        >
          <Typography variant="h6" align="center" margin={2} color="#4f595a" fontFamily={"Amatic SC"}>
            <SmallTitle>מדיטציה ופניאמה</SmallTitle>
            <p>פרניאמה היא סדרת טכניקות נשימה מעולם היוגה, שמאפשרות לנו לנהל את האנרגיה שבתוכנו.</p>
            <p>במהלך הריטריט, נתרגל תרגילים שונים של נשימה, אשר יובילו אותנו לחוויות עוצמתיות. נלמד להשתמש בכלים פנימיים אלה כדי לשפר את מצב התודעה שלנו באופן טבעי, תוך כדי התמקדות בנשימה.</p>
            <p>כחלק מהתרגול, נתנסה גם במגוון מדיטציות, כולל מדיטציות אקטיביות. מדיטציות אלו מציעות דרך חווייתית לשחרור מתחים ולפיתוח פנימי, תוך שימוש בתנועה, נשימה ומודעות. הן מאפשרות לנו לעבוד על רגשות, לחבר את הגוף עם הנפש ולשחרר חסימות רגשיות בדרך מעמיקה ותרפויטית.</p>
          </Typography>
        </Box>
        {/* Image 2 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: { xs: 300, md: 450 },
            backgroundColor: 'lightgray',
            flex: 1,
          }}
        >
          <img
            src={`https://prod-green-market.s3.amazonaws.com/dani/${imageTwo}`}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', // Ensure image scales properly
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const SmallTitle = styled.div`
  font-family: "Assistant", serif;
  
  font-size: 24px;
  color: #484c52;
  text-align: center;
  line-height: 0.6;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2;
  }
`

export default FourBoxSection;
