// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Box, styled, Typography, Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ArrowIcon from '../../components/UI/ICONS/AboutUsIcon/ArrowIcon/ArrowIcon';
import { Link } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const ShowData = styled(Box)(({theme}) => ({
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
        width: '90%',
        '& *':{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '180%',
        },
    },
}));

export const IconBox = styled(Box)(({theme}) => ({
    width: '112px',
    height: '112px',
    position: 'absolute',
    borderRadius: '4px',
    border: '2px solid #D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '79px',
    right: '0',
    left: '0',
    margin: '0 auto',
    top: '-56px',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
        width: '85px',
        height: '85px',
        top: '-46px',
    },
}));

export const MainGrid = styled(Grid)(({}) => ({
    margin: 'auto', 
    border: '2px solid #D9D9D9',
    position: 'relative',
    borderRadius: '16px',
}));

export const ShowLabel = styled(props => <Typography {...props} component='h1' variant='p' />)(({theme}) => ({
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '48px',
    color: '#71D0A0',
    textAlign: 'center',
    position: 'relative',
    marginTop: '76px',
    zIndex: '10',
    '&::after': {
        content: '" "',
        width: '32%',
        position: 'absolute',
        height: '2px',
        background: '#E2E2E2',
        top: '23px',
        left: '7%',
        zIndex: '-1',
    },
    '&::before': {
        content: '" "',
        width: '32%',
        position: 'absolute',
        height: '2px',
        background: '#E2E2E2',
        top: '23px',
        right: '7%',
        zIndex: '-1',
    },
    [theme.breakpoints.down('md')]: {
        '&::after': {
            width: '30%',
            left: '5%',
        },
        '&::before': {
            width: '30%',
            right: '5%',
        },
    },
    [theme.breakpoints.down('sm')]: {
        '&::after': {
            //width: '22%',
            left: '3%',
        },
        '&::before': {
            //width: '22%',
            right: '3%',
        },
    }
}));

export const Image = styled(LazyLoadImage)(({theme}) => ({
    height: '240px',
    background: '#EDEDED',
    borderRadius: '24px',
    width: '100%',
    border: '1px solid white',
    margin: 'auto',
    display: 'block',
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
}));

export const BtnContectUs = styled(props => <Button {...props} variant='contained' endIcon={<ArrowIcon />} component={Link} />)(({theme}) => ({
    width: '310px',
    height: '80px',
    background: '#71D0A0 !important',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '180%',
    borderRadius: '16px',
    boxShadow: '0px 0px 20px rgba(113, 208, 160, 0.36)',
    [theme.breakpoints.down('md')]: {
        width: '164px',
        height: '45px',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '180%',
    },
}));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //