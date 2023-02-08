// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Pagein = ({ count, onChange, ...kwargs }) => (
    <Stack spacing={2} sx={{'& *':{direction: 'ltr', fontFamily: 'Salamat !important', fontSize: '20px'}, margin: '10px auto'}}>
        <Pagination {...kwargs} 
            count={count} 
            sx={{ margin: 'auto',  "& .Mui-selected": {background: "#71D0A0 !important"}}} 
            color='primary' 
            size='large' 
            onChange={onChange} 
            renderItem={item => (
                <PaginationItem
                    slots={{ previous: ArrowRightIcon, next: ArrowLeftIcon }}
                    {...item}
                />
            )}
        />
    </Stack>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Pagein;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //