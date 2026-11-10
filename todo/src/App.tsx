import './App.css'
import InputBox from './components/inputBox.tsx'
import List from './components/listElem.tsx'

export default function App(){
  return(
  <div className='w-10/12 items-center mx-auto my-0'>
  <h1 className='text-neutral-200 font-bold text-[201px] mb-6.5 mx-auto w-3xl'>todos</h1>
  <InputBox/>
  <List/>
  </div>
  )
}