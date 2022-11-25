import React from "react";
import coding from "../assets/images/coding.png"

class HomeContent extends React.Component {
    render() {
        return (
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between border-b-2 pb-14" id="home">
                <div className="w-[90%] lg:w-[50%]">
                    <h1 className="lg:text-[40px] font-medium">CODING NIKMAT DENGAN KYM CODING</h1>
                    <p className="mt-0 lg:mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="#about">
                    <button type="button" class="text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">Read More</button>
                    </a>
                </div>
                <div className="w-[50%] mt-6 lg:mt-0">
                    <img className="w-full" alt="gambar coding" src={coding}/>
                </div>
            </div>
        )
    }
}

export default HomeContent;