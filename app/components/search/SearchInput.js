"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"




const SearchInput = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        
        router.push(`/search/${keyword}`)
    }
    return(
    <div className="relative ">
        <input className="rounded w-full rounded-md p-1" placeholder="Search..." ref={searchRef}/>
        <button className="absolute top-1 end-2 font-serif text-slate-500 rounded" onClick={handleSearch}>Find</button>
    </div>
    )
}

export default SearchInput