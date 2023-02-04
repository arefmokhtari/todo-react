
import { Grid, Box, Typography, styled, Button, IconButton } from '@mui/material';

export const BoxShow = styled(props => <Box {...props} />)(({}) => ({
    cursor: 'pointer',
    color: '#ACABAB',
    display: 'block',
    paddingBottom: '28px',
    borderBottom: '1px solid #D9D9D9',
    marginBottom: '20px',
}));
export const LabelShow = styled(props => <Typography component='h1' {...props} />)(({theme}) => ({
    color: '#4DC488',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '213.02%',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
        content: '""',
        width: '5px',
        height: '36px',
        backgroundColor: '#4DC488',
        display: 'inline-block',
        borderRadius: '2.5px',
        marginRight: '10px',
    },
    [theme.breakpoints.down('md')]: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '213.02%',
        marginBottom: '10px',
    },
}));

export const BoxImage = styled(Box)(({theme}) => ({
    width: '150px',
    height: '126px',
    background: '#4DC488',
    '& img':{
        opacity: .6,
    },
    borderRadius: '20px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        width: '76.19px',
        height: '70px',
    },
}));

export const BoxImportantImage = styled(Box)(({}) => ({
    width: '100%',
    height: '442px',
    background: '#4DC488',
    '& img':{
        opacity: .6,
    },
    borderRadius: '20px',
    margin: 'auto',
    overflow: 'hidden',
}));
export const ContiBtn = styled(props => <Button variant='outlined' {...props}/>)(({}) => ({
    width: '100%',
    height: '64px',
    border: '2px solid #4DC488 !important',
    borderRadius: '8px',
    color: '#4DC488',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '213.02%',

}));

export const GridSlider = styled(props => <Grid item xs={12} {...props} />)(({theme}) => ({
    height: '344px',
    border: '2px solid #EDEDED',
    borderRadius: '24px',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    margin: '80px auto',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        height: '208px',
    },
}));

export const ForwardSlider = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    top: '45%',
    [theme.breakpoints.down('md')]: {
        top: '42%',
    },
}));

export const BoxParse = styled(Box)(({theme}) => ({
    width: 'calc(95% - 126px)', 
    marginLeft: '10px', 
    [theme.breakpoints.down('md')]: {
        '& *': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '155%',
            padding: '0',
            margin: '0',
        },
    },
}));

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };