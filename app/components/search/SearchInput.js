"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"


const SearchInput = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return

            if(event.key === "Enter" || event.type === "click") {
                event.preventDefault()

        
                router.push(`/cari/${keyword}`)
            }
    }
    return(
        <div class="search-box">
    <button class="btn-search pb-2"><ion-icon name="search-outline"  onClick={handleSearch}></ion-icon></button>
    <input type="text" class="input-search" placeholder="Search..." ref={searchRef} onKeyDown={handleSearch}/>
  </div>

    // <div className="relative ">
    //     <input className="rounded w-full rounded-md p-1" placeholder="Search..." ref={searchRef} onKeyDown={handleSearch}/>
    //     <button className="absolute top-1 end-2 font-serif text-slate-500 rounded" onClick={handleSearch}>Find</button>
    // </div>
    )
}

export default SearchInput