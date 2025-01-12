import { useEffect, useState } from "react"
import { IoLogoGithub } from "react-icons/io"
import { IoMoon, IoSunny } from "react-icons/io5"
import { Outlet } from "react-router"

export const Navbar = () => {
  return (
    <div className="bg-slate-200  dark:text-white dark:bg-everNav dark:text-everNavText      h-16 flex w-screen items-center">
      <HeaderMenu />
      <Outlet />
    </div>
  )
}
function HeaderMenu() {
  return (<div className="flex w-full justify-evenly">
    <Avatar />

    <div className="flex font-Quicksand font-bold gap-8 justify-center items-center">
      <p>Blog</p>
      <p>About</p>
      <p>Lists</p>
    </div>

    <div className="flex gap-4 justify-center items-center">
      <ToogleDark iconSize={25} />

      <Githubbtn />
    </div>

  </div>)
}


function Githubbtn() {
  return (
    <button>

      <a href=""><IoLogoGithub size={25} /></a>
    </button>
  )

}

function Avatar() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="">
        <img src="/header.jpg" className="rounded-full w-13 flex justify-center items-center h-12 bg-red-600" alt="mypfp" />

      </div>
      <div className="flex  font-JetBrains justify-center text-emerald-700 dark:text-headerGreen items-center text-xl h-full font-bold ">


        <p>~</p>

        <p>/</p>
        <p>mtende</p>
        <p>/</p>
        <div className="mx-1">

          {/* <span className="animate-ping bg-black w-1 h-1 text-black ">|</span> */}
        </div>
      </div>
    </div>
  )

}

function ToogleDark({ iconSize }: Itoogledark) {
  const [dark, setDark] = useState(false)
  function darkModeHandler() {
    setDark(!dark)
    document.body.classList.toggle("dark")
    localStorage.setItem("dark", JSON.stringify(dark))
  }

  return (

    <button onClick={darkModeHandler}>
      {dark ? <IoSunny size={iconSize} /> : <IoMoon size={iconSize} />}
    </button>
  )

}
interface Itoogledark {
  iconSize: number
} 
