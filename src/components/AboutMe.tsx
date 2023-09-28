import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

interface Persona {
    name: string;
    lastName: string;
    career: string;
    summary: string;
}

const AboutMe = ({name, lastName, career, summary}: Persona) => {
    return (
        <Grid container
            sx={{
                w: '100vw',
                h: '100vh',
                justifyContent: 'center',
            }}
        >
            <Grid item container
                sx={{
                    w: '100vw',
                    py: '2em',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    gap: 9
                }}
            >
                <Grid item
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '40vw',
                        height: '90vh',
                        gap: 2
                    }}
                >
                    <Typography
                        sx={{
                            color: '#171717',
                            fontWeight: 900,
                            lineHeight: '1'
                        }}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        variant={'h1'}
                    >
                        {name} <span/> {lastName} 
                    </Typography>
                    <Typography
                        sx={{
                            color: '#171717',
                            fontWeight: 900,
                            //lineHeight: '1'
                        }}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        variant={'h5'}
                    >
                        {career}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#797979',
                            fontWeight: 500,
                            //lineHeight: '1'
                            width: '70%'
                        }}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        variant={'body2'}
                    >
                        {summary}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            py: '1em'
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#f9b343',
                                color: '#f5f5f5',
                                '&:hover': {
                                    backgroundColor: '#fd9902'
                                },
                                width: '30%',
                                py: '1em',
                                borderRadius: 0
                            }}
                            size='large'
                            style={{
                                letterSpacing: 2,
                                fontSize: 'small',
                            }}
                        >
                            Hire me
                        </Button>
                    </Box>
                </Grid>
                <Grid item
                     sx={{
                        height: '80vh',
                        width: '50vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >

                            <Avatar
                                sx={{
                                    height: '60%',
                                    width: '100%'
                                }}
                            />

                </Grid>
            </Grid>
        </Grid>
    );
}
    
export default AboutMe;
    
    {/* <Grid container
        sx={{
            background: '#fcfbff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            py: '4em',
            px: '11em',
            width: '100vw',
            height: '80vh',
        }}
    >
        <Grid item
            display={'flex'}
            flexDirection={'column'}
            alignContent={'space-around'}
            gap={2}
            color={'#401f60'}
        >
            <EmailRoundedIcon></EmailRoundedIcon>
            <LinkedInIcon></LinkedInIcon>
            <GitHubIcon></GitHubIcon>
        </Grid>
        <Grid item
            width={'50vh'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Typography
                fontWeight={600}
                variant='h3'
                style={{ fontFamily: 'Poppins, sans-serif' }}
                lineHeight={1.5}
            >
                Hi, I'm
                Catherena
            </Typography>
            <Typography
                fontWeight={400}
                variant='h6'
                style={{ fontFamily: 'Poppins, sans-serif' }}
            >
                I'm a full-stack web developer
            </Typography>
            <Typography
                color={'#9693a2'}
                fontWeight={400}
                //textTransform={'full-width'}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                my={1}
            >
                Creating end-to-end solutions to enhance performance
                while cratfting intuitive user-friendly web applications
            </Typography>
            <Box>
                <Button
                    sx={{
                        backgroundColor: '#401f60',
                        borderRadius: '8px',
                        color: '#fcfbff',
                        gap: 1,
                        py: '1em',
                        px: '1.5em',
                        my: '1em',
                        //fontSize: '.8em',
                        textTransform: 'capitalize',
                    }}
                >
                    Contact me
                    <SendRoundedIcon fontSize="small"/>
                </Button>
            </Box>
            <Box>
                <Button
                    sx={{
                        color: '#69696d',
                        gap: 1,
                        textTransform: 'capitalize'
                    }}
                >
                    <MouseOutlinedIcon fontSize="small"
                        sx={{
                            color:'#401f60'
                        }}
                    />
                    Scroll down
                </Button>
            </Box>
        </Grid>
        <Grid item>
            <Avatar
                sx={{
                    width: '50vh',
                    height: '50vh',
                    boxSizing: 'border-box',
                }}
            />
        </Grid>
    </Grid > */}