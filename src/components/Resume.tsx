import { Divider, Grid, Typography } from "@mui/material";

import { createTheme } from "@mui/material/styles";

const Resume = ({ education, experience }: any) => {
    const resume = [...experience, ...education]

    const midpoint = Math.ceil(resume.length / 2)

    const column1 = resume.slice(0, midpoint)
    const column2 = resume.slice(midpoint)

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 770,
                md: 835,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Grid container
            id='Resume'
            sx={{
                py: '3em'
            }}
        >
            <Grid item container
                style={{ fontFamily: 'Roboto, sans-serif' }}
                sx={{
                    gap: 4,
                    [theme.breakpoints.down("md")]: {
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    },
                }}
            >
                <Grid item
                    sx={{
                        display: 'inline-block',
                        gap: 2.5,
                        color: '#828282',                        
                        [theme.breakpoints.down("md")]: {
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
                        Resume
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '2em',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            color: '#000000'
                        }}
                    >
                        Education & Experience
                    </Typography>
                </Grid>
                <Grid item container
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 4,
                        color: '#828282',
                        [theme.breakpoints.down("md")]: {
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            gap: 1.5
                        },
                    }}
                >
                    <Grid item
                        sx={{
                            width: '44%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            textAlign: 'right',
                            [theme.breakpoints.down("md")]: {
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center'
                            },
                        }}
                    >
                        {column1.map((item: any) =>
                            <Grid
                                sx={{
                                    py: '1em',
                                }}
                            >
                                {(item.fechaFin ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {new Date(item.fechaFin).toLocaleDateString(undefined, options)}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        En curso
                                    </Typography>
                                ))}
                                {(item.posicion ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1em',
                                            color: '#e95b9f',
                                            pt: '.5em'
                                        }}
                                    >
                                        {item.posicion}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1em',
                                            color: '#e95b9f',
                                            pt: '.5em'
                                        }}
                                    >
                                        {item.nombre}
                                    </Typography>
                                ))}
                                {(item.empresa ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '.9em',
                                            pb: '.5em'
                                        }}
                                    >
                                        {item.empresa}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '.9em',
                                            pb: '.5em'
                                        }}
                                    >
                                        {item.institucion}
                                    </Typography>
                                ))}
                                {(item.nivel ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {item.nivel}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {item.descripcion}
                                    </Typography>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                    <Divider orientation="vertical" flexItem
                        sx={{
                            //clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)'
                            borderColor: '#BEBEBE',
                            borderStyle: 'dashed',
                            borderWidth: '1px',
                            [theme.breakpoints.down("md")]: {
                                display: 'none'
                            },
                        }}
                    />
                    <Grid item
                        sx={{
                            width: '44%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            [theme.breakpoints.down("md")]: {
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center'
                            },
                        }}
                    >
                        {column2.map((item: any) =>
                            <Grid
                                sx={{
                                    py: '1em',
                                }}
                            >
                                {(item.fechaFin ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {new Date(item.fechaFin).toLocaleDateString(undefined, options)}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        En curso
                                    </Typography>
                                ))}
                                {(item.posicion ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1em',
                                            color: '#e95b9f',
                                            pt: '.5em'
                                        }}
                                    >
                                        {item.posicion}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1em',
                                            color: '#e95b9f',
                                            pt: '.5em'
                                        }}
                                    >
                                        {item.nombre}
                                    </Typography>
                                ))}
                                {(item.empresa ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '.9em',
                                            pb: '.5em'
                                        }}
                                    >
                                        {item.empresa}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '.9em',
                                            pb: '.5em'
                                        }}
                                    >
                                        {item.institucion}
                                    </Typography>
                                ))}
                                {(item.nivel ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {item.nivel}
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '.8em',
                                        }}
                                    >
                                        {item.descripcion}
                                    </Typography>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Resume