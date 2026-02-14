import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Edit, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Product, useProductStore } from "@/store/useProductStore";
import { useState } from "react";
import EditProductDialog from "./EditProductDialog";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
  isAdminPanel,
}: ProductCardProps & { isAdminPanel: boolean }) {
  const isAdmin = isAdminPanel;

  const { deleteProduct } = useProductStore();
  const [editOpen, setEditOpen] = useState(false);

  return (
    <Card
      key={product.id}
      className="group gap-4 p-0 rounded-2xl overflow-hidden border border-border/60 hover:shadow-xl transition"
    >
      <CardHeader className="relative aspect-16/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3">{product.tag}</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-base leading-tight">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          <span className="mt-1">{product.rating}</span>
        </div>
        <p className="text-lg font-bold">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2 flex-col">
        <Button className="rounded-xl w-full">افزودن به علاقه مندی ها</Button>

        {isAdmin && (
          <div className="flex items-center justify-between gap-2 w-full">
            <Button
              title="edit"
              variant="secondary"
              onClick={() => setEditOpen(true)}
              className="rounded-xl flex-1"
            >
              <Edit />
            </Button>
            <Button
              title="delete"
              variant="destructive"
              onClick={() => deleteProduct(product.id)}
              className="rounded-xl flex-1"
            >
              <Trash2 />
            </Button>

            {isAdmin && (
              <EditProductDialog
                productId={product.id}
                open={editOpen}
                setOpen={setEditOpen}
              />
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
