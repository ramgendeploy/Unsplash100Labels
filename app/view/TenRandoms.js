class TenRandoms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      goFetch: props.randoms,
      randoms: []
    }
  }
  componentDidMount = () => {

  }
  render(){
    return (<span>{console.log(this.props.randoms)}</span>)
  }
}

// export default TenRandoms