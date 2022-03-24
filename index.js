//ReactDOM.render(<h1>Hello, World!</h1>, document.getElementById('root'));
//ReactDOM.render(<p>Hi, My Name is Maheshwor!</p>, document.querySelector('#root'));
MainComponent = () => {
    return(
        <div>
            <h1>I'm Learning React!</h1>
        </div>
    )
}

ReactDOM.render(<MainComponent />, document.querySelector('#root'));