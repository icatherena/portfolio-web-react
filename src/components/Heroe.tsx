import { Avatar, Box, Button, Grid, Link, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const Heroe = ({ name, lastName, career, summary, resume }: any) => {
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
        <Grid container>
            <Grid item container
                sx={{
                    py: '2em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    [theme.breakpoints.down("md")]: {
                        flexDirection: 'column'
                    },
                }}
            >
                <Grid item
                    sx={{
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        [theme.breakpoints.down("md")]: {
                            width: '100%',
                            py: '2em'
                        },
                    }}
                >
                    <Box
                    >
                        <Avatar
                        />
                    </Box>
                </Grid>
                <Grid item
                    sx={{
                        width: '50%',
                        height: '60vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: '#828282',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                        },
                        [theme.breakpoints.down("sm")]: {
                            alignItems: 'center',
                            justifyContent: 'center'
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
                        {career}
                    </Typography>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContext: 'flex-start',
                            pt: '.5em',
                            pb: '1.5em',
                            [theme.breakpoints.down("sm")]: {
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '2.5em',
                                fontWeight: 700
                            }}
                        >
                            Hello, I'm
                        </Typography>
                        <Typography
                            variant={'h1'}
                            color={'#000000'}
                            sx={{
                                fontSize: '2.5em',
                                fontWeight: 700,
                                [theme.breakpoints.down("sm")]: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                            }}
                        >
                            {name} <span /> {lastName}!
                        </Typography>
                    </Grid>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '.8em',
                            [theme.breakpoints.down("sm")]: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                        }}
                    >
                        {summary}
                    </Typography>
                    <Grid
                        sx={{
                           
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                            mt: '2em'
                        }}
                    >
                            <Button
                                href="#Contact"
                                sx={{
                                    py: '.8em',
                                    px: '2.5em',
                                    fontWeight: 400,
                                    fontSize: '.6em',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    backgroundColor: '#000000',
                                    scrollBehavior: 'smooth',
                                    //transition:' box-shadow 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#1C1B1B',
                                        //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                                Hire Me
                            </Button>  
                            <Link href={resume} download>
                                <Button
                                    sx={{
                                        py: '.8em',
                                        px: '2.5em',
                                        fontWeight: 400,
                                        fontSize: '.6em',
                                        textTransform: 'capitalize',
                                        color: '#000000',
                                        backgroundColor: '#BEBEBE',
                                        //transition:' box-shadow 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#ADADAD',
                                            //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                                        }
                                    }}
                                >
                                    Download CV
                                </Button>
                            </Link>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Heroe