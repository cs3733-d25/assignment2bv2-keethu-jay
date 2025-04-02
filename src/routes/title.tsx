import React from 'react';
import Hobby1 from './hobby1.tsx';
import Hobby2 from './hobby2.tsx';
import Intro from './intro';
import { useNavigate } from 'react-router-dom';
const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#cfebb6',
    fontSize: '16px',
    cursor: 'pointer',
    marginPadding: '5px',
};
const Title: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="title-page" style={{ textAlign: 'center', marginTop: '50px', padding: '10px 20px' }}>
            <h1>CS3733-D25 Team 47: Henna and </h1>
            <h2>Which page would you like to visit:</h2>
            <button onClick={() => navigate('/keethu')}>Keethu's Hobby</button>
            <button onClick={() => navigate('/intro')}>Intro</button>
            <button onClick={() => navigate('/nate')}>Nate's Hobby</button>
        </div>
    );
};



export default Title;
