
import { Grid, styled, Typography } from '@mui/material';

const ShowM = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '22px'
    },
}));

const EditBox = ({ children, title, ...kwargs }) => (
    <Grid container>
        <Grid item xs={12}>
        <ShowM component='h1' variant="h4">{title}</ShowM>
        </Grid>
        <Grid item {... kwargs} xs={12} sm={12} lg={10} xl={10} sx={{margin: '20px auto',borderRadius: '4px',boxShadow: '0 0 6px 0 rgba(0,0,0,.2)'}}>
            
            {children}
            
        </Grid>
    </Grid>
);

export default EditBox;