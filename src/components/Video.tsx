import { DefaultUi, Player, Youtube } from "@vime/react";
import { Backpack, CaretRight, FileArrowDown, ImageSquare, TreeEvergreen } from "phosphor-react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

interface VideoProps {
    lessonSlug: string;
}

const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}
`

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug
        }
    })

if (!data) {  
    return ( 
    <div className="flex-1">
        <p> Loading...</p>
    </div>
    )};

    return (
        <div className=" flex-1 ">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className=" p-8 max-w-[1100px] mx-auto ">
                <div className="flex items-start gap-16 ">
                    
                    <div className="flex-1 ">
                        <h1 className="text-2xl font-bold ">
                        {data.lesson.title}
                        </h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">
                           {data.lesson.description}
                        </p>
                        
                        <div className=" flex items-center gap-4 mt-6 ">
                            <img src={data.lesson.teacher.avatarURL}
                                alt=""
                                className=" h-16 w-16 rounded-full border-2 border-yellow-300 object-cover " />
                            
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-200 text-sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex flex-col gap-4 ">
                        <a href="" className="p-4 text-sm bg-yellow-300 flex items-center rounded font-bold uppercase gap-2 justify-center text-black hover:bg-yellow-700 transition-colors ">
                            <Backpack size={24} />
                            survival package
                        </a>

                        <a href="" className="p-4 text-sm border border-yellow-200 flex items-center rounded font-bold uppercase gap-2 justify-center text-yellow-200 hover:bg-yellow-200 hover:text-black transition-colors  ">
                            <TreeEvergreen size={24} />
                            Challenge Access
                        </a>

                    </div>
                </div>
                <div className="gap-8  mt-20 grid grid-cols-2">
                    <a href="" className=" bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-yellow-300 h-full p-6 flex items-center text-black">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong>
                                 Extra Resources
                            </strong>
                            <p className=" text-sm text-gray-200 mt-2 ">
                            Access supplemental material and be aware of everything you need to survive into the jungle
                            </p>
                        </div>
                        
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={20} />
                        </div>
                    </a> 
                    
                    <a href="" className=" bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-yellow-300 h-full p-6 flex items-center text-black">
                            <ImageSquare size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong>
                                 Jungle Wallpapers
                            </strong>
                            <p className=" text-sm text-gray-200 mt-2 ">
                            Download exclusive wallpapers from the amazon jungle and personalize your desktop
                            </p>
                        </div>
                        
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={20} />
                        </div>
                    </a> 

                </div>
            </div>
        </div>
    )
};