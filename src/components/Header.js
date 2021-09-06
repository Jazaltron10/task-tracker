// This is used to be required but it no longer is
// import React from 'react' 
import PropTypes from 'prop-types'
import Button from "./Button.jsx"
const Header = ({title}) => {
    const onClick = (e) =>{
            console.log("Click");
            // console.log(e);
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* Passing in a text prop of color green and text */}
            <Button onClick={onClick} color = "green"  text="Add" />
            {/* <Button /> */}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
// css in js 
// const headingStyle={
//     color:'red', 
//     backgroundColor:"rgba(0,0,0,0.9)"
// }


// Example of inline styling in react
/* <h1 style={{color:'red', backgroundColor:"rgba(0,0,0,0.7)"}}> */