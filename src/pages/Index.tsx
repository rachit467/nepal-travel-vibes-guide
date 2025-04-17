
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 6);
  
  const filteredPosts = activeTab === "all" 
    ? recentPosts 
    : recentPosts.filter(post => post.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Featured Post */}
        <section className="py-8 md:py-12">
          <div className="container">
            {featuredPosts.length > 0 && (
              <FeaturedPost
                id={featuredPosts[0].id}
                title={featuredPosts[0].title}
                excerpt={featuredPosts[0].excerpt}
                coverImage={featuredPosts[0].coverImage}
                date={featuredPosts[0].date}
                category={featuredPosts[0].category}
                author={featuredPosts[0].author}
              />
            )}
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Explore Categories
              </h2>
              <Link 
                to="/categories"
                className="text-blog-primary hover:text-blog-accent inline-flex items-center transition-colors"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 3).map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  description={category.description}
                  slug={category.slug}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest Posts Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Latest Articles
              </h2>
              <Link 
                to="/posts"
                className="text-blog-primary hover:text-blog-accent inline-flex items-center transition-colors"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-muted/60">
                  <TabsTrigger value="all">All</TabsTrigger>
                  {categories.slice(0, 5).map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.name.toLowerCase()}
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
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
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-3">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      There are no articles in this category yet.
                    </p>
                    <Button onClick={() => setActiveTab("all")}>
                      View all articles
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-blog-primary text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Subscribe to our newsletter
              </h2>
              <p className="text-white/80 mb-6">
                Get the latest articles, resources and updates right in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900 min-w-0 sm:min-w-[300px]"
                />
                <Button className="bg-white text-blog-primary hover:bg-gray-100 transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
