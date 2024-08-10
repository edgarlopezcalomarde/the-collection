"use client"

import { Drawer } from "@mantine/core";
import { useShoppingBag } from "./use-shopping-bag";


function ShoppingBag() {

    const { opened, close } = useShoppingBag();

    return (
        <Drawer opened={opened} onClose={close} title="Shopping Bag" position="right">
            Hi
        </Drawer>
    )
}

export default ShoppingBag
