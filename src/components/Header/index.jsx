import Logo from "@components/Logo"
import NavLink from "@components/NavLink"

const Header = () =>{
  return(
    <header className="bg-black px-5 py-5 md:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between container mx-auto">

        <Logo/>

        <nav className=" flex gap-8">
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/favoritos'> Favoritos</NavLink>
        </nav>
        
      </div>
    </header>
  )
}

export default Header