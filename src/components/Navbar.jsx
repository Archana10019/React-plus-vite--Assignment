function Navbar(){
    return(
        <nav className="flex flex-col md:flex-row gap-8 bg-gray-800 text-white p-4">
        <a className="hover:text-gray-300 cursor-pointer">Home</a>
          <a className="hover:text-gray-300 cursor-pointer">Features</a>
             <a className="hover:text-gray-300 cursor-pointer">Contact</a>
 
 
        </nav>
    )

}
export default Navbar