var el = x => document.getElementById(x);
class Prediction extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        randomtxt: "heeey brother",
        selectedFile: null,
        uploadLabel: 'No file chosen 😢',
        imgPickedRaw: '',
        imgPicked: false,
        btnAnalyze: 'Analyze',
        notifications: '',
        fileSelected: false
      }
     
    }
  onChangeHandler=event=>{

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  
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
      xhr.onload = function(e) {
        if (this.readyState === 4) {
          let response = JSON.parse(e.target.responseText);
          
          showResult(JSON.parse(response["result"]), "result-ul")
        }
        this.setState({btnAnalyze: "Analyze"})
      };
    
      let fileData = new FormData();
      fileData.append("file", this.state.selectedFile);
      xhr.send(fileData);
    }else{
      this.setState({notifications:"Please select a file to analyze!"})
    }
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
        <div className='upload-label'>
          <label id='upload-label'>
            {this.state.uploadLabel}
          </label>
        </div>
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
        </div>
        <span>{this.state.notifications}</span>
      </div>
    )
  }
}

export default Prediction