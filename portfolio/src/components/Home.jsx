import image from "../assets/home.png"
import React from "../assets/React.png"
import Mongo from "../assets/Mongo.png"
import Express from "../assets/express.png"
import Node from "../assets/node.png"
function Home() {
  

  return (
    <>
        <div className="pl-4 flex flex-col md:flex md:flex-row md:justify-around">
      <div className=" text-center md:pt-5"><span className="text-lg md:text-2xl md:ml-5">Hello I am</span> <span className="text-2xl md:text-[40px]">Jatin Bedi</span></div>
      <div className="m-auto pt-5 md:pt-0"><img className="max-h-96" src={image}></img></div>
    </div>
    <p className="text-center p-5">***************</p>
    <div>
    <p className="text-center">
    Tech I work with
    </p>
    <div className="flex justify-around pt-4">
      <ul><li><img src={React} className="h-20"/></li>
      <li><img src={Mongo} className="h-20" /></li><li><img src={Express} className="h-20" /></li><li><img src={Node} className="h-20" /></li></ul>
      <ul><li>React</li><li className="mt-[55px]">MongoDB</li><li className="mt-[55px]"></li>Express<li className="mt-[55px]">Nodejs</li></ul>
    </div>
    </div>
    <div className="mt-3 text-center">
      and.....
    </div>
    <div className="text-center">
      Tailwind, Material UI, Javascript, HTML, CSS
    </div>
    <p className="text-center p-[40px]">***************</p>
     
    <p className="text-center">I am currently a college student and 19 years old. Feel free to contact if you want to Chat <br/> ~Jatin</p>
     
    <p className="text-center p-[40px]">***************</p>

    </>
  )
}

export default Home