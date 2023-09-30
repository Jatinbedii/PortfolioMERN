

const Nav = () => {
  return (
    <nav className="border-dashed border-2 border-black fixed bottom-0 w-full h-[35px] bg-white">
        <ul className="flex justify-around ">
            <a href="/contact"><li>Contact me</li></a>
            <a href="/chat"><li>Chatbox</li></a>
            <a href="/project"><li>Projects</li></a>

            
        </ul>
    </nav>
  )
}

export default Nav