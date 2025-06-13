import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';

import SettingsLayout from '@/layouts/stream/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Streams',
        href: '/stream',
    },
];

type ProfileForm = {
    name: string;
    email: string;
}

export default function Streamlist({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('stream.update'), {
            preserveScroll: true,
        });
    };

    return (

      <AppLayout breadcrumbs={breadcrumbs}>
asdf
      </AppLayout>


    );
}
