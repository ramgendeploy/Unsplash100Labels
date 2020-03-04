var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = function el(x) {
  return document.getElementById(x);
};

var Prediction = function (_React$Component) {
  _inherits(Prediction, _React$Component);

  function Prediction(props) {
    _classCallCheck(this, Prediction);

    var _this = _possibleConstructorReturn(this, (Prediction.__proto__ || Object.getPrototypeOf(Prediction)).call(this, props));

    _this.showPicker = function () {
      if (!_this.state.analyzing) {
        el('file-input').click();
      } else {
        _this.setState({ notifications: "Can't select another image, you have to wait for the current! 😁" });
      }
    };

    _this.showPicked = function (e) {
      _this.setState({
        uploadLabel: e.target.files[0].name,
        selectedFile: e.target.files[0],
        notifications: '',
        imgPicked: true,
        fileSelected: true,
        labelsresult: []
      });
      var reader = new FileReader();
      reader.onload = function (loaded) {
        _this.setState({
          imgPickedRaw: loaded.target.result
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    _this.parseResults = function (arr) {
      var result = [];
      for (var i = 0; i < 5; i++) {
        var element = arr[i];
        result.push([classes[element[1]], (element[0] * 100).toFixed(2) + '%']);
      }
      console.log(result);
      return result;
    };

    _this.sendToAnalyze = function (e) {
      if (_this.state.fileSelected) {
        if (!_this.state.analyzing) {
          _this.setState({ btnAnalyze: "Analyzing...", analyzing: true });
          var xhr = new XMLHttpRequest();
          xhr.open("POST", '/analyze', true);
          xhr.onerror = function () {
            alert(xhr.responseText);
          };
          xhr.onload = function (e) {
            if (e.target.readyState === 4) {
              var response = JSON.parse(e.target.responseText);
              var results = _this.parseResults(JSON.parse(response["result"]));
              _this.setState({ notifications: '', btnAnalyze: "Analyze", labelsresult: results, analyzing: false });
            }
          };
          var fileData = new FormData();
          fileData.append("file", _this.state.selectedFile);
          xhr.send(fileData);
        } else {
          _this.setState({ notifications: "Working on it!" });
        }
      } else {
        _this.setState({ notifications: "Please select a file to analyze!" });
      }
    };

    _this.getRandoms = function (e) {
      if (!_this.state.gettingRandoms) {
        _this.setState({
          randomtxt: "Obtaining...",
          gettingRandoms: true
        });

        fetch("/randoms").then(function (response) {
          return response.json();
        }).then(function (jsonResponse) {
          _this.setState({
            randomResult: _this.parseResults(JSON.parse(jsonResponse.result)),
            imgRandRaw: jsonResponse.url,
            randoms: true,
            randomtxt: "Random",
            gettingRandoms: false,
            notifications: ''
          });
        });
      } else {
        _this.setState({ notifications: "Working on it!" });
      }
    };

    _this.state = {
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
      labelsresult: []
    };
    return _this;
  }

  _createClass(Prediction, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'content center' },
        React.createElement('input', {
          id: 'file-input',
          className: 'no-display',
          type: 'file',
          name: 'file',
          accept: 'image/*',
          onChange: this.showPicked }),
        React.createElement(
          'span',
          { className: 'alert' },
          this.state.notifications
        ),
        React.createElement(
          'button',
          {
            className: 'choose-file-button',
            type: 'button',
            onClick: this.showPicker },
          'Select'
        ),
        React.createElement(
          'label',
          { id: 'upload-label' },
          this.state.uploadLabel
        ),
        React.createElement(
          'div',
          { className: 'analyze' },
          React.createElement(
            'button',
            {
              id: 'analyze-button',
              className: 'analyze-button',
              type: 'button',
              onClick: this.sendToAnalyze },
            this.state.btnAnalyze
          ),
          React.createElement(
            'button',
            {
              id: 'analyze-button',
              className: 'analyze-button',
              type: 'button',
              onClick: this.getRandoms },
            this.state.randomtxt
          )
        ),
        React.createElement(
          'div',
          { className: 'predictionWrap' },
          React.createElement(Image, {
            imgPicked: this.state.imgPicked,
            imgPickedRaw: this.state.imgPickedRaw,
            labelsresult: this.state.labelsresult }),
          React.createElement(Image, {
            imgPicked: this.state.randoms,
            imgPickedRaw: this.state.imgRandRaw,
            labelsresult: this.state.randomResult })
        )
      );
    }
  }]);

  return Prediction;
}(React.Component);

// export default Prediction