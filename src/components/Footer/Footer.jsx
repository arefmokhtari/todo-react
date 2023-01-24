// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Typography, Box, IconButton } from '@mui/material';
import logo from '../../assets/nav-logo.png';
import TwitterIcon from '../UI/ICONS/FooterIcons/TwitterIcon/TwitterIcon';
import InstagramIcon from '../UI/ICONS/FooterIcons/InstagramIcon/InstagramIcon';
import FacebookIcon from '../UI/ICONS/FooterIcons/FacebookIcon/FacebookIcon';
import { Link } from 'react-router-dom';
import { FooterList, FooterListItem, HeadFooterList,ImageLogo, Map, ImageGrid } from './Footer.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Footer = () => (
    <Grid container sx={{borderTop: '2px solid #EAEAEA', marginTop: '100px'}} component='footer'>
        <Grid item xs={11} sx={{margin: 'auto'}}>
            <Grid container maxWidth='xl' sx={{margin: 'auto', padding: '48px 0'}}>
                
                <Grid item xs={12} md={4}>
                    <ImageGrid item xs={12} md={10}>
                        <ImageLogo src={logo} />
                        <Typography paragraph sx={{fontWeight: '400',fontSize: '14px',lineHeight: '21px',color: '#7B808C'}}> در خصوص متن ها نوشته شود می تواند در آن چیزی که میخواهد شود . این یک متن آزمایشی میباشد استفاده شده است .این قسمت درج در خصوص متن ها نوشته شود می تواند در آن چیزی که میخواهد شود . این یک متن آزمایشی میباشد استفاده شده است .این قسمت درج</Typography>
                        <Box>
                            <IconButton component='a' target='_blank' href='https://instagram.com'>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton component='a' target='_blank' href='https://facebook.com'>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton component='a' target='_blank' href='https://twitter.com'>
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </ImageGrid>
                </Grid>

                <Grid xs={12} md={4} item>
                    <Grid container>
                        <Grid item xs={6} md={5}>
                            <FooterList>
                                <HeadFooterList>میانبر ها</HeadFooterList>
                                <FooterListItem>
                                    <Link to='/'>صفحه اصلی</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>درباره ما</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>تماس با ما</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>قوانین و مقررات</Link>
                                </FooterListItem>
                            </FooterList>
                        </Grid>
                        <Grid item xs={6} md={5}>
                            <FooterList>
                                <HeadFooterList>میانبر ها</HeadFooterList>
                                <FooterListItem>
                                    <Link to='/'>صفحه اصلی</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>درباره ما</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>تماس با ما</Link>
                                </FooterListItem>
                                <FooterListItem>
                                    <Link to='/'>قوانین و مقررات</Link>
                                </FooterListItem>
                            </FooterList>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} md={4} item sx={{direction: 'rtl'}}>
                    <Map
                        //src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12834.486760381295!2d52.8478112!3d36.4666978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a5c8790576fb3e8!2z2LTYsdqp2Kog2YbYsdmFINin2YHYstin2LHbjCDYr9in2K_ZhyDaqdin2YjZiNio!5e0!3m2!1sfa!2s!4v1674476180480!5m2!1sfa!2s" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Footer;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //