var el = x => document.getElementById(x);
class Prediction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      randomtxt: 'Random',
      uploadLabel: 'Select an image to classify',
      btnAnalyze: 'Analyze',
      imgPickedRaw: '',
      imgRandRaw: '',
      notifications: '',
      fileSelected: false,
      imgPicked: false,
      randoms: false,
      analyzing: false,
      gettingRandoms: false,
      randomResult: [],
      labelsresult: [],
    }
  }
  showPicker = () => {
    if (!this.state.analyzing) {
      el('file-input').click()
    }
    else {
      this.setState({ notifications: "Can't select another image, you have to wait for the current! 😁" })
    }
  }
  showPicked = (e) => {
    this.setState({
      uploadLabel: e.target.files[0].name,
      selectedFile: e.target.files[0],
      notifications: '',
      imgPicked: true,
      fileSelected: true,
      labelsresult: []
    })
    var reader = new FileReader();
    reader.onload = (loaded) => {
      this.setState({
        imgPickedRaw: loaded.target.result,
      })
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  parseResults = (arr) => {
    let result = []
    for (let i = 0; i < 5; i++) {
      const element = arr[i];
      result.push([classes[element[1]], (element[0] * 100).toFixed(2) + '%'])
    }
    console.log(result)
    return result
  }

  sendToAnalyze = (e) => {
    if (this.state.fileSelected) {
      if (!this.state.analyzing) {
        this.setState({ btnAnalyze: "Analyzing...", analyzing: true })
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `/analyze`, true);
        xhr.onerror = function () { alert(xhr.responseText); }
        xhr.onload = e => {
          if (e.target.readyState === 4) {
            let response = JSON.parse(e.target.responseText);
            let results = this.parseResults(JSON.parse(response["result"]))
            this.setState({ notifications: '', btnAnalyze: "Analyze", labelsresult: results, analyzing: false })
          }
        };
        let fileData = new FormData();
        fileData.append("file", this.state.selectedFile);
        xhr.send(fileData);
      } else {
        this.setState({ notifications: "Working on it!" })
      }
    } else {
      this.setState({ notifications: "Please select a file to analyze!" })
    }
  }

  getRandoms = (e) => {
    if (!this.state.gettingRandoms) {
      this.setState({
        randomtxt: "Obtaining...",
        gettingRandoms: true
      })

      fetch("/randoms")
        .then(function (response) {
          return response.json();
        })
        .then(jsonResponse => {
          this.setState({
            randomResult: this.parseResults(JSON.parse(jsonResponse.result)),
            imgRandRaw: jsonResponse.url,
            randoms: true,
            randomtxt: "Random",
            gettingRandoms: false,
            notifications: ''
          })
        });
    } else {
      this.setState({ notifications: "Working on it!" })
    }


  }
  render() {
    return (
      <div className='content center'>
        <input
          id='file-input'
          className='no-display'
          type='file'
          name='file'
          accept='image/*'
          onChange={this.showPicked} />

        <span className='alert'>{this.state.notifications}</span>

        <button
          className='choose-file-button'
          type='button'
          onClick={this.showPicker}>Select</button>
        <label id='upload-label'>
          {this.state.uploadLabel}
        </label>
        <div className='analyze'>
          <button
            id='analyze-button'
            className='analyze-button'
            type='button'
            onClick={this.sendToAnalyze}>{this.state.btnAnalyze}</button>
          <button
            id='analyze-button'
            className='analyze-button'
            type='button'
            onClick={this.getRandoms}>{this.state.randomtxt}</button>
        </div>
        <div className='predictionWrap'>
          <Image
            imgPicked={this.state.imgPicked}
            imgPickedRaw={this.state.imgPickedRaw}
            labelsresult={this.state.labelsresult} />
          <Image
            imgPicked={this.state.randoms}
            imgPickedRaw={this.state.imgRandRaw}
            labelsresult={this.state.randomResult} />
        </div>
      </div>
    )
  }
}

// export default Prediction
