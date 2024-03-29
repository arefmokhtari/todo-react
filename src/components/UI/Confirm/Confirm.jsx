// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import { Button, Typography, Box } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Confirm = ({onClick,onClose,...props}) => (
    createPortal(
        <Backdrop {...props} sx={{zIndex: 9999}}>
            <Box sx={{position: 'relative',width: 300, height: 125, backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden'}}>
                <Box sx={{backgroundColor: '#71D0A0', width: '100%', height: '30px', borderRadius: '8px', fontSize: '16px', padding: '4px',paddingLeft: '8px', color: 'white'}}>
                    حذف کردن
                </Box>
                <Box>
                    <Typography paragraph sx={{padding: '14px', paddingTop: '18px', color: 'gray'}}>
                        آیا مطمعن هستید؟
                    </Typography>
                </Box>
                <Box sx={{position: 'absolute', bottom: '0'}}>
                    <Button onClick={onClick} variant='contained' sx={{height: '30px',width: '70px',margin: '4px', backgroundColor: '#71D0A0 !important', boxShadow: '0 0 0 0'}}>
                        بله
                    </Button>
                    <Button onClick={onClose} variant='contained' sx={{height: '30px',width: '70px',margin: '4px', backgroundColor: '#d32f2f !important', boxShadow: '0 0 0 0'}}>
                        خیر
                    </Button>
                </Box>
            </Box>
        </Backdrop>
        ,document.getElementById('portal')
    )
);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Confirm;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //