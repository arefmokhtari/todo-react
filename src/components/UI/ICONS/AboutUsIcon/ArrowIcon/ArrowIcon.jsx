
import { styled } from '@mui/material';

const SvgIcon = styled('svg')(({theme}) => ({
    width: '22px',
    height: '22px',
    [theme.breakpoints.down('md')]: {
        width: '10px',
        height: '10px',
    },
}));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ArrowIcon = props => (
<SvgIcon viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 11H2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20L2 11L11 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</SvgIcon>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ArrowIcon;