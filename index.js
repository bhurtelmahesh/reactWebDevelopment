const MyPage = () => {
    return(
    <div>
        <img src="react.png" alt="React Logo" width="60px" />
        <h1> Reasons why I'm excited to learn React</h1>
        <ol>
            <li>It is the most used JavaScript Library</li>
            <li>It is the most popular JavaScript Library</li>
            <li>It is a very desirable skill</li>
            <li>It is a very hirable skill</li>
            <li>Powers thousands of enterprise apps, including mobile apps, so that the job opportunity is pretty high</li>
        </ol>
    </div>
    );
}


ReactDOM.render(<MyPage />, document.querySelector('#root'));
