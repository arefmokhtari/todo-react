// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { CardContent, Grid, InputLabel, MenuItem, Select, Typography, CardActions, Button, Card, CardMedia, Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import { url } from '../../api/config';
import { deleteProductById, getCategories, getProducts } from '../../api/requests';
import { BackBtn, Sele, Text } from '../../components/EditAndAddCategory/EditAndAddCategory.style';
import ShowByPagein from '../../components/ShowByPagein/ShowByPagein';
import { useLimitSkip } from '../../hooks/request-hook';
import { BoxSearch, ParagraphSearch } from '../Users/Users.style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { en2fa } from '../../utils/plugins';
import parse from 'html-react-parser';
import { ExpandMore } from './Products.style';
import { useConfirm } from '../../hooks/confirm-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configLimitOffset = {limit: 10, skip: 0}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Products = () => {
    // - - - - - - - - - - - - //
    const [showMore, setShowMore] = useState(0);
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({category: [],categoryId: null});
    const [subCategory, setSubCategory] = useState([]);
    const [search, setSearch] = useState(null);
    const confirm = useConfirm();
    // - - - - - - - - - - - - //
    useEffect(() => {
        const searchValue = setTimeout(() => {
            if(search !== null)
                request.setSkip(({search: s, ...preState}) => ({...preState, ...configLimitOffset, ...(search.trim().length !== 0 && {search}) }));
        }, 1000);
        return () => clearTimeout(searchValue);
    },[search]);
    // - - - - - - - - - - - - //
    useEffect(() => {
        if(category.categoryId) 
            (async () =>
                await request.requestByToken({
                    request: getCategories,
                    args: [`?parent_id=${category.categoryId}`],
                    success: req => setSubCategory(req.data.data.data),
                })
            )();
        else setSubCategory([]);
    }, [category.categoryId]);
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getProducts,
        success: req => setProduct(req.data.data),
        state: configLimitOffset,
    },{
        start: [{
            requestName: 'requestByLoadingAndToken',
            request: getCategories,
            args: ['?is_main=1'],
            success: req => setCategory({category: req.data.data.data, categoryId: null}),
        },]
    });
    // - - - - - - - - - - - - //
    const deleteProductHandler = async id => confirm.run(async () => {
        await request.requestByLoadingAndToken({
            request: deleteProductById,
            args: [id],
        });
        request.setSkip(preState => ({...preState}));
    });
    // - - - - - - - - - - - - //
    return ( <>
        <BackBtn onClick={() => request.nav('add')} sx={{right: '20px'}}>افزودن</BackBtn>
        <ShowByPagein 
            title='محصولات' 
            count={product.count} 
            changePagein={request.movePageHandler}
            anyCm={
                <BoxSearch>
                    <ParagraphSearch paragraph sx={{padding: '0 !important',position: {sm: 'relative', md: 'absolute'}}}>جست و جو کنید</ParagraphSearch>
                    <Grid container>
                        <Grid item xs={12} md={6} display='flex' justifyContent='center' sx={{marginTop: '6px'}}>
                            <Text 
                                label='جست و جو'
                                sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}
                                onChange={event => setSearch(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} display='flex' justifyContent='center' sx={{marginTop: '6px'}}>
                            <Sele sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}>
                                <InputLabel id='filter' sx={{backgroundColor: 'white', padding: '2px'}}>فیلتر</InputLabel>
                                <Select labelId='filter' value={request.skip.order_by || ''} onChange={event => request.setSkip(({order_by,...preState}) => ({... preState, ...configLimitOffset, ...(event.target.value && {order_by: event.target.value}) }))}>
                                    <MenuItem value=''>انتخاب کنید</MenuItem>
                                    <MenuItem value='most_sold'>بیشترین فروش</MenuItem>
                                    <MenuItem value='most_expensive'>گرانترین</MenuItem>
                                    <MenuItem value='most_cheapest'>ارزان ترین</MenuItem>
                                </Select>
                            </Sele>
                        </Grid>
                        <Grid item xs={12} md={6} display='flex' justifyContent='center' sx={{marginTop: '6px'}}>
                            <Sele sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}>
                                <InputLabel id='category' sx={{backgroundColor: 'white', padding: '2px'}}>سردسته</InputLabel>
                                <Select labelId='category' value={request.skip.category_id || ''} onChange={event => {
                                    request.setSkip(({category_id,subcategory_id,...preState}) => ({... preState, ...configLimitOffset, ...(event.target.value && {category_id: event.target.value}) }));
                                    setCategory(preState => ({...preState, categoryId: event.target.value}));
                                }}>
                                    <MenuItem value=''>انتخاب کنید</MenuItem>
                                    {category.category?.map(value => <MenuItem key={value.id} value={`${value.id}`}>{value.title}</MenuItem>)}
                                </Select>
                            </Sele>
                        </Grid>
                        <Grid item xs={12} md={6} display='flex' justifyContent='center' sx={{marginTop: '6px'}}>
                            <Sele sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}>
                                <InputLabel id='subcategory' sx={{backgroundColor: 'white', padding: '2px'}}>زیردسته</InputLabel>
                                <Select labelId='subcategory' value={request.skip.subcategory_id || ''} onChange={event => request.setSkip(({subcategory_id,...preState}) => ({... preState, ...configLimitOffset, ...(event.target.value && {subcategory_id: event.target.value}) }))}>
                                    <MenuItem value=''>انتخاب کنید</MenuItem>
                                    {subCategory?.map(value => <MenuItem key={value.id} value={`${value.id}`}>{value.title}</MenuItem>)}
                                </Select>
                            </Sele>
                        </Grid>
                    </Grid>
                </BoxSearch>
            }
        >   <Grid container spacing={2}>
            {product.data?.map(pro =>             
                <Grid key={pro.id} item xs={12} sm={6} md={4} lg={3}>
                    <Card variant='outlined' sx={{ maxWidth: {xl: '550px', lg:'450px', md: '400px', sm: '350px', xs: '300px'} , margin: 'auto'}}>
                        <CardContent>
                            <Typography component="h4" sx={{borderBottom: '2px solid gray', marginBottom: '3px', textAlign: 'center'}}>
                                {pro.title}
                            </Typography>
                            <CardMedia
                                component='img'
                                height='194'
                                image={`${url}/${pro.image_1}`}
                                alt='image'
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {pro.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{margin: '2px', backgroundColor: '#71D0A0 !important', boxShadow: '0 0 0 0'}} size="small" component={Link} to={`edit/${pro.id}`} variant="contained">ویرایش</Button>
                            <Button onClick={async () => await deleteProductHandler(pro.id)} size="small" variant="contained" sx={{margin: '2px', backgroundColor: '#d32f2f !important', boxShadow: '0 0 0 0'}}>حذف</Button>
                            <ExpandMore
                            expand={showMore === pro.id}
                            onClick={() => setShowMore(showMore === pro.id?0:pro.id)}
                            aria-expanded={showMore === pro.id}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={showMore === pro.id} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>قیمت: {en2fa(pro.price)} تومان</Typography>
                                <Typography paragraph>قبل از تخفیف: {en2fa(pro.before_discount_price)} تومان</Typography>
                                <Typography paragraph>تخفیف: {en2fa(pro.discount_percent)} درصد</Typography>
                                <Typography component='div' variant='p' sx={{fontSize: '14px', marginBottom: '16px', color: 'rgba(0, 0, 0, 0.87)'}}>
                                    ویژگی ها: {pro.features?parse(pro.features):'وارد نشده'}
                                </Typography>
                                <Typography paragraph>تعداد فروخته شده: {en2fa(pro.sold_count)}</Typography>
                                <Typography paragraph>موجودی: {en2fa(pro.stock)}</Typography>
                                <Typography paragraph>سردسته: {pro.sub_category.category.title}</Typography>
                                <Typography paragraph>زیردسته: {pro.sub_category.title}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            )}
            </Grid>
        </ShowByPagein>
    </> );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Products;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //