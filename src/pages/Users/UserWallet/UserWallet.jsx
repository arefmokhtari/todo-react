// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Box, Typography, MenuItem, Select, Button, Backdrop, IconButton } from '@mui/material';
import { useParams } from 'react-router';
import { useLimitSkip, defaultSkip } from '../../../hooks/request-hook';
import { getWallet, storeWallet } from '../../../api/requests';
import { useState } from 'react';
import { Label } from '../../AboutUs/AboutUs.style';
import { BackBtn } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { en2fa, faNum2enNum, pageinCal, checkDataNotEmpty } from '../../../utils/plugins';
import { LabelShow } from '../../DiscountCode/DiscountCode.style';
import Pagein from '../../../components/UI/Pagein/Pagein';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import { Text as TextCat } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';
import { Sele } from './UserWallet.style';
import { addWalletValidate } from '../../../validates/addWalletValidate';
import DateInput, { InputWallet, InputAtWallet } from '../../../components/UI/DateInput/DateInput';
import CloseIcon from '@mui/icons-material/Close';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const UserWallet = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async (values, { resetForm }) => await request.requestByLoadingAndToken({
        request: storeWallet,
        args: [values],
        showMessage: true,
        success: () => resetForm() || request.setSkip(preState => ({ ...preState })),
    });
    // - - - - - - - - - - - - //
    const { id } = useParams();
    const [walletUser, setWalletUser] = useState({});
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState({ from_created_at: '', to_created_at: '' });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            user_id: id,
            amount: '',
            action: 'increase',
        },
        validationSchema: addWalletValidate,
        onSubmit,
    })
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getWallet,
        state: {
            ...defaultSkip,
            user_id: id,
        },
        success: req => setWalletUser(req.data.data),
    });
    // - - - - - - - - - - - - //
    const searchHanlder = () => request.setSkip({ skip: request.skip.skip, limit: request.skip.limit, user_id: id , ... checkDataNotEmpty(search)});
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto' position='relative'>
            <Grid item xs={12}><Label>کیف پول</Label></Grid>
            <BackBtn onClick={() => request.nav('/users')} sx={{top: '10px'}}>بازگشت</BackBtn>
            <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, display: {md: 'none', xs: 'flex'}}} >
                <Grid container spacing={2} sx={{background: 'white', borderRadius: '4px'}} position='relative'>
                    <IconButton sx={{position: 'absolute', right: '0'}} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                    <Grid item xs={11} sx={{margin: 'auto'}}>
                        <LabelShow sx={{width: '100%',margin: 'auto', textAlign: 'center',padding: '4px 0', fontSize: {md: '20px'}}}>افزودن</LabelShow>
                    </Grid>
                    <Grid item xs={11} margin='auto'>
                        <Grid container spacing={2} component='form' onSubmit={formik.handleSubmit}>
                            <Grid item md={6} xs={12} display='flex' justifyContent='center'>
                                <TextCat 
                                    sx={{margin: '0', width: '100% !important'}}
                                    
                                    label='مبلغ'
                                    { ... formik.getFieldProps('amount') }
                                    error={formik.touched.amount && formik.errors.amount != null} 
                                    helperText={formik.touched.amount && formik.errors.amount}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Sele fullWidth>
                                <InputLabel id="demo-simple-select-label">نوع</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formik.values.action}
                                variant='outlined'
                                label="نوع"
                                onChange={event => formik.setFieldValue('action', event.target.value)}
                                >
                                <MenuItem value={'increase'}>افزایش</MenuItem>
                                <MenuItem value={'decrease'}>کاهش</MenuItem>
                                </Select>
                                </Sele>
                            </Grid>
                            <Grid item xs={12} display='flex' margin='10px auto' justifyContent='center'>
                                <Button type='submit' variant='contained' sx={{fontSize: '18px',background: '#71D0A0 !important', height: '48px', width: {md: '50%', xs: '100%'}}}>ثبت</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Backdrop>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Grid item xs={11} sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)', borderRadius: '4px',margin: 'auto',  paddingBottom: '10px', marginBottom: '10px'}}>

                        <Grid item xs={11} margin='auto' marginBottom='10px'>
                            <LabelShow sx={{width: 'max-content',paddingTop: '5px'}}>فیلتر</LabelShow>
                        </Grid>
                        <Grid container>
                            <Grid item xs={11} margin='auto' md={4}>
                                <DateInput 
                                    onChange={event => setSearch(preState => ({...preState, from_created_at: event && faNum2enNum(event.format()) }))}
                                    render={<InputWallet />}
                                />
                            </Grid>
                            <Grid item xs={11} margin='auto' md={4}>
                                <DateInput 
                                    onChange={event => setSearch(preState => ({...preState, to_created_at: event && faNum2enNum(event.format()) }))}
                                    render={<InputAtWallet />}
                                />
                            </Grid>
                            <Grid item xs={11} margin={{md: 'auto', xs: '5px auto'}} md={4} display='flex' justifyContent='center'>
                                <Button sx={{display: 'block',boxShadow: '0 0 0 0',fontSize: '18px',background: '#71D0A0 !important', height: '54px', width: {md: '90%', xs: '96%'}}} onClick={searchHanlder} variant='contained'>اعمال</Button>
                            </Grid>
                            <Grid item xs={11} margin='5px auto' md={4} display={{md: 'none', xs: 'flex'}} justifyContent='center'>
                                <Button sx={{display: 'block',boxShadow: '0 0 0 0',fontSize: '18px',background: '#71D0A0 !important', height: '54px', width: {md: '90%', xs: '96%'}}} onClick={() => setOpen(true)} variant='contained'>افزودن</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        walletUser.data?.map(wallet => 
                            <Grid item xs={11} key={wallet.id} sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)', borderRadius: '4px',margin: 'auto',  marginBottom: '10px', }}>
                                <Box sx={{padding: '10px',color: '#5b5959', display: 'flex', alignItems: 'center'}}>
                                    {wallet.action == 'increase'?
                                        <KeyboardDoubleArrowUpIcon sx={{color: '#71D0A0 !important', display: 'block', width: '3em',height: '2em',}}/>:
                                        <KeyboardDoubleArrowDownIcon sx={{color: '#d32f2f !important', display: 'block', width: '3em',height: '2em',}}/>
                                    }
                                    <Box sx={{marginRight: '20px'}}>
                                        <LabelShow sx={{width: 'max-content'}}>نوع تراکنش</LabelShow>
                                        <Typography paragraph sx={{marginBottom: '0'}}>{wallet.action == 'increase'?'افزایش':'کاهش'}</Typography>
                                    </Box>
                                    <Box sx={{marginRight: '20px'}}>
                                        <LabelShow sx={{width: 'max-content'}}>به مبلغ</LabelShow>
                                        <Typography paragraph sx={{marginBottom: '0'}}>{en2fa(wallet.amount)}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid item xs={12} md={6} sx={{display: {xs: 'none', md: 'block'}}}>

                    <Box sx={{
                        width: {md: '100%', xs: '92%'},
                        position: {md: 'sticky', xs: 'static'},
                        top: '158px',
                        margin: '0 auto !important',
                        boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',
                        borderRadius: '4px',
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={11} sx={{margin: 'auto'}}>
                                <LabelShow sx={{width: '100%',margin: 'auto', textAlign: 'center',padding: '4px 0', fontSize: {md: '20px'}}}>افزودن</LabelShow>
                            </Grid>
                            <Grid item xs={11} margin='auto'>
                                <Grid container spacing={2} component='form' onSubmit={formik.handleSubmit}>
                                    <Grid item md={6} xs={12} display='flex' justifyContent='center'>
                                        <TextCat 
                                            sx={{margin: '0', width: '100% !important'}}
                                            
                                            label='مبلغ'
                                            { ... formik.getFieldProps('amount') }
                                            error={formik.touched.amount && formik.errors.amount != null} 
                                            helperText={formik.touched.amount && formik.errors.amount}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Sele fullWidth>
                                        <InputLabel id="demo-simple-select-label">نوع</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={formik.values.action}
                                        variant='outlined'
                                        label="نوع"
                                        onChange={event => formik.setFieldValue('action', event.target.value)}
                                        >
                                        <MenuItem value={'increase'}>افزایش</MenuItem>
                                        <MenuItem value={'decrease'}>کاهش</MenuItem>
                                        </Select>
                                        </Sele>
                                    </Grid>
                                    <Grid item xs={12} display='flex' margin='10px auto' justifyContent='center'>
                                        <Button type='submit' variant='contained' sx={{fontSize: '18px',background: '#71D0A0 !important', height: '48px', width: {md: '50%', xs: '100%'}}}>ثبت</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Grid>
                <Grid item xs={12}>
                    <Pagein count={pageinCal(walletUser.count)} onChange={(_, value) => request.movePageHandler(value)} />
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default UserWallet;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //