
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeaturedPostProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  className?: string;
}

const FeaturedPost = ({
  id,
  title,
  excerpt,
  coverImage,
  date,
  category,
  author,
  className,
}: FeaturedPostProps) => {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border",
        className
      )}
    >
      <div className="relative h-[350px] overflow-hidden md:h-[500px]">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Badge className="bg-blog-primary hover:bg-blog-accent text-white">
              {category}
            </Badge>
            <div className="flex items-center text-white/90 text-sm">
              <Calendar className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>

          <Link to={`/post/${id}`}>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl line-clamp-2 transition-colors group-hover:text-blog-secondary">
              {title}
            </h2>
          </Link>

          <p className="mb-4 text-white/80 line-clamp-2 md:text-lg">
            {excerpt}
          </p>

          <div className="flex items-center">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="text-white font-medium">{author.name}</p>
              <Link
                to={`/post/${id}`}
                className="mt-1 inline-flex items-center text-blog-secondary hover:text-white text-sm font-medium transition-colors"
              >
                Read article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
