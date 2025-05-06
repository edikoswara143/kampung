import Banner from '@/components/banner';
import AppContainerLayout from '@/layouts/app/app-container';
import Header from '@/layouts/app/header';
import { BannerPost } from '@/types';
import { Head } from '@inertiajs/react';

export const mainBannerPost: BannerPost[] = [
  {
    id: '1',
    title: 'Selamat Datang',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt non.',
    category: 'Pendidikan',
  },
  {
    id: '2',
    title: 'Selamat Datang',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt non.',
    category: 'Kesehatan',
  },
  {
    id: '3',
    title: 'Selamat Datang',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt non.',
    category: 'Info Kampung',
  },
  {
    id: '4',
    title: 'Selamat Datang',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt non.',
    category: 'UMKM',
  },
];

export default function Welcome() {
  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <AppContainerLayout>
        <Header></Header>
        <div className="px-4 py-20">
          <Banner posts={mainBannerPost}></Banner>
        </div>
      </AppContainerLayout>
    </>
  );
}
