"use client";

import { ProductList } from "@/lib/model/product";
import { Grid } from "@mantine/core";
import ProductItem from "./product-item";
import { v4 } from "uuid"

interface ProductGridProps {
    data: ProductList
}


export default function ProductGrid({ data }: ProductGridProps) {
    return (
        <Grid>
            {
                data.map(p => {
                    return (
                        <Grid.Col key={v4()} span={{ base: 12, md: 6, lg: 3 }}  >
                            <ProductItem product={p} />
                        </Grid.Col>
                    );
                })
            }
        </Grid>
    );
}
