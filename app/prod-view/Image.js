function Image(props) {
  console.log(props);
  return React.createElement(
    'div',
    { className: props.imgPicked ? 'prediction' : 'no-display' },
    React.createElement('img', {
      id: 'image-picked',
      className: 'prediction-img',
      alt: 'Chosen Image',
      src: props.imgPickedRaw }),
    React.createElement(
      'div',
      { className: 'result-label' },
      React.createElement(
        'ul',
        { id: 'result-ul' },
        props.labelsresult.map(function (ele, i) {
          return React.createElement(
            'li',
            null,
            React.createElement(
              'span',
              { 'class': 'label' },
              ele[0]
            ),
            React.createElement(
              'span',
              { 'class': 'perc_wrap' },
              React.createElement(
                'span',
                { 'class': 'perc', style: { width: ele[1] } },
                ele[1]
              )
            )
          );
        })
      )
    )
  );
}