import Navbar from './Navbar'
import EducationCard from './EducationCard'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='max-w-[1920px] w-full mx-auto transform transition-all duration-500 '>
      <Navbar/>

      {/* page content */}

      <div id='About' className='text-white w-10/12 mx-auto md:p-6 p-2 my-14'>
        <div className='flex justify-between'>
          <div className='flex-1 mt-8 md:pr-6'>

              <p className='text-7xl my-6 '>Hi ...</p>



              <div className=' md:hidden mt-10'>
                <img 
                className="max-w-120 w-full min-w-[250px] transform drop-shadow-[0_10px_15px_rgba(81,207,179,0.4)]  hover:scale-110 transition-all hover:[transform:rotateY(10deg)] duration-500 ease-in-out rounded-lg" 
                src="https://res.cloudinary.com/dcpz5001o/image/upload/e_background_removal/f_png/v1759474594/Adobe_Express_-_file_idzyg5.png" 
                alt="Tajinder Singh Image" 
                />
              </div>


              

            <p className='text-4xl my-6'>I am Tajinder Singh</p>

            

            <p className='max-w-[600px] my-6 w-[90%] max-h-[500px] overflow-x-hidden '>Full-stack developer with experience in Python, C++, and JavaScript, focused on building scalable, secure, and cloud-
              hosted applications. Skilled at integrating AI-driven features into web platforms, designing efficient APIs, and deploying
              solutions across multi-cloud environments. Recognized for problem-solving, collaboration, and mentoring peers.
            </p>

            {/* logos */}

            <div className="flex flex-col justify-start md:gap-8 my-8 items-start rounded-lg shadow-md">
              
              <div className='flex justify-start w-6/12 md:gap-6 gap-2 items-center rounded-lg'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
              </div>

              <div className='flex justify-start w-6/12 md:gap-6 gap-2 items-center rounded-lg'>
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-20 h-20  invert hover:scale-110 transition-transform duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
                <img src="https://static.cdnlogo.com/logos/t/58/tailwind-css.svg" alt="Tailwind CSS" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-20 h-20  hover:scale-110 transition-transform duration-300" />
              </div>
              
            </div>


          </div>

          <div className='hidden md:block'>
            <img 
            className="max-w-120 w-10/12 min-w-[250px] transform translate-x-10 drop-shadow-[0_10px_15px_rgba(81,207,179,0.4)]  hover:scale-110 transition-all hover:[transform:rotateY(10deg)] duration-500 ease-in-out rounded-lg" 
            src="https://res.cloudinary.com/dcpz5001o/image/upload/e_background_removal/f_png/v1759474594/Adobe_Express_-_file_idzyg5.png" 
            alt="Tajinder Singh Image" 
            />
          </div>
        </div>
      </div>

      {/* Education */}
            
      <div id='Education' className='md:w-11/12 w-full mx-auto'>

        <a href="#Education" >
          <div className='my-8 mb-15  '>
            <span className='text-white ml-2 hover:bg-amber-100 hover:text-black text-2xl p-6 rounded-2xl border border-yellow-200/40 '>
              Education
            </span>
          </div>
        </a>
        
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

      {/* Projects */}

      <div id="Projects"  className='md:w-11/12 mx-auto my-6 mt-14' >
        <a href="#Projects" >
          <div className='my-8 mb-15  '>
            <span className='text-white ml-2 hover:bg-amber-100 hover:text-black text-2xl p-6 rounded-2xl border border-yellow-200/40 '>
              Projects
            </span>
          </div>
        </a>

        <div className=''>
          <Projects/>
        </div>

      </div>

      {/* contact */}


      <div id="Contact"  className='md:w-11/12 mx-auto my-6 mt-14' >
        <a href="#" >
          {/* <div className='my-8 mb-15  '>
            <span className='text-white hover:bg-amber-100 hover:text-black text-2xl p-6 rounded-2xl border border-yellow-200/40 '>

            </span>
          </div> */}
        </a>

        <div className=''>
          <Contact/>
        </div>

      </div>


    </div>
  )
}

export default Home