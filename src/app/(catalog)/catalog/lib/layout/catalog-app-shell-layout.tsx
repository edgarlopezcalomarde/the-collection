"use client"

import { AppShell } from '@mantine/core';
import ShoppingBag from "../components/shopping-bag/shopping-bag"
import React from 'react'

function CatalogAppSheelLayout({ children, navbar }: {
    children: React.ReactNode,
    navbar: React.ReactNode
}) {
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 0, breakpoint: 'sm', collapsed: { desktop: false, mobile: true } }}
            padding="md"
        >
            <AppShell.Header>
                {navbar}
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

export default CatalogAppSheelLayout
