import { Box, Button, Card, Grid, Typography } from "@mui/material";

const Skills = ({tech}: any) => {
    return (
        <Grid container>
            <Grid item container
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
                    {tech.map((tech: any) =>
                    <Box
                    sx={{
                            backgroundColor: '#f9b343',
                            color: '#f5f5f5',
                            '&:hover': {
                                backgroundColor: '#fd9902'
                            },
                        }}

                    >
                        
                            <Typography>{tech.id}</Typography> 
                            <Typography>{tech.nombre}</Typography>      
                                            
                    </Box>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Skills