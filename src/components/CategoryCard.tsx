
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  className?: string;
}

const CategoryCard = ({
  id,
  name,
  description,
  slug,
  image,
  className,
}: CategoryCardProps) => {
  return (
    <Link to={`/categories/${slug}`} className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-lg border border-border">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
