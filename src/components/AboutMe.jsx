import { MoveRight } from "lucide-react";
import Laptop from "../assets/laptop.jpg";

const AboutMe = () => {
    return (
        <div className="about-me w-screen h-screen relative">
            <div className="about-me-content flex justify-center items-center z-10">
                <h2 className="text-7xl font-medium">
                    About
                    <br />
                    Me
                    <div className="ml-[8rem]">
                        <MoveRight size={70} color="#b72fed" />
                    </div>
                </h2>
            </div>
            <div className="absolute bottom-12 left-12 z-0">
                <div className="image-laptop">
                    <img
                        src={Laptop}
                        alt="Laptop"
                        className="w-[60vh] h-[60vh]"
                    />
                </div>
            </div>
            <div className="w-1/3 ml-[50%] mt-[15%] p-4 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                adipisci saepe velit quasi modi repellat hic debitis commodi
                perferendis eius? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quasi, itaque.
            </div>
        </div>
    );
};

export default AboutMe;
