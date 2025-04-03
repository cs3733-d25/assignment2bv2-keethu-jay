import React from 'react';
import Sax from  '../public/images.jpeg';
import Bass from  '../public/415ZGxk58XL.jpg';
import Abletonlogo from '../public/meg6nawssnb01.jpg';
import Song from '../public/Chenso Club-esque (1).wav'

const Hobby2: React.FC = () => {
    return (
        <div style={{fontFamily:"Georgia", background:"teal", padding:"100px",height:"1200px"}}>
            <h1 style={{position:"sticky", textAlign:'center', top:70, width:416, backgroundColor:"grey"}}>Nate's Hobby</h1><br/>
            <h2 style={{fontSize:40}}>Music!</h2>

            <div id={"imgRow"} style={{flexWrap:'wrap'}}>
                <img src={Sax} style={{float:"left", width:"50%"}}/>
                <img src={Bass} style={{float:"right", width:"50%"}}/>
                <img src={Abletonlogo} style={{float:"right", width:"50%"}}/>
            </div>



        </div>

    );
};

export default Hobby2;