import React from 'react';
import Henna from '../public/henna.jpeg';
import TradHenna from '../public/trad-henna.jpeg';
import BridalHenna from '../public/bridal-henna.jpeg';
import MoroccanHenna from '../public/moroccan-henna.jpg';

const Hobby1: React.FC = () => {
    return (
        <div className="hobby1-page" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Henna</h1>
            <p>
               I like using henna as a form of art to express myself.
            </p>

            <img
                src={Henna}
                alt="Palms Adorned with Henna"
                style={{ width: '300px', borderRadius: '10px', margin: '20px' }}
            />

            {/* List Component */}
            <h2>What Henna is Made From</h2>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                <li>Powder of Henna Leaves</li>
                <li>Water</li>
                <li>Lemon Juice</li>
                <li>Sugar</li>
                <li>Eucalyptus Oil</li>
            </ul>

            {/* Table Component */}
            <h2>My Favorite Patterns</h2>
            <table
                style={{ margin: 'auto', borderCollapse: 'collapse', width: '60%', border: '1px solid black' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Type</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Example</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>Traditional Henna</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                        <img src={TradHenna} alt="Capture" style={{ width: '100px', height: 'auto' }} />
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>Bridal Henna</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                        <img src={BridalHenna} alt="Capture" style={{ width: '100px', height: 'auto' }} />
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>Moroccan Henna</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                        <img src={MoroccanHenna} alt="Capture" style={{ width: '100px', height: 'auto' }} />
                    </td>
                </tr>
                </tbody>
            </table>

            {/* Form */}
            <h2>Which One is Your Favorite Pattern</h2>
            <form style={{ marginTop: '20px' }} >
                <label>
                    Your Name:
                    <input type="text" name="name" style={{ margin: '5px' }} />
                </label>
                <br />
                <label>
                    Your Favorite Pattern:
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

export default Hobby1;
