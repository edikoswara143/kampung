import AppContainerLayout from '@/layouts/app/app-container';
import Header from '@/layouts/app/header';
import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <AppContainerLayout>
        <Header></Header>
        <div className="px-4 py-20">home</div>
      </AppContainerLayout>
    </>
  );
}
