import { Divider, Grid, Typography } from "@mui/material";
import exp from "constants";
import { useState } from "react";

const Resume = ({education, experience}: any) => {

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <Grid container
            sx={{
                py: '3em'
            }}
        >
            <Grid item container
                style={{ fontFamily: 'Roboto, sans-serif' }}
                gap={4}
            >
                <Grid item
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
                            fontSize: 'small',
                        }}
                    >
                        Resume
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight='700'
                    >
                        Education & Experience —
                    </Typography>
                </Grid>
                <Grid item container
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {experience.map((item: any) =>
                        <Grid item key={item.id}
                            sx={{
                                width: '40%',
                                //height: '100vh',
                                alignItems: 'flex-end',
                                textAlign: 'right',
                                gap: .5
                            }}
                        >
                            <Typography>{new Date(item.fechaInicio).toLocaleDateString(undefined, options)} — {new Date(item.fechaFin).toLocaleDateString(undefined, options)}</Typography>
                            <Typography
                                variant="body1"
                                fontWeight='500'
                            >
                                {item.posicion}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontWeight='500'
                            >
                                {item.empresa}
                            </Typography>
                            <Typography>{item.descripcion}</Typography>
                        </Grid>
                    )}
                    <Divider orientation="vertical" flexItem />
                    <Grid
                        sx={{
                            width: '45%',
                            height: 'container',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            gap: .5,
                        }}
                    >
                    {education.map((item: any) =>
                        <Grid item key={item.id}
                            sx={{
                                marginBottom: item.id < education.length ? '32px' : '0'
                            }}
                        >
                            {(item.finalizado ? (
                                <Typography>
                                    {new Date(item.fechaFin).toLocaleDateString(undefined, options)}
                                </Typography>
                                ) : (
                                <Typography>
                                    En curso
                                </Typography>
                                ))}
                            <Typography
                                variant="body1"
                                fontWeight='500'
                            >
                                {item.nombre}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontWeight='500'
                            >
                                {item.institucion}
                            </Typography>
                            <Typography
                            >
                                {item.nivel}
                            </Typography>
                        </Grid>
                    )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Resume