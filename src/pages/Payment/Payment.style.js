
import { Button, styled } from '@mui/material';

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

export const SelectTimeTitle = styled('h1')(({}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    color: '#4DC488',
}));

export const SelectTimeText = styled('p')(({}) => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '16px',
    color: '#585858',
}));