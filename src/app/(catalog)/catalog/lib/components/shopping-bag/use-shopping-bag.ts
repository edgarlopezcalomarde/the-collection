"use client";
import { Product, ProductList } from "@/lib/model/product";
import { atom, useAtom } from "jotai";

interface ShopingBagAtom {
    products: ProductList;
}

interface ShoppingBagVisibility {
    opened: boolean;
}

interface ShoppingBag extends ShopingBagAtom, ShoppingBagVisibility {
    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void;
    loadList: (products: ProductList) => void;

    open: () => void;
    close: () => void;
}

const useShoppingBagAtom = atom<ShopingBagAtom>({ products: [] });
const useShoppingBagComponentAtom = atom<ShoppingBagVisibility>({
    opened: false,
});

export function useShoppingBag(): ShoppingBag {
    const [bag, setBag] = useAtom(useShoppingBagAtom);
    const [visibility, setVisibility] = useAtom(useShoppingBagComponentAtom);

    function addProduct(product: Product) {
        setBag({ products: [...bag.products, product] });
    }

    function removeProduct(id: number) {
        setBag({ products: bag.products.filter((p) => p.id !== id) });
    }

    function loadList(products: ProductList) {
        setBag({ products });
    }

    return {
        products: bag?.products,
        addProduct,
        removeProduct,
        loadList,
        open: () => setVisibility({ opened: true }),
        close: () => setVisibility({ opened: false }),
        opened: visibility.opened,
    };
}
