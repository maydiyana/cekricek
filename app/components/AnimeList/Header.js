import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between p-4 ">
      <h1 className="font-bold">{title}</h1>
      <Link className="underline" href={linkHref}>{linkTitle}</Link>
      
      </div>
    )
}

export default Header