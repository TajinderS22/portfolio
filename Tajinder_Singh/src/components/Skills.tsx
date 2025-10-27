import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='lg:w-9/12 flex not-md:flex-col  text-white mx-auto' >
        <div className=' md:flex hidden  flex-col items-center  text-xl  m-2 md:w-6/12 w-full  z-10 justify-center'>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt={'Reactjs'} Name={'React.js'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt={'Tailwind css'} Name={'Tailwind CSS'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg'} alt={'Docker'} Name={'Docker'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg'} alt={'Nextjs'} Name={'Next.js'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'} alt={'Mongodb'} Name={'MongoDb'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'} alt={'AWS'} Name={'AWS'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'} alt={'redux'} Name={'Redux'} side={'left'}/>
        </div>

        <div className=' md:flex hidden flex-col items-center  text-xl w-full m-2 md:w-6/12 z-10 justify-center'>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt={'Express'} Name={'Express'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg'} alt={'Nodejs'} Name={'Node.js'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'} alt={'TypeScript'} Name={'TypeScript'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg'} alt={'Prisma'} Name={'Prisma'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg'} alt={'Postgresql'} Name={'Postgresql'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'} alt={'GitHub'} Name={'GitHub'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'} alt={'Linux'} Name={'Linux'} side={'right'}/>
        </div>
        <div className=' flex md:hidden flex-col items-center  text-xl  m-2 md:w-6/12 w-full  z-10 justify-center'>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt={'Reactjs'} Name={'React.js'} side={'left'}/> 
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt={'Tailwind css'} Name={'Tailwind CSS'} side={'left'}/> 
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg'} alt={'Docker'} Name={'Docker'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg'} alt={'Nextjs'} Name={'Next.js'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'} alt={'Mongodb'} Name={'MongoDb'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'} alt={'AWS'} Name={'AWS'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'} alt={'redux'} Name={'Redux'} side={'left'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt={'Express'} Name={'Express'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg'} alt={'Nodejs'} Name={'Node.js'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'} alt={'TypeScript'} Name={'TypeScript'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg'} alt={'Prisma'} Name={'Prisma'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg'} alt={'Postgresql'} Name={'Postgresql'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'} alt={'Postgresql'} Name={'Postgresql'} side={'right'}/>
          <SkillCard imageUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'} alt={'Linux'} Name={'Linux'} side={'right'}/>
        </div>
    </div>
  )
}

export default Skills