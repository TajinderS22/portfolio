import  { useEffect, useState } from 'react'

type SkillCard={
    imageUrl:string
    alt:string
    Name:string
    side:"left"|"right"
}
const colors = [
  'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink',
  'rose', 'orange', 'amber', 'lime', 'emerald', 'teal', 'cyan', 'sky',
  'violet', 'fuchsia', 'neutral', 'stone'
]

const colorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  gray:     { bg: 'bg-gray-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-gray-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-gray-100', text: 'text-gray-600' },
  red:      { bg: 'bg-red-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-red-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-red-100', text: 'text-red-600' },
  yellow:   { bg: 'bg-yellow-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-yellow-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-yellow-100', text: 'text-yellow-600' },
  green:    { bg: 'bg-green-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-green-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-green-100', text: 'text-green-600' },
  blue:     { bg: 'bg-blue-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-blue-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-blue-100', text: 'text-blue-600' },
  indigo:   { bg: 'bg-indigo-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-indigo-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-indigo-100', text: 'text-indigo-600' },
  purple:   { bg: 'bg-purple-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-purple-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-purple-100', text: 'text-purple-600' },
  pink:     { bg: 'bg-pink-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-pink-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-pink-100', text: 'text-pink-600' },
  rose:     { bg: 'bg-rose-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-rose-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-rose-100', text: 'text-rose-600' },
  orange:   { bg: 'bg-orange-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-orange-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-orange-100', text: 'text-orange-600' },
  amber:    { bg: 'bg-amber-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-amber-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-amber-100', text: 'text-amber-600' },
  lime:     { bg: 'bg-lime-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-lime-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-lime-100', text: 'text-lime-600' },
  emerald:  { bg: 'bg-emerald-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-emerald-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-emerald-100', text: 'text-emerald-600' },
  teal:     { bg: 'bg-teal-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-teal-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-teal-100', text: 'text-teal-600' },
  cyan:     { bg: 'bg-cyan-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-cyan-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-cyan-100', text: 'text-cyan-600' },
  sky:      { bg: 'bg-sky-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-sky-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-sky-100', text: 'text-sky-600' },
  violet:   { bg: 'bg-violet-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-violet-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-violet-100', text: 'text-violet-600' },
  fuchsia:  { bg: 'bg-fuchsia-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-fuchsia-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-fuchsia-100', text: 'text-fuchsia-600' },
  neutral:  { bg: 'bg-neutral-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-neutral-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-neutral-100', text: 'text-neutral-600' },
  stone:    { bg: 'bg-stone-200/30 shadow-indigo-200 backdrop-blur-lg ', darkBg: 'bg-stone-500/30  shadow-indigo-500 backdrop-blur-2xl ', darkText: 'text-stone-100', text: 'text-stone-600' },
}





const SkillCard = ({imageUrl,alt,Name,side}:SkillCard) => {

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


  if(side=='left'){return (
        
        <div className='bg-white/30 w-[90%] my-2 dark:bg-black/20 sticky md:top-20 top-20 rounded-xl '>
            <div className={`w-full lg:px-12 md:px-6 px-2 shadow-sm py-1  rounded-xl ${bgClass} ${textClass} flex justify-between items-center`}>
                <p className=' lg:text-2xl text-start ' >{Name}</p>
                <img src={imageUrl} alt={alt} className={`w-20 h-20 ${isDark ?Name=='AWS'|| Name=="Next.js" || Name=="Express" || Name=="Prisma" || Name=="GitHub" || Name=="Postgresql" ?"bg-gray-400 px-2 rounded-2xl":"":""}   hover:scale-110 z-10 transition-transform duration-300`} />
            </div>
        </div>

  )
    } 
    else {
        return (
              
            <div className='bg-white/30 w-[90%] my-2 dark:bg-black/20 sticky md:top-20 top-50 rounded-xl '>
                <div className={`w-full lg:px-12 md:px-6 px-2 shadow-sm py-1  rounded-xl ${bgClass} ${textClass} flex justify-between items-center`}>
                    <img src={imageUrl} alt={alt} className={`w-20 h-20  ${isDark ?Name=='AWS'|| Name=="Next.js" || Name=="Express" || Name=="Prisma" || Name=="GitHub" || Name=="Postgresql" ?"bg-gray-400 px-2 rounded-2xl":"":""}   hover:scale-110 z-10 transition-transform duration-300`} />
                    <p className=' lg:text-2xl  ' >{Name}</p>
                </div>
            </div>
        )
    }
}

export default SkillCard