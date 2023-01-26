
import { Grid, styled, Typography } from '@mui/material';


export const FooterList = styled('ul')(({theme}) => ({
    listStyle: 'none',
    padding: 0,
    [theme.breakpoints.down('md')]: {
        '& li': {
            fontSize: '13px',
            margin: 'auto',
            display: 'block',
            width: '90px',
        },
    },
}));

export const FooterListItem = styled('li')(({theme}) => ({
    color: '#A9A9A9',
    fontWeight: '400',
    fontSize: '16px',
    margin: '12px 0',
    lineHeight: '24px',
    padding: '5px 0',
    '& a': {
        textDecoration: 'none',
        color: '#A9A9A9',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
    },
}));

export const HeadFooterList = styled(FooterListItem)(({theme}) => ({
    width: '80px',
    color: '#71D0A0',
    borderBottom: '2px solid #71D0A0',
    [theme.breakpoints.down('md')]: {
        marginTop: '80px !important',
    },
}));

export const ImageLogo = styled(props => <Typography {... props} component='img' />)(({theme}) => ({
    width: '132px',
    marginTop: '32px',
    marginBottom: '16px',
    [theme.breakpoints.down('md')]: {
        margin: 'auto',
        marginTop: '32px',
        marginBottom: '16px',
        display: 'block',
    },
}));

export const Map = styled(props => <Typography {... props} component='iframe' />)(({theme}) => ({
    border: 0, 
    width: '352px', 
    height: '245px', 
    display: 'block',
    borderRadius: '8px', 
    background: '#EDEDED',
    [theme.breakpoints.down('md')]: {
        margin: 'auto',
        display: 'block',
        marginTop: '80px',
        width: '300px !important', 
    },
})); 

export const ImageGrid = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        '& p': {
            width: '80%',
            margin: 'auto'
        },
    },
}));