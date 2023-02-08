
import { TextField, Typography, styled, Button, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const LabelCon = styled(props => <Typography component='h1' {...props} />)(({}) => ({
    width: '90%',
    margin: '5px auto',
    textAlign: 'center',
    color: '#71D0A0',
    fontSize: '18px',
    borderBottom: '2px solid #71D0A0',
}));

export const TextLabel = styled(props => <TextField variant='standard' {...props} />)(({error}) => ({
    margin: '2px auto !important',
    width: '90%',
    '& .muirtl-whebh7-MuiInputBase-root-MuiInput-root:after': {
        borderBottom: `2px solid ${error?'#d32f2f':'#71D0A0'}`,
    },
    '& .Mui-focused': {
        '& .MuiSvgIcon-root': {
            color: `${error?'#d32f2f':'#71D0A0'} !important`,
        },
    },
    '& label.Mui-focused': {
        color: error?'#d32f2f':'#71D0A0',
        '& .MuiSvgIcon-root': {
            color: `${error?'#d32f2f':'#71D0A0'} !important`,
        },
    },
}));

const ContectUsContect = ({ formik }) => (
    <Grid container component='form' onSubmit={formik.handleSubmit}>
        <LabelCon>
            راه های ارتباطی
        </LabelCon>
        <Grid item xs={11} sx={{margin: 'auto'}} display='flex'>
            <Grid item xs={6} display='flex' justifyContent='center'>
                <TextLabel 
                    InputProps={{endAdornment: <InstagramIcon sx={{color: 'rgba(0, 0, 0, 0.42)'}} />,}}
                    label='اینستاگرام'
                    {... formik.getFieldProps('instagram') }
                    error={formik.touched.instagram && formik.errors.instagram != null} 
                    helperText={formik.touched.instagram && formik.errors.instagram}

                />
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='center'>
                <TextLabel 
                    InputProps={{endAdornment: <PhoneEnabledIcon sx={{color: 'rgba(0, 0, 0, 0.42)'}} />,}}
                    label='شماره'
                    {... formik.getFieldProps('phone_number') }
                    error={formik.touched.phone_number && formik.errors.phone_number != null} 
                    helperText={formik.touched.phone_number && formik.errors.phone_number}
                />
            </Grid>
        </Grid>
        <Grid item xs={11} sx={{margin: 'auto'}}>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <TextLabel 
                    InputProps={{endAdornment: <AlternateEmailIcon sx={{color: 'rgba(0, 0, 0, 0.42)'}} />,}}
                    sx={{width: '96%'}}
                    label='ایمیل'
                    {... formik.getFieldProps('email') }
                    error={formik.touched.email && formik.errors.email != null} 
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <TextLabel 
                    sx={{width: '96%'}}
                    InputProps={{endAdornment: <BusinessIcon sx={{color: 'rgba(0, 0, 0, 0.42)'}} />,}}
                    label='آدرس'
                    {... formik.getFieldProps('address') }
                    error={formik.touched.address && formik.errors.address != null} 
                    helperText={formik.touched.address && formik.errors.address}
                />
            </Grid>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
            <Button variant='contained' sx={{background: '#71D0A0 !important',margin: '5px auto'}} type='submit'>اعمال تغییر</Button>
        </Grid>
    </Grid>
);

export default ContectUsContect;