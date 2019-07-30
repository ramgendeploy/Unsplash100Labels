import TenRandoms from "./TenRandoms.js"
var el = x => document.getElementById(x);
class Prediction extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        randomtxt: "Analyze one Random image",
        selectedFile: null,
        uploadLabel: 'No file chosen 😢',
        imgPickedRaw: '',
        imgPicked: false,
        btnAnalyze: 'Analyze',
        notifications: '',
        fileSelected: false,
        randoms: false,
        randomsArr: [],
        imgRand: ''
      }
    }
  showPicker=()=>{
    el('file-input').click()
  }
  showPicked=(e)=>{
    // console.log(e.target.files)
    // el("upload-label").innerHTML = 
    this.setState({
      uploadLabel: e.target.files[0].name,
      selectedFile: e.target.files[0],
      notifications: '',
      imgPicked: true,
      fileSelected: true
    })
    var reader = new FileReader();
    reader.onload = (loaded)=> {
      this.setState({
        imgPickedRaw: loaded.target.result,
      })
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  analyze=(e)=>{
    if(this.state.fileSelected){
      this.setState({btnAnalyze: "Analyzing..."})

      let xhr = new XMLHttpRequest();
      // let loc = window.location;
      // xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
      xhr.open("POST", `https://unsplash100labels.herokuapp.com/analyze`, true);
      xhr.onerror = function() {alert(xhr.responseText);}
      xhr.onload = e => {
        console.log(e)
        if (e.target.readyState === 4) {
          let response = JSON.parse(e.target.responseText);
          this.setState({btnAnalyze:"Analyze"})
          
          showResult(JSON.parse(response["result"]), "result-ul")
        }  
      };

      let fileData = new FormData();
      fileData.append("file", this.state.selectedFile);
      xhr.send(fileData);
    }else{
      this.setState({notifications:"Please select a file to analyze!"})
    }
  }
  getRandoms=(e)=>{
    this.setState({
      randomtxt: "Obtaining..."
    })
    fetch("https://unsplash100labels.herokuapp.com/randoms")
    .then(function(response) {
      return response.json();
    })
    .then(jsonResponse => {
      this.setState({
        randomsArr: JSON.parse(jsonResponse.result),
        imgRand: jsonResponse.url,
        randoms: true,
        randomtxt: "Analyze one Random image"
      })
      showResult(this.state.randomsArr, "result-ulRand")

    }); 
  }
  render(){
    return (
      <div className='content center'>
        <input 
          id='file-input'
          className='no-display'
          type='file'
          name='file'
          accept='image/*'
          onChange={this.showPicked}/>

        <button 
          className='choose-file-button' 
          type='button' 
          onClick={this.showPicker}>Select Image 😁 </button>
        <label id='upload-label'>
          {this.state.uploadLabel}
        </label>
        
        <div className='prediction'>
          <img 
            id='image-picked' 
            className={ this.state.imgPicked ? null : 'no-display'} 
            alt='Chosen Image'
            src={this.state.imgPickedRaw} 
            height='200'/>

          <div className='result-label'>
            <ul id='result-ul'>
        
            </ul>
          </div>  
        </div>

        <div className='analyze'>
          <button 
            id='analyze-button' 
            className='analyze-button' 
            type='button' 
            onClick={this.analyze}>{this.state.btnAnalyze}</button>
          <button 
              id='analyze-button' 
              className='analyze-button' 
              type='button' 
              onClick={this.getRandoms}>{this.state.randomtxt}</button>
        </div>

        <span>{this.state.notifications}</span>
        {/* <TenRandoms randoms={this.state.randoms}/> */}
        <div className='prediction'>
          <img 
            id='image-picked' 
            className={ this.state.randoms ? null : 'no-display'} 
            alt='Chosen Image'
            src={this.state.imgRand} 
            height='200'/>

          <div className='result-label'>
            <ul id='result-ulRand'>
        
            </ul>
          </div>  
        </div>
      </div>
    )
  }
}

// export default Prediction