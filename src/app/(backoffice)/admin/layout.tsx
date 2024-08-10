"use client"

import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Navbar from './lib/components/navbar/navbar';

function AdminLayout({ children }: { children: React.ReactNode }) {

    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            layout='alt'
            header={{
                height: 60,
            }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened }
            }}
        >
            <AppShell.Header >
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" className='border-8 border-blue-400' />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar >
                <Navbar opened={opened} toggle={toggle} />
            </AppShell.Navbar>
            <AppShell.Main className='h-screen' >
                {children}
            </AppShell.Main>

        </AppShell>
    )
}

export default AdminLayout
