import { type BreadcrumbItem, type SharedData } from '@/types';
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


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Stream settings',
        href: '/stream',
    },
];

type ProfileForm = {
    name: string;
    email: string;
}

export default function EditStreamData({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;
    const { stream_data } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
      head_title: stream_data.head_title,
      head_description: stream_data.head_description,
      page_title: stream_data.page_title,
      page_description: stream_data.page_description,
      landing_h1: stream_data.landing_h1,
      landing_p1: stream_data.landing_p1,
      landing_p2: stream_data.landing_p2,
      landing_p3: stream_data.landing_p3,
      landing_cta: stream_data.landing_cta,
      landing_placeholder: stream_data.landing_placeholder,
      landing_downloads: stream_data.landing_downloads,
      watch_h1: stream_data.watch_h1,
      watch_p1: stream_data.watch_p1,
      watch_p2: stream_data.watch_p2,
      closed_h1: stream_data.closed_h1,
      closed_p1: stream_data.closed_p1,
      closed_p2: stream_data.closed_p2,
      stream_url: stream_data.stream_url,
      style_tag: stream_data.style_tag,
      starting_at: stream_data.starting_at,
      ending_at: stream_data.ending_at,
      stream_key: stream_data.stream_key,
      stream_endpoint: stream_data.stream_endpoint,
      stream_domain: stream_data.stream_domain,
      watch_password: stream_data.watch_password,
      stream_data: stream_data

    });
        // head_title: stream_data.head_title,
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('stream.update', stream_data.id), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <StreamLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your name and email address" />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Title</Label>

                            <Input
                                id="head_title"
                                className="mt-1 block w-full"
                                defaultValue={stream_data.head_title}
                                onChange={(e) => setData('head_title', e.target.value)}
                                utoComplete="name"
                                placeholder="head_title"
                            />

                            <InputError className="mt-2" message={errors.head_title} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="name">description</Label>

                            <Input
                                id="head_description"
                                className="mt-1 block w-full"
                                defaultValue={stream_data.head_description}
                                onChange={(e) => setData('head_description', e.target.value)}
                                utoComplete="name"
                                placeholder="head_description"
                            />

                            <InputError className="mt-2" message={errors.head_description} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="name">Stream Password</Label>

                            <Input
                                id="watch_password"
                                className="mt-1 block w-full"
                                defaultValue={stream_data.watch_password}
                                onChange={(e) => setData('watch_password', e.target.value)}
                                utoComplete="name"
                                placeholder="watch_password"
                            />

                            <InputError className="mt-2" message={errors.watch_password} />
                        </div>


                          <div className="grid gap-2">
                              <Label htmlFor="name">page_title</Label>

                              <Input
                                  id="page_title"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.page_title}
                                  onChange={(e) => setData('page_title', e.target.value)}
                                  autoComplete="name"
                                  placeholder="page_title"
                              />

                              <InputError className="mt-2" message={errors.page_title} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">page_description</Label>

                              <Input
                                  id="page_description"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.page_description}
                                  onChange={(e) => setData('page_description', e.target.value)}
                                  autoComplete="name"
                                  placeholder="page_description"
                              />

                              <InputError className="mt-2" message={errors.page_description} />
                          </div>






                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_h1</Label>

                              <Input
                                  id="landing_h1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_h1}
                                  onChange={(e) => setData('landing_h1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_h1"
                              />

                              <InputError className="mt-2" message={errors.landing_h1} />
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_p1</Label>

                              <Input
                                  id="landing_p1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_p1}
                                  onChange={(e) => setData('landing_p1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_p1"
                              />

                              <InputError className="mt-2" message={errors.landing_p1} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_p2</Label>

                              <Input
                                  id="landing_p2"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_p2}
                                  onChange={(e) => setData('landing_p2', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_p2"
                              />

                              <InputError className="mt-2" message={errors.landing_p2} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_p3</Label>

                              <Input
                                  id="landing_p3"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_p3}
                                  onChange={(e) => setData('landing_p3', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_p3"
                              />

                              <InputError className="mt-2" message={errors.landing_p3} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_cta</Label>

                              <Input
                                  id="landing_cta"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_cta}
                                  onChange={(e) => setData('landing_cta', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_cta"
                              />

                              <InputError className="mt-2" message={errors.landing_cta} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_placeholder</Label>

                              <Input
                                  id="landing_placeholder"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_placeholder}
                                  onChange={(e) => setData('landing_placeholder', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_placeholder"
                              />

                              <InputError className="mt-2" message={errors.landing_placeholder} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">landing_downloads</Label>

                              <Input
                                  id="landing_downloads"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.landing_downloads}
                                  onChange={(e) => setData('landing_downloads', e.target.value)}
                                  autoComplete="name"
                                  placeholder="landing_downloads"
                              />

                              <InputError className="mt-2" message={errors.landing_downloads} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">watch_h1</Label>

                              <Input
                                  id="watch_h1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.watch_h1}
                                  onChange={(e) => setData('watch_h1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="watch_h1"
                              />

                              <InputError className="mt-2" message={errors.watch_h1} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">watch_p1</Label>

                              <Input
                                  id="watch_p1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.watch_p1}
                                  onChange={(e) => setData('watch_p1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="watch_p1"
                              />

                              <InputError className="mt-2" message={errors.watch_p1} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">watch_p2</Label>

                              <Input
                                  id="watch_p2"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.watch_p2}
                                  onChange={(e) => setData('watch_p2', e.target.value)}
                                  autoComplete="name"
                                  placeholder="watch_p2"
                              />

                              <InputError className="mt-2" message={errors.watch_p2} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">closed_h1</Label>

                              <Input
                                  id="closed_h1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.closed_h1}
                                  onChange={(e) => setData('closed_h1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="closed_h1"
                              />

                              <InputError className="mt-2" message={errors.closed_h1} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">closed_p1</Label>

                              <Input
                                  id="closed_p1"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.closed_p1}
                                  onChange={(e) => setData('closed_p1', e.target.value)}
                                  autoComplete="name"
                                  placeholder="closed_p1"
                              />

                              <InputError className="mt-2" message={errors.closed_p1} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">closed_p2</Label>

                              <Input
                                  id="closed_p2"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.closed_p2}
                                  onChange={(e) => setData('closed_p2', e.target.value)}
                                  autoComplete="name"
                                  placeholder="closed_p2"
                              />

                              <InputError className="mt-2" message={errors.closed_p2} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">stream_url</Label>

                              <Input
                                  id="stream_url"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.stream_url}
                                  onChange={(e) => setData('stream_url', e.target.value)}
                                  autoComplete="name"
                                  placeholder="stream_url"
                              />

                              <InputError className="mt-2" message={errors.stream_url} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">stream_key</Label>

                              <Input
                                  id="stream_key"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.stream_key}
                                  onChange={(e) => setData('stream_key', e.target.value)}
                                  autoComplete="name"
                                  placeholder="stream_key"
                              />

                              <InputError className="mt-2" message={errors.stream_key} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">stream_endpoint</Label>

                              <Input
                                  id="stream_endpoint"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.stream_endpoint}
                                  onChange={(e) => setData('stream_endpoint', e.target.value)}
                                  autoComplete="name"
                                  placeholder="stream_endpoint"
                              />

                              <InputError className="mt-2" message={errors.stream_endpoint} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">stream_domain</Label>

                              <Input
                                  id="stream_domain"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.stream_domain}
                                  onChange={(e) => setData('stream_domain', e.target.value)}
                                  autoComplete="name"
                                  placeholder="stream_domain"
                              />

                              <InputError className="mt-2" message={errors.stream_domain} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">style_tag</Label>

                              <Input
                                  id="style_tag"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.style_tag}
                                  onChange={(e) => setData('style_tag', e.target.value)}
                                  autoComplete="name"
                                  placeholder="style_tag"
                              />

                              <InputError className="mt-2" message={errors.style_tag} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">starting_at</Label>

                              <Input
                                  id="starting_at"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.starting_at}
                                  onChange={(e) => setData('starting_at', e.target.value)}
                                  autoComplete="name"
                                  placeholder="starting_at"
                              />

                              <InputError className="mt-2" message={errors.starting_at} />
                          </div>

                          <div className="grid gap-2">
                              <Label htmlFor="name">ending_at</Label>

                              <Input
                                  id="ending_at"
                                  className="mt-1 block w-full"
                                  defaultValue={stream_data.ending_at}
                                  onChange={(e) => setData('ending_at', e.target.value)}
                                  autoComplete="name"
                                  placeholder="ending_at"
                              />

                              <InputError className="mt-2" message={errors.ending_at} />
                          </div>





                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="text-muted-foreground -mt-4 text-sm">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 text-sm font-medium text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

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

            </StreamLayout>
        </AppLayout>
    );
}
