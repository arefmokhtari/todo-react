
import React from 'react';
import './TempDiv.css';



const TempDiv = ({ children: childs, className, ... kwargs }) => <div {... kwargs} className={'temp-div-class '+className}>
    {childs}
</div>;


export default TempDiv;