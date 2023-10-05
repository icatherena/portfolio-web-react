import { Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Grid container
            sx={{
                mt: '1em',
                py: '1em',
                color: '#fff',
                backgroundColor: '#000'
            }}
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            <Grid item
                sx={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: '.8em',
                        textTransform: 'capitalize'
                    }}
                >
                    © 2023 Beresovsky —
                    All rights reserved
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer