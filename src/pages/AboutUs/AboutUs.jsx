// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid } from '@mui/material';
import AboutUsIcon from '../../components/UI/ICONS/AboutUsIcon/AboutUsIcon';
import { IconBox, ShowLabel, Image, MainGrid, BtnContectUs, ShowData } from './AboutUs.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AboutUs = () => {

    // - - - - - - - - - - //
    return (
        <Grid container sx={{margin: 'auto',marginTop: '100px'}} maxWidth='xl'>
            <MainGrid item xs={11}>
                <IconBox><AboutUsIcon /></IconBox>

                <Grid item xs={12}>
                    <ShowLabel>
                        درباره ما
                    </ShowLabel>
                </Grid>


                <Grid item xs={12} md={10} sx={{margin: 'auto', '& *': {color: '#585858', textAlign: 'justify'}}}>
                    <ShowData>
                <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های اندروید و آی او اس آغاز کرد و با تلاش بی وقفه همکاران خود توانسته پروژهای بسیار خوبی را در این مجموعه اجرا کند و به یکی از بزرگترین شرکت های نرم افزاری شمال کشور تبدیل گردد شرکت داده کاووب افتخار دارد با برخورداری از توان بالای نرم افزاری سخت افزاری و با بهره مندی از نیرو های جوان خلاق و مبتکر اقدام به تولید و راه اندازی سامانه آموزشگاه مجازی سام نموده که قابلیت های استثنایی نسبت به دیگر موارد مشابه دارا می باشد شرکت ما با تمرکز در زمینه آموزش پروژه محور و انجام سفارشات برنامه نویسی تحت وب , اندروید و... رشد با شکوهی داشت ما و تیم برنامه نویسی حرفه ای خود تلاش بر این داریم که بهترین کیفیت آموزش و انجام پروژه را به دانشجویان و مشتریان گرانقدر خود ارائه دهیم شرکت نرم افزاری داده کاووب توسط جوانان خلاق و با استعداد این شهر تأسیس گردیده تا بتواند تأثیر زیادی در بالا بردن سطح علمی شهر قائمشهردر حوزه برنامه نویسی و صنعت IT داشته باشد</p>
                    </ShowData>
                </Grid>
                <Grid item xs={12} md={10} sx={{margin: 'auto', marginTop: '38px'}}>
                    <Image 
                        alt=''
                    />
                </Grid>
                <Grid item xs={12} md={10} sx={{margin: 'auto', marginTop: '38px', marginBottom: '64px'}} display='flex' justifyContent='center'>
                    <BtnContectUs to='/contact-us'>
                        تماس با ما
                    </BtnContectUs>
                </Grid>
            </MainGrid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AboutUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //