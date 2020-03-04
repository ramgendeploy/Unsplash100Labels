var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TenRandoms = function (_React$Component) {
  _inherits(TenRandoms, _React$Component);

  function TenRandoms(props) {
    _classCallCheck(this, TenRandoms);

    var _this = _possibleConstructorReturn(this, (TenRandoms.__proto__ || Object.getPrototypeOf(TenRandoms)).call(this, props));

    _this.componentDidMount = function () {};

    _this.state = {
      goFetch: props.randoms,
      randoms: []
    };
    return _this;
  }

  _createClass(TenRandoms, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        null,
        console.log(this.props.randoms)
      );
    }
  }]);

  return TenRandoms;
}(React.Component);

// export default TenRandoms