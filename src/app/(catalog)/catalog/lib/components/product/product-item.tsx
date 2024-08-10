import { Product } from '@/lib/model/product'
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'


interface ProductItemProps {
    product: Product
}

function ProductItem({ product }: ProductItemProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='h-full flex-col gap-2'>
            <Card.Section>
                <Image src={product.img} height={160} width={160} alt={product.name} />
            </Card.Section>

            <Group className='flex justify-between items-center py-3'>
                <Text fw={600} className=' truncate max-w-[260px]'> {product.name}</Text>
                <Badge color='green'>{product.price} €</Badge>
            </Group>
            <Text size='sm' className='text-pretty py-3' > {product.description}</Text>

            <Button className='mt-auto'>Buy</Button>
        </Card>
    )
}

export default ProductItem
