
import { Typography, Grid, styled } from '@mui/material';


export const LabelShow = styled(props => <Typography component='h3' {...props} />)(({}) => ({
    color: '#71D0A0',
    //width: 'max-content',
    width: '70%',

    borderBottom: '1px solid #71D0A0',
//    padding: '4px 0',
}));

export const GridShow = styled(Grid)(({}) => ({
    borderBottom: '1px solid #71D0A0',
    padding: '8px 0',
    margin: '10px auto',
}));