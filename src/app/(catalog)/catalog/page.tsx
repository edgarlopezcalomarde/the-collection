import { getUser } from "@/lib/api/get-user";
import { getProducts } from "./lib/api/get-products";
import ProductGrid from "./lib/components/product/product-grid";

export default async function CatalogPage() {
  const products = await getProducts();

  return <ProductGrid data={products} />

}
