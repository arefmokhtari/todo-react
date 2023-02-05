

import { Box, Button, IconButton, styled, Typography } from '@mui/material';

export const Title = styled(props => <Typography {...props} component='h1' />)(({theme}) => ({
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '48px',
    color: '#585858',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '36px',
    },
}));

export const Description = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    color: '#C0C0C0',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        lineHeight: '20px',
    },
}));

export const FeaMenu = styled('h3')(({}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#585858',
    display: 'flex',
    alignItems: 'center',
    '& span': {
        paddingLeft: '8px',
    },
}));

export const ShowTextFea = styled('div')(({theme}) => ({
    '& *': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#71D0A0',
        margin: '4px 0',
    },
    [theme.breakpoints.down('md')]: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '21px',
    },
}));

export const BeforePrice = styled('p')(({theme}) => ({
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '26px',
    textDecorationLine: 'line-through',
    color: '#7B808C',
    textAlign: 'right',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));

export const Price = styled('p')(({theme}) => ({
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
    color: '#71D0A0',
    textAlign: 'right',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
}));

export const BtnAddCard = styled(props => <Button variant='contained' {...props} />)(({theme}) => ({
    background: '#71D0A0 !important',
    borderRadius: '8px',
    width: '164px',
    height: '48px',
    boxShadow: '0 0 0 0',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
        marginLeft: '0',
        width: '100%',
    },
}));

export const TitleSilder = styled('h2')(({theme}) => ({
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '48px',
    color: '#161616',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '24px',
    },
}));

export const MoveBtn = styled(Button)(({theme}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#B8B8B8',
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
        lineHeight: '18px',
    },
}));

export const IconSlider = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    zIndex: 999,
    border: '1px solid #D9D9D9',
    borderRadius: '8px',
    // transform: 'rotate(-180deg)',
    width: '48px',
    height: '48px',
    top: '42%',
    background: '#FFFFFF !important',
    [theme.breakpoints.down('md')]: {
        width: '30px',
        height: '30px',
    },  
}));