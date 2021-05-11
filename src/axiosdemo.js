import React, {useState} from 'react'
import Axios from 'axios'

const AxiosDemo = () => {

    const [joke, setJoke] = useState('')
    const getJoke = () => {
        Axios.get('https://official-joke-api.appspot.com/random_joke').then(
            (response) => {
                setJoke(response.data.setup + ".." + response.data.punchline)
            })
    }

    return (
        <div>
            
            <div className="">
                <h1 className="text-3xl pt-10">Joke API Demo using Axios </h1>

                <div>
                    <button onClick={getJoke} className="mt-10 bg-white text-gray-900 px-8 py-2 rounded-md">
                        Get Joke
                    </button>
                </div>


                <div className="text-lg text-white my-10">
                    {joke}
                </div>


            </div>
        </div>
    )
}

export default AxiosDemo