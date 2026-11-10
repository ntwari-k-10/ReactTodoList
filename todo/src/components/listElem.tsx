import '../App.css'

export default function Lists(){
    return(
    <ul>
        <li className='flex w-8/12 mx-auto min-w-3xl align-middle my-4.5 border-b border-slate-200 py-4'>
            <input type="checkbox" className='w-8 h-8 mr-10'/>
            <p className='w-10/12 text-2xl'>kevin</p>
            <button className='bg-red-700 w-12 h-12'></button>
        </li>
    </ul>
    )
}