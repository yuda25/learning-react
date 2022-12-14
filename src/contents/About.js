import man from "../assets/images/man.png"
import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between border-b-2 mt-14" id="about">
                <div className="w-[90%] lg:w-[50%]">
                    <h2 className="lg:text-[40px] font-medium">KYM CODING IS...</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <ul className="list-disc ml-8 mt-4">
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor(<i>Lorem Ipsum is simply dummy text</i>)</li>
                    </ul>
                </div>
                <div className="w-[50%]">
                    <img className="w-full" alt="man" src={man}/>
                </div>
            </div>
        )
    }
}
export default About;