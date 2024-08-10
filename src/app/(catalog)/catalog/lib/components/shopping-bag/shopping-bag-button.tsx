"use client"

import { Button } from '@mantine/core';
import { ShoppingBagIcon } from 'lucide-react';
import { useShoppingBag } from './use-shopping-bag';

function ShoppingBagButton() {

    const { open } = useShoppingBag();

    return (
        <Button onClick={open}>
            <ShoppingBagIcon />
        </Button>
    )
}

export default ShoppingBagButton
