import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lessons(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE • d MMMM • h:mm bbb " )

   return (
   <Link to={`/event/lesson/${props.slug}`} className='group'>
        <span className="text-gray-300">
            {availableDateFormatted}
            </span>

        <div className="rounded border border-gray-500 p-4 mt-2 group-hover:bg-gray-600 group-hover:transition-colors">
            <header className=" flex items-center justify-between">
                {isLessonAvailable ? (
               <span className=" text-sm text-yellow-300 font-medium flex item-center gap-2">
                <CheckCircle size={20}/>
                Content Released
                </span>
                
                ) : (
                
                <span className=" text-sm text-yellow-700 font-medium flex item-center gap-2">
                <Lock size={20}/>
                Releasing Soon
                </span>

                )}

               <span className=" text-xs rounded px-2 border py-[0.125rem] text-gray-200 border-yellow-200 font-bold">
                {props.type == 'live' ? 'LIVE' : 'PRACTICE CLASS' }
               </span>
            </header>

            <strong className="text-gray-200 mt-5 block"> 
                {props.title}
             </strong>
        </div>
    </Link>
   )
};