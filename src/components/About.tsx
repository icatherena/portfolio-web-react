import { Avatar, Button, Grid, Typography } from "@mui/material";

import { Link } from "react-scroll"

import { createTheme } from "@mui/material/styles";

const About = () => {
    const gea = 'https://lh3.google.com/u/1/d/1r6WJklRTL9KWn8nPkA3ncRtqVgvrdkMG=w2000-h1250-iv1'
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 770,
                md: 1000,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Grid container id="About">
            <Grid item container
                sx={{
                    pt: '4em',
                    pb: '3em',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: 'column'
                    },
                }}
                style={{
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <Grid item
                    sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: 2.5,
                        color: '#828282',
                        [theme.breakpoints.down("sm")]: {
                            width: '100%',
                            alignItems: 'center',
                            textAlign: 'center'
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '.8em',
                            textTransform: 'uppercase',
                            letterSpacing: 4
                        }}
                    >
                        About me
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '2em',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            color: '#000000'
                        }}
                    >
                        Hi, I'm here to help you with your next project!
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '.8em',
                        }}
                    >
                        Creating end-to-end solutions to enhance performance
                        while still cratfting intuitive user-friendly web applications
                    </Typography>
                    <Grid
                        sx={{
                           
                            display: 'flex',
                            flexDirection: 'row',
                            mt: '1em'
                        }}
                    >
                        <Link
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Button
                                sx={{
                                    py: '.8em',
                                    px: '2.5em',
                                    fontWeight: 400,
                                    fontSize: '.6em',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    backgroundColor: '#000000',
                                    //transition:' box-shadow 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#1C1B1B',
                                        //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                                Contact me
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item
                    sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        [theme.breakpoints.down("sm")]: {
                            display: 'none'
                        },
                    }}
                >
                    <Avatar 
                        src={gea}
                        sx={{
                            width: '70%',
                            height: 'fit-content'
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About