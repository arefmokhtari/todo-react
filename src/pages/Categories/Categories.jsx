// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useEffect, useState } from 'react';
import ShowByPagein from '../../components/ShowByPagein/ShowByPagein';
import { useLimitSkip } from '../../hooks/request-hook';
import { getCategories } from '../../api/requests';
import { BoxShow, MsgIcon, IconShow } from '../../components/ShowByPagein/ShowByPagein.style';
import Title from '@mui/icons-material/Title';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { BackBtn } from '../../components/EditAndAddCategory/EditAndAddCategory.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Categories = () => {
    // - - - - - - - - - - - - //
    const [data, setData] = useState({});
    const [parent, setParent] = useState(null);
    // - - - - - - - - - - - - //
    useEffect(() => {
        if(parent !== null)
            if(parent.length !== 0)
                request.setSkip({ is_main: 0, limit: 10, skip: 0, parent_id: parent });
            else
                request.setSkip({ is_main: 1, limit: 10, skip: 0 });
    }, [parent])
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getCategories,
        success: req => setData(req.data.data),
        state: {
            is_main: 1,
            limit: 10,
            skip: 0,
        },
    });
    // - - - - - - - - - - - - //// - - - - - - - - - - - - //
    const showPanelCatHandler = id => setParent(`${id}`);
    
    const backMainHandler = () => setParent('');
    // - - - - - - - - - - - - //
    return ( <>
        { parent?<BackBtn onClick={backMainHandler} sx={{right: '20px'}}>بازگشت</BackBtn>:<BackBtn onClick={() => request.nav('add')} sx={{right: '20px'}}>افزودن</BackBtn> }
        <ShowByPagein title='دسته بندی ها' count={data.count} changePagein={request.movePageHandler}>
            {
                data.data?.map(value => 
                    <BoxShow key={value.id}>
                        <Box>
                            <Box sx={{display: {sm: 'block', md: 'inline-block'}}}>
                                <MsgIcon icon={<Title sx={{color: '#71D0A0 !important'}}/>} label={value.title} /> <br />
                            </Box>
                        </Box>
                        <IconShow>
                                <IconButton onClick={() => request.nav(`edit/${value.id}`)}>
                                    <EditIcon sx={{color: '#71D0A0'}} /> 
                                </IconButton>
                                {!parent && <IconButton onClick={() => showPanelCatHandler(value.id)}>
                                    <ArrowBackIosNewIcon sx={{color: '#71D0A0'}} /> 
                                </IconButton>}
                        </IconShow>
                    </BoxShow>
                )
            }
        </ShowByPagein>
    </> );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Categories;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //