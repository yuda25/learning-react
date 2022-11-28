import React from "react"

class ManageUsers extends React.Component {
    render() {
        return (
            <div className="container mx-auto items-center pb-2 pt-20 lg:pt-28">
                <h1 className="font-semibold border-b-2" style={{ fontSize: "20px" }}>Manage Users</h1>

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
                            <tr className="bg-white border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="py-4 px-6">
                                    Sliver
                                </td>
                                <td className="py-4 px-6">
                                    Laptop
                                </td>
                                <td className="py-4 px-6">
                                    $2999
                                </td>
                                <td className="py-4 px-6 justify-between flex">
                                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ManageUsers;