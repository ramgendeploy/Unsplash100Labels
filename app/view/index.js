import Header from './Header.js'
import Prediction from './Prediction.js'

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