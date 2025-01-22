import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Cover from './components/Cover';
import MiddelInfo from './components/MiddelInfo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from 'styled-components';
import About from './components/About';
import ThePlace from './components/ThePlace';
import Schedule from './components/Schedule';
import FourBoxSection from './components/FourBoxSection';
import HorizontalImageList from './components/PrivuesEvents';
import Summery from './components/Summery';
import ExtraAbout from './components/ExtraAbout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegulationPage from './components/RegulationsPage';
import AboutTheRetreat from './components/AboutTheRetreat';

const he = {
  "about": {
    "text": 'מורה ליוגה בוגרת לימודי אשטנגה וויניאסה. לאורך השנים צברתי ניסיון עשיר בהדרכה, כולל תפקיד אסיסטנטית בקורס מורי אשטנגה ב"אור היוגה תל אביב" והקמה של הסטודיו שלי, "Dani Power Yoga", בתל אביב, בו אני מלמדת קבוצות קטנות באווירה חמה ומזמינה. אני יזמית יוגה למען הקהילה, מארגנת אירועי יוגה בחוף הים וריטריטים יומיים שמחברים בין תרגול יוגה לחוויות ייחודיות. בנוסף, העברתי ריטריטים לקבוצות גדולות בסיני ורואה בכך שליחות לחבר אנשים לעצמם ולקהילה.',
    "secondery_text": " אז בגדול היוגה פה היא לא יוגה רגילה, נראה לי שזה רק תירוץ למרות שהיא מעולה והפינצה לי השתפרה פלאים והכתפיים שלי אשכרה הולכות אחורה בעצמם וואו טירוף הטירופים. ומצד שני לפעמים אני אומרת לעצמי וואלה לא נרשמתי לחוג הזה מה נסגר איתה הגוף שלי לא בנוי לדברים האלה אני רוצה הביתה למרות שבא לי להתנחל לה בסטודיו ואני מתנחלת לשעבר וזה מאוד קשה ללכת. אני סוטה מהנושא סליחה אני לא מרוכזת",
    "extra_title": "על המנחה",
    "title": "דניאל ריגס",
    "bigImage": "dani1.jpg",
    "smalleImage": "dani5.png"
  },
  "points": [
    "חיבור בין הגוף והנפש",
    "סדנאות נוכחות",
    "תרגולי יוגה ומדיטציה",
    "חיבור לקהילה "
  ],
  "join_whatsapp": "WhatsAppלחצו כדי להצטרף לקבוצת ה",
  "about_the_place": {
    "text": " אוהל יעל, הממוקם בצפון הארץ באזור יודפת שבגליל התחתון, הוא מתחם אירוח ייחודי המשלב טבע, אקולוגיה ויופי. המתחם מציע חוויית לינה באוהלים מסורתיים ובמבני אבן, כולם מצוידים בתנאים נוחים ומחוממים. החצר המוריקה מציעה מקום לרגיעה, עם פינות קסומות ומסלולי הליכה בסביבה. כל השירותים והפינוקים במתחם מונגשים באווירה ביתית ונעימה ולרשותנו הפרטית, ומספקים את כל הדרוש כדי ליהנות מחוויית ריטריט מרגיעה ומחברת.",
    "title": "אוהל יעל",
    "extra_title": "על המקום",
    "points": [
      "בשמים זוקחת שמש ואני מצייר עננים",
      "ניננניננינ גם אנחנו היינו קטנים",
      "יופי ניצול מאוד מוצלח של חולי"
    ],
    "images": [
      {
        "name": "dani3.jpg",
        "xs": 11
      },
      {
        "name": "studio1.jpg",
        "xs": 5
      },
      {
        "name": "studio2.jpg",
        "xs": 6
      }
    ]
  },
  "four_box_section": {
    "image_one": "gallery10.png",
    "image_two": "gallery20.jpg"

  },
  "yoga_event": {
    "text": "אני וצה להודות לפח שאפשר לי להשתתף באירועי היוגה בתקופה האחרונה , תודה רבה על הצל המסור שסיפקת לי והריח הנהדר שחלקת עימי, זו היתה תקופה נהדרת ואנצור אותה בליבי לעד, יהיה שלום פחוש נתראה בקיץ הבא",
    "secondery_text": "מה זה שיעור יוגה? זה מטוס? זה ציפור? לא זה אירוע יוגה",
    "title": "Yoga event",
    "images": [
      {
        "name": "yogaEvent2.jpg",
        "xs": 6
      },
      {
        "name": "yogaEvent6.png",
        "xs": 6
      },
      {
        "name": "yogaEvent5.png",
        "xs": 6
      },
      {
        "name": "yogaEvent3.jpg",
        "xs": 6
      }
    ]
  },
  "retreat": {
    "text": "מה אגיד מה אגיד על הסופשים הכי טובים בעולםםם הזהההההה ועמכם הסליחה זה מאוד קשה לעשות ריטריט בארץ מאז שאי אפשר לנסוע לעבדללה למרות שאני אשמח בכיף ובשמחה לארגן הכל אממ אממ ואנשים גם ככה ילכו לאיפה שאת תלכי כי את את ואז אופס יש לנו ריטריט ",
    "title": "Retreats",
    "images": [
      {
        "name": "dani3.jpg",
        "xs": 5
      },
      {
        "name": "studio1.jpg",
        "xs": 6
      },
      {
        "name": "studio2.jpg",
        "xs": 3
      },
      {
        "name": "yogaEvent3.jpg",
        "xs": 4
      },
      {
        "name": "yogaEvent4.jpg",
        "xs": 4
      }
    ]
  },
  "content_creator": {
    "text": "סליחה אבל מעט מאוד כמעט אפילו מעולם לא ראיתי רילסים יותר טובים ושלא נדבר על יכולת הצילום והמסירות לתפקיד",
    "title": "Content creator",
    "videos": [
      "https://www.w3schools.com/html/movie.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ]
  },
  "cardsDescription": [
    {
      "image": "yoga1.jpg",
      "description": "מחשבות רבות"
    },
    {
      "image": "studio2.jpg",
      "description": "אני צריכה לסדר את הדירה ולהכין צהריים"
    },
    {
      "image": "yogaEvent3.jpg",
      "description": "סופש מקסים כיף להיות חולה"
    }
  ],
  "next_events": {
    "text": "Comming soon...",
    "title": "Next events"
  }
}

const en = {
  "about": {
    "text": "Standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent,",
    "secondery_text": "k a gallStandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.ey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    "extra_title": "ABOUT ME",
    "title": "Yoga for the community"
  },
  "points":
    ["Small classes with personal attention for every student", "Dynamic sessions tailored for both beginners and advanced practitioners", "Experience Vinyasa Ashtanga yoga that nurtures mind and body", "Join a supportive and welcoming community"]
  ,
  "studio": {
    "text": "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  but also the leap into electronic typesetting. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    "title": "The studio",
    "points": [
      "when an unknown printer took a galley of type and scrambled",
      "gallStandard dummy text ever since the 1500s, when an unknown printe",
      " unknown printer took a galley of type and scrambled it to make"
    ],
    "images": [
      {
        "name": "dani3.jpg",
        "xs": 11
      },
      {
        "name": "studio1.jpg",
        "xs": 5
      },
      {
        "name": "studio2.jpg",
        "xs": 6
      }
    ]
  },
  "join_whatsapp": "Click to join the WhatsApp group for my upcoming class.",
  "yoga_event": {
    "text": "Standard dummy text ever since the, when an unknown printer took a gallStandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.ey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    "secondery_text": "k a gallStandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.ey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    "title": "Yoga event",
    "images": [
      {
        "name": "yogaEvent2.jpg",
        "xs": 6
      },
      {
        "name": "yogaEvent6.png",
        "xs": 6
      },
      {
        "name": "yogaEvent5.png",
        "xs": 6
      },
      {
        "name": "yogaEvent3.jpg",
        "xs": 6
      }
    ]
  },
  "retreat": {
    "text": "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  but also the leap into electronic typesetting. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    "title": "Retreats",
    "images": [
      {
        "name": "dani3.jpg",
        "xs": 5
      },
      {
        "name": "studio1.jpg",
        "xs": 6
      },
      {
        "name": "studio2.jpg",
        "xs": 3
      },
      {
        "name": "yogaEvent3.jpg",
        "xs": 4
      },
      {
        "name": "yogaEvent4.jpg",
        "xs": 4
      }
    ]
  },
  "content_creator": {
    "text": "Standard dummy text ever since theremainin. It has survived not only five centuries, but also the leap into electronic typesetting.",
    "title": "Content creator",
    "videos": [
      "https://www.instagram.com/reel/DCwPgS0ICUl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "https://www.w3schools.com/html/movie.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ]
  },
  "cardsDescription": [
    {
      "image": "yoga1.jpg",
      "description": "has survived not only five centuries"
    },
    {
      "image": "studio2.jpg",
      "description": "tandard dummy text ever since tht to make"
    },
    {
      "image": "yogaEvent3.jpg",
      "description": "when an unknown printer took a galley of type and scrambled it to make"
    }
  ],
  "next_events": {
    "text": "Comming soon...",
    "title": "Next events"
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regulation" element={<RegulationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  const [translations, setTranslations] = useState<any>({});
  const [language, setLanguage] = useState<'En' | 'He'>('He');

  useEffect(() => {
    setTranslations(language === 'He' ? he : en);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'En' ? 'He' : 'En'));
  };


  const getJoinStudioElement = () => {
    const redirect = (url: string) => {
      window.open(url, '_blank');
    };
    return (
      <JoinStudioContainer onClick={() => redirect("/chat.whatsapp.com/KbE6g1H1pF67Jxt7M26zZk")}>
        <p>{translations.join_whatsapp}</p>
        <WhatsAppIcon sx={{ fontSize: 24, margin: '8px' }} />
      </JoinStudioContainer>
    );
  };

  return (
    <div className="App">
      <Cover language={language} toggleLanguage={toggleLanguage} />
      <AboutTheRetreat />
      <About
        id="about"
        className="section"
        title={translations.about.title}
        text={translations.about.text}
        seconderyText={translations.about.secondery_text}
        extraTitle={translations.about.extra_title}
        smalleImage={translations.about.smalleImage}
        bigImage={translations.about.bigImage}
        leftOrder={true}
        backgroundColor={'#dfe0dc'}
      />

      <ExtraAbout />
      <MiddelInfo points={translations.points} />
      <ThePlace
        id="about_the_place"
        className="about_the_place"
        title={translations.about_the_place.title}
        text={translations.about_the_place.text}
        extraTitle={translations.about_the_place.extra_title}
        seconderyText={translations.about_the_place.secondery_text}
        images={translations.about_the_place.images}
        leftOrder={true}
        backgroundColor={'#faf8f6'}
        extraElement={getJoinStudioElement()}
      />
      <FourBoxSection imageOne={translations.four_box_section.image_one} imageTwo={translations.four_box_section.image_two} />
      <Schedule />
      <Contact />
      <Summery />
      <HorizontalImageList />
      <RegulationsSection>
        <Link to="/regulation">תקנון - אחריות ותנאים כלליים</Link>


      </RegulationsSection>
    </div>
  );
};

const JoinStudioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  background-color: #fff;
  width: 400px;
  border-radius: 16px;
  box-shadow: 4px 4px 12px rgba(172, 165, 165, 0.1); 
  transition: box-shadow 0.3s ease;
  border: 1px solid rgb(175, 183, 183);
  color: #4f595a;
  background-color: rgba(162, 191, 199, 0.4);
  &:hover {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);  
  }
`;

const RegulationsSection = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
