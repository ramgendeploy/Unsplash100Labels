var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import TenRandoms from "./TenRandoms.js";
var el = function el(x) {
  return document.getElementById(x);
};

var Prediction = function (_React$Component) {
  _inherits(Prediction, _React$Component);

  function Prediction(props) {
    _classCallCheck(this, Prediction);

    var _this = _possibleConstructorReturn(this, (Prediction.__proto__ || Object.getPrototypeOf(Prediction)).call(this, props));

    _this.showPicker = function () {
      el('file-input').click();
    };

    _this.showPicked = function (e) {
      // console.log(e.target.files)
      // el("upload-label").innerHTML = 
      _this.setState({
        uploadLabel: e.target.files[0].name,
        selectedFile: e.target.files[0],
        notifications: '',
        imgPicked: true,
        fileSelected: true
      });
      var reader = new FileReader();
      reader.onload = function (loaded) {
        _this.setState({
          imgPickedRaw: loaded.target.result
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    _this.analyze = function (e) {
      if (_this.state.fileSelected) {
        _this.setState({ btnAnalyze: "Analyzing..." });

        var xhr = new XMLHttpRequest();
        // let loc = window.location;
        // xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
        xhr.open("POST", "https://unsplash100labels.herokuapp.com/analyze", true);
        xhr.onerror = function () {
          alert(xhr.responseText);
        };
        xhr.onload = function (e) {
          console.log(e);
          if (e.target.readyState === 4) {
            var response = JSON.parse(e.target.responseText);
            _this.setState({ btnAnalyze: "Analyze" });

            showResult(JSON.parse(response["result"]), "result-ul");
          }
        };

        var fileData = new FormData();
        fileData.append("file", _this.state.selectedFile);
        xhr.send(fileData);
      } else {
        _this.setState({ notifications: "Please select a file to analyze!" });
      }
    };

    _this.getRandoms = function (e) {
      _this.setState({
        randomtxt: "Obtaining..."
      });
      fetch("https://unsplash100labels.herokuapp.com/randoms").then(function (response) {
        return response.json();
      }).then(function (jsonResponse) {
        _this.setState({
          randomsArr: JSON.parse(jsonResponse.result),
          imgRand: jsonResponse.url,
          randoms: true,
          randomtxt: "Random image"
        });
        showResult(_this.state.randomsArr, "result-ulRand");
      });
    };

    _this.state = {
      randomtxt: "Random image",
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
    };
    return _this;
  }

  _createClass(Prediction, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "content" },
        React.createElement("input", {
          id: "file-input",
          className: "no-display",
          type: "file",
          name: "file",
          accept: "image/*",
          onChange: this.showPicked }),
        React.createElement(
          "button",
          {
            className: "choose-file-button",
            type: "button",
            onClick: this.showPicker },
          "Select Image \uD83D\uDE01 "
        ),
        React.createElement(
          "label",
          { id: "upload-label" },
          this.state.uploadLabel
        ),
        React.createElement(
          "div",
          { className: "prediction" },
          React.createElement("img", {
            id: "image-picked",
            className: this.state.imgPicked ? null : 'no-display',
            alt: "Chosen Image",
            src: this.state.imgPickedRaw,
            height: "200" }),
          React.createElement(
            "div",
            { className: "result-label" },
            React.createElement("ul", { id: "result-ul" })
          )
        ),
        React.createElement(
          "div",
          { className: "analyze" },
          React.createElement(
            "button",
            {
              id: "analyze-button",
              className: "analyze-button",
              type: "button",
              onClick: this.analyze },
            this.state.btnAnalyze
          ),
          React.createElement(
            "button",
            {
              id: "analyze-button",
              className: "analyze-button",
              type: "button",
              onClick: this.getRandoms },
            this.state.randomtxt
          )
        ),
        React.createElement(
          "span",
          null,
          this.state.notifications
        ),
        React.createElement(
          "div",
          { className: "prediction" },
          React.createElement("img", {
            id: "image-picked",
            className: this.state.randoms ? null : 'no-display',
            alt: "Chosen Image",
            src: this.state.imgRand,
            height: "200" }),
          React.createElement(
            "div",
            { className: "result-label" },
            React.createElement("ul", { id: "result-ulRand" })
          )
        )
      );
    }
  }]);

  return Prediction;
}(React.Component);

// export default Prediction;