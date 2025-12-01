export default function Project(props) {
    return(
        <div>

            <div className="flex justify-center p-2">
                <h1 className="text-2xl font-bold hover:text-gray-300 underline "><a href={props.link} target="_blank" rel="noreferrer">{props.name}</a></h1>
            </div>
            <div className="flex justify-center p-2">
                <iframe
                src={props.link}
                frameBorder={0}
                className="w-300 h-150 rounded-lg shadow-lg"
                />

            </div>

        </div>
    )
}