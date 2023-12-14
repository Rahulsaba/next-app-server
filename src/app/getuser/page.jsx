
import { Metadata } from 'next';

import Image from "next/image";
import { fetchUsers } from '../lib/data';
import { fetchData } from '../api/config';
import { deleteUser } from '../lib/actions';
import Button from '../components/button';






export default async function GetUser() {



    const user = await fetchData();

  //  console.log(typeof user[0].isActive)

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr >
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
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((datas) => (


                            <tr id={datas?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {datas?.email}
                                </th>
                                <td className="px-6 py-4">
                                    {datas?.username}
                                </td>
                                <td className="px-6 py-4">
                                    {datas?.userlast}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        datas?.isActive  ?

                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                                Online
                                            </div>

                                            :
                                            <div className={'flex items-center'}>
                                                <div className={'h-2.5 w-2.5 rounded-full bg-red-500  me-2'}></div>
                                                Offline
                                            </div>
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    <form action={deleteUser}>
                                        <input name="id" type="hidden" value={datas?.id} />
                                        <Button
                                            className={'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'}
                                            word={'Delete'}
                                            name={"submit"}
                                        />
                                    </form>

                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
// "use client"

// import { Space, Table, Tag, Image } from 'antd';
// import { fetchData } from "../api/config";
// import Loading from "./loading";

// export default async function GetUser() {
//     const { data } = await fetchData();


//     const columns = [
//         {
//             title: 'Id',
//             dataIndex: 'id',
//             key: 'id',
//         },
//         {
//             title: 'Email',
//             dataIndex: 'email',
//             key: 'email',
//         },
//         {
//             title: 'First Name',
//             dataIndex: 'first_name',
//             key: 'first_name',
//         },
//         {
//             title: 'Last Name',
//             dataIndex: 'last_name',
//             key: 'last_name',
//         },
//         {
//             title: 'Avatar',
//             dataIndex: 'avatar',
//             key: 'avatar',
//             render: (_, record) => {
//                 return <Image width={100} height={100} src={record?.avatar} />
//             },
//         },
//     ];



//     return (
//         <>
//             <Table
//                 columns={columns}
//                 dataSource={data}
//                 style={{ width: '100%' }}

//             />
//         </>
//     )
// }




{/* <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data?.map((product) => (
                            <div key={product?.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Image
                                        src={product.image}
                                        alt={product.image}
                                        height={100}
                                        width={100}
                                    />
                                    image la fill document
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.image}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product?.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.color}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {product?.name}
                                    </p>
                                    <p className="text-sm font-medium text-indigo-600">
                                        {product?.rating?.rate}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}