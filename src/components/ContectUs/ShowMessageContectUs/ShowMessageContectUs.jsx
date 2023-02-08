// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Card, CardHeader, Avatar, CardContent, CardActions, styled, Box, Button } from '@mui/material';
import { enDate2FaDate } from '../../../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const MessageBox = styled(Box)(({theme}) => ({
    backgroundColor: '#71D0A0',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',
    borderRadius: '4px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
        padding: '10px',
        width: '70%',
    },
}));

export const MessageCard = styled(Card)(({}) => ({
    //width: '300px',
    border: '1px solid #D9D9D9',
    '& .MuiCardHeader-subheader': {
        fontSize: '12px',
    },
    // [theme.breakpoints.down('md')]: {
    //     width: '100%',
    // },
}));

export const BtnClick = styled(Button)({
    color: '#71D0A0',
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ShowMessageContectUs = ({ showingMessage, back, ...kwargs }) => (
    <MessageBox {... kwargs}>   
        <br/>
        <MessageCard sx={{width: '90%', margin: '10px auto', backgroundColor: 'white',borderRadius: '4px'}}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: 'red', paddingTop: '3px' }} aria-label="recipe">
                        {showingMessage.full_name?.toUpperCase().at(0)}
                    </Avatar>
                }
                title={showingMessage.full_name}
                subheader={showingMessage.created_at && enDate2FaDate(showingMessage.created_at)}
            />
            <CardContent>
                <Box sx={{width: '90%', margin: 'auto'}}>
                    {showingMessage.message}
                </Box>
            </CardContent>
            <CardActions>
                <BtnClick onClick={back}>بستن</BtnClick>
            </CardActions>
        </MessageCard>  
        <br/>
    </MessageBox>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ShowMessageContectUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //