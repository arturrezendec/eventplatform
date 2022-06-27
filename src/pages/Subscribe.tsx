import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber ($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`

export function Subscribe() {
    const navigate = useNavigate() 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent) { 
        event.preventDefault();

    await createSubscriber({
            variables: {
                name,
                email,
            }

        })

        navigate('/event/lesson/class-1')
       
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
                <div className="max-w-[600px] ">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Learn how to survive <strong className="text-yellow-300">in the wild</strong >, with <strong className="text-yellow-300">Bear Grylls</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                    In just one week, you will master survivor techniques with the legend himself Bear Grylls. Submit any name and email in order to get on the event page. Note: This is not a real app/course. 
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block min-w-[300px]"> Subscribe free </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full"> 
                    <input 
                     className=" bg-gray-900 rounded px-5 h-14 "
                     type='text' 
                     placeholder="Your full name"
                     onChange={event => setName(event.target.value)}
                     />

                    <input 
                     className=" bg-gray-900 rounded px-5 h-14 "
                     type='email' 
                     placeholder="Type your email"
                     onChange={event => setEmail(event.target.value)}

                     />
                    
                     <button className="mt-4 bg-yellow-300 uppercase py-4 rounded font-bold text-sm transition-colors disabled:opacity-50 hover:bg-yellow-700 text-black " 
                     type="submit"
                     disabled={loading}
                     >
                         Get my free spot
                      </button>

                    </form>

                </div>
            </div>
            
            <div>
            <img src='https://mission-survive.vercel.app/code-mockup.png' className="mt-10" alt="" />
            </div>
        
        </div>
        
    )
}