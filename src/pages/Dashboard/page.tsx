import instance from '../../utils/axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export type user = {
    email: string;
    first_name: string;
    last_name: string;
    id: number;
}
const Dashboard = () => {
    const [isUser, setIsUser] = useState<user[]>([])
    const navigate = useNavigate()
    const handleUser = async () => {
        try {
            const res = await instance.get('/api/users?page=2')
            setIsUser(res.data.data)

        } catch (error) {
            console.error(error, "cred missing");
        }

    }
    useEffect(() => {
        handleUser()
    }, [])

    const handleDelete = async (id: number) => {
        try {
            const res = await instance.delete(`/api/users/${id}`)
            console.log(res, "delete Successfull")
            toast.success('Deleted successful!', {
                position: 'top-right',
                autoClose: 1000,
            });

        } catch (error) {
            console.error(error, "cred missing");
            toast.error('Delete failed. Please try again.', {
                position: 'top-right',
                autoClose: 1000,
            });
        }
    }
    const handleView = (id: number) => {
        navigate(`/details/${id}`);
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logout successful!', {
            position: 'top-right',
            autoClose: 1000,
        });
        navigate('/');

    };
    return (
        <>
            <div className="relative overflow-x-auto shadow-md">
                <div className='flex justify-between p-2 bg-blue-500 mb-2'>
                    <h2 className='text-2xl p-2  text-slate-300'>UserDetails</h2>
                    <button className='bg-red-800 py-2 px-3 ml-[-10px] rounded-lg text-slate-300 text-xl ' onClick={handleLogout}>Logout</button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isUser.map((item, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?.email}
                                </th>
                                <td className="px-6 py-4">
                                    {item?.first_name}
                                </td>
                                <td className="px-6 py-4">{item?.last_name}
                                </td>
                                <td className="px-6 py-4">
                                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4 cursor-pointer" onClick={() => handleView(item.id)}>View</a>
                                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => handleDelete(item.id)} >Delete</a>


                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>



        </>
    )
}

export default Dashboard;