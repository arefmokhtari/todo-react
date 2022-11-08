
import React from 'react';
import RenderCM from '../../hoc/RenderCM';
import './Duplicate.css';
import DuplicateForm from '../../components/DuplicateForm/DuplicateForm';

const Duplicate = () => {
    return <>
    <h3>duplicate numbers</h3>
    <DuplicateForm />
    </>;
}

export default RenderCM(Duplicate, {className: 'containers duplicate'});