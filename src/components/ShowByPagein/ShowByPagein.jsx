
import { Grid } from '@mui/material';
import GridShow from '../GridShow/GridShow';
import { MainShow } from './ShowByPagein.style';
import Pagein from '../UI/Pagein/Pagein';
import { pageinCal } from '../../utils/plugins';

const ShowByPagein = ({ children, title, count, changePagein, anyCm, page }) => (
    <GridShow title={title}>
        {anyCm}
        <MainShow component={Grid} container>
            {children}
        </MainShow>
        <Pagein count={pageinCal(count)} onChange={(_, v) => changePagein(v)} />
    </GridShow>
);

export default ShowByPagein;