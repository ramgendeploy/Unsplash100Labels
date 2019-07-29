import Header from './components/header.js';
var appElem = document.getElementById('app');

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(
            'h1',
            null,
            'This is working'
        )
    );
}

ReactDOM.render(React.createElement(App, null), appElem);