import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div className="intro-page" style={{ textAlign: 'center', padding: '20px', color: 'black' }}>
            <h2>Welcome!</h2>
            <p>Hi, I'm {name1}, a 3rd year computer science major at WPI with a minor in law and technology. In my free time I like listening to music and doing art.</p>
            <p>Hi, I'm {name2}, I am a 3rd year RBE major and Astrophysics minor. I love listening and making music, taking apart old electronics, and playing video games!</p>
        </div>
    );
};

export default Intro;
