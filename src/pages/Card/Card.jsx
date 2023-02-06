// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BeforePrice, CalShop, CalShopPrice, Price, ShowShopBox, Title, TitleShop, CalAllShop, CalWidDis, CalWidPrice, Line, BtnConti } from './Card.style';
import TrachCardIcon from '../../components/UI/ICONS/Card/TrachCardIcon/TrachCardIcon';
import { en2fa, fileApi } from '../../utils/plugins';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Card = () => {
    // - - - - - - - - - - //
    const [card, setCard] = useState([
        {id: 1, title: 'محصول شماره یک',before_discount_price: 80000, stock: '14', price: 80000, image_1: 'uploads/NC6AKtK7SxLQd7wBlgQH6wTw4SgaduBcwCXDtHJe.png'},
        {id: 2, title: 'محصول',before_discount_price: 80000, stock: '12', price: 80000, image_1: 'uploads/XIUNDkvTmQtIcUrvGnx0zXqwbea3dxIokdNbgizd.png'},
        {id: 3, title: 'محصول',before_discount_price: 80000, stock: '45', price: 80000, image_1: 'uploads/OzbSWyZtR3Ev8FXTB0fnsNLzbwK1joCytgvnlbCU.png'},
        {id: 4, title: 'محصول',before_discount_price: 80000, stock: '34', price: 80000, image_1: 'uploads/f1Me5bdfrGTCfKeLofTDlvJcP4f4mtNh3C7HvJXN.png'},
        {id: 5, title: 'محصول',before_discount_price: 80000, stock: '45', price: 80000, image_1: 'uploads/9rXFicB5Ts55arWu8f6VAoyLSPhu0sw52Iu6sDyY.png'},
        {id: 6, title: 'محصول',before_discount_price: 80000, stock: '23', price: 80000, image_1: 'uploads/XTUx7TH3aBaCFBxKfxD8ZthSNo379jUbgJOO2Mxb.png'},
        {id: 7, title: 'محصول',before_discount_price: 80000, stock: '12', price: 80000, image_1: 'uploads/heANKFhsuhFL1nnE7tOXe0ZIzT8kyfdwuZuLNIZ1.png'},
        {id: 8, title: 'محصول',before_discount_price: 80000, stock: '1', price: 80000, image_1: 'uploads/hIZkD0jw7DLx8HISA8alUGgrvQHazoRC448URsRw.png'},
    ]);
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='80px auto'>
            <Grid item xs={11} margin='auto'>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        {
                        card?.slice(0,10).map(car => 
                            <Box key={car.id} sx={{
                                border: '1px solid #D9D9D9',
                                borderRadius: '8px',
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'space-between',
                                marginBottom: {md: '8px', xs: '16px'},
                            }}>

                                <Box sx={{
                                    width: '123px',
                                    height: {md: '104px', xs: '164px'},
                                    background: '#EFEFEF',
                                    borderRadius: '4px',
                                    marginRight: '10px',
                                }}>
                                    <Typography component={LazyLoadImage} sx={{width: '123px',height: {md: '104px', xs: '164px'},}} src={fileApi(car.image_1)}/>
                                </Box>

                                <Box sx={{
                                    width: '100%',
                                    height:  {md: '104px', xs: '164px'},
                                    display: 'flex',
                                    flexDirection: {md: 'row', xs: 'column'},
                                    alignItems: {md: 'center',},
                                    justifyContent: 'space-between',
                                }}>
                                    <Title>{car.title}</Title>
                                    <BeforePrice>{en2fa(car.before_discount_price) + ' تومان'}</BeforePrice>
                                    <Box sx={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '26px',
                                        color: '#686868',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <IconButton>
                                            <AddIcon />
                                        </IconButton>
                                        <Typography>{en2fa(car.stock)}</Typography>
                                        <IconButton>
                                            <RemoveIcon />
                                        </IconButton>
                                    </Box>
                                    <Price>{en2fa(car.price) + ' تومان '}</Price>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: {md: 'center',xs: 'start'},
                                    padding: {sm: '10px', xs: '0'},
                                }}>
                                    <IconButton>
                                        <TrachCardIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        )
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            width: '100%',
                            //height: '399px',
                            border: '1px solid #D9D9D9',
                            borderRadius: '8px',
                            position: 'sticky',
                            top: '20px',
                            padding: '0 40px',
                        }}>
                            <TitleShop>مشخصات کلی</TitleShop>
                            <ShowShopBox>
                                <CalShop>قیمت کالاها</CalShop>
                                <CalShopPrice>{en2fa(800000) + 'تومان'}</CalShopPrice>
                            </ShowShopBox>
                            <ShowShopBox>
                                <CalAllShop>جمع سبد خرید</CalAllShop>
                                <CalShopPrice>{en2fa(800000) + 'تومان'}</CalShopPrice>
                            </ShowShopBox>
                            <ShowShopBox>
                                <CalWidDis>سود شما از خرید</CalWidDis>
                                <CalWidPrice>{en2fa(800000) + 'تومان'}</CalWidPrice>
                            </ShowShopBox>
                            <Line/>
                            <BtnConti component={Link} to='/payment'>ادامه فرایند خرید</BtnConti>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Card;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //