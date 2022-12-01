import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";

const ManageUsers = () => {


    const [CurrentPage, setCurrentPage] = useState(1);
    const [UsersPerPage, setUsersPerPage] = useState(10);

    const [PageNumberLimit, setPageNumberLimit] = useState(5);
    const [MaxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [MinPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const [Users, setUsers] = useState([{}]);
    const [showModal, setShowModal] = React.useState(false);
    const [showModalU, setShowModalU] = React.useState(false);
    const [AddUser, setAddUser] = useState({
        name: "",
        email: "",
        whatsapp: "",
        address: ""
    });
    const [UpdateUser, setUpdateUser] = useState({
        id: "",
        name: "",
        email: "",
        whatsapp: "",
        address: ""
    });

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        await axios.get("http://localhost:3001/users")
            .then((res) => {
                setUsers(res.data)
            })
    }

    const handleDelete = async (id) => {
        await axios.delete("http://localhost:3001/users/" + id)
            .then((res) => {
                Swal.fire(
                    'Congratulations',
                    'data has been deleted',
                    'success'
                )
            })
        getUsers()
    }

    const handleAddUser = async (e) => {
        const response = await axios.post("http://localhost:3001/users", AddUser);

        if (response) {
            Swal.fire(
                'Congratulations',
                'data has been added',
                'success'
            )
            getUsers()
            setShowModal(false)
        } else {
            alert("something wrong")
        }

        setAddUser({
            name: "",
            email: "",
            whatsapp: "",
            address: ""
        })

    }

    const handleUpdateUser = async () => {
        await axios.put(`http://localhost:3001/users/${UpdateUser.id}`, UpdateUser)
            .then((res) =>
                Swal.fire(
                    'Congratulations',
                    'data has been updated',
                    'success'
                )
            )
        getUsers()
        setShowModalU(false)
    }

    // pagination
    const indexOfLastUser = CurrentPage * UsersPerPage;
    const indexOfFirstUser = indexOfLastUser - UsersPerPage;
    const currentUsers = Users.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const handleNext = () => {
        setCurrentPage(CurrentPage + 1);

        if(CurrentPage + 1 > MaxPageNumberLimit) {
            setMaxPageNumberLimit(MaxPageNumberLimit + PageNumberLimit)
            setMinPageNumberLimit(MinPageNumberLimit + PageNumberLimit)
        }
    }

    const handlePref = () => {
        setCurrentPage(CurrentPage - 1);

        if((CurrentPage - 1) % PageNumberLimit === 0) {
            setMaxPageNumberLimit(MaxPageNumberLimit - PageNumberLimit)
            setMinPageNumberLimit(MinPageNumberLimit - PageNumberLimit)
        }
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Users.length / UsersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <div className="container mx-auto items-center pb-2 pt-20 lg:pt-28">
            <div className="justify-between flex border-b-2">
                <h1 className="font-semibold" style={{ fontSize: "20px" }}>Manage Users</h1>
                <button className="font-semibold" onClick={() => setShowModal(true)} style={{ fontSize: "25px" }}>{<BiAddToQueue />}</button>
            </div>

            <div className="overflow-x-auto relative shadow-md mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                WhatsApp
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUsers.map((usersData) => {
                                return (
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                            {usersData.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {usersData.email}
                                        </td>
                                        <td className="py-4 px-6">
                                            {usersData.whatsapp}
                                        </td>
                                        <td className="py-4 px-6">
                                            {usersData.address}
                                        </td>
                                        <td className="py-4 px-6 justify-start flex">
                                            <button onClick={() => setUpdateUser({ id: usersData.id, name: usersData.name, email: usersData.email, whatsapp: usersData.whatsapp, address: usersData.address })}><button onClick={() => setShowModalU(true)} className="pr-6" style={{ fontSize: "20px", color: "green" }}><FiEdit /></button></button>
                                            <button onClick={() => handleDelete(usersData.id)} className="pl-6" style={{ fontSize: "20px", color: "red" }}><RiDeleteBinLine /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* paginate */}
            <nav aria-label="Page navigation example" className="pt-10 justify-center flex">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <button disabled={CurrentPage === pageNumbers[0] ? true : false} onClick={handlePref} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">Prev</button>
                    </li>
                    {pageNumbers.map((number) => {
                        if (number < MaxPageNumberLimit + 1 && number > MinPageNumberLimit) {
                            return (
                                <li key={number} id={number} className={CurrentPage === number ? "text-gray-200 bg-gray-500" : "text-gray-500 bg-white"}>
                                    <button onClick={() => paginate(number)} className="px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">{number}</button>
                                </li>
                            )
                        } else {
                            return null
                        }
                    })}
                    <li>
                        <button disabled={CurrentPage === pageNumbers[pageNumbers.length - 1] ? true : false} onClick={handleNext} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">Next</button>
                    </li>
                </ul>
            </nav>


            {/* add user modal */}
            <div>
                {showModal ? (
                    <>
                        <div
                            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Add user here!
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                <CgClose />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <form className="p-5 flex-row" style={{ width: "500px" }}>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={AddUser.name} onChange={(e) => setAddUser({ ...AddUser, name: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={AddUser.email} onChange={(e) => setAddUser({ ...AddUser, email: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={AddUser.whatsapp} onChange={(e) => setAddUser({ ...AddUser, whatsapp: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">WhatsApp</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={AddUser.address} onChange={(e) => setAddUser({ ...AddUser, address: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                        </div>
                                    </form>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            onClick={handleAddUser}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>

            {/* update user modal */}
            <div>
                {showModalU ? (
                    <>
                        <div
                            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Update user here!
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModalU(false)}
                                        >
                                            <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                <CgClose />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <form className="p-5 flex-row" style={{ width: "500px" }}>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={UpdateUser.name} onChange={(e) => setUpdateUser({ ...UpdateUser, name: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={UpdateUser.email} onChange={(e) => setUpdateUser({ ...UpdateUser, email: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={UpdateUser.whatsapp} onChange={(e) => setUpdateUser({ ...UpdateUser, whatsapp: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">WhatsApp</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input value={UpdateUser.address} onChange={(e) => setUpdateUser({ ...UpdateUser, address: e.target.value })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                        </div>
                                    </form>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModalU(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleUpdateUser()}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>


        </div>
    )
}

export default ManageUsers;