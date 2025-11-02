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
                    Towaf is a senior in the Web/App Development CTE Track at Thomas A. Edison Career & Technical Education High School. 
                    He is passionate about computer science, web development, and IT, he is actively expanding his skills by building projects with React, Python, Java, and C#
                    </h1>
                </div>
            </div>
        </div>
    )
}