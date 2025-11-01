/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from './Navbar'
import EducationCard from './EducationCard'
import Projects from './Projects'
import Contact from './Contact'
import { Github } from 'lucide-react'
import Skills from './Skills'
import ThemeToggle from './ToggleTheme'
import { useRef} from 'react'
import { SpiderCursorEffect } from './cursor/SpiderCursorEffect'

const Home = () => {

  // const [isNew, setIsNew] = useState<boolean>(false)
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const ProjectsRef= useRef<HTMLDivElement | null>(null);
    const EducationRef= useRef<HTMLDivElement | null>(null);
    const contactRef= useRef<HTMLDivElement | null>(null);


  return (
    
    <div className='max-w-[1920px]  dark:bg-black w-full mx-auto transform transition-all duration-500 '>
      {/* {
        isNew &&
        <div className='p-6 absolute w-full rounded-4xl z-30  h-screen bg-red-100'>
          <p className='mt-24 text-red-400 text-3xl font-semibold'>New Product Launched Checkout Enchat</p>
        </div>
      } */}
      <div className='md:hidden'>
        <div className='p-2 m-2 flex items-center justify-between px-6 bg-sky-100 dark:bg-sky-600/60 rounded-2xl mx-auto w-11/12 '>
          <p className='text-xl font-extrabold'>Tajinder Singh</p>
          {/* <button className='bg-gray-300 p-2 rounded-xl' onClick={()=>{
            setIsNew(true)
            setTimeout(()=>{
              setIsNew(false)
            },5000)
          }}>New</button> */}
          <ThemeToggle/>

        </div>
      </div>
      <Navbar/>

      {/* page content */}

      <div id='About' className='text-black dark:text-white flex lg:w-10/12 mx-auto md:p-6 p-2 md:my-14'>
        <div className='flex pt-2 px-2 rounded-xl not-md:flex-col dark:bg-indigo-700/50 dark:text-indigo-50 bg-indigo-100 mx-auto justify-between'>
          <div className='max-w-[700px] pt-2 pb-6 p-2 md:w-[50%]  mx-auto md:mt-8 md:pr-6'>
            <p className='lg:text-6xl md:text-4xl text-2xl font-bold my-8 dark:text-indigo-200 text-gray-800 '>Full Stack Developer & Problem Solver</p>
            <p className='max-w-[600px] md:my-6 md:w-[80%] dark:text-indigo-100 text-gray-600 lg:text-xl max-h-[500px] overflow-x-hidden '>
              I'm Tajinder Singh Full-stack developer with experience in Python, C++, and JavaScript, focused on building scalable, secure, and cloud- hosted applications.
            </p>
            <div className='flex'>
              <a href="mailto:singhtajinder0547@gmail.com"><button className=' dark:bg-indigo-600/70 bg-indigo-300 border border-indigo-200 p-2 rounded-xl  w-20 m-2 shadow-md'>Contact</button></a>
              <a target='_blank' href="https://github.com/TajinderS22"><Github  className=' dark:bg-indigo-600/70 bg-indigo-300 border border-indigo-200 p-2 rounded-xl w-20 m-2  shadow-md h-10 '></Github> 
            </a>  
            </div>
          </div>

          <div className=' w-[45%] flex flex-col  '>
            <div className='z-10'>
              <img 
              className="max-w-120  w-10/12 min-w-[250px] transform  drop-shadow-[0_10px_15px_rgba(81,20,179,0.4)]  hover:scale-105 z-0 translate-x-10  transition-all hover:[transform:rotateY(10deg)] duration-500 ease-in-out rounded-lg" 
              src="https://res.cloudinary.com/dcpz5001o/image/upload/e_background_removal/f_png/v1759474594/Adobe_Express_-_file_idzyg5.png" 
              alt="Tajinder Singh Image" 
              />
            </div>
            <div className="md:flex hidden flex-col    w-[35%] max-w-[470px] z-0 absolute top-27  justify-start md:gap-8 my-8 items-start rounded-lg ">
              
              
                <div className=' flex   m-2 w-full -z-10 justify-between pr-6 pl-12 pt-6'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-20 h-20  animate-pulse hover:rotate-20  hover:scale-110 -z-10 transition-transform duration-300" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-20 h-20  animate-pulse hover:rotate-20  hover:scale-110 -z-10 transition-transform duration-300" />
                </div>
                <div className='flex w-full  m-2  pl-6 pr-10 justify-between'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-20 h-20 animate-pulse hover:rotate-20   hover:scale-110 z-10 transition-transform duration-300" />
                  <img src="https://static.cdnlogo.com/logos/t/58/tailwind-css.svg" alt="Tailwind CSS" className="w-20 h-20 animate-pulse hover:rotate-20  hover:scale-110 z-10 transition-transform duration-300" />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills */}

      <div id="Skills"  className=' bg-blue-100   dark:bg-blue-600/30 mx-auto shadow-md lg:w-10/12 md:w-11/12 w rounded-lg ' >
          
          <div className=' w-full bg-blue-100 dark:bg-[#061C4B] rounded-2xl  z-20 sticky  md:top-0 top-2 mx-auto flex items-center  '>
            <span className='text-blue-600 font-bold text-4xl   dark:text-indigo-100/90 ml-2  p-6 py-4 rounded-2xl   '>
              Skills
            </span>
            {/* <div className= '  w-full dark:border-indigo-300/30 h-0 border'></div> */}
          </div>
        

        <div ref={skillsRef} className='relative'>
          <div className='md:dark:block hover:block hidden '>
            <SpiderCursorEffect containerRef={skillsRef} particleCount={100} particleColor='47, 65, 156' connectionColor='144, 178, 224' />
          </div>
          <div className='dark:hidden not-md:hidden  '>
            <SpiderCursorEffect containerRef={skillsRef} particleCount={100} particleColor='123, 160, 209' connectionColor='89, 137, 201' />
          </div>
          <Skills/>
        </div>

      </div>
  


      {/* Projects */}

      <div id="Projects"   className=' mx-auto relative bg-cyan-50 dark:bg-cyan-600/30 lg:w-10/12 rounded-xl md:p-2 my-6 mt-14' >

        
        
        <div className=' w-full mx-auto bg-cyan-50 dark:bg-[#002C37] z-20 items-center flex sticky md:top-0 top-0 '>
          <span className='text-cyan-600 text-4xl font-bold  dark:text-indigo-100/90 ml-2  p-2 pt-4  rounded-2xl  -yellow-200/40 '>
            Projects
          </span>
          
        </div>
      

        <div ref={ProjectsRef} className='relative'>
          <div className='md:dark:block hover:block hidden '>
            <SpiderCursorEffect containerRef={ProjectsRef} particleCount={300} particleColor='2, 82, 102' connectionColor='0, 139, 173' />
          </div>
          <div className='dark:hidden not-md:hidden  '>
            <SpiderCursorEffect containerRef={ProjectsRef} particleCount={300} particleColor='0, 139, 173' connectionColor='0, 139, 173' />
          </div>
          <Projects/>
        </div>

      </div>


      {/* Education */}
            
      <div id='Education' className='md:w-10/12 rounded-xl w-full bg-stone-100 p-2 dark:bg-stone-600/50 mx-auto'>
       <div className='  bg-stone-100 p-2 dark:bg-[#2C2927] z-20 sticky top-0 md:top-0 '>
         <span className='text-stone-600 text-4xl  dark:text-white md:ml-2  font-bold p-4 rounded-2xl  '>
           Education
         </span>
       </div>
          
        <div ref={EducationRef} className='relative'>
          <div className='md:dark:block hover:block hidden  '>
            <SpiderCursorEffect containerRef={EducationRef} particleCount={100} particleColor='110, 106, 103' connectionColor='184, 179, 176' />
          </div>
          <div className='dark:hidden not-md:hidden   '>
            <SpiderCursorEffect containerRef={EducationRef} particleCount={100} particleColor='184, 179, 176' connectionColor='184, 179, 176' />
          </div>
          
          
         <div className='z-10 '>
           <EducationCard instituteName="Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR" course="Bachelor of Technology" courseShortForm="B.Tech"  instituteImage='https://www.nitj.ac.in/public/assets/images/logo_250.png' Major='Instrumantation and Control Engineering (ICE)'  />
 
           <EducationCard 
              instituteName="Central Board of Secondary Education (CBSE)"
              course="Science"
              courseShortForm="PCM"
              instituteImage="https://saras.cbse.gov.in/SARAS/ui/assets/images/cbse-logo.png"
              Major="Physics, Chemistry, Mathematics"
              Marks="89"
            />
   
           
            <EducationCard 
              instituteName="Council for the Indian School Certificate Examinations (CISCE)"
              course="General Curriculum"
              courseShortForm="ICSE"
              instituteImage="https://cisceboard.org/images/cisce-60-logo-new.png"
              Major="English, Mathematics, Science, Social Studies, Computer Applications" 
              Marks="86"
            />
 
         </div>
        </div>  
        
          
        

      </div>




      {/* contact */}


      <div id="Contact"  className='md:w-11/12 mx-auto my-6 mt-14' >
        <a href="#" >
          {/* <div className='my-8 mb-15  '>
            <span className='text-black hover:bg-amber-100 hover:text-black text-2xl p-6 rounded-2xl  -yellow-200/40 '>

            </span>
          </div> */}
        </a>

        <div  className='md:w-11/12 rounded-xl dark:bg-green-600/30 bg-green-100 mx-auto'>
          <div ref={contactRef} className='relative '>
            {/* <div className='md:dark:block hover:block  hidden '>
              <SpiderCursorEffect containerRef={contactRef} particleCount={100} particleColor='0, 105, 40' connectionColor='144, 178, 224' />
            </div>
            <div className='dark:hidden not-md:hidden  '>
              <SpiderCursorEffect containerRef={contactRef} particleCount={100} particleColor='133, 199, 158' connectionColor='0, 105, 40' />
            </div> */}
            <Contact/>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home