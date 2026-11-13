import '../App.css'
import Delete from '../assets/delete-svgrepo-com.svg'
 type obj={
    text:string;
    click:()=>void
 }
export default function Lists(props:obj){
    const {text,click}=props
    return(
    <ul>
        <li className='flex w-8/12 mx-auto min-w-3xl align-middle my-4.5 border-b border-slate-200 py-4'>
            <input type="checkbox" className='w-5 h-6 mr-10 '/>
            <p className='w-10/12 text-2xl'>{text}</p>
            <button onClick={click} className='w-14 h-14 bg-indigo-100 rounded-4xl'><img src={Delete} className='h-6 w-2xl'/></button>
        </li>
    </ul>
    )
}