"use client";
import '../globals.css'; // Global styles
import Menubar from './Shared/Menubar/page';
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="This is Dashboard Page" />
            </Head>
            <div className="w-full h-screen flex flex-col">
                <Menubar />
                <main className="flex-grow">{children}</main>
            </div>
        </>
    );
}
