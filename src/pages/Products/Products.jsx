// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Backdrop, Box, Fab, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useLimitSkip, requestName } from '../../hooks/request-hook';
import { GridItems, TagShow, BoxAbs, BoxCategory, BoxLabelCategory } from './Products.style';
import { getProducts, getCategories, getByIdCategory } from '../../api/requests';
import { useState, useEffect, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fileApi, en2fa, enNum2FaNum, pageinCal, objectToargGetMethod, checkDataNotEmpty } from '../../utils/plugins';
import DiscountPrice from '../../components/UI/ICONS/DiscountPrice/DiscountPrice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CategoryShop from '../../components/UI/CategoryShop/CategoryShop';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Checkbox from '@mui/material/Checkbox';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Products = () => {
    // - - - - - - - - - - //
    const { id, filter, subid } = useParams();
    const [products, setProducts] = useState({});
    const [categorires, setCategories] = useState({filter: [], categorires: []});
    const [openModal, setOpenModal] = useState(false);
    // - - - - - - - - - - //
    const request = useLimitSkip({
        requestName: requestName.BYLOADING,
        request: getProducts,
        success: req => setProducts(req.data.data),
        state: {
            ...(!id && {limit: 6,
            skip: 0,}),
            ... checkDataNotEmpty({
                order_by: filter && 'most_'+filter,
                ... (subid && {subcategory_id: subid} || id && {category_id: id,})
            }),
        },
    }, { 
        ingnoreToken: true,
        start: [{
            requestName: requestName.BYLOADING,
            request: subid?getByIdCategory:getCategories,
            args: [subid?subid: '?' + objectToargGetMethod({
                ...(id?{parent_id: id,}:{is_main: 1,})
            }),],
            success: (req, out) => subid?out.reRender(0, {
                request: getCategories,
                args: [`?parent_id=${req.data.data.parent_id}`],
                success: anyReq => setCategories({categorires: anyReq.data.data.data, filter: []}),
            }):setCategories({filter: [], categorires: req.data.data.data}),
        },],
    });
    // - - - - - - - - - - //
    const handlerProduct = useCallback(async () => {
        if(request.skip.category_id != id || filter && request.skip.order_by != 'most_'+filter || request.skip.subcategory_id != subid){
            request.setSkip({
                // ... (subid && {subcategory_id: subid}),
                ... (!id && {limit: 6,skip: 0}),
                ... (id && {category_id: id}),
                ...(filter && request.skip.category_id == id && {order_by: filter && 'most_'+filter})});

            if(!id && !subid || id && !subid){
            await request.requestByLoading({
                request: subid?getByIdCategory:getCategories,
                args: [subid?subid: '?' + objectToargGetMethod({
                    ...(id?{parent_id: id,}:{is_main: 1,})
                }),],
                success: (req, out) => subid?out.reRender(0, {
                    request: getCategories,
                    args: [`?parent_id=${req.data.data.parent_id}`],
                    success: anyReq => setCategories({filter: [], categorires: anyReq.data.data.data}),
                }):setCategories({categorires: req.data.data.data, filter: []}),
            });}
        }
    }, [id, subid, filter]);
    // - - - - - - - - - - //
    const toggleListBox = id => {
        const data = [... categorires.filter];
        if (!data.includes(id)) 
            data.push(id);
        else 
            data.splice(data.indexOf(id), 1);
          
        return data;
    }
    // - - - - - - - - - - //
    useEffect(() => {
        handlerProduct();
    }, [handlerProduct]);
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto'>

            <Backdrop open={openModal} sx={{zIndex: 9999}}>
                <BoxCategory sx={{width: '90%', margin: 'auto', position: 'relative'}}>
                    <IconButton sx={{position: 'absolute', right: '2px', color: 'white'}} onClick={() => setOpenModal(!openModal)} >
                        <HighlightOffIcon />
                    </IconButton>
                    <BoxLabelCategory>
                        <Typography>دسته بندی ها</Typography>
                    </BoxLabelCategory>
                    <Box sx={{overflowY: 'scroll', height: 'calc(100% - 56px)'}}>
                    <List>
                        {
                            categorires.categorires?.map(category =>
                                        <ListItem disablePadding key={category.id}>
                                            <ListItemButton {...{...((!id && {to: `/products/${category.id}`,component: NavLink}) || {onClick: () => setCategories(pre => ({... pre, filter: toggleListBox(category.id)}))})}}>
                                                <ListItemIcon>
                                                    {id?<Checkbox 
                                                        edge="start"
                                                        checked={categorires.filter.includes(category.id)}
                                                        tabIndex={category.id}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${category.id}` }}
                                                    />:<ArrowLeftIcon />}
                                                </ListItemIcon>
                                                <ListItemText sx={{color: '#05101D'}} primary={category.title} />
                                            </ListItemButton>
                                        </ListItem>
                            )
                        }
                    </List>
                    </Box>
                </BoxCategory>
            </Backdrop>

            <Grid item xs={11} margin='auto'>
                <Grid container>
                    <Grid item xs={12} sx={{      
                        height: {xs: '44px', md:'64px'},
                        background: '#F5F5F5',
                        borderRadius: '8px',
                        margin: '36px auto',
                        overflow: 'hidden',
                    }}>
                        <Grid container sx={{height: '100%'}}>
                        
                            <GridItems item xs={0} md={3} display={{xs: 'none',md: 'flex'}}>
                                <TagShow sx={{marginLeft: '20px', color: '#515151',}}>
                                    نحوه مرتب سازی: 
                                </TagShow>
                                <BoxAbs />
                            </GridItems>
                            <GridItems item xs={4} md={3} style={({isActive}) => (isActive?{background: '#4DC488', color: 'white'}:{color: '#515151',})} 
                                to={id?`/products/${id}/sold`:'/products/filter/sold'} justifyContent='center' component={NavLink}>
                                    <TagShow>
                                        پرفروش ترین
                                    </TagShow>
                                <BoxAbs />
                            </GridItems>
                            <GridItems item xs={4} md={3} 
                            style={({isActive}) => (isActive?{background: '#4DC488', color: 'white'}:{color: '#515151',})} 
                                to={id?`/products/${id}/cheapest`:'/products/filter/cheapest'} justifyContent='center' component={NavLink}>
                                    <TagShow>
                                        ارزان ترین
                                    </TagShow>
                                <BoxAbs />
                            </GridItems>
                            <GridItems item xs={4} md={3} 
                            style={({isActive}) => (isActive?{background: '#4DC488', color: 'white'}:{color: '#515151',})} 
                                to={id?`/products/${id}/expensive`:'/products/filter/expensive'} justifyContent='center' component={NavLink}>
                                    <TagShow>
                                        گرانترین
                                    </TagShow>
                            </GridItems>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sx={{display: {md: 'block', xs: 'none'}}}>
                            <BoxCategory>
                                <BoxLabelCategory>
                                    <Typography>دسته بندی ها</Typography>
                                </BoxLabelCategory>
                                <Box sx={{overflowY: 'scroll', height: 'calc(100% - 56px)'}}>
                                <List>
                                    {
                                        categorires.categorires?.map(category =>
                                        <ListItem disablePadding key={category.id}>
                                            <ListItemButton {...{...((!id && {to: `/products/${category.id}`,component: NavLink}) || {onClick: () => setCategories(pre => ({... pre, filter: toggleListBox(category.id)}))})}}>
                                                <ListItemIcon>
                                                    {id?<Checkbox 
                                                        edge="start"
                                                        checked={categorires.filter.includes(category.id)}
                                                        tabIndex={category.id}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${category.id}` }}
                                                    />:<ArrowLeftIcon />}
                                                </ListItemIcon>
                                                <ListItemText sx={{color: '#05101D'}} primary={category.title} />
                                            </ListItemButton>
                                        </ListItem>
                                        )
                                    }
                                </List>
                                </Box>
                            </BoxCategory>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={2}>
                                {
                                    products.data?.filter(pro => categorires.filter.length == 0 || categorires.filter.includes(+pro.subcategory_id)).map(pro => 
                                        <Grid key={pro.id} item xs={6} md={4} to={`/product/${pro.id}`} component={NavLink} sx={{textDecoration: 'none'}}>
                                        <Box sx={{
                                            width: '100%',
                                            height: {md: '376px', xs: '202px'},
                                            border: '1px solid #D9D9D9',
                                            borderRadius: '8px',
                                            overflow: 'hidden'
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
                                            }}>
                                                {pro.title}
                                            </Typography>
                                            <Box sx={{display: 'flex', marginTop: {md: '50px', xs: 0}}}>
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
                                            </Box>
                                        </Box>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    {!id && <Grid item sx={{margin: '20px auto'}}>
                        <Stack spacing={2}>
                            <Pagination
                                sx={{
                                    margin: 'auto',
                                    "& .Mui-selected": {
                                        background: "white !important", 
                                        color: '#4DC488',
                                    },
                                    '& *': {
                                        fontFamily: 'Salamat !important',
                                    },
                                    //'& .MuiButtonBase-root':{paddingTop: '6px'}
                                }}
                                count={pageinCal(products.count, 6)}
                                onChange={(_, value) => request.movePageHandler(value)}
                                renderItem={item => (
                                    <PaginationItem
                                        slots={{ previous: KeyboardArrowRightIcon, next: KeyboardArrowLeftIcon }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </Grid>}
                    <Fab  size="medium" onClick={() => setOpenModal(!openModal)}
                        sx={{ 
                            position: 'fixed', 
                            display: {md: 'none', xs: 'inline-flex'},
                            bottom: 10, 
                            right: 10,

                            background: '#4DC488 !important',
                            
                        }}>
                            <CategoryShop />
                        </Fab>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Products;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //