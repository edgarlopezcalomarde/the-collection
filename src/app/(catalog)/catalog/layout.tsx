"use client"

import { AppShell } from '@mantine/core';
import NavBar from './lib/components/navbar/navbar';
import ShoppingBag from './lib/components/shopping-bag/shopping-bag';

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 0, breakpoint: 'sm', collapsed: { desktop: false, mobile: true } }}
            padding="md"
        >
            <AppShell.Header>
                <NavBar />
            </AppShell.Header>
            <AppShell.Main>
                <div className='w-full max-w-[900px] mx-auto '>
                    {children}
                </div>
                <ShoppingBag />
            </AppShell.Main>
        </AppShell>

    )
}
