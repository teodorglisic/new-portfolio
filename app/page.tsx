import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonComponent from "./components/ScrollButtonComponent";
import ScrollButtonComponent from "./components/ScrollButtonComponent";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center w-screen font-serif h-[93vh]">
        <article className="flex flex-col justify-center items-start w-1/2 px-10 h-full space-y-5">
          <h1 className="text-6xl">Welcome</h1>
          <p className="text-2xl">Dive into my portfolio and get to know me</p>

        </article>
        <article className="w-1/2 bg-blue-300 flex justify-center items-center h-full">
          <ScrollButtonComponent className="h-20 w-[250px] border-black border-2 rounded-[50] px-5 text-4xl hover:bg-blue-950 hover:text-white transition-colors ease-in-out duration-400">
            <div className="flex justify-around items-center">Start here <FaLongArrowAltRight /></div>
          </ScrollButtonComponent>
        </article>
        <article>
        </article>
      </main>

      <section className="h-[800px]">
          <div id="test">
            <h1>Test</h1>
          </div>
        </section>



    </>
  );
}
