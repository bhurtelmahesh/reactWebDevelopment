import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

import './index.css';

const MyPage = () => {
    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
}

const Body = () => {
    return(
        <main>
        <h1> Reasons why I'm excited to learn React</h1>
        <ol>
            <li>It is the most used JavaScript Library</li>
            <li>It is the most popular JavaScript Library</li>
            <li>It is a very desireable skill, I'm more likely to get a job</li>
            <li>It is a very hireable skill</li>
            <li>Powers thousands of enterprise apps, including mobile apps, so that the job opportunity is pretty high</li>
        </ol>
        </main>
    )
}
const Footer = () => {
    return(
        <footer className='footer'>
            <p>&copy; 2022 Bhurtel Development. All  rights reserved.</p>
        </footer>
    )
}

ReactDOM.render(<MyPage />, document.querySelector('#root'));