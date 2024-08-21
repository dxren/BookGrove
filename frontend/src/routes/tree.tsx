import { Link } from 'react-router-dom'

export default function TreePage() {
    return (
        <>
            <h1>Tree page</h1>
            <p>This is a protected page.</p>

            <ul>
                <li>
                    <Link to="/tree">Trees</Link>
                </li>
                <li>
                    <Link to="/">Return to index</Link>
                </li>
            </ul>
        </>
    )
}