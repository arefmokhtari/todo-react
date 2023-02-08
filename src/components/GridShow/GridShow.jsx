
import { Grid, Typography } from '@mui/material';

const GridShow = ({ children, title }) => (
    <Grid container>
        <Grid item sm={12} xl={12}>
            <Typography component='h1' variant="h4">{title}</Typography>
        </Grid>
        <Grid xs={12} sm={12} item lg={10} xl={10} sx={{margin: '20px auto'}}>
            {children}
        </Grid>
    </Grid>
);

export default GridShow;