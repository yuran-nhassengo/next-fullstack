// app/api/products/route.ts

import { NextResponse } from 'next/server';
import { createProduct, getAllProduct, deleteProduct } from '@/app/services/product'; // Ajuste o caminho conforme necessário
import { Product, ProductCategory } from '@/app/types/product';

export async function GET(request: Request) {
    try {
        const products = await getAllProduct();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { image, title, price, category }: Product = await request.json();

        
        if (!title || !price || !category) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const newProduct = await createProduct(image, title, price, category);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
