const MyPage = () => {
    return(
    <div>
        <header>
            <nav>
                <img src="react.png" alt="React Logo" width="60px" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>       
            </nav>
        </header>
        <h1> Reasons why I'm excited to learn React</h1>
        <ol>
            <li>It is the most used JavaScript Library</li>
            <li>It is the most popular JavaScript Library</li>
            <li>It is a very desireable skill, I'm more likely to get a job</li>
            <li>It is a very hireable skill</li>
            <li>Powers thousands of enterprise apps, including mobile apps, so that the job opportunity is pretty high</li>
        </ol>
        <footer>
            <p>&copy; 2022 Bhurtel Development. All  rights reserved.</p>
        </footer>
    </div>
    );
}


ReactDOM.render(<MyPage />, document.querySelector('#root'));
