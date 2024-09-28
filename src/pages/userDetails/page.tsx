import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../utils/axios';

export type UserDetail = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
};

const UserDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const res = await instance.get(`/api/users/${id}`);
                setUserDetail(res.data.data);
            } catch (error) {
                console.error(error, 'Error fetching user details');
            }
        };

        fetchUserDetails();
    }, [id]);

    if (!userDetail) return <p>Loading...</p>;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
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


                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {userDetail.email}
                        </th>
                        <td className="px-6 py-4">
                            {userDetail.first_name}
                        </td>
                        <td className="px-6 py-4">{userDetail.last_name}
                        </td>

                    </tr>


                </tbody>
            </table>
        </div>

    );
};

export default UserDetails;
