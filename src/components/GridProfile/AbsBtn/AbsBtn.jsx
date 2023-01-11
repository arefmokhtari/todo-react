
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AbsBtn = ({ children, to,sx }) => (
    <Button to={to} component={Link} variant='contained' sx={{
        position: 'absolute',
        top: '10px',
        right: '30px',
        backgroundColor: '#71D0A0 !important',
        boxShadow: '0 0 0 0 !important',
        ...sx,
    }}>{children}</Button>
);

export default AbsBtn;