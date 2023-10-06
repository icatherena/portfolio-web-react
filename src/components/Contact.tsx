import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { createTheme } from "@mui/material/styles";

const Contact = ({ location, email, github, linkedIn }: any) => {
    const form = useRef<HTMLFormElement | null>(null);
    let isResult
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('service_6vc7qap', 'template_gvv7vd6', form.current as HTMLFormElement, 'njQhR9L7okmJ6ErLS')
                .then((result: any) => {
                    console.log(result.text);
                    toast.success('Message successfully delivered');
                }, (error: any) => {
                    console.log(error.text);
                    toast.error('Something went wrong. Try again later!');
                });
        }
    };

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 420,
                sm: 650,
                md: 835,
                lg: 900,
                xl: 1536,
            },
        },
    });

    return (
        <Grid container
            id='Contact'
            sx={{
                py: '3em',
                gap: 2.5,
                scrollBehavior: 'smooth'
            }}
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            <Grid item
                sx={{
                    width: '65%',
                    display: 'inline-block',
                    //color: '#828282',
                    [theme.breakpoints.down("lg")]: {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    },
                }}
            >
                <Typography
                    sx={{
                        fontSize: '2em',
                        fontWeight: 600,
                        color: '#000000'
                    }}
                >
                    Do you have a project in mind?
                </Typography>
                <Typography
                    sx={{
                        color: '#e95b9f',
                        fontSize: '2em',
                        fontWeight: 600,
                    }}
                >
                    Drop me a line!
                </Typography>
            </Grid>
            <ToastContainer 
                position="bottom-right" 
                autoClose={3000} 
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 600,
                    fontSize: '.8em',
                }}
            />
            <Grid item container
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    /* [theme.breakpoints.down("xl")]: {
                        gap: 8
                    }, */
                    [theme.breakpoints.down("lg")]: {
                        justifyContent: 'center',
                        gap: 6
                    },
                }}
            >
                <form ref={form} onSubmit={sendEmail}>
                    <Grid item
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            //alignItems: 'center',
                            gap: 4
                        }}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 3,
                                [theme.breakpoints.down("sm")]: {
                                    flexDirection: 'column'
                                },
                            }}
                        >
                            <Box
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        pb: '1em'
                                    }}
                                >
                                    Name:
                                </Typography>
                                <TextField
                                    name="user_name"
                                    variant="outlined"
                                    placeholder="Your Name"
                                    type="text"
                                    size="small"
                                    fullWidth
                                    style={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8em'
                                    }}
                                />
                            </Box>
                            <Box
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        pb: '1em'
                                    }}
                                >
                                    Lastname:
                                </Typography>
                                <TextField
                                    name="user_lastname"
                                    variant="outlined"
                                    placeholder="Your Lastname"
                                    type="text"
                                    size="small"
                                    fullWidth
                                    style={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8em'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 3,
                                [theme.breakpoints.down("sm")]: {
                                    flexDirection: 'column'
                                },
                            }}
                        >
                            <Box
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        pb: '1em'
                                    }}
                                >
                                    Subject:
                                </Typography>
                                <TextField
                                    name="subject"
                                    variant="outlined"
                                    placeholder="The Subject"
                                    type="text"
                                    size="small"
                                    fullWidth
                                    style={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8em'
                                    }}
                                />
                            </Box>
                            <Box
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        pb: '1em'
                                    }}
                                >
                                    Email:
                                </Typography>
                                <TextField
                                    required
                                    name="user_email"
                                    variant="outlined"
                                    placeholder="Your Email"
                                    type="email"
                                    size="small"
                                    fullWidth
                                    style={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8em'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            width={'100%'}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '.8em',
                                    pb: '1em'
                                }}
                            >
                                Message:
                            </Typography>
                            <TextField
                                required
                                name="message"
                                variant="outlined"
                                multiline
                                rows={4}
                                placeholder="Write your message here"
                                type="text"
                                size="small"
                                fullWidth
                                style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '.8em'
                                }}
                            />
                        </Grid>
                        <Grid
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                [theme.breakpoints.down("sm")]: {
                                    justifyContent: 'center'
                                },
                            }}
                        >
                            <Button
                                type="submit" value="Send"
                                sx={{
                                    py: '.8em',
                                    px: '2.5em',
                                    fontWeight: 400,
                                    fontSize: '.6em',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    backgroundColor: '#000000',
                                    '&:hover': {
                                        backgroundColor: '#1C1B1B',
                                    }
                                }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid item container
                    sx={{
                        width: '40%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        color: '#828282',
                        gap: 4,
                        [theme.breakpoints.down("xl")]: {
                            //width: '100%',
                            height: 'fit-content'
                        },
                        [theme.breakpoints.down("xs")]: {
                            width: '100%',
                            height: 'fit-content',
                            justifyContent: 'flex-start'
                        },
                    }}
                >
                    <Grid item
                        sx={{
                            gap: 2.5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: 2,
                                py: '1em'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '2.5em',
                                    width: '2.5em',
                                    borderRadius: '50%',
                                    border: '0.5px solid #BEBEBE',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'small',
                                    color: '#000'
                                }}
                            >
                                <LocationOnIcon fontSize='small' />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'left'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        color: '#000'
                                    }}
                                >
                                    Location:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '.6em',
                                    }}
                                >
                                    {(location.map((item: any) => item)).join(', ')}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: 2,
                                py: '1em'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '2.5em',
                                    width: '2.5em',
                                    borderRadius: '50%',
                                    border: '0.5px solid #BEBEBE',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'small',
                                    color: '#000'
                                }}
                            >
                                <EmailIcon fontSize='small' />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'left'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '.8em',
                                        color: '#000'
                                    }}
                                >
                                    Email:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '.6em',
                                        color: '#000'
                                    }}
                                >
                                    {email}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2.5
                        }}
                    >
                        <Link href={linkedIn} target={'_blank'}>
                            <Box
                                sx={{
                                    height: '2em',
                                    width: '2em',
                                    borderRadius: '50%',
                                    border: '0.5px solid #BEBEBE',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'small',
                                    color: '#000',
                                    '&:hover': {
                                        color: '#e95b9f',
                                        border: '0.5px solid #e95b9f',
                                    }
                                }}
                            >

                                <LinkedInIcon fontSize='small' />
                            </Box>
                        </Link>
                        <Link href={github} target={'_blank'}>
                            <Box
                                sx={{
                                    height: '2em',
                                    width: '2em',
                                    borderRadius: '50%',
                                    border: '0.5px solid #BEBEBE',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'small',
                                    color: '#000',
                                    '&:hover': {
                                        color: '#e95b9f',
                                        border: '0.5px solid #e95b9f',
                                    }
                                }}
                            >
                                <GitHubIcon fontSize='small' />
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact