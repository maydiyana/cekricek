import SearchInput from "../search/SearchInput"

import { Providers } from "@/app/providers"
import ThemeChanger from "@/app/themeCahnger"


const { default: Link } = require("next/link")

const Navbar = () => {
    return(
        
    <header className="bg-indigo-300 rounded ">
    <div className="flex md:flex-row justify-between p-3 gap-2">
        <Link className="font-bold text-2xl text-slate-900 font-mono text-white " href="/">WIBU LIST</Link>
        <Providers><ThemeChanger/></Providers>
        <SearchInput />
    </div>
    </header>
    ) 
}

export default Navbar
