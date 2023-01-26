
import { styled } from '@mui/material';


const Svg = styled('svg')(({theme}) => ({
    width: '60px',
    height: '60px',
    [theme.breakpoints.down('md')]: {
        width: '45px',
        height: '45px',
    },
}));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SmsIcon = props => (
<Svg width="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M42.5 51.25H17.5C10 51.25 5 47.5 5 38.75V21.25C5 12.5 10 8.75 17.5 8.75H42.5C50 8.75 55 12.5 55 21.25V38.75C55 47.5 50 51.25 42.5 51.25Z" stroke="#71D0A0" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M42.5 22.5L34.675 28.75C32.1 30.8 27.875 30.8 25.3 28.75L17.5 22.5" stroke="#71D0A0" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default SmsIcon;