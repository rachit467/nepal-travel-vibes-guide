
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PostProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  className?: string;
}

const PostCard = ({
  id,
  title,
  excerpt,
  coverImage,
  date,
  category,
  className,
}: PostProps) => {
  return (
    <article 
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <Link to={`/post/${id}`} className="overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col space-y-3 p-5 flex-1">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-blog-muted text-blog-primary">
              {category}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>
          
          <Link to={`/post/${id}`} className="group">
            <h3 className="font-semibold text-xl group-hover:text-blog-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
        </div>
        
        <p className="text-muted-foreground line-clamp-3 text-sm flex-1">
          {excerpt}
        </p>
        
        <Link
          to={`/post/${id}`}
          className="text-blog-primary hover:text-blog-accent font-medium text-sm inline-flex items-center transition-colors"
        >
          Read more
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
    </article>
  );
};

export default PostCard;
