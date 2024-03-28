export default function Header() {
    return (
        <>
            <div>
                <h1 className="text-xl uppercase font-bold text-stone-200">React Project Manager</h1>
            </div>
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#" className="hover:text-stone-200">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-stone-200">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-stone-200">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}