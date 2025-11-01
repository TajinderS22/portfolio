import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { DevIconsUrls } from '../utils/CommonDevIcons';


const colors = [
  'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink',
  'rose', 'orange', 'amber', 'lime', 'emerald', 'teal', 'cyan', 'sky',
  'violet', 'fuchsia', 'neutral', 'stone'
]

const colorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  gray:     { bg: 'bg-gray-100', darkBg: 'bg-gray-600/70', darkText: 'text-gray-100', text: 'text-gray-600' },
  red:      { bg: 'bg-red-100', darkBg: 'bg-red-600/70', darkText: 'text-red-100', text: 'text-red-600' },
  yellow:   { bg: 'bg-yellow-100', darkBg: 'bg-yellow-600/70', darkText: 'text-yellow-100', text: 'text-yellow-600' },
  green:    { bg: 'bg-green-100', darkBg: 'bg-green-600/70', darkText: 'text-green-100', text: 'text-green-600' },
  blue:     { bg: 'bg-blue-100', darkBg: 'bg-blue-600/70', darkText: 'text-blue-100', text: 'text-blue-600' },
  indigo:   { bg: 'bg-indigo-100', darkBg: 'bg-indigo-600/70', darkText: 'text-indigo-100', text: 'text-indigo-600' },
  purple:   { bg: 'bg-purple-100', darkBg: 'bg-purple-600/70', darkText: 'text-purple-100', text: 'text-purple-600' },
  pink:     { bg: 'bg-pink-100', darkBg: 'bg-pink-600/70', darkText: 'text-pink-100', text: 'text-pink-600' },
  rose:     { bg: 'bg-rose-100', darkBg: 'bg-rose-600/70', darkText: 'text-rose-100', text: 'text-rose-600' },
  orange:   { bg: 'bg-orange-100', darkBg: 'bg-orange-600/70', darkText: 'text-orange-100', text: 'text-orange-600' },
  amber:    { bg: 'bg-amber-100', darkBg: 'bg-amber-600/70', darkText: 'text-amber-100', text: 'text-amber-600' },
  lime:     { bg: 'bg-lime-100', darkBg: 'bg-lime-600/70', darkText: 'text-lime-100', text: 'text-lime-600' },
  emerald:  { bg: 'bg-emerald-100', darkBg: 'bg-emerald-600/70', darkText: 'text-emerald-100', text: 'text-emerald-600' },
  teal:     { bg: 'bg-teal-100', darkBg: 'bg-teal-600/70', darkText: 'text-teal-100', text: 'text-teal-600' },
  cyan:     { bg: 'bg-cyan-100', darkBg: 'bg-cyan-600/70', darkText: 'text-cyan-100', text: 'text-cyan-600' },
  sky:      { bg: 'bg-sky-100', darkBg: 'bg-sky-600/70', darkText: 'text-sky-100', text: 'text-sky-600' },
  violet:   { bg: 'bg-violet-100', darkBg: 'bg-violet-600/70', darkText: 'text-violet-100', text: 'text-violet-600' },
  fuchsia:  { bg: 'bg-fuchsia-100', darkBg: 'bg-fuchsia-600/70', darkText: 'text-fuchsia-100', text: 'text-fuchsia-600' },
  neutral:  { bg: 'bg-neutral-100', darkBg: 'bg-neutral-600/70', darkText: 'text-neutral-100', text: 'text-neutral-600' },
  stone:    { bg: 'bg-stone-100', darkBg: 'bg-stone-600/70', darkText: 'text-stone-100', text: 'text-stone-600' },
}






type GithubProjectsProps = {
  Name:string; ImageUrl:string; GithubUrl:string
  description:string
  TechStack:string[]
}



const GithubProjectCard = ({Name,ImageUrl,GithubUrl,description,TechStack}:GithubProjectsProps) => {

  const [isDark, setIsDark] = useState(false)
  
    useEffect(() => {
      const updateMode = () => {
        setIsDark(document.documentElement.classList.contains('dark'))
      }
  
      updateMode() 
  
      const observer = new MutationObserver(updateMode)
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
      return () => observer.disconnect()
    }, [])
  
    const colorName = colors[Math.floor(Math.random() * colors.length)]
    const colorClasses = colorMap[colorName]
  
    const bgClass = isDark ? colorClasses.darkBg : colorClasses.bg
    const textClass = isDark ? colorClasses.darkText : colorClasses.text

  return (
    
    <div className="md:w-11/12 w-full mx-auto z-20 flex not-md:flex-col backdrop-blur-md p-2 sticky md:top-22 top-21  rounded-2xl">
      <a href={GithubUrl} target="__blank" rel="noopener noreferrer">
        <div className="transform duration-500 hover:scale-102 rounded-lg max-w-[400px] mx-auto  w-screen not-md:w-11/12 min-w-[300px]">
          <div className="relative z-10 bg-white h-[280px] overflow-hidden rounded-lg border-2 border-gray-300">
            <Github className="absolute z-10  bg-green-200 rounded-tl-lg animate-pulse rounded-br-lg"></Github>
            <img
                  src={ImageUrl}
                  className=" scale-[1] origin-top-left h-full"
                  alt={Name}
                />
          </div>
        </div>
      </a>
      <div className='bg-white md:ml-2 not-md:h-80 rounded-md  flex flex-col mt-1 md:mt-0 dark:bg-black not-md:w-11/12 mx-auto  w-full'>
        <div className={`border ${bgClass} ${textClass} rounded-md h-full  w-full`}>
          <div className="px-2 pt-2 text-2xl font-semibold">{Name}</div>
          <div className="text-md mx-2 animate-pulse">Github</div>
          <div className='flex flex-1 flex-col  justify-between w-full md:mt-2'>
            <p className='p-2'>{description}</p>
            <div className='md:flex hidden gap-2 my-3 mx-4' >
              {TechStack.map((icon)=>{
                console.log(icon)
                if(!icon) return
                const iconProps = DevIconsUrls[icon as keyof typeof DevIconsUrls]
                console.log(iconProps)
                if(!iconProps) return 
                return(
                  <div className='flex gap-4'>
                    <img src={iconProps.url} className='w-12 animate-pulse mx-2' alt={iconProps.alt} />
                  </div>
                )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default GithubProjectCard