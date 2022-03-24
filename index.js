//ReactDOM.render(<h1>Hello, World!</h1>, document.getElementById('root'));
//ReactDOM.render(<p>Hi, My Name is Maheshwor!</p>, document.querySelector('#root'));
const MainComponent = () => {
    return (
        <h1>I'm Learning React!</h1>
    );
};

ReactDOM.render(<div> <MainComponent /> </div>,document.querySelector('#root'));