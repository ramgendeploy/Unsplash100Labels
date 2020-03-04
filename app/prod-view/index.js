// import Header from 'https://ramagg.com/classifier/prod-view/header.js'
// import Prediction from 'https://ramagg.com/classifier/prod-view/Prediction.js'

var appElem = document.getElementById('app');

function App() {
    return React.createElement(
        "div",
        { className: "Classification" },
        React.createElement(Header, null),
        React.createElement(Prediction, null)
    );
}

ReactDOM.render(React.createElement(App, null), appElem);