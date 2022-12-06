// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { memo } from 'react';
import './Button.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Button = memo(({
    type, 
    className,
    ... kwargs
}) => <button 
    className={'button' + (className?' '+className:'')}
    type={type || 'button'}
    {... kwargs}
/>);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Button;