import '../App.css'

export default function ImputBox(){
    return(
        <div className="flex flex-row my-5 rounded-4xl shadow-[1px_1px_15px_1px_rgba(0,0,0,0.5)] h-21  w-8/12 mx-auto">
            <input type='text' placeholder="Add todo..." className='w-full ml-7 focus:outline-none'/>
            <button className="w-12 h-12 bg-green-600 float-right my-auto mr-15"></button>
        </div>
    )
}