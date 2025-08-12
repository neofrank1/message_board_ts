function Navbar() {
    return (
        <nav className="relative w-full bg-gray-800 text-white p-4 shadow-xl/20 shadow-gray-400">
            <div className="mx-auto grid grid-cols-2 gap-4 grid-rows-1">
                <div>
                    <a href="/" className="text-lg font-bold flex justify-start hover:text-gray-300">
                        Message Board
                    </a>
                </div>
                <div className="flex justify-end space-x-4">
                    <div className="border-r-1 px-2"></div>
                    <a href="/auth/login" className="text-lg font-bold flex justify-end hover:text-gray-300">
                        Login
                    </a>
                    <a href="/auth/register" className="text-lg font-bold flex justify-end hover:text-gray-300 border-0 rounded-2xl px-2 bg-sky-600 hover:bg-gray-800">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;