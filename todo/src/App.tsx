import './App.css'
import InputBox from './components/inputBox.tsx'
import List from './components/listElem.tsx'
import {useState,useRef} from 'react'



export default function App(){
  const arrWord=useRef<string[]>([])
  const [added,setAdded]=useState<number>(0)

  function handleInput(inputWord:string){
         arrWord.current.push(inputWord);
         setAdded(added+1)
  }
  function deleteFunc(index:number){
      arrWord.current.splice(index,1)
      setAdded(added-1)
  }
  function underlineWord(word:number){
    const elemNeeded=document.get
  }
  return(
  <div className='w-10/12 items-center mx-auto my-0'>
  <h1 className='text-neutral-200 font-bold text-[201px] mb-6.5 mx-auto w-3xl'>todos</h1>
  <InputBox addContent={handleInput}/>
  {arrWord.current.map((Element,index)=><List key={index+1} text={Element} click={()=>deleteFunc(index)}  changed={()=>underlineWord(index)}/>) }
  </div>
  )
}