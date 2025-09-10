import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonComponent from "./components/ScrollButtonComponent";
import ScrollButtonComponent from "./components/ScrollButtonComponent";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center w-screen font-serif h-[93vh]">
        <article className="flex flex-col justify-center items-start w-1/2 h-full space-y-5 px-10 ">
          <h1 className="text-xl sm:text-6xl">Welcome</h1>
          <p className="text-sm sm:text-2xl">Dive into my portfolio and get to know me</p>

        </article>
        <article className="w-1/2 bg-blue-300 flex justify-center items-center h-full">
          <ScrollButtonComponent to="about" className="cursor-pointer h-20 w-[250px] border-black border-2 rounded-[50] px-5 text-4xl hover:bg-blue-950 hover:text-white transition-colors ease-in-out duration-400">
            <div className="flex justify-around items-center">Start here <FaLongArrowAltRight /></div>
          </ScrollButtonComponent>
        </article>
        <article>
        </article>
      </main>

      <section className="px-0">
        <div id="about" className="flex justify-center items-center">
          <div className="w-1/2 bg-blue-300 h-[100vh] px-10 flex items-center flex-col justify-center space-y-10">
          <h1 className="md:text-6xl text-xl">About me</h1>
          <ButtonComponent to="work" className="cursor-pointer h-20 w-[190px] border-black border-2 rounded-[50] px-5 text-4xl hover:bg-blue-950 hover:text-white transition-colors ease-in-out duration-400 flex justify-center items-center">Next <FaLongArrowAltRight /></ButtonComponent>
          </div>
          
          <p className="w-1/2 h-[100vh] space-y-10 flex justify-center items-center px-10 md:text-xl text-[0.6rem]">Hi, I’m Teodor! 
          <br /> I’ve always been curious about how things work—whether it’s business processes, technology, or the little details that keep systems running smoothly. 
          
          <br /> My journey started in accounting and auditing, where I gained hands-on experience with financial processes, SAP S/4HANA, and data analysis. Over time, I discovered a strong passion for programming and problem-solving, which led me to expand my skills in Java, Python, C++, Swift, and web technologies like HTML, CSS, and JavaScript.

            <br /> Today, I work as a university assistant, where I get to combine my organizational skills with my love for technology. I enjoy building tools, learning new frameworks, and finding creative solutions—whether it’s in finance, software, or everyday challenges.

            <br />When I’m not working or coding, you’ll probably find me exploring new ideas, tinkering with projects, or learning something new.</p>
        </div>
      </section>

      <section className="h-[800px] flex justify-center">
        <div className="w-1/2" id="work">
          <h1>Work experience</h1>
        </div>
        <div className="w-1/2 bg-blue-300 h-[100vh] px-10 flex items-center flex-col justify-center space-y-10">
          <h1 className="md:text-6xl text-xl">About me</h1>
          <ButtonComponent to="education" className="cursor-pointer h-20 w-[190px] border-black border-2 rounded-[50] px-5 text-4xl hover:bg-blue-950 hover:text-white transition-colors ease-in-out duration-400 flex justify-center items-center">Next <FaLongArrowAltRight /></ButtonComponent>
          </div>
      </section>

      <section className="h-[800px]">
        <div id="education">
          <h1>Education</h1>
        </div>
      </section>

      <section className="h-[800px]">
        <div id="projects">
          <h1>Projects</h1>
        </div>
      </section>



    </>
  );
}
