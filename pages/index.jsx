import * as React from 'react';
import Head from 'next/head';
import Intro from '@/app/components/screens/home/Intro/Intro';
import Category from '@/app/components/screens/home/Category/Category';
import TopSell from '@/app/components/screens/home/TopSell/TopSell';
import Recommend from '@/app/components/screens/home/Recommend/Recommend';
import About from '@/app/components/screens/home/About/About';
import Contact from '@/app/components/screens/home/Contact/Contact';
import logo from '../public/img/logo.png';

const Index = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Prestige Tuning - Andijondagi sifatli va tezkor avtomobil tuning markazi. Bizning kompaniya avtomobillar tuningi va ta'miri sohasida 10 yillik tajribaga ega va har yil 10,000 dan ortiq mijozga xizmat ko'rsatadi. Bizning mutaxassislar sizning avtomobilingizni sifatli va tez ravishda tuning qilishdi." />
                <meta name="keywords" content="tuning, fanar, фонар, gentra, жентра, рул, rul, megikcar, межикар, диска, diska, avtomobil tuning, Andijon, sifatli xizmat, tezkor xizmat, avtomobil sozlash, unumdorlikni oshirish, transport vositasini o'zgartirish, dvigatel tuning, tashqi ko'rinishni sozlash, ichki ko'rinishni sozlash, professional tuning, avtomobil yangilanishi, Andijon avtomobil xizmatlari, avtomobil ta'miri, ekspert tuning, maxsus avtomobil ishlari, avtomobil unumdorligi, yuqori sifatli tuning, tezkor xizmat, tajribali, mutaxassislar, korpusni ta'mirlash, dvigatel, suspenziya, transmissiya, shinalar, aksessuarlar, avtomobil xizmatlari, diagnostika, elektrika, avtostayling, obves, spoiler, antikryl, avtozvuk, shumoizolyatsiya, antigraviy plenka, tonirovka, chip-tuning, tormozlar, moy almashtirish, avtoservis, servis markazi, avtomobil xizmat ko'rsatish, texnik ko'rik, bo'yash, payvandlash ishlari" />
                <meta name="image_src" content={logo} />
                <meta name="yandex-verification" content="e3f1e49fe24457e0" />
                <meta name="google-site-verification" content="bMjtA1p_n-Ql6Nz2FfrbmYpsCYE_ol6y4KhVgX-5tew" />

                <meta property="og:title" content="Prestige Tuning" />
                <meta property="og:description" content="Prestige Tuning - Andijondagi sifatli va tezkor avtomobil tuning markazi. Bizning kompaniya avtomobillar tuningi va ta'miri sohasida 10 yillik tajribaga ega va har yil 10,000 dan ortiq mijozga xizmat ko'rsatadi. Bizning mutaxassislar sizning avtomobilingizni sifatli va tez ravishda tuning qilishdi." />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://prestigetuning.uz/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestige tuning" />
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://prestigetuning.uz/" />

                <title>Prestige Tuning</title>
            </Head>

            <main>
                <Intro />
                <Category />
                <TopSell />
                <Recommend />
                <About />
                <Contact />
            </main>
        </>
    );
}

export default Index;
