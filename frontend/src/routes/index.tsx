import { Link } from "react-router-dom";


export default function IndexPage() {
    return (
        <div>
            <h1>This is the index page</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/clippings">Clippings</Link>
                    </li>
                    <li>
                        <Link to="/saplings">Saplings</Link>
                    </li>
                    <li>
                        <Link to="/tree">Trees</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}