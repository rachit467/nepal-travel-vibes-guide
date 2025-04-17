
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PostCard from "@/components/PostCard";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id === id);
  const relatedPosts = posts
    .filter(p => p.id !== id && p.category === post?.category)
    .slice(0, 3);
  
  useEffect(() => {
    if (!post) {
      navigate("/", { replace: true });
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] max-h-[500px]">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 container py-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-3 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              {post.title}
            </h1>
          </div>
        </section>
        
        {/* Article Info */}
        <section className="border-b border-border">
          <div className="container py-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author.name}
              </div>
              
              <Link 
                to={`/categories/${post.category.toLowerCase()}`}
                className="flex items-center"
              >
                <Tag className="h-4 w-4 mr-2" />
                {post.category}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <article className="py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-8">
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-lg font-medium mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-blog-muted text-blog-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Author Bio */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-start gap-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover" 
                    />
                    <div>
                      <h3 className="text-lg font-medium">About {post.author.name}</h3>
                      <p className="text-muted-foreground mt-1">
                        {post.author.bio || `${post.author.name} is a regular contributor to our blog.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <aside className="md:col-span-4">
                <div className="bg-muted rounded-lg p-6 sticky top-20">
                  <h3 className="text-lg font-medium mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="flex gap-3">
                          <img 
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            className="w-20 h-20 rounded object-cover flex-shrink-0" 
                          />
                          <div>
                            <Link 
                              to={`/post/${relatedPost.id}`}
                              className="font-medium hover:text-blog-primary line-clamp-2 transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                            <p className="text-xs text-muted-foreground mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        No related articles found.
                      </p>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
        
        {/* More Posts */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter(p => p.id !== id)
                .slice(0, 3)
                .map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage}
                    date={post.date}
                    category={post.category}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
