
import React, { useState, useEffect } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Modal from '../Modal/Modal';

const Home = () => {
    const [modalData, setModalData] = useState({
        showing: false,
        text: '',
        title: ''
    });
    useEffect(() => {
        alert('hi');
    }, []);
    const modalDataHandler = (text = '', title = '') => setModalData({ showing: !modalData.showing,  text, title });
    return <>
        <h2 style={{textAlign: 'center', marginBottom: '30px'}}>home</h2>
        <About modalHandler={modalDataHandler} />
        <Contact modalHandler={modalDataHandler} />
        <Modal showing={modalData.showing} modalHandler={modalDataHandler}>
            <h3>{modalData.title}</h3>
            <p>{modalData.text}</p>
        </Modal>
    </>;
};


export default Home;
