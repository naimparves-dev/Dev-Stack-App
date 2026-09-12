


export const Footer = () => {

    return (
        <footer className="bg-white">
            <div className="max-w-[1220px] mx-auto px-8 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-5 h-5 rounded bg-fuchsia-500 flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">DS</span>
                            </div>
                            <h2 className="text-sm font-bold text-gray-900">
                                Dev <span className="text-fuchsia-500">Stack</span>
                            </h2>
                        </div>

                        <p className="text-xs text-gray-500 leading-5 max-w-[280px] mx-auto md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex justify-center md:justify-start gap-5 mt-5 font-semibold">
                            <a href="#" className="text-xs text-gray-700 hover:text-fuchsia-500">
                                GitHub
                            </a>
                            <a href="#" className="text-xs text-gray-700 hover:text-fuchsia-500">
                                Twitter
                            </a>
                            <a href="#" className="text-xs text-gray-700 hover:text-fuchsia-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 mb-4">
                            PRODUCT
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Home
                            </a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Technologies
                            </a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 mb-4">
                            COMPANY
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                About
                            </a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 mb-4">
                            LEGAL
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
                            Privacy
                        </a>
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}