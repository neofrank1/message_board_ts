function Navbar() {
    return (
        <nav className="w-full bg-gray-800 text-white p-4 ">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;