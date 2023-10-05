import { Grid, Link, Typography } from "@mui/material";
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
                        justifyContent: 'space-between'
                    },
                }}
                style={{
                    //letterSpacing: 2,
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <Grid item>
                    <Typography fontSize={'.7em'} fontWeight={500}>[ CB ]</Typography>
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
                        href="#About"
                        sx={{                   
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                color: '#e95b9f',
                            },
                        }}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            About
                        </Typography>
                    </Link>
                    <Link 
                        href="#Stack"
                        sx={{                   
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                color: '#e95b9f',
                            },
                        }}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Stack
                        </Typography>
                    </Link>
                    <Link 
                        href="#Resume"
                        sx={{                   
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                color: '#e95b9f',
                            },
                        }}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Resume
                        </Typography>
                    </Link>
                    <Link 
                        href="#Projects"
                        sx={{                   
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                color: '#e95b9f',
                            },
                        }}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
                            sx={{
                                [theme.breakpoints.between("xs", "sm")]: {
                                    display: 'none'
                                },
                            }}
                        >
                            Projects
                        </Typography>
                    </Link>
                    <Link 
                        href="#Contact"
                        sx={{                   
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                color: '#e95b9f',
                            },
                        }}
                    >
                        <Typography 
                            fontSize={'.7em'} 
                            fontWeight={500}
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