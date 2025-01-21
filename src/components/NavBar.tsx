import { AppBar, Button, Toolbar, IconButton, Drawer, Box, List, ListItem, ListItemText, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styled from "styled-components";

interface NavBarProps {
    language: 'En' | 'He';
    toggleLanguage: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, toggleLanguage }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    const menuItems = [
        { label: language === 'En' ? "so who am i?" : "אז מי אני?", target: "about" },
        { label: language === 'En' ? "the studio" : "הסטודיו", target: "studio" },
        { label: language === 'En' ? "yoga event" : "אירועי יוגה", target: "yoga_event" },
        { label: language === 'En' ? "retreat" : "ריטריטים", target: "retreat" },
        { label: language === 'En' ? "content creator" : "כתיבת תוכן", target: "content_creator" },
        { label: language === 'En' ? "next events" : "האירועים הבאים", target: "next_events" },
    ];

    const scrollToSection = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    top: 0,
                    height: 0,
                    zIndex: 10,
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: "space-between", sm: "flex-start" },
                        alignItems: 'center',
                        height: 'auto',
                        minHeight: '60px',
                        width: '100%',

                    }}
                >
                    <IconButton
                        edge="start"
                        sx={{ display: { xs: "block", sm: "none" }, color: '#4f595a' }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavBarContainer>
                        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, flexGrow: 1 }}>
                            {menuItems.map((item, index) => (
                                <Button key={item.target} onClick={() => scrollToSection(item.target)} sx={{ color: '#4f595a' }}>
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                        <Switch
                            checked={language === 'He'}
                            onChange={toggleLanguage}
                            sx={{
                                width: '56px',
                                height: '36px',
                                padding: 0,
                                '& .MuiSwitch-track': {
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '20px',
                                    backgroundColor: isChecked ? '#4caf50' : '#d32f2f',
                                    transition: 'background-color 0.3s',
                                },
                                '& .MuiSwitch-thumb': {
                                    width: '30px',
                                    height: '30px',
                                    margin: '2px',
                                    transition: 'transform 0.3s',
                                },
                            }}
                            icon={<span style={{ color: 'white', fontSize: '14px' }}>En</span>}
                            checkedIcon={<span style={{ color: 'white', fontSize: '14px' }}>He</span>}
                        />
                    </NavBarContainer>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={index} component="div" onClick={() => scrollToSection(item.target)}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 30px;
`;

export default NavBar;
