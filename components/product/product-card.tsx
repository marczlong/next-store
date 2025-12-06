import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <div className="relative h-64 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p>$ { product.price }</p>
          ) : (
            <p className="text-red-600">Out of Stock</p>
          )}
        </div>

      </CardContent>
      <div className="p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
