import '../App.css'
import Add from '../assets/add-circle-svgrepo-com.svg'


export default function InputBox({addContent}:{addContent:void}){
    function handleClick(){
          const inputText=document.getElementById('readText').value;
          const inputValue=document.getElementById('readText')

          if(inputText){
            addContent(inputText)
            inputValue.value='';
            
          }
      }
    return(
        <div className="flex flex-row my-5 rounded-4xl shadow-[1px_1px_15px_1px_rgba(0,0,0,0.5)] h-21  w-8/12 mx-auto">
            <input type='text' placeholder="Add todo..." className='w-full ml-7 focus:outline-none' id='readText'/>
            <button className="w-12 h-12 float-right my-auto mr-15"><img src={Add} alt="adding image" onClick={handleClick} /></button>
        </div>
    )
}