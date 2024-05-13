// Header.jsx

import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">Checkpoint : frontend</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link href="/frontend/src/components/CountriesList">
                            Countries
                        </Link>
                    </li>
                    <li>
                        <Link href="/frontend/src/components/CountryForm">
                            Add Country
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


