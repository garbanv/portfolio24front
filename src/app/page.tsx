import Image from "next/image";
import Slideshow from "./Slideshow";

interface Project {
  id: number;
  name: string;
  image: string[];
  description: string;
  url: string;
  client: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Open Banking Accelerator",
    image: [
      '/work/work1/work1-1.png',
      '/work/work1/work1-2.png',
      '/work/work1/work1-3.png',
      '/work/work1/work1-4.png',
      '/work/work1/work1-5.png'
],
client:'Platformable',

    description: "P1",
    url: "https://accelerator.platformable.com",
    technologies: ["Javascript", "ReactJs", "NextJs", 'SQL'],

  },
  {
    id: 2,
    name: "APIdays",
    image: [
      '/work/work1/work1-1.png',
      '/work/work1/work1-2.png',
      '/work/work1/work1-3.png',
      '/work/work1/work1-4.png',
      '/work/work1/work1-5.png'
],
    description: "API Landscape, A comprehensive view of all stakeholders creating the programmable economy",
    url: "https://apilandscape.apiscene.io/",
    technologies: ["Javascript", "NodeJs", "SQL"],
    client:'APIdays',
  },
  
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <div className="grid  items-center justify-items-center min-h-screen  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}

      <section className=" m-auto grid  ">
        <div className="grid items-center  h-screen ">
          <div className="grid place-items-center gap-x-5 leading-none ">
            <h1 className="customFont lg:text-[350px] md:text-[200px] text-[100px] fadeInUp-animation leading-3 ">
              ALEXEI
            </h1>
            <h1 className="customFont lg:text-[350px] md:text-[200px] text-[100px] fadeInUp-animation ">
              GARBAN
            </h1>
          </div>
          <div className="md:grid justify-center  absolute bottom-2 w-full">
            <p className="text-center md:text-md text-xs">
              Software engineer & music producer
            </p>
          </div>
        </div>
      </section>
      <section
        id="work"
        className="bg-black items-center grid  shadow-md bg-fixed px-5 h-screen"
      >

        <Slideshow image={projects[0].image} 
        description={projects[0].description} name={projects[0].name} 
        client={projects[0].client}
        url={projects[0].url}/>

       {/*  <Slideshow props={projects}/> */}
       
        {/* <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-content-center">
          <div className="animate-pulse">
            <p className="text-[50px] text-white font-bold justify-center flex fadeInUp-animation ">
              WORK
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <div className="group relative  overflow-hidden rounded-lg shadow-lg transition-all duration-300">
              <img
                src={projects[0]?.image}
                alt={projects[0]?.image}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-10 group-hover:blur-sm"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-center text-lg font-semibold">
                 {projects[0]?.description}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
