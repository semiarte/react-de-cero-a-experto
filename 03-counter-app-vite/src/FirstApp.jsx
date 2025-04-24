/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}

export default FirstApp;