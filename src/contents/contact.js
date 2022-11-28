import React from "react";
import mv from "../assets/logo/mv.png"
import { MdFacebook } from "react-icons/md"
import { SiGithub } from "react-icons/si"
import { RiGitlabLine } from "react-icons/ri"
import { ImWhatsapp } from "react-icons/im"
import { GrInstagram } from "react-icons/gr"

class Contact extends React.Component {
    render() {
        return (

            <div className="bg-stone-200" id="contact">
                <h1 className="lg:text-[40px] font-medium text-center">Contact</h1>
                <div className="container mx-auto p-4 bg-stone-200 flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="h-10" alt="logo mv" src={mv} />
                        <p className="ml-2 font-medium font-serif">KYM CODING</p>
                    </div>
                    <div className="md:flex">
                        <a href="https://www.facebook.com/kusuma.yuda.750" className="flex mx-1 lg:mx-2">
                            <MdFacebook size={28} />
                            <p className="mx-1 text-lg">Facebook</p>
                        </a>
                        <a href="https://github.com/yuda25" className="flex mx-1 lg:mx-2">
                            <SiGithub size={28} />
                            <p className="mx-1 text-lg">GitHub</p>
                        </a>
                        <a href="https://gitlab.com/yuda25" className="flex mx-1 lg:mx-2">
                            <RiGitlabLine size={28} />
                            <p className="mx-1 text-lg">gitLab</p>
                        </a>
                        <a href="https://wa.me/628980249767" className="flex mx-1 lg:mx-2">
                            <ImWhatsapp size={28} />
                            <p className="mx-1 text-lg">Whatsapp</p>
                        </a>
                        <a href="https://www.instagram.com/ksm.yudaa_/" className="flex mx-1 lg:mx-2">
                            <GrInstagram size={28} />
                            <p className="mx-1 text-lg">Instagram</p>
                        </a>
                    </div>
                </div>
                <div className="mx-auto justify-center flex border-t-2 border-stone-300">
                    <a href="abc" className="hover:underline">&copy; 2022 | PT.KYM CODING </a>
                </div>
            </div>
        )
    }
}

export default Contact;