const NavBar = () => {
    return(
        <nav className="flex justify-between items-center p-4 pl-8 pr-6 bg-gray-300 rounded-full m-6 mx-24 mt-8 z-50">
            <div className="text-2xl font-medium">
                Dee Squad
            </div>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-gray-500">Home</a></li>
                <li><a href="#about" className="hover:text-gray-500">Projects</a></li>
                <li><a href="#services" className="hover:text-gray-500">About</a></li>
                <li><a href="#services" className="hover:text-gray-500">Certifications</a></li>

            </ul>
            <ul className="flex space-x-4">
                <li><a href="#services" className="hover:text-gray-500">Services</a></li>
                <li><a href="#contact" className="hover:text-gray-500 bg-black text-white rounded-full p-4">Contact Me</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;