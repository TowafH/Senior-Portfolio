export default function Skills(props) {
    return(
        <div>
            {/* Tech Stack Header */}
            <div className="flex justify-center p-6">
                <h1 className="text-2xl font-bold">Tech Stack</h1>
            </div>

            {/* Skills Sections */}
            <div className="flex justify-center gap-6 flex-wrap">
                {/* Programming */}
                <div className="bg-[#242624] text-white p-4 rounded-lg shadow-lg w-80 text-center">
                    <h1 className="font-semibold mb-2">Programming</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <img src="HTML.png" className="w-16 h-16 object-contain" alt="HTML" />
                            <p className="mt-1">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="CSS.png" className="w-16 h-16 object-contain" alt="CSS" />
                            <p className="mt-1">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="JS.png" className="w-16 h-16 object-contain" alt="JavaScript" />
                            <p className="mt-1">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="REACT.png" className="w-16 h-16 object-contain" alt="React" />
                            <p className="mt-1">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="TAILWIND.png" className="w-16 h-16 object-contain" alt="Tailwind" />
                            <p className="mt-1">Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="PY.png" className="w-16 h-16 object-contain" alt="Python" />
                            <p className="mt-1">Python</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="CSHARP.png" className="w-16 h-16 object-contain" alt="C#" />
                            <p className="mt-1">C#</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="JAVA.png" className="w-16 h-16 object-contain" alt="Java" />
                            <p className="mt-1">Java</p>
                        </div>
                    </div>
                </div>

                {/* Information Technology */}
                <div className="bg-[#242624] text-white p-4 rounded-lg shadow-lg w-80 text-center">
                    <h1 className="font-semibold mb-2">Information Technology</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                            <p className="mt-1">Hardware Installation</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-1">Reimaging</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-1">OS Deployment</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-1">Active Directory</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-1">Kace</p>
                        </div>
                    </div>
                </div>

                {/* Development Tools */}
                <div className="bg-[#242624] text-white p-4 rounded-lg shadow-lg w-80 text-center">
                    <h1 className="font-semibold mb-2">Development Tools</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <img src="VSCODE.png" className="w-16 h-16 object-contain" alt="VS Code" />
                            <p className="mt-1">VS Code</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="UNITY.png" className="w-16 h-16 object-contain" alt="Unity" />
                            <p className="mt-1">Unity</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="GIT.png" className="w-16 h-16 object-contain" alt="Git" />
                            <p className="mt-1">Git</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="POSTMAN2.png" className="w-16 h-16 object-contain" alt="Postman" />
                            <p className="mt-1">Postman</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="DOCKER.png" className="w-16 h-16 object-contain" alt="Docker" />
                            <p className="mt-1">Docker</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="FIGMA.png" className="w-16 h-16 object-contain" alt="Figma" />
                            <p className="mt-1">Figma</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="GOOGLE.png" className="w-16 h-16 object-contain" alt="Google Workspace" />
                            <p className="mt-1">Google Workspace</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="MICROSOFT.png" className="w-16 h-16 object-contain" alt="Microsoft 365" />
                            <p className="mt-1">Microsoft 365</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="flex justify-center p-6">
                <h1 className="text-2xl font-bold">Certifications</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                <a href="https://www.credly.com/badges/faf8751b-62f3-4313-9c8f-6e99660afaa3" target="_blank" rel="noreferrer" className="w-40">
                    <img src="./HTMLCSS.png" alt="HTML/CSS Certificate" />
                </a>
                <a href="https://www.credly.com/badges/b8ba9872-0731-437d-9a60-74c8c6ff2aa5" target="_blank" rel="noreferrer" className="w-40">
                    <img src="./PYTHON.png" alt="Python Certificate" />
                </a>
                <a href="https://www.credly.com/badges/67cc2be7-b97e-4874-a8ff-b6fa87c6d1b6" target="_blank" rel="noreferrer" className="w-40">
                    <img src="./GENAI.png" alt="Generative AI Certificate" />
                </a>
                <a href="https://www.credly.com/badges/95afb144-c1a3-4e67-aea1-db361e830368" target="_blank" rel="noreferrer" className="w-40">
                    <img src="./FOUNDATIONS.png" alt="Foundations Certificate" />
                </a>
                <a href="https://badgr.com/public/assertions/vCwnJJpKSdi47PkZYVW9ug" target="_blank" rel="noreferrer" className="w-40">
                    <img src="./POSTMAN.png" alt="Postman Certificate" />
                </a>
            </div>
        </div>
    )
}
