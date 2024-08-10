"use client"

import { Group, Burger, Text } from '@mantine/core';
import classes from './navbar.module.css';
import { House, LogOut, PackageSearch, Users } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const data = [
    { link: '/admin', label: 'Home', icon: House },
    {
        link: '/admin/products', label: 'Products', icon: PackageSearch
    },
    { link: '/admin/users', label: 'Users', icon: Users }
];


function Navbar({ opened, toggle }: { opened: boolean, toggle: () => void }) {

    const [active, setActive] = useState('Home');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                // event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));


    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <div className='flex justify-center items-center gap-1'>
                        <Text className='font-bold text-lg text-white'>[The Collection]</Text>
                    </div>

                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" className='text-white' />
                    </Group>
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <LogOut className={classes.linkIcon} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar
