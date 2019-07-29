import Header from './components/header.js'
const appElem = document.getElementById('app')

function App(){
    return (
        <div>
            <Header />
            <h1>This is working</h1>

        </div>
        
        )
}

ReactDOM.render(
    <App />,
    appElem
);