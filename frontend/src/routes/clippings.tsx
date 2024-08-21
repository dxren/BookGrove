import { Link } from 'react-router-dom'

export default function ClippingsPage() {
    return (
        <>
            <h1>Clippings page</h1>
            <p>This is a protected page.</p>

            <ul>
                <li>
                    <Link to="/clippings">Clippings</Link>
                </li>
                <li>
                    <Link to="/">Return to index</Link>
                </li>
            </ul>
        </>
    )
}