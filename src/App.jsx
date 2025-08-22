import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <>
    <div className='w-full h-screen flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg w-[80%] text-center mt-5 py-4 uppercase font-bold text-xl'>Random Gifs Generator</h1>
      <div className='flex flex-col items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
    </>
  )
}

export default App
