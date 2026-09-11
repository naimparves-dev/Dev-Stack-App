import Logo from "../assets/logo-text.png";


export interface NavProps {
    prop: string
}

const Nav = () => {

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="max-w-[1200px] mx-auto h-[72px] flex items-center justify-between font-medium">
                <img src={Logo} alt="" className=" "/>

                <ul className="flex items-center gap-7 text-sm text-[#374151]">
                    <li className="text-[#E5005A] cursor-pointer">
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-[#E5005A]">
                        <a href="#technologies">Technologies</a>
                    </li>

                    <li className="cursor-pointer hover:text-[#E5005A]">
                        Projects
                    </li>

                    <li className="cursor-pointer hover:text-[#E5005A]">
                        About
                    </li>

                    <li className="cursor-pointer hover:text-[#E5005A]">
                        Contact
                    </li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="text-sm text-[#374151]">
                        Sign In
                    </button>

                    <button className="bg-[#E50072] text-white text-sm px-5 py-2 rounded-full font-semibold">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Nav;