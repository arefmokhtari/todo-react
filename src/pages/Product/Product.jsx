// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Typography, Box } from '@mui/material';
import { useParams } from 'react-router';
import { getByIdProducts, getProducts } from '../../api/requests';
import Slider from 'react-slick';
import { useRequest, requestName } from '../../hooks/request-hook';
import { useState, useRef } from 'react';
import { Title, Description, FeaMenu, ShowTextFea, BeforePrice, Price, BtnAddCard, TitleSilder, MoveBtn, IconSlider } from './Product.style';
import MenuProIcon from '../../components/UI/ICONS/MenuProIcon/MenuProIcon';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { en2fa, enNum2FaNum, fileApi, objectToargGetMethod } from '../../utils/plugins';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DiscountPrice from '../../components/UI/ICONS/DiscountPrice/DiscountPrice';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const settingsImages = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
};
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //centerMode: true,
    //variableWidth: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            },
        },
    ]
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Product = () => {
    // - - - - - - - - - - //
    const slider = useRef();
    const [product, setProduct] = useState({product: {}, images: []});
    const [solderProducts, setSoldProducts] = useState({});
    // - - - - - - - - - - //
    const { id } = useParams();
    // - - - - - - - - - - //
    const request = useRequest({
        ingnoreToken: true,
        step: [id],
        start: [{
            requestName: requestName.BYLOADING,
            request: getByIdProducts,
            args: [id],
            success: (req, out) => {
                setProduct({product: req.data.data, images: [req.data.data.image_1, req.data.data.image_2, req.data.data.image_3].filter(value => value).reverse()});
                out.reRender(0, {
                    request: getProducts,
                    args: ['?' + objectToargGetMethod({ limit: 8, skip: 0 , category_id: req.data.data.sub_category.parent_id, })],
                    success: anyReq => setSoldProducts(anyReq.data.data),
                });
                
            },
        },],
    });
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='40px auto'>
            <Grid item xs={11} margin='auto'>
                <Grid container>
                    <Grid item md={5} xs={12}>
                        <Box
                            component={Slider}
                            sx={{
                                width: '90%',
                                margin: '10px auto',
                                marginBottom: {md: '10px', xs: '100px'},
                                border: '8px double #E8E8E8',
                                borderRadius: '4px',
                                '& .slick-dots': {
                                    display: 'flex !important',
                                    justifyContent: 'space-around',
                                    left: '128px',
                                    flexDirection: 'row-reverse',
                                },
                                '& .slick-next': {
                                    display: 'none !important',
                                },
                                '& .slick-prev': {
                                    display: 'none !important',
                                },
                            }}
                            {...settingsImages}
                                customPaging={i => (
                                    <Typography 
                                        component={LazyLoadImage}
                                        sx={{
                                            width: {md: '90px', xs: '73px'},
                                            height: {md: '90px', xs: '73px'},
                                            border: '8px double #E8E8E8',
                                            borderRadius: '4px',
                                            margin: '10px 100px',
                                        }}
                                        src={fileApi(product.images[i])} 
                                    />
                                  )
                                }
                        >
                            {
                                product.images?.map(image =>
                                    <Typography 
                                        key={image}
                                        component={LazyLoadImage}
                                        src={fileApi(image)}
                                        sx={{
                                            width: {sm: '347px !important', xs: '200px !important'},
                                            margin: 'auto',
                                            display: 'block !important',
                                        }}
                                    />
                                )
                            }
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Title>{product.product.title}</Title>
                        <Description>{product.product.description}</Description>
                        <FeaMenu>
                            <MenuProIcon /> <span>ویژگی ها</span>
                        </FeaMenu>
                        <Grid container sx={{height: '79%'}}>
                            <Grid item xs={12} md={6}>
                                <ShowTextFea>
                                    {parse(product.product.features || '')}
                                </ShowTextFea>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'end',
                            }}>
                                <Box sx={{
                                    display: {md: 'flex', xs: 'block'},
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'end',
                                }}>
                                    <Box>
                                        <BeforePrice>{en2fa(product.product.before_discount_price) + ' تومان'}</BeforePrice>
                                        <Price>{en2fa(product.product.price) + ' تومان'}</Price>
                                    </Box>
                                    <BtnAddCard>افزودن به سبد خرید</BtnAddCard>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{marginTop: '180px'}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <TitleSilder>محصولات مشابه</TitleSilder>
                            <MoveBtn 
                                endIcon={<ArrowBackIosIcon sx={{width: {md: '16px',xs: '10px'}, height: {md: '28px', xs: '16px'}}} />}
                                component={Link}
                                to={`/products/${product.product?.sub_category?.category.id}`}
                            >مشاهده بیشتر</MoveBtn>
                        </Box>
                    </Grid>
                    <Grid container sx={{position: 'relative'}}>
                        <IconSlider sx={{left: {md: '-24px', xs: '-15px'},}} onClick={() => slider.current.slickNext()}>
                            <KeyboardArrowRightIcon />
                        </IconSlider>
                        <IconSlider sx={{right: {md: '-24px', xs: '-15px'}}} onClick={() => slider.current.slickPrev()}>
                            <KeyboardArrowLeftIcon />
                        </IconSlider>
                        <Grid item xs={12} component={Slider} {... settings} ref={slider} sx={{
                            margin: 'auto',
                            '& .slick-slide > div': {
                                margin: '0 10px',
                            },
                            '& .slick-list':  {
                                margin: '0 -10px',
                            },
                            '& .slick-arrow': {
                                display: 'none !important',
                            },
                            '& .slick-dots': {
                                display: 'none !important',
                            },
                        }}>
                            {
                            solderProducts.data?.map(pro => 
                            <Box component={Link} to={`/product/${pro.id}`} key={pro.id} sx={{
                                height: {md: '376px', xs: '202px'},
                                border: '1px solid #D9D9D9',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                margin: 'auto',
                                textDecoration: 'none',
                            }}>
                                <Typography 
                                    component={LazyLoadImage}
                                    src={fileApi(pro.image_1)} 
                                    sx={{
                                        height: {xs: '110.72px',md: '206px'},
                                        margin: 'auto',
                                        display: 'block'
                                    }}   
                                />
                                <Typography component='h2' sx={{
                                    fontWeight: '500',
                                    fontSize: {md: '24px', xs: '12px'},
                                    lineHeight: '28px',
                                    marginLeft: '6%',
                                    color: '#05101D',
                                    marginTop: {md: '20px', xs: 0},
                                    marginBottom: {md: '40px', xs: 0},
                                    textAlign: 'left',
                                }}>
                                    {pro.title}
                                </Typography>
                                <Box sx={{display: 'flex', marginTop: {md: '50px', xs: 0}}}>
                                    <Box sx={{width: 'calc(100% - 40px)'}}>
                                        <Typography sx={{
                                            fontWeight: '500',
                                            fontSize: {md: '16px', xs: '12px'},
                                            lineHeight: '26px',
                                            textDecorationLine: 'line-through',
                                            color: '#7B808C',
                                            textAlign: 'right',
                                            marginRight: '6%',
                                        }}>
                                            {`${en2fa(pro.before_discount_price)} تومان`}
                                        </Typography>
                                        <Typography sx={{
                                            textAlign: 'right',
                                            fontWeight: 500,
                                            fontSize: {lg: '24px',md: '18px',xs: '16px'},
                                            lineHeight: '32px',
                                            marginRight: '6%',
                                            color: '#0A203A',
                                        }}>{`${en2fa(pro.price)} تومان`}</Typography>
                                    </Box>
                                    <Box sx={{marginLeft: {xs: '4%'}, position: 'relative', display: 'flex', alignItems: 'center'}}>
                                        <DiscountPrice />
                                        <Typography sx={{
                                            position: 'absolute', 
                                            top: {md: '20px', xs: '20px'},
                                            fontWeight: 400,
                                            fontSize: {md: '16px',xs: '10px'},
                                            lineHeight: '19px',
                                            color: '#FFFFFF',
                                            textAlign: 'center',
                                            margin: 'auto auto',
                                            right: 0,
                                            left: 0,
                                        }}>{`${enNum2FaNum(String(pro.discount_percent))}%`}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Product;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //