import { Grid, Typography, ImageList, ImageListItem, Box } from "@mui/material"

const TStack = ({ tech }: any) => {
    return (
        <Grid container>
            <Grid item container>
                <Grid item>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                    <Box>
                        <ImageList variant="masonry" cols={3}>
                            {tech.map((item: any) => (
                                <ImageListItem key={item.id}
                                    sx={{
                                        p: '1em',
                                        height: 300
                                    }}
                                >
                                    <img
                                        srcSet={`${item.image}?w=400&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.image}?w=400&fit=crop&auto=format`}
                                        alt={item.nombre}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TStack