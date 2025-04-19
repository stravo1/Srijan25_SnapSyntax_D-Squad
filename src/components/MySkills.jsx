import Progress from "./Progress";

const MySkills = () => {
    return (
        <div className="my-skills w-screen h-screen relative flex justify-center items-center">
            <div className="flex flex-col gap-8 w-full">
                <h2 className="text-5xl font-medium flex w-full justify-center items-center">My Skills</h2>
                <div className="stars grid grid-cols-2 grid-rows-4 gap-8 w-full justify-between p-12 border-box">
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            CSS
                        </h4>
                        <div>
                            <Progress number={5} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            Bootstrap
                        </h4>
                        <div>
                            <Progress number={4} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            JS
                        </h4>
                        <div>
                            <Progress number={3} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            React
                        </h4>
                        <div>
                            <Progress number={1} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            Figma
                        </h4>
                        <div>
                            <Progress number={4} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            Tailwind
                        </h4>
                        <div>
                            <Progress number={7} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            NodeJS
                        </h4>
                        <div>
                            <Progress number={3} />
                        </div>
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <h4 className="text-xl w-[5rem]">
                            Angular
                        </h4>
                        <div>
                            <Progress number={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills;