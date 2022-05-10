import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode : boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    
    {title: 'catalog', path: '/catalog'},
    {about: 'about', path: '/about'},
    {contact: 'contact', path: '/contact'},
]

const rightLinks = [
    
    {title: 'login', path: '/login'},
    {about: 'register', path: '/register'},
]

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    .NETSHOP
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                <List>
                    {midLinks.map(({title, path}) => (
                        <ListItem

                        >
                            {title.toUpperCase()}
                            
                        </ListItem>
                    ))}
                </List>
            </Toolbar>

        </AppBar>
    )
}