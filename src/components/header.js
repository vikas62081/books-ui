import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Add, Home } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Books
                    </Typography>
                    <div>
                        {location.pathname === '/' ? <IconButton
                            title="Add new book"
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            component={Link}
                            to="/addbook"
                        >
                            <Add />
                        </IconButton> :
                            <IconButton
                                title="Book List"
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                component={Link}
                                to="/"
                            >
                                <Home />
                            </IconButton>}


                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
