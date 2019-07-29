import Header from './components/Header.js';
import Prediction from './components/Prediction.js';

var appElem = document.getElementById('app');

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Prediction, null)
    );
}

ReactDOM.render(React.createElement(App, null), appElem);