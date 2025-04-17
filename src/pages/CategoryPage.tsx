
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const category = categories.find(cat => cat.slug === slug);
  const categoryPosts = posts.filter(post => post.category.toLowerCase() === category?.name.toLowerCase());
  
  useEffect(() => {
    if (!category) {
      navigate("/categories", { replace: true });
    }
  }, [category, navigate]);
  
  if (!category) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-24" 
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Link 
                to="/categories" 
                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all categories
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {category.name}
              </h1>
              <p className="text-white/90 text-lg md:text-xl">
                {category.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Posts Section */}
        <section className="py-12">
          <div className="container">
            {categoryPosts.length > 0 ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  {category.name} Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPosts.map((post) => (
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
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">No articles found</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We don't have any articles in this category yet. Check back soon or explore other categories.
                </p>
                <Link 
                  to="/categories" 
                  className="text-blog-primary hover:text-blog-accent inline-flex items-center transition-colors"
                >
                  Explore other categories
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
