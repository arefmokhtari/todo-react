
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Backdrop from '../../Backdrop/Backdrop';
import './Loading.css';
import Wrapper from '../../../hoc/Wrapper';
import { Load } from '../../../contexts/Load';
import { useState } from 'react';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Loading = ({children}) => {
    const [load, setLoad] = useState(false);
    return (
        <Load.Provider value={setLoad}>
            {children}
            {load && <>
                <Wrapper className='loading'>
                    <Wrapper className='cir-loading' />
                </Wrapper>
                <Backdrop />
            </>}
        </Load.Provider>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;