export default function Button({text}){
    return(
        <button className="px-6 py-2 rounded-lg bg-grey-200 hover:bg-gray-300 active:bg-gray-400 transition">
        {text}
        </button>
    )
}