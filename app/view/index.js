// import Header from 'https://ramagg.com/classifier/prod-view/header.js'
// import Prediction from 'https://ramagg.com/classifier/prod-view/Prediction.js'

const appElem = document.getElementById('app')

function App(){
    return (
        <div className="Classification">
            <Header />
            <Prediction />
        </div>
        
        )
}

ReactDOM.render(
    <App />,
    appElem
);