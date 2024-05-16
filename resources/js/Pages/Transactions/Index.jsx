import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Transactions(props) {
    console.log(props.data)
    const Rows = () => {
        return props.data.map((each) => {
            return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {each.user_from.name}
                </th>
                <td class="px-6 py-4">
                    {each.user_to.name}
                </td>
                <td class="px-6 py-4">
                    {each.amount}
                </td>
                <td class="px-6 py-4">
                    {each.created_at}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>)
        })
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transactions</h2>}
        >
            <Head title="Transactions" />

            {/* <div>dashborad</div> */}


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                User From
                            </th>
                            <th scope="col" class="px-6 py-3">
                                User To
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.length >= 1 ? <Rows /> : <div className='my-2 p-2 '> Empty</div>
                            
                        }


                    </tbody>
                </table>
            </div>



        </AuthenticatedLayout>
    );
}
