import PropTypes from 'prop-types'


// Destructuring passed in props, color and text
const Button = ({color, text, onClick}) => {
    return <button onClick ={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}

// The default props is used when nothing is passed at the point the component is called
Button.defaultProps = {
    text: "Hello Click Me",
    color: "dodgerblue"
}
Button.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
