import React from 'react';
import Sax from  '../public/images.jpeg';
import Bass from  '../public/415ZGxk58XL.jpg';
import Abletonlogo from '../public/meg6nawssnb01.jpg';
import Song from '../public/Chenso Club-esque (1).wav'

const Hobby2: React.FC = () => {
    return (
        <div style={{fontFamily:"Georgia", background:"teal", padding:"100px",height:"fit-content", wordWrap:"break-word"}}>
            <h1 style={{position:"sticky", textAlign:'center', top:70, width:416, backgroundColor:"grey"}}>Nate's Hobby</h1><br/>
            <h2 style={{fontSize:40}}>Music!</h2>

            <div id={"imgcluster"} style={{display:"inline-block", blockSize:"fit-content"}}>
                <img src={Sax} style={{float:"left", width:"50%"}}/>
                <img src={Bass} style={{float:"right", width:"50%"}}/>
                <img src={Abletonlogo} style={{float:"right", marginRight:80, width:"30%"}}/>
            </div>

            <p style={{padding:0}}>
                I play (the):
            </p>
            <ul style={{display:"inline-block", alignSelf:"center", blockSize:"fit-content", width:"fit-content",padding:0}}>
                <li>Bass</li>
                <li>Saxophone</li>
                <li>Keyboard</li>
                <li>Ukulele</li>
            </ul>

            <p>
                Below are my favorite artists and my favorite songs from them
            </p>
            <table style={{ margin: 'auto', borderCollapse:"collapse", width: '60%', border: '1px solid black' }}>
                <thead>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Artist</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Song</th>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>The Strokes</td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Last Nite</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Snarky Puppy</td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Lingus</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Red Hot Chile Peppers</td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Scar Tissue</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Starjunk</td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>Groove District</td>
                    </tr>
                </tbody>
            </table>
            <br/><br/>
            <p>
                Below is a song I made digitally inspired by a game called Chenso Club (careful it might be loud!):
            </p>
            <audio controls id={"playedsong"} loop={true}>
                <source src={Song} type="audio/wav"/>
            </audio>

            <h2>What did you think of the song?</h2>
            <form style={{ marginTop:15 }} >
                <label>
                    <input type="text" name="hobby" style={{ margin: '5px' }} />
                </label>
                <br />
                <button type="submit" style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>

        </div>

    );
};

export default Hobby2;