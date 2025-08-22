import React, {useEffect, useState} from 'react'
import Spinner from './Spinner';

const Random = () => {
    const [gif, setGif] = useState(null);
    let w=null, h=null;
    const [loading,setLoading] = useState(false);
    let apiKey = "eQw4D7MxUKTCxatAzmZlmoBvdLHqAxlN"
    let baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    
    const fetchRandomGif = async () => 
    {
            setLoading(true); 
            let gifUrl = await fetch(baseUrl);
            let data = await gifUrl.json();
            setGif(data.data.images.downsized_large.url); 
            setLoading(false);   
    }

    async function clickHandler()
    {
        fetchRandomGif()
    }

    useEffect(() => 
        {
            fetchRandomGif();
        },[])

  return (
    <div className='w-1/2 w-full px-15 py-10 bg-green-500 rounded-lg border flex flex-col items-center'>
      <h1 className='text-3xl text-center uppercase underline mb-5'>Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} className='max-w-[30rem]'/>)
      }
      <button className='text-xl mt-4 bg-green-300 w-[10rem] p-2 rounded-md cursor-pointer hover:scale-110 duration-300 uppercase' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
