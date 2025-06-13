import { type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import StreamLayout from '@/layouts/stream/layout';

import { Switch } from "@/components/ui/switch";


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const { stream_data } = usePage<SharedData>().props;
    type ProfileForm = {
        name: string;
        email: string;
    }

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
      watch_password: stream_data.watch_password,
      stream_data: stream_data

    });
        // head_title: stream_data.head_title,
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('check_password', stream_data.id), {
            preserveScroll: true,
        });
    };


    return (
        <>
            <Head title="Welcome">
            </Head>
            <style>
            {stream_data.style_tag}
            </style>
            <div className="fakebkg flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>

                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {stream_data.head_title}
                    </h1>

                    <p> {stream_data.head_description} </p>



                    </main>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Stream Password</Label>

                        <Input
                            id="watch_password"
                            className="mt-1 block w-full"
                            onChange={(e) => setData('watch_password', e.target.value)}
                            utoComplete="name"
                            placeholder="watch_password"
                        />

                        <InputError className="mt-2" message={errors.watch_password} />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">Saved</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </>
    );
}
