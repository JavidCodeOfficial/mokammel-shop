import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Edit, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  tag: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
  isAdminPanel,
}: ProductCardProps & { isAdminPanel: boolean }) {
  const isAdmin = isAdminPanel;

  return (
    <Card
      key={product.id}
      className="group gap-0 p-0 rounded-2xl overflow-hidden border border-border/60 hover:shadow-xl transition"
    >
      <CardHeader className="relative aspect-16/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3">{product.tag}</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-base leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          {product.rating}
        </div>
        <p className="text-lg font-bold">{product.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex  gap-2 sm:flex-row">
        <Button className={`rounded-xl ${isAdmin ? "flex-2" : "w-full"}`}>
          افزودن به علاقه مندی ها
        </Button>

        {isAdmin && (
          <div className="flex flex-1 gap-2">
            <Button
              title="edit"
              variant="secondary"
              className="flex-1 rounded-xl"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              title="delete"
              variant="destructive"
              className="flex-1 rounded-xl"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
