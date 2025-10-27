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
  gray:     { bg: 'bg-gray-100', darkBg: 'bg-gray-300/70', darkText: 'text-gray-100', text: 'text-gray-600' },
  red:      { bg: 'bg-red-100', darkBg: 'bg-red-300/70', darkText: 'text-red-100', text: 'text-red-600' },
  yellow:   { bg: 'bg-yellow-100', darkBg: 'bg-yellow-300/70', darkText: 'text-yellow-100', text: 'text-yellow-600' },
  green:    { bg: 'bg-green-100', darkBg: 'bg-green-300/70', darkText: 'text-green-100', text: 'text-green-600' },
  blue:     { bg: 'bg-blue-100', darkBg: 'bg-blue-300/70', darkText: 'text-blue-100', text: 'text-blue-600' },
  indigo:   { bg: 'bg-indigo-100', darkBg: 'bg-indigo-300/70', darkText: 'text-indigo-100', text: 'text-indigo-600' },
  purple:   { bg: 'bg-purple-100', darkBg: 'bg-purple-300/70', darkText: 'text-purple-100', text: 'text-purple-600' },
  pink:     { bg: 'bg-pink-100', darkBg: 'bg-pink-300/70', darkText: 'text-pink-100', text: 'text-pink-600' },
  rose:     { bg: 'bg-rose-100', darkBg: 'bg-rose-300/70', darkText: 'text-rose-100', text: 'text-rose-600' },
  orange:   { bg: 'bg-orange-100', darkBg: 'bg-orange-300/70', darkText: 'text-orange-100', text: 'text-orange-600' },
  amber:    { bg: 'bg-amber-100', darkBg: 'bg-amber-300/70', darkText: 'text-amber-100', text: 'text-amber-600' },
  lime:     { bg: 'bg-lime-100', darkBg: 'bg-lime-300/70', darkText: 'text-lime-100', text: 'text-lime-600' },
  emerald:  { bg: 'bg-emerald-100', darkBg: 'bg-emerald-300/70', darkText: 'text-emerald-100', text: 'text-emerald-600' },
  teal:     { bg: 'bg-teal-100', darkBg: 'bg-teal-300/70', darkText: 'text-teal-100', text: 'text-teal-600' },
  cyan:     { bg: 'bg-cyan-100', darkBg: 'bg-cyan-300/70', darkText: 'text-cyan-100', text: 'text-cyan-600' },
  sky:      { bg: 'bg-sky-100', darkBg: 'bg-sky-300/70', darkText: 'text-sky-100', text: 'text-sky-600' },
  violet:   { bg: 'bg-violet-100', darkBg: 'bg-violet-300/70', darkText: 'text-violet-100', text: 'text-violet-600' },
  fuchsia:  { bg: 'bg-fuchsia-100', darkBg: 'bg-fuchsia-300/70', darkText: 'text-fuchsia-100', text: 'text-fuchsia-600' },
  neutral:  { bg: 'bg-neutral-100', darkBg: 'bg-neutral-300/70', darkText: 'text-neutral-100', text: 'text-neutral-600' },
  stone:    { bg: 'bg-stone-100', darkBg: 'bg-stone-300/70', darkText: 'text-stone-100', text: 'text-stone-600' },
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
        <div className='bg-white w-[90%] my-2 dark:bg-black sticky md:top-20 top-30 rounded-xl '>
            <div className={`w-full lg:px-12 md:px-6 px-2  shadow-xl py-1  rounded-xl ${bgClass} ${textClass} flex justify-between items-center`}>
                <p className='lg:mr-12 lg:text-2xl '>{Name}</p>
                <img src={imageUrl} alt={alt} className="w-20 h-20 end-0  animate-pulse hover:rotate-20  hover:scale-110 z-10 transition-transform duration-300" />
            </div>
        </div>

  )
    } 
    else {
        return (
            <div className='bg-white w-[90%] my-2 dark:bg-black sticky md:top-20 top-55 rounded-xl '>
                <div className={`w-full lg:px-12 md:px-6 px-2 shadow-xl py-1  rounded-xl ${bgClass} ${textClass} flex justify-between items-center`}>
                    <img src={imageUrl} alt={alt} className="w-20 h-20  animate-pulse hover:rotate-20  hover:scale-110 z-10 transition-transform duration-300" />
                    <p className='lg:ml-12 lg:text-2xl ' >{Name}</p>
                </div>
            </div>
        )
    }
}

export default SkillCard