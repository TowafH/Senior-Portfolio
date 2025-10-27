import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="grid grid-cols-3 items-center p-4 sticky top-0 z-50 bg-gradient-to-r from-[#181A18] to-[#181A18] text-white">

            {/* Left */}
            <div className="text-1xl font-bold">
                <h1>Towaf Hossain</h1>
            </div>

            {/* Center */}
            <div className="text-1xl gap-5 flex justify-center">
                <Link to='/' className="hover:text-gray-300">Home</Link>
                <Link to='/Projects' className="hover:text-gray-300">Projects</Link>
                <Link to='/Skills' className="hover:text-gray-300">Skills</Link>
                <Link to='/Resume' className="hover:text-gray-300">Resume</Link>
                {/* <Link to='/Portfolios' className="hover:text-gray-300">Portfolios</Link> */}
            </div>
            
            {/* Right */}
            <div className="flex justify-end">
                <a href="https://www.linkedin.com/in/towafh/" target="_blank" rel="noreferrer" ><div class="w-10 h-10 bg-[url('/InL.png')] hover:bg-[url('/In.png')] bg-cover bg-no-repeat transition-all duration-300"></div></a>            
                <a href="https://github.com/TowafH" target="_blank" rel="noreferrer" ><div class="w-10 h-10 bg-[url('/GitHubL.png')] hover:bg-[url('/GitHub.png')] bg-cover bg-no-repeat transition-all duration-300"></div></a>        
            </div>
        </div>
    )
}