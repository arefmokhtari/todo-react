// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const BoxSearch = styled(Box)({
    width: '100%',
    height: 'auto',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',
    padding: '5px',
    borderRadius: '4px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
});

export const ParagraphSearch = styled(Typography)({
    textAlign: 'left',
    padding: '10px', 
    fontSize: '14px',
    left: '10px', 
    top: '4px', 
    borderBottom: '2px solid #71D0A0',
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /