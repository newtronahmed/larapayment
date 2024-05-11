import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateAccount(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        address1: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
        // userId: props.userId
        userId:props.userId
        
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password', 'password_confirmation');
    //     };
    // }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('create-account'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    {/* <InputLabel htmlFor="name" value="Name" /> */}

                    <TextInput
                        id="address1"
                        name="address1"
                        value={data.address1}
                        className="mt-1 block w-full"
                        autoComplete="address1"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                        htmlFor="address1"
                        labelName="address1"

                    />

                    <InputError message={errors.address1} className="mt-2" />
                </div>
                <div>
                    {/* <InputLabel htmlFor="name" value="Name" /> */}

                    <TextInput
                        id="address2"
                        name="address2"
                        value={data.address2}
                        className="mt-1 block w-full"
                        autoComplete="address2"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                        htmlFor="address2"
                        labelName="address2"

                    />

                    <InputError message={errors.address1} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="email" value="Email" /> */}

                    <TextInput
                        id="state"
                        type="text"
                        name="state"
                        value={data.state}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                        htmlFor="state"
                        labelName="state"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="password" value="Password" /> */}

                    <TextInput
                        id="city"
                        type="text"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="city"
                        onChange={handleOnChange}
                        required
                        labelName="city"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="password_confirmation" value="Confirm Password" /> */}

                    <TextInput
                        id="zip"
                        type="text"
                        name="zip"
                        value={data.zip}
                        className="mt-1 block w-full"
                        autoComplete="zip"
                        onChange={handleOnChange}
                        required
                        labelName="Zip"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
