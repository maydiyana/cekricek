"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"




const SearchInput = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {

            if(event.key === "Enter" || event.type === "click") {
                event.preventDefault()

                const keyword = searchRef.current.value
        
                router.push(`/cari/${keyword}`)
            }
    }
    return(
    <div className="relative ">
        <input className="rounded w-full rounded-md p-1" placeholder="Search..." ref={searchRef} onKeyDown={handleSearch}/>
        <button className="absolute top-1 end-2 font-serif text-slate-500 rounded" onClick={handleSearch}>Find</button>
    </div>
    )
}

export default SearchInput
