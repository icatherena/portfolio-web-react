import { Box, Button, Card, Grid, Typography } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from "react";

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

    //console.log(isFramework)
    return (
        <Grid container>
            <Grid item container
                sx={{
                    display: 'inline-block',
                }}
            >
                <Typography
                    sx={{
                        lineHeight: 3,
                        textTransform: 'uppercase',
                    }}
                    style={{
                        letterSpacing: 2,
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: 'small',
                    }}
                >
                    My services
                </Typography>
                <Typography
                    variant="h4"
                    fontWeight='700'
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                    What I do —
                </Typography>
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
                            /* '&:hover': {
                                backgroundColor: '#fd9902'
                            }, */
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
            </Grid>
            <Grid item container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >
                <Grid item
                    sx={{
                        display: 'inline-block',
                        textAlign: 'right'
                    }}
                >
                    <Typography
                        sx={{
                            lineHeight: 3,
                            textTransform: 'uppercase',
                        }}
                        style={{
                            letterSpacing: 2,
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: 'small',
                        }}
                    >
                        My tech stack
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight='700'
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                        — Languages & Frameworks
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container
                xs={12}
                sx={{
                    py: '2em',
                }}
            >
                <Grid item
                    xs={3}
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
                            color: '#f9b343',
                            backgroundColor: '#f5f5f5',
                            /* '&:hover': {
                                color: '#fd9902',
                                backgroundColor: '#f1f1f1',
                            }, */
                            //border: '1px solid #f9b343',
                            borderRadius: 0,
                            boxShadow: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'initial',
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
                                    alignItems: 'initial'
                                }}
                            >
                                <Typography variant="body1" fontWeight={700}>
                                    Back End:
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {isBackEnd.map((tech: any) =>
                    <Grid item
                        key={tech.id}
                        xs={3}
                        sx={{
                            display: 'flex-inline',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Card
                            sx={{
                                //minWidth: 225,
                                minHeight: 150,
                                backgroundColor: '#f9b343',
                                color: '#f5f5f5',
                                '&:hover': {
                                    backgroundColor: '#fd9902'
                                },
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
                                        alignItems: 'baseline'
                                    }}
                                >
                                    <Typography variant="h5" color={'#f5f5f5'}>
                                        {tech.nivel}
                                    </Typography>
                                    <Typography variant="body1">
                                        %
                                    </Typography>
                                </Grid>
                                <Typography
                                    sx={{
                                        mb: 1.5,
                                        color: '#f5f5f5',
                                    }}
                                >
                                    {tech.nombre}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
            <Grid item container
                xs={12}
                sx={{
                    py: '2em',
                }}
            >
                <Grid item
                    xs={3}
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
                            color: '#f9b343',
                            backgroundColor: '#f5f5f5',
                            /* '&:hover': {
                                color: '#fd9902',
                                backgroundColor: '#f1f1f1',
                            }, */
                            //border: '1px solid #f9b343',
                            borderRadius: 0,
                            boxShadow: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'initial',
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
                                    alignItems: 'initial'
                                }}
                            >
                                <Typography variant="body1" fontWeight={700}>
                                    Front End:
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {isFrontEnd.map((tech: any) =>
                    <Grid item
                        key={tech.id}
                        xs={3}
                        sx={{
                            display: 'flex-inline',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Card
                            sx={{
                                //minWidth: 225,
                                minHeight: 150,
                                backgroundColor: '#f9b343',
                                color: '#f5f5f5',
                                '&:hover': {
                                    backgroundColor: '#fd9902'
                                },
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
                                        alignItems: 'baseline'
                                    }}
                                >
                                    <Typography variant="h5" color={'#f5f5f5'}>
                                        {tech.nivel}
                                    </Typography>
                                    <Typography variant="body1">
                                        %
                                    </Typography>
                                </Grid>
                                <Typography
                                    sx={{
                                        mb: 1.5,
                                        color: '#f5f5f5',
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