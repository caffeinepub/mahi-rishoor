import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: bigint;
    discountedPrice: bigint;
}
export enum Category {
    lawn = "lawn",
    suit = "suit",
    shawl = "shawl"
}
export interface backendInterface {
    addProduct(product: Product): Promise<bigint>;
    getProductById(productId: bigint): Promise<Product | null>;
    getProducts(category: Category | null): Promise<Array<Product>>;
    updateProduct(productId: bigint, product: Product): Promise<void>;
}
