import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
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
                    <Typography 
                        fontSize={'.7em'} 
                        fontWeight={500}
                        sx={{
                            '&:hover': {
                                color: '#e95b9f'
                            },
                            [theme.breakpoints.between("xs", "sm")]: {
                                display: 'none'
                            },
                        }}
                    >
                        About
                    </Typography>
                    <Typography 
                        fontSize={'.7em'} 
                        fontWeight={500}
                        sx={{
                            '&:hover': {
                                color: '#e95b9f'
                            },
                            [theme.breakpoints.between("xs", "sm")]: {
                                display: 'none'
                            },
                        }}
                    >
                        Stack
                    </Typography>
                    <Typography 
                        fontSize={'.7em'} 
                        fontWeight={500}
                        sx={{
                            '&:hover': {
                                color: '#e95b9f'
                            },
                            [theme.breakpoints.between("xs", "sm")]: {
                                display: 'none'
                            },
                        }}
                    >
                        Projects
                    </Typography>
                    <Typography 
                        fontSize={'.7em'} 
                        fontWeight={500}
                        sx={{
                            '&:hover': {
                                color: '#e95b9f'
                            },
                            [theme.breakpoints.between("xs", "sm")]: {
                                display: 'none'
                            },
                        }}
                    >
                        Resume
                    </Typography>
                    <Typography 
                        fontSize={'.7em'} 
                        fontWeight={500}
                        sx={{
                            '&:hover': {
                                color: '#e95b9f'
                            }
                        }}
                    >
                        Contact
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Nav