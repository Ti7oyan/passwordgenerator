import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-3 flex justify-between items-center bg-white border-b-2 border-blue-50">
            <p className="text-2xl font-light underline">Simple password generator</p>
            <ul>
                <li className="text-2xl"><FaGithub /></li>
            </ul>
        </nav>
    )
}