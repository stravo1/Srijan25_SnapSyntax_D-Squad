const Progress = ({number}) => {
    return(
        <div className="flex gap-2">
        {
            Array.from({length: 7}, (_, i) => (
                <div key={i} className={`w-4 h-4 rounded-full ${i < number ? "bg-pink-500" : "bg-pink-900"}`}></div>
            ))
        }
        </div>
    )
}

export default Progress;