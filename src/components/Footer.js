import {Link} from "react-router-dom"
const Footer = () => {
    const da = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {da}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
