// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import './Card.css';
import Wrapper from '../../../hoc/Wrapper';
import { memo } from 'react';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Card =  memo(({children: child, width, margin, className, ... kwargs}) =>(
    <Wrapper className={'mycard' + (className?' '+className:'')} style={{width: width || '30%', margin: margin || '10px auto'}} {... kwargs}>
        {child}
    </Wrapper>
));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Card;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //