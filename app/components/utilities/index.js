import SearchInput from "../search/SearchInput"


const { default: Link } = require("next/link")

const Navbar = () => {
    return(
        
    <header className="bg-indigo-300 rounded">
    <div className="flex md:flex-row flex-col justify-between p-3 gap-2">
        <Link className="font-bold text-2xl text-slate-900 font-mono text-white " href="/">DXL FILM</Link>
        <SearchInput />
    </div>
    </header>
    ) 
}

export default Navbar
