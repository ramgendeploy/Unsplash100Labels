import Header from './components/Header.js'
import Prediction from './components/Prediction.js'

const appElem = document.getElementById('app')

function App(){
    return (
        <div>
            <Header />
            <Prediction />
        </div>
        
        )
}

ReactDOM.render(
    <App />,
    appElem
);