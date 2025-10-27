export default function About() {
    return(
        <div>

            <div className="flex justify-center p-2">
                <h1 className="text-2xl font-bold">About Me</h1>
            </div>
            {/* grid grid-cols-1 can be changed to grid grid-cols-2 to include certification */}
            <div className="grid grid-cols-1 items-center gap-x-5 p-3">
                <div className="flex justify-center items-center gap-x-5">
                    <img src="./Headshot.jpg" className="w-50 h-auto rounded-full" />
                    <h1 className="w-150">
                        I'm Towaf from Queens, New York. 
                        I'm a senior at Thomas Edison CTE HS with a passion for Computer Science, 
                        where I'm currently learning C# with Unity!
                    </h1>
                </div>
            </div>
        </div>
    )
}