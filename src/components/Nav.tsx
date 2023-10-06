import { Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { createTheme } from "@mui/material/styles";

const Nav = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
              xs: 0,
              sm: 710,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
    });
    return (
        <Grid container>
            <Grid item container
                sx={{
                    display: 'flex',
                    flexDirections: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    py: '2em',
                    width: '100vw',
                    gap: 5,
                    [theme.breakpoints.between("xs", "sm")]: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 0
                    },
                }}
                style={{
                    //letterSpacing: 2,
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <Grid item>
                    <Link 
                        to="Heroe" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            [ CB ]
                        </Typography>
                    </Link>
                </Grid>
                <Grid item
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5,
                    }}
                >
                    <Link 
                        //href="#About"
                        to="About" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            About
                        </Typography>
                    </Link>
                    <Link 
                        //href="#Stack"
                        to="Stack" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Stack
                        </Typography>
                    </Link>
                    <Link 
                        //href="#Resume"
                        to="Resume" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Resume
                        </Typography>
                    </Link>
                    <Link 
                        //href="#Projects"
                        to="Projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Projects
                        </Typography>
                    </Link>
                    <Link 
                        //href="#Contact"
                        to="Contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                        >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{                   
                                textDecoration: 'none',
                                color: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            Contact
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Nav