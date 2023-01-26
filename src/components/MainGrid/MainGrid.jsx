// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Grid  from '@mui/material/Grid';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const MainGrid = ({ children, marginTop,... kwargs }) => (
    <Grid container maxWidth='xl' sx={{margin: 'auto'}}>
        <Grid item xs={11} sx={{margin: 'auto', marginTop}}>
            <Grid container {...kwargs}>
                {children}
            </Grid>
        </Grid>
    </Grid>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default MainGrid;