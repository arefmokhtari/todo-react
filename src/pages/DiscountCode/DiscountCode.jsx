// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Chip, IconButton, Box } from '@mui/material';
import { useLimitSkip } from '../../hooks/request-hook';
import { getDiscountCode, deleteDiscountCode } from '../../api/requests';
import { useState } from 'react';
import { Label } from '../AboutUs/AboutUs.style';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PercentIcon from '@mui/icons-material/Percent';
import OutboundIcon from '@mui/icons-material/Outbound';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import Pagein from '../../components/UI/Pagein/Pagein';
import { pageinCal, enDate2FaDate, e2f } from '../../utils/plugins';
import { BackBtn } from '../../components/EditAndAddCategory/EditAndAddCategory.style';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useConfirm } from '../../hooks/confirm-hook';
import { LabelShow, GridShow } from './DiscountCode.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const DiscountCode = () => {
    // - - - - - - - - - - - - //
    const [discountCode, setDiscountCode] = useState({});
    const confirm = useConfirm();
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getDiscountCode,
        success: req => setDiscountCode(req.data.date),
    });
    // - - - - - - - - - - - - //
    const deleteDiscount = id => confirm.run(async () => await request.requestByLoadingAndToken({
        request: deleteDiscountCode,
        args: [id],
        showMessage: true,
        success: _ => request.setSkip(preState => ({...preState})),
    }));
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto' position='relative'>
            <BackBtn onClick={() => request.nav('add')} sx={{top: '10px'}}>افزودن</BackBtn>
            <Grid item xs={12}><Label>کد تخفیف</Label></Grid>
            <Grid item xs={10} margin='auto' sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)', borderRadius: '4px'}}>
                <Grid container>
                    {
                        discountCode.data?.map(discount => 
                            <GridShow item xs={11} key={discount.id}>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <LabelShow>کد</LabelShow>
                                                <Chip sx={{background: 'white', color: '#736a6a'}} icon={<LocalOfferIcon sx={{color: '#71D0A0 !important',}} />} label={e2f(discount.code)} />
                                                
                                                <LabelShow>حداکثر تخفیف</LabelShow>
                                                <Chip sx={{background: 'white', color: '#736a6a'}} icon={<OutboundIcon sx={{color: '#71D0A0 !important',}} />} label={discount.max_amount && e2f(discount.max_amount) || 'وارد نشده'} />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <LabelShow>تاریخ انقضا</LabelShow>
                                                <Chip sx={{background: 'white', color: '#736a6a'}} icon={<InsertInvitationIcon sx={{color: '#71D0A0 !important',}} />} label={enDate2FaDate(discount.expires_at, false)} />
                                                
                                                <LabelShow>درصد تخفیف</LabelShow>
                                                <Chip sx={{background: 'white', color: '#736a6a'}} icon={<PercentIcon sx={{color: '#71D0A0 !important',}} />} label={e2f(discount.discount_percent)} />
                                                
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} display='flex' justifyContent='end' alignItems='center'>
                                        <Box>
                                        <IconButton onClick={() => deleteDiscount(discount.id)}>
                                            <DeleteOutlineIcon sx={{color:'#d32f2f !important'}} />
                                        </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </GridShow>
                        )
                    }
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Pagein count={pageinCal(discountCode.count)} onChange={(_, value) => request.movePageHandler(value)} />
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - - - //
}

export default DiscountCode;