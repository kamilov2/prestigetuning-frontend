import * as React from 'react';
import Head from 'next/head';
import Catalog from '@/app/components/screens/catalog/Catalog';
import logo from '../public/img/logo-footer.png';

const CatalogPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Bizning katalogimizda eng yaxshi avtomobil tuning mahsulotlari va xizmatlari. Eng yuqori sifat va xizmatlar uchun katalogimizni ko'ring." />
                <meta name="keywords" content="katalog, avtomobil tuning, Andijon, sifatli xizmat, tezkor xizmat, tuning mahsulotlari, tuning xizmatlari" />
                <meta name="image_src" content={logo.src} />

                <meta property="og:title" content="Katalog" />
                <meta property="og:description" content="Bizning katalogimizda eng yaxshi avtomobil tuning mahsulotlari va xizmatlari. Eng yuqori sifat va xizmatlar uchun katalogimizni ko'ring." />
                <meta property="og:image" content={logo.src} />
                <meta property="og:url" content="https://prestigetuning.uz/catalog" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestige Tuning" />
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://prestigetuning.uz/catalog" />

                <title>Prestic tuning | Katalog</title>
            </Head>

            <main>
                <Catalog />
            </main>
        </>
    );
}

export default CatalogPage;
