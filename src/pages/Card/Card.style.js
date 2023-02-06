
import { Box, Button, styled } from '@mui/material';


export const Title = styled('h1')(({}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#686868',
    margin: '0 0',
}));

export const BeforePrice = styled('p')(({}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '32px',
    color: '#686868',
    margin: '0 0',
}));

export const Price = styled('p')(({}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '32px',
    color: '#4DC488',
    margin: '0 0',
}));

export const TitleShop = styled('h2')(({theme}) => ({
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '28px',
    color: '#4DC488',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '28px',
    },
}));

export const ShowShopBox = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px 0',
}));

export const CalShop = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '28px',
    color: '#7D7272',
    margin: '0 0',
    [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
    }
}));

export const CalShopPrice = styled('p')(({}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '16px',
    color: '#686868',
    margin: '0 0',
}));

export const CalAllShop = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '22px',
    lineheight: '28px',
    color: '#1F1D1D',
    margin: '0 0',
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    }
}));

export const CalWidDis = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '24px',
    lineheight: '16px',
    margin: '0 0',
    color: '#4DC488',
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
}));

export const CalWidPrice = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    margin: '0 0',
    color: '#4DC488',
    [theme.breakpoints.down('lg')]: {
        fontSize: '16px',
    },
}));

export const Line = styled('div')(({}) => ({
    border: '1px solid rgba(77, 196, 136, 0.4)',
    width: '100%',
    height: '1px',
}));

export const BtnConti = styled(props => <Button variant='contained' {...props} />)(({theme}) => ({
    width: '229px',
    height: '54px',
    background: '#4DC488 !important',
    borderRadius: '8px',
    boxShadow: '0 0 0 0',
    margin: '25px auto',
    display: 'flex',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    [theme.breakpoints.down('lg')]: {
        width: '190px',
    },
    [theme.breakpoints.down('md')]: {
        width: '229px',
    },
}));