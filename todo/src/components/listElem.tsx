import '../App.css'
import Delete from '../assets/delete-svgrepo-com.svg'
 type obj={
    text:string;
    click:()=>void;
    changed:()=>void;
    checked:boolean;
 }
export default function Lists(props:obj){
    const {text,click,changed,checked}=props
    return(
    <ul>
        <li className='flex w-8/12 mx-auto min-w-3xl align-middle my-4.5 border-b border-slate-200 py-4'>
            <input type="checkbox" onChange={changed} className="w-5 h-5 mr-8 ml-3 mt-2 appearance-none rounded-sm border-2 border-gray-800 bg-white checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-colors"/>
            <p className={checked?'w-10/12 text-2xl wrap-break-word pr-2 line-through':'w-10/12 text-2xl wrap-break-word pr-2'}>{text}</p>
            <button onClick={click} className='w-14 h-14 bg-indigo-100 rounded-4xl'><img src={Delete} className='h-6 w-2xl'/></button>
        </li>
    </ul>
    )
}