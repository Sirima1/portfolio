import  arctic from "../../src/assets/max.jpg";
import  Arc from "../../src/assets/arc.png";
import  Sirima from "../../src/assets/arctic.jpg";




const Projects = () => {
  return (
    <div className="align-center justify-center lg:mx-[190px]  gap-4 m-4">
    <div>
    <h1 className="font-bold text-lg m-2">Projects</h1>
    </div>
    <div className="grid lg:grid-cols-3 align-center justify-center p-6  m-2  rounded-lg gap-5 mt-6 mx-4">
    <img src={arctic} alt="artic"  scale='70' className="mt-2 ml-2 h-[200px] w-[400px]" />
    <img src={Arc} alt="Arc.png" className="mt-2 w-[400px] h-[200px]"/>
    <img src={Sirima} alt="Sirima.png"  className="mt-2 mr-2 w-[400px] h-[200px]"/>

    </div>
    
    </div>
  )
}

export default Projects