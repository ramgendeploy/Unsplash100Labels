function Image(props){
  console.log(props)
  return (
    <div className={ props.imgPicked ? 'prediction' : 'no-display'}>
      <img 
        id='image-picked' 
        className='prediction-img'
        alt='Chosen Image'
        src={props.imgPickedRaw} />

      <div className='result-label'>
        <ul id='result-ul'>
        {
          props.labelsresult.map((ele, i)=>{
            return (
            <li> 
              <span class='label'>{ele[0]}</span>
              <span class='perc_wrap'>
                <span class='perc' style={{width: ele[1]}}>{ele[1]}</span>
              </span>
            </li>
          )})
        }
        </ul>
      </div>  
      </div>
  )
}