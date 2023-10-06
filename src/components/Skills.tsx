import { Card, CardContent, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import { createTheme } from "@mui/material/styles";

const Skills = ({ tech }: any) => {
    /* const [isLanguage, setIsLanguage] = useState([])
    const [isFramework, setIsFramework] = useState([]) */
    const [isBackEnd, setIsBackEnd] = useState([])
    const [isFrontEnd, setIsFrontEnd] = useState([])

    const backEnd = () => {
        const filtered = tech.filter((item: any) => item.backEnd === true)
        setIsBackEnd(filtered.map((item: any) => item))
        /* if (filtered.filter((item: any) => item.lenguaje === true)) { 
            const filtered = tech.filter((item: any) => item.lenguaje === true)
            setIsLanguage(filtered.map((item: any) => item))
        }
        if (filtered.filter((item: any) => item.framework === true)) {
            const filtered = tech.filter((item: any) => item.framework === true)
            setIsFramework(filtered.map((item: any) => item))
        } */
    }

    const frontEnd = () => {
        const filtered = tech.filter((item: any) => item.backEnd === false)
        setIsFrontEnd(filtered.map((item: any) => item))
    }

    useEffect(() => {
        backEnd()
        frontEnd()
    }, [tech])

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 770,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Grid container
            id="Stack"
            sx={{
                py: '3em',
                color: '#828282',
                gap: 4
            }}
            style={{
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            <Grid item container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    [theme.breakpoints.down("sm")]: {
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    },
                }}
            >
                <Grid item
                    sx={{
                        display: 'inline-block',
                        textAlign: 'right',
                        gap: 2.5,
                        [theme.breakpoints.down("sm")]: {
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
                            fontWeight: 400,
                            fontSize: '.8em',
                            textTransform: 'uppercase',
                            letterSpacing: 4
                        }}
                    >
                        Tech stack
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '2em',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            color: '#000000'
                        }}
                    >
                        Languages & Frameworks
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                {tech.map((tech: any) =>
                    <Grid item
                        key={tech.id}
                        md={3}
                        sm={4}
                        xs={6}
                        sx={{
                            display: 'flex-inline',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                        <Card
                            sx={{
                                minHeight: 150,
                                borderRadius: 0,
                                boxShadow: 0,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#fff',
                                m: '1px',
                                backgroundColor: '#000',
                                '&:hover': {
                                    color: '#e95b9f',
                                    cursor: 'pointer'
                                },
                            }}
                        >
                            <CardContent>
                                <Grid
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                    }}
                                >
                                    <Typography variant="h5">
                                        {tech.nivel}
                                    </Typography>
                                    <Typography variant="body1">
                                        %
                                    </Typography>
                                </Grid>
                                <Typography
                                    sx={{
                                        mb: 1.5,
                                    }}
                                >
                                    {tech.nombre}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}

export default Skills

{/* <Grid item container
sx={{
    display: 'inline-block'
}}
>
<Grid item
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 2.5,
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
        Services
    </Typography>
    <Typography
        sx={{
            fontSize: '2em',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: '#000000'
        }}
    >
        What I do —
    </Typography>
</Grid>
</Grid>
<Grid item container
sx={{
    py: '3em',
}}
>
<Grid item
    xs={12}
    sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    <Card
        sx={{
            minWidth: 250,
            minHeight: 150,
            backgroundColor: '#f9b343',
            color: '#f5f5f5',
            border: '1px solid #f9b343',
            borderRadius: 0,
            boxShadow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
    >
        <CardContent>
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1" color={'#f5f5f5'} fontWeight={700}>
                    Web Development:
                </Typography>
            </Grid>
        </CardContent>
    </Card>
    <Card
        sx={{
            minWidth: 250,
            minHeight: 150,
            color: '#f9b343',
            backgroundColor: '#f5f5f5',
            '&:hover': {
                color: '#fd9902',
                backgroundColor: '#f1f1f1',
            },
            border: '1px solid #f9b343',
            borderRadius: 0,
            boxShadow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
    >
        <CardContent>
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1" fontWeight={700}>
                    Back End
                </Typography>
            </Grid>
        </CardContent>
    </Card>
    <Card
        sx={{
            minWidth: 250,
            minHeight: 150,
            color: '#f9b343',
            backgroundColor: '#f5f5f5',
            '&:hover': {
                color: '#fd9902',
                backgroundColor: '#f1f1f1',
            },
            border: '1px solid #f9b343',
            borderRadius: 0,
            boxShadow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
    >
        <CardContent>
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1" fontWeight={700}>
                    Front End
                </Typography>
            </Grid>
        </CardContent>
    </Card>
</Grid>
</Grid> */}