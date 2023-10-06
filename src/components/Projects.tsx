import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

import { createTheme } from "@mui/material/styles";

const Projects = ({ projects }: any) => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 835,
                md: 920,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Grid container
            id='Projects'
            style={{ fontFamily: 'Roboto, sans-serif' }}
            sx={{
                py: '3em',
                gap: 6
            }}
        >
            <Grid item
                sx={{
                    width: '100%',
                    display: 'inline-block',
                    textAlign: 'right',
                    gap: 3,
                    color: '#828282',
                    [theme.breakpoints.down("sm")]: {
                        alignItems: 'center',
                        textAlign: 'center',
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
                    Respositories
                </Typography>
                <Typography
                    sx={{
                        fontSize: '2em',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        color: '#000000'
                    }}
                >
                    Projects
                </Typography>
            </Grid>
            <Grid item container
                xs={12}
                sx={{
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    [theme.breakpoints.down("md")]: {
                        gap: 2
                    },
                }}
            >
                {projects.map((item: any) =>
                    <Link 
                        href={item.url}
                        target={'_blank'}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                                cursor: 'pointer',
                                color: '#000'
                            }
                        }}    
                    >
                        <Grid item
                            key={item.id}
                        >
                            <Card
                                sx={{
                                    maxWidth: 290,
                                    "&:hover": {
                                        boxShadow: 5,
                                    },
                                    [theme.breakpoints.down("md")]: {
                                        maxWidth: 270
                                    },
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        height: 140
                                    }}
                                    image={item.image}
                                    title={item.nombre}
                                />
                                <CardContent
                                    sx={{
                                        color: '#828282',
                                        px: '1em'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1em',
                                            py: '1em',
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: '.9em'
                                            },
                                        }}
                                    >
                                        {item.nombre}
                                    </Typography>
                                    <Typography
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '.7em',
                                            }}
                                        >
                                        {(item.tecnologia.map((item: any) => item.nombre)).join(", ")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Link>
                )}
            </Grid>
        </Grid>
    )
}

export default Projects