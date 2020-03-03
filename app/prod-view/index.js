import Header from './Header.js';
import Prediction from './Prediction.js';

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