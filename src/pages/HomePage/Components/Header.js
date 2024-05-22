import logo from "../logo.jpg";

export default function Header() {
    return (
        <div className=" bg-white text-white py-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-32 mr-4 rounded-full" />
                    <span className="text-xl font-bold">Courier Services</span>
                </div>


                <nav>
                    <ul className="flex space-x-4 text-black">
                        <li><a href="#" className="hover:text-red-900">Home</a></li>
                        <li><a href="#" className="hover:text-red-900">Services</a></li>
                        <li><a href="#" className="hover:text-red-900">Track</a></li>
                        <li><a href="#" className="hover:text-red-900">About</a></li>
                        <li><a href="#" className="hover:text-red-900">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}