import { Link } from 'react-router-dom'

export default function SaplingsPage() {
    return (
        <>
            <h1>Saplings page</h1>
            <p>This is a protected page.</p>

            <ul>
                <li>
                    <Link to="/saplings">Saplings</Link>
                </li>
                <li>
                    <Link to="/">Return to index</Link>
                </li>
            </ul>
        </>
    )
}