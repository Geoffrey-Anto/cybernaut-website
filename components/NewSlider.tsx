  import { AcademicCapIcon, AtSymbolIcon, BellIcon, BookmarkIcon, BriefcaseIcon, CakeIcon, CashIcon, EyeIcon, LogoutIcon, MapIcon, MoonIcon, TagIcon } from "@heroicons/react/outline";
  import React from "react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.css";
  import { CarouselProps } from "../data/CarouselProps";
  import Logo from "../public/Logo.jpeg";

 
  function figma(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "FIGMA";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Figma is a tool that can be used to design user interfaces for apps and also for web pages. It is a vector graphics tool and can easily be accessed via the web compared to others";

  }

  function cpp(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "C++";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language";

  }

  function python(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "PYTHON";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Python is an interpreted, interactive, object-oriented programming language. It is an easier programming language to learn compared to others";

  }

  function mysql(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "MYSQL";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "MySQL is the world's most popular open-source database. It is used by many database-driven web applications";

  }

  function java(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "JAVA";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "Java is a programming language and computing platform. This programming language is easy for beginners as many processes run automatically";

  }

  function html(){
    const title_elem : HTMLElement = document.getElementById('tech-title-id') as HTMLElement;
    title_elem.innerHTML = "HTML";
    const content_elem : HTMLElement = document.getElementById('tech-content-id') as HTMLElement;
    content_elem.innerHTML = "HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications";

  }

  function temp(){
    const title_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    title_elem.innerHTML = "COMMUNICATION";
    const content_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    content_elem.innerHTML = "The basic means to understand others is by communicating with one another. The stronger the communication skills the easier it is to speak.";

  }

  function test(){
    const title_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    title_elem.innerHTML = "CONTENT WRITING";
    const content_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    content_elem.innerHTML = "Content writing is like a mirror of one's personality. Through content writing, you can innovatively express your thoughts";

  }

  

  const NewSlider: React.FC = () => {
    const [selectedSlide, setSelectedSlide] = React.useState<number>(0);

    return (
      <div className="flex flex-col items-center gap-y-2">
        <Carousel
          onChange={(e) => {
            setSelectedSlide(e);
          }}
          {...(CarouselProps as any)}
        >
          <div className="h-full w-auto m-10">
            <img
              className="h-full"
              src={Logo.src}
            />
          </div>
          <div className="h-full bg-gray-200 absolute w-[95%] pr-10 m-10">
            <div className="flex flex-row align-middle items-center ml-20">

              
              <div className="absolute border-solid border border-gray-400  h-96 w-96 rounded-[500px] origin-top-left mt-20">
                <AcademicCapIcon onClick={figma} className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-20"/>
                <AtSymbolIcon onClick={cpp} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 -translate-y-4"/>
                <BellIcon onClick={python} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-20"/>
                <BookmarkIcon onClick={mysql} className="w-12 h-12 absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-64"/>
                <BriefcaseIcon onClick={java} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 translate-y-[360px] "/>
                <LogoutIcon onClick={html} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-64"/>
              <div className=" absolute m-16 origin-center ease-linear duration-200 justify-center align-middle items-center border border-solid border-white bg-white w-64 h-64 rounded-full">
              <p id = "tech-title-id" className=" justify-center ease-linear duration-200 pt-[25%] font-bold align-middle items-center text-2x1">C++</p>
                <p id = "tech-content-id" className=" mx-5 justify-center ease-linear duration-200 align-middle items-center text-2x1">C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language. </p>
              </div>
                </div>
              <div className=" pl-[500px] w-full pr-20">
              <div className="text-justify gap-y-4 mt-12">
            <div className="flex items-center gap-x-4">
              <p className=" text-4xl font-bold">TECH COURSES</p>
              <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
            </div>
            <p className="py-1 mt-3">
            Expanding our knowledge on the technical side with its fast advancement. Beginning it with the knowledge of basic programming languages helps make it easier to gain knowledge and understand. We offer a variety of technical courses.
            </p>
            <div className="flex flex-row py-4 gap-x-4">
              <p className="border w-28 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">30+ Hours</p>
              <p className="border w-48 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Access to study materials</p>
            </div>
            <div className="py-1">
            <p className="border w-64 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Basic to intermediate coaching</p>
            </div>
            <div className="py-1">
            <p className="border w-24 h-9 border-solid text-center border-gray-400 rounded-2xl font-semibold">Certificate</p>
            </div>
          </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-gray-200  m-10">
          <div className=" flex flex-row align-middle items-center ml-10">
          <div className=" pl-10 w-[50%] pr-20">
              <div className="text-justify gap-y-4 mt-12">
            <div className="flex items-center gap-x-4">
              <p className=" text-4xl font-bold">NON TECH COURSES</p>
              <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400"></div>
            </div>
            <p className="py-1">
            Upskilling ourselves with non-technical skills compliments the technical knowledge we have. It can be a medium of expressing creativity or the way we communicate. There are a lot of non-technical courses to upskill ourselves.
            </p>
            <div className="flex flex-row py-4 gap-x-4">
              <p className="border w-28 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">30+ Hours</p>
              <p className="border w-48 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Access to study materials</p>
            </div>
            <div className="py-1">
            <p className="border w-64 h-9 text-center border-solid border-gray-400 rounded-2xl font-semibold ">Basic to intermediate coaching</p>
            </div>
            <div className="py-1">
            <p className="border w-24 h-9 border-solid text-center border-gray-400 rounded-2xl font-semibold">Certificate</p>
            </div>
          </div>
              </div>
                <div className="absolute ml-[50%] border-solid border border-gray-400  h-96 w-96 rounded-[500px] mt-20">
                <EyeIcon onClick={temp} className="absolute shadow-blue-200 shadow-sm ease-linear duration-200 hover:bg-blue-400 hover:text-white cursor-pointer py-0 w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-20"/>
                <TagIcon onDoubleClick={test} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 -translate-y-4"/>
                <MapIcon onClick={nt3} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-20"/>
                <CakeIcon onClick={nt4} className="w-12 h-12 absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-[340px] translate-y-64"/>
                <CashIcon onClick={nt5} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-x-44 translate-y-[360px] "/>
                <MoonIcon onClick={nt6} className="absolute shadow-blue-200  hover:bg-blue-400 hover:text-white cursor-pointer w-12 h-12 border border-solid border-gray-400 rounded-full bg-white text-blue-400 translate-y-64"/>
              <div className=" absolute m-16 origin-center ease-linear duration-200 justify-center align-middle items-center border border-solid border-white bg-white w-64 h-64 rounded-full">
               <p id = "ntid" className=" justify-center ease-linear duration-200 pt-[25%] align-middle items-center text-2x1 font-bold">CYBERNAUT</p>
                <p id = "nttt" className=" justify-center mx-5 ease-linear duration-200 align-middle items-center text-2x1">WELCOME TO CYBERNAUT NON TECH</p>
              </div>
                </div>
              </div>
          </div>
        </Carousel>
        <div className="w-[20%] h-6 flex items-center justify-between bg-white">
          <div
            className={
              selectedSlide === 0
                ? "w-7 h-4 rounded-full border-2 border-cyan-400 bg-blue-500  ease-linear duration-500"
                : "w-7 h-4 rounded-full border-2 border-cyan-400"
            }
          ></div>
          <div className="flex w-[90%] h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-300"></div>
          <div
            className={
              selectedSlide === 1
                ? "w-7 h-4 rounded-full border-2 border-blue-300 bg-blue-500  ease-linear duration-500"
                : "w-7 h-4 rounded-full border-2 border-blue-300"
            }
          ></div>
          <div className="flex w-[90%] h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
          <div
            className={
              selectedSlide === 2
                ? "w-7 h-4 rounded-full border-2 border-blue-500 bg-blue-500  ease-linear duration-500"
                : "w-7 h-4 rounded-full border-2 border-blue-500"
            }
          ></div>
        </div>
      </div>
    );
  };
  function nt3(){
    const title_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    title_elem.innerHTML = "BASIC APTITUDE";
    const content_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    content_elem.innerHTML = "Having an aptitude test is a way to find one’s ability with various tests in an interview. Mastering the basic concepts helps in the testing process. Being logically sound is one of the major criteria to pass this process";

  }
  function nt4(){
    const title_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    title_elem.innerHTML = "SPOKEN ENGLISH";
    const content_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    content_elem.innerHTML = "English is one of the most commonly spoken languages worldwide and is understood by the majority and a basic hold on it will make communicating simple and easy";

  }

  function nt5(){
    const title_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    title_elem.innerHTML = "ADOBE PREMIERE PRO";
    const content_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    content_elem.innerHTML = "It is an editing software used for creating innovative and wonderful videos quickly.  It also includes an audio editing functionality which helps create better videos and edit them";

  }

  function nt6(){
    const ntitle_elem : HTMLElement = document.getElementById('ntid') as HTMLElement;
    ntitle_elem.innerHTML = "ADOBE AFTER AFFECTS";
    const ncontent_elem : HTMLElement = document.getElementById('nttt') as HTMLElement;
    ncontent_elem.innerHTML = "It is a software used for adding motion animation and visual effects. It has hundreds of effects that can be used to manipulate imagery and can be used to combine various layers of images and videos into the same frame";

  }

  export default NewSlider;



