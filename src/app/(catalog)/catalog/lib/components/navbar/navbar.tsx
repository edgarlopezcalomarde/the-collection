"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Search from "../search/search";
import ShoppingBagButton from "../shopping-bag/shopping-bag-button";

function NavBar() {
    const router = useRouter();

    const [logged, setLogged] = useState(false);

    return (
        <div className="flex w-full justify-center items-center h-full gap-4 max-w-[900px] mx-auto px-4 lg:px-0">
            <Search />

            {!logged ?

                <Button onClick={() => {
                    // router.push("/login")
                    setLogged(true)
                }} className="flex-auto flex items-center">
                    <div className="pr-1">Log In</div>
                </Button>

                :
                (
                    <div className="flex gap-5 h-full items-center">
                        <ShoppingBagButton />
                        <Button onClick={() => setLogged(false)}>Log Out</Button>
                    </div>
                )

            }


        </div>
    );
}

export default NavBar;
