
import { Button, FormLabel, styled } from '@mui/material';

export const TitleAddress = styled('h1')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    color: '#4DC488',
    marginLeft: '45px',
    [theme.breakpoints.down('md')]: {
        marginLeft: '35px',
        fontSize: '16px',
    },
}));

export const AddressText = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    margin: '0 0',
    color: '#585858',
    paddingLeft: '6px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));

export const EditButton = styled(Button)(({theme}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '16px',
    color: '#4DC488',
    marginLeft: '40px',
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
    },
}));

export const SelectTimeTitle = styled('h1')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    color: '#4DC488',
    marginLeft: '47px',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        marginLeft: '40px',
    },
}));

export const SelectTimeText = styled('p')(({theme}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    color: '#585858',
    margin: '0 0',
    paddingLeft: '8px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));


export const SelectOptAddr = styled(FormLabel)(({theme}) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8B9090 !important',
    marginLeft: '47px',
    [theme.breakpoints.down('md')]: {
        marginLeft: '40px',
    },
}));

export const EndPeimentTitle = styled('h3')(({theme}) => ({
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#4DC488',
    [theme.breakpoints.down('lg')]: {
        fontSize: '28px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

export const AllPrice = styled('h4')(({theme}) => ({
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '28px',
    color: '#585858',
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));

export const Price4Send = styled('h5')(({theme}) => ({
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '28px',
    color: '#585858',
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));

export const Price4Handl = styled('h5')(({theme}) => ({
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '28px',
    color: '#585858',
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));

export const BtnPay = styled(props => <Button variant='contained' {...props} />)(({theme}) => ({
    width: '229px',
    background: '#4DC488 !important',
    borderRadius: '8px',
    height: '54px',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    display: 'flex',
    margin: '50px auto',
    boxShadow: '0 0 0 0',
    [theme.breakpoints.down('lg')]: {
        width: '190px',
    },
    [theme.breakpoints.down('md')]: {
        width: '229px',
    },
}));