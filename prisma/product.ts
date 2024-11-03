import { ProductCategory } from "@/app/types/product";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export const createProduct = async (
    image:string,
    title:string,
    price:number,
    category:ProductCategory) =>{

        const product = await prisma.product.create({
            data:  {
                image,
                title,
                price,
                category, 

            },
        });

    return product;

}

export const getAllProduct = async () =>{

    const products = await prisma.product.findMany({
        orderBy: {
               
            price: "desc"
        }

    });

    return products;

}


