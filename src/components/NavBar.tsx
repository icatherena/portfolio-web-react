import { Box, Grid, Link, Typography } from '@mui/material';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const NavBar = ({linkedIn, github}: any) => {
    return (
        <Grid container
            sx={{
                w: '100vw',
                justifyContent: 'center',
            }}
        >
            <Grid item container
                sx={{
                    w: '100vw',
                    py: '2em',
                    px: '2em',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Grid item
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 13
                    }}
                >
                    <Grid>
                        <Typography
                            sx={{
                                color: '#f9b343',
                                fontWeight: 900,
                                variant: 'h2',
                                fontSize: '1.1em',
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            [ CB  ]
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignContent: 'center',
                            gap: 4
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#797979',
                                fontWeight: 600,
                                variant: 'h3',
                                fontSize: '.9em',
                                '&:hover': {
                                    color: '#171717'
                                }
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            About
                        </Typography>
                        <Typography
                            sx={{
                                color: '#797979',
                                fontWeight: 600,
                                variant: 'h3',
                                fontSize: '.9em',
                                '&:hover': {
                                    color: '#171717'
                                }
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            Education
                        </Typography>
                        <Typography
                            sx={{
                                color: '#797979',
                                fontWeight: 600,
                                variant: 'h3',
                                fontSize: '.9em',
                                '&:hover': {
                                    color: '#171717'
                                }
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            Experience
                        </Typography>
                        <Typography
                            sx={{
                                color: '#797979',
                                fontWeight: 600,
                                variant: 'h3',
                                fontSize: '.9em',
                                '&:hover': {
                                    color: '#171717'
                                }
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            Projects
                        </Typography>
                        <Typography
                            sx={{
                                color: '#797979',
                                fontWeight: 600,
                                variant: 'h3',
                                fontSize: '.9em',
                                '&:hover': {
                                    color: '#171717'
                                }
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            Contact
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        mr: '.5em',
                        gap: 1
                    }}
                >
                    <Link href={linkedIn} target={'_blank'}>
                        <Box
                            sx={{
                                backgroundColor: '#f9b343',
                                color: '#f5f5f5',
                                width: '1.5em',
                                height: '1.5em',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: '#fd9902'
                                },
                                '&:focus': {
                                    backgroundColor: '#fd9902'
                                }
                            }}
                        >
                            <FaLinkedinIn
                                style={{
                                    fontSize: 'small'
                                }}
                            />
                        </Box>
                    </Link>
                    <Link href={github} target={'_blank'}>
                        <Box
                            sx={{
                                backgroundColor: '#f9b343',
                                color: '#f5f5f5',
                                width: '1.5em',
                                height: '1.5em',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: '#fd9902'
                                }
                            }}
                        >
                            <FaGithub
                                style={{
                                    fontSize: 'small'
                                }}
                            />
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NavBar;

        {/* <Grid container
            sx={{
                background: '#fcfbff',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                py: '1.5em',
                px: '11em',
                width: '100vw'
            }}
        >
            <Grid item>
                <Typography
                    color="#5e5d62"
                    fontWeight={600}
                    fontSize={'.9em'}
                    variant={'h1'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Catherena Beresovsky
                </Typography>
            </Grid>
            <Grid item
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '2em'
                }}
            >
                <Typography
                    color="#715a8a"
                    fontWeight={600}
                    fontSize={'.9em'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Home
                </Typography>
                <Typography
                    color="#5e5d62"
                    fontWeight={600}
                    fontSize={'.9em'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    About
                </Typography>
                <Typography
                    color="#5e5d62"
                    fontWeight={600}
                    fontSize={'.9em'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Experience
                </Typography>
                <Typography
                    color="#5e5d62"
                    fontWeight={600}
                    fontSize={'.9em'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Projects
                </Typography>
                <Typography
                    color="#5e5d62"
                    fontWeight={600}
                    fontSize={'.9em'}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Contact me
                </Typography>
            </Grid>
        </Grid> */}