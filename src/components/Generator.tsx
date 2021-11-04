import random from "random";
import { useState, useEffect } from "react";
import { BsArrowCounterclockwise } from 'react-icons/bs';

export default function Generator() {
    const [capitals, setCapitals] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [length, setLength] = useState(16);
    const [password, setPassword] = useState('');
        
    // Options elements
    const capitalsCheckbox = document.getElementById('options-capitals') as HTMLInputElement;
    const numbersCheckbox = document.getElementById('options-numbers') as HTMLInputElement;

    useEffect(() => {
        setPassword(generatePassword(capitals, numbers, length));
    }, [capitals, numbers, length])

    return (
        <section className="flex flex-col h-screen text-center justify-center items-center p-3 mt-4">
            <div>
                <h1 className="text-3xl p-3">Generate a random password, <span className="text-blue-500">easily</span></h1>
                <h4 className="m-auto w-8/12 text-gray-600">For those times when you don't want to think about a secure, easy-to-remember password.</h4>
            </div>
            <article id="generator-section" className="my-6">
                <p>Your password is:</p>
                <p id="generator-password" className="text-4xl mb-5">{password}</p>
                <button className="p-2 cursor-pointer rounded-lg bg-blue-500 text-white transition duration-200 hover:bg-blue-600" onClick={() => setPassword(generatePassword(capitals, numbers, length))}>
                <BsArrowCounterclockwise className="text-3xl" />
                </button>
            </article>
            <p className="p-4 text-2xl underline">Options</p>
            <div id="generator-options" className="grid gap-6 p-4 text-left border shadow-lg rounded-lg">
                <span>
                    <label className="p-2" htmlFor="options-length">Length: </label>
                    <input id="options-length" className="border rounded-sm outline-none focus-visible:border-blue-300" onChange={(e) => setLength(+e.target.value)} type="number" min="8" max="16" defaultValue="16" />
                </span>
                <span>
                    <label className="p-2" htmlFor="options-capitals">Use capitals: </label>
                    <input id="options-capitals" type="checkbox" onChange={() => setCapitals(capitalsCheckbox?.checked)} defaultChecked={true} />
                </span>
                <span>
                    <label className="p-2" htmlFor="options-numbers">Use numbers: </label>
                    <input id="options-numbers" type="checkbox" onChange={() => setNumbers(numbersCheckbox?.checked)} defaultChecked={true} />
                </span>
            </div>
        </section>
    )
}

function generatePassword(useCapitals: boolean, useNumbers: boolean, passwordLength: number) {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (useCapitals === true) characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (useNumbers === true) characters = characters.concat('0123456789');
    const password = Array(passwordLength).fill(characters).map(function(item) { return item[random.int(0, item.length)]}).join('');
    return password;
}