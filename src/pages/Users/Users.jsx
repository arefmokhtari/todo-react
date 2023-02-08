// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { IconButton, Box, Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import Person from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import Wallet from '@mui/icons-material/Wallet';
import ShowByPagein from '../../components/ShowByPagein/ShowByPagein';
import { BoxShow, MsgIcon } from '../../components/ShowByPagein/ShowByPagein.style';
import { useLimitSkip } from '../../hooks/request-hook';
import { getUsers } from '../../api/requests';
import { Text } from '../../components/EditAndAddCategory/EditAndAddCategory.style';
import Search from '@mui/icons-material/Search';
import { BoxSearch, ParagraphSearch } from './Users.style';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { en2fa, enNum2FaNum } from '../../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
const Users = () => {
    // - - - - - - - - - - - - //
    const [data, setData] = useState({});
    const [search, setSearch] = useState(null);
    const [open, setOpen] = useState({id: 0, target: null});
    // - - - - - - - - - - - - //
    useEffect(() => {
        const searchValue = setTimeout(() => {
            if(search !== null)
                if(search.trim().length === 0)
                    request.setSkip({ limit: 10, skip: 0 });
                else request.setSkip({ limit: 10, skip: 0, search: search });
        }, 1300);
        return () => clearTimeout(searchValue);
    },[search]);
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getUsers,
        success: req => setData(req.data.data),
    });
    const handleClick = (event, id) => setOpen({target: event.currentTarget, id });
    
    const handleClose = () => setOpen({target: null, id: 0 });

    const searchHandler = event => setSearch(event.target.value);
    // - - - - - - - - - - - - //
    return ( 
        <ShowByPagein title='لیست کاربران' count={data.count} changePagein={request.movePageHandler}
        anyCm={<BoxSearch>
            <ParagraphSearch paragraph sx={{position: {sm: 'relative', md: 'absolute'}}}>
                جست و جو بر اساس نام
            </ParagraphSearch>
            <Text label='جست و جو' onChange={searchHandler} InputProps={{endAdornment: <Search sx={{color: 'gray !important'}} />}}/>            
        </BoxSearch>}
        >
        {
            data.data?.map(value =>
                <BoxShow key={value.id}>
                    <Box>
                        <Box sx={{display: {sm: 'block', md: 'inline-block'}}}>
                            <MsgIcon icon={<Person sx={{color: '#71D0A0 !important'}}/>} label={value.name} /> <br />
                            <MsgIcon icon={<Email sx={{color: '#71D0A0 !important'}}/>} label={value.email} />
                        </Box>
                        <Box sx={{display: {sm: 'block', md: 'inline-block'}}}>
                            <MsgIcon icon={<Phone sx={{color: '#71D0A0 !important'}}/>} label={value.phone_number && enNum2FaNum(value.phone_number) || 'وارد نشده'} /> <br />
                            <MsgIcon icon={<Wallet sx={{color: '#71D0A0 !important'}}/>} label={value.wallet_amount?en2fa(value.wallet_amount)+ ' تومان':'وارد نشده'} />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <Box>
                            <IconButton
                                aria-label={"more"+value.id}
                                id={"long-button"+value.id}
                                aria-controls={open.id ? 'long-menu'+value.id : undefined}
                                aria-expanded={open.id ? 'true'+value.id : undefined}
                                aria-haspopup={"true"+value.id}
                                onClick={event => handleClick(event, value.id)}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id={"long-menu"+value.id}
                                MenuListProps={{
                                'aria-labelledby': 'long-button'+value.id,
                                }}
                                anchorEl={open.target}
                                open={value.id === open.id}
                                onClose={handleClose}
                                PaperProps={{
                                style: {
                                    maxHeight: 30 * 4.5,
                                    width: '20ch',
                                },
                                }}
                                //sx={{'& *':{fontFamily: 'IRANSansX !important',}}}
                            >
                                <MenuItem  onClick={() => request.nav(`edit/${value.id}`)}>
                                    ادیت
                                </MenuItem>
                                <MenuItem  onClick={() => request.nav(`address/${value.id}`)}>
                                    آدرس ها
                                </MenuItem>
                                <MenuItem  onClick={() => request.nav(`wallet/${value.id}`)}>
                                    کیف پول
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </BoxShow>
            )
        }
        </ShowByPagein>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Users;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //