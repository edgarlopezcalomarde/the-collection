"use client"

import { useDebounce } from "@/lib/hooks/use-debounce";
import { TextInput } from "@mantine/core"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState(searchParams.get("query") ? searchParams.get("query")?.toString() : "")
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        if (searchTerm && searchTerm !== "") {
            params.set("query", searchTerm)
        } else {
            params.delete("query")
        }

        router.replace(`${pathname}?${params.toString()}`)
    }, [debouncedSearchTerm])


    return (
        <TextInput
            placeholder="Search some product...."
            className=" w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
        />
    )

}