import { Linkedin } from "lucide-react";
import { Download } from "lucide-react";
import { Figma } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";

const LandingPage = () => {
    return (
        <div className="landing-page w-screen h-screen overflow-hidden">
            <div className="landing-content flex h-[80%]">
                <div className="flex flex-col justify-end pb-[10%] p-12">
                    <h2 className="text-7xl font-medium">
                        Dee
                        <br />
                        Squad
                    </h2>
                    <div className="mt-10 text-lg pl-4 border-l-4 border-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero commodi distinctio non laboriosam suscipit
                        dignissimos debitis tenetur eveniet repudiandae facilis?
                    </div>
                </div>
                <div
                    id="blob"
                    className="w-full h-full flex justify-end items-end relative"
                >
                    <button className="w-24 h-24 absolute top-[50%] -left-[10%] bg-purple-500 rounded-full flex justify-center items-center gap-2 font-bold">
                        <Download />
                        CV
                    </button>
                    <div className="glowing-circle"></div>
                </div>
                <div className="icons h-full flex flex-col justify-center items-center">
                    <ul className="flex flex-col space-y-4 p-12 pt-24">
                        <li>
                            <a href="">
                                <Github />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Instagram />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Linkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Figma />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
