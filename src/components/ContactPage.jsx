const ContactPage = () => {
    return (
        <div className="h-screen w-screen">
            <div className="w-[40vw] mx-auto p-4 md:p-6 lg:p-8 rounded-lg text-white mt-32">
                <h2 className="text-5xl font-bold mb-12 w-full flex justify-center items-center">
                    Contact Me
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border-b-1 border-[rgba(255,255,255,0.5)] rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border-b-1 border-[rgba(255,255,255,0.5)] rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border-b-1 border-[rgba(255,255,255,0.5)] rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline h-32"
                            id="message"
                            placeholder="Your message..."
                        />
                    </div>
                    <button
                        className="bg-purple-700 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
