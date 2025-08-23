import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <>
    <div className='w-full h-[100vh] flex flex-col bg-[#896C6C] items-center'>
      <h1 className='bg-white rounded-lg w-[40%] text-center mt-5 py-4 uppercase font-bold text-xl'>Random Gifs Generator</h1>
      <div className='flex flex-col h-full items-center gap-y-10 mt-[30px relative]'>
        <Random/>
        <Tag/>
      </div>
    </div>
    </>
  )
}

export default App
