import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-3 flex justify-between items-center bg-white border-b-2 border-blue-50">
            <p className="text-gray-500 font-light"><i className="text-black not-italic text-2xl underline mr-2">Simple password generator</i> by Ticiano Morvan</p>
            <ul>
                <li className="text-2xl"><a href="https://github.com/Ti7oyan/passwordgenerator" target="_blank"><FaGithub className="transition duration-300 hover:text-blue-500" /></a></li>
            </ul>
        </nav>
    )
}