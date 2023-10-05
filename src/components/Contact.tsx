import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = ({ location, email, github, linkedIn }: any) => {
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
            <Grid item container
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Grid item
                    sx={{
                        width: '55%',
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
                            gap: 3
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
                            gap: 3
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
                                variant="outlined"
                                placeholder="The Subject"
                                type="email"
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
                        }}
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
                                '&:hover': {
                                    backgroundColor: '#1C1B1B',
                                }
                            }}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container
                    sx={{
                        width: '40%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        color: '#828282',
                        gap: 4
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