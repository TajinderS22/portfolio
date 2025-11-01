import HostedProject from './HostedProject'
import GithubProjectCard from './GithubProjectCard'

const Projects = () => {


  return (
    <div className=' transform md:w-11/12  z-20 items-center justify-center md:gap-6 gap-40 md:pl-6 mx-auto flex flex-col  '>

        
        <HostedProject Url={'https://agroadvisors.ddns.net'} Name={'AgroAdvisors'} description={'AgroAdvisor is an AI-powered platform that helps farmers optimize crop yield and resource usage. By providing data-driven insights on irrigation and fertilizer management, it enables more sustainable farming practices while reducing environmental impact. With personalized recommendations, AgroAdvisor makes smart farming accessible and efficient.'} TechStack={['React.js',"MongoDB","Tailwind CSS","Node.js","Express",'GitHub',"AWS"]}/>

        <HostedProject Url={'https://brainly.tajinder.xyz'} Name={'Brainly'} description={"Brainly helps you organize and store important information, making it easy to access and showcase key Information when you need them most. It’s designed to boost productivity and streamline knowledge retention, so you can stay on top of your growth and Grow together."} TechStack={['React.js',"MongoDB","Tailwind CSS","Express","Node.js",'GitHub',"AWS"]}/>

        <HostedProject Name={'Enchat'} Url={'https://enchat.tajinder.xyz'} description={'Enchat ensures private, secure conversations with end-to-end encryption. Whether for personal or professional use, this app keeps your messages and data fully protected from third-party access, offering peace of mind in every chat.'} TechStack={['Next.js',"Prisma","Tailwind CSS","Node.js","Express",'TypeScript',"PostgreSQL","AWS"]} />
   
       
          <GithubProjectCard Name={'Tutty'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1759562428/Screenshot_from_2025-10-04_11-56-01_dq9gkr.png'} GithubUrl={'https://github.com/TajinderS22/Course-Selling-App-'} description={'Tutty is a platform that allows course creators to easily upload and sell their courses. Creators can upload images, provide course details, and set the price, while users can browse and purchase courses for learning. It’s a straightforward solution for instructors to share their knowledge and for learners to access a variety of courses in a simple, user-friendly environment.'} TechStack={['React.js',"MongoDB","Tailwind CSS","Node.js","Express"]}/>

          <GithubProjectCard Name={'DrawIt'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1761557387/Screenshot_from_2025-10-27_14-43-38_dy2fmg.png'} GithubUrl={'https://github.com/TajinderS22/DrawIt'} description={'DrawIt is a real-time collaborative whiteboarding app, similar to Excelidraw, that allows users to sketch, diagram, and brainstorm together. Whether for team collaboration or personal use, it offers intuitive drawing tools, seamless collaboration, and cloud-based storage for easy access to your creative work.'} TechStack={['Next.js',"Prisma","Tailwind CSS","Node.js","Express","TypeScript","PostgreSQL"]}/>
          <GithubProjectCard Name={'Netflix-GPT'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1759581932/Screenshot_from_2025-10-04_18-13-26_ttscvf.png'} GithubUrl={'https://github.com/TajinderS22/netflix-gpt/'} description={'Netflix GPT uses advanced AI to recommend movies based on user prompts, delivering personalized suggestions that match your unique preferences. With a sleek Netflix-like interface, it’s designed to help you discover the perfect movie or show quickly, making every viewing experience just right.'} TechStack={['React.js',"MongoDB","Tailwind CSS","Node.js","Express","Gemini"]}/>
    
      </div>
  )
}

export default Projects