
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About InsightfulBlog</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Sharing knowledge and insights through thoughtful, well-researched content.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  InsightfulBlog began in 2023 with a simple mission: to create a space where curious minds could explore ideas across a variety of topics. We believe that knowledge is most valuable when it's accessible, engaging, and actionable.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small passion project has grown into a community of readers and contributors united by a love of learning and a desire to understand the world more deeply.
                </p>
                <p className="text-muted-foreground">
                  Today, we publish articles across technology, lifestyle, health, travel, and finance—bringing together diverse perspectives and research-backed insights.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blog-primary rounded-lg hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blog-muted rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-primary">
                    <path d="M6 18h8"></path><path d="M3 22h18"></path>
                    <path d="M18 22V8a4 4 0 0 0-4-4 4 4 0 0 0-4 4v14"></path>
                    <path d="M12 9v9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Intellectual Curiosity</h3>
                <p className="text-muted-foreground">
                  We approach topics with open minds and a genuine desire to understand complex issues from multiple angles.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blog-muted rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  We value accuracy and believe in grounding our content in research, expert insights, and verifiable information.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blog-muted rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-primary">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Perspective</h3>
                <p className="text-muted-foreground">
                  We strive to represent diverse viewpoints and create content that resonates with people from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Michael Wong" 
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">Dr. Michael Wong</h3>
                <p className="text-blog-primary">Editor-in-Chief</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Clinical psychologist with a passion for making mental health insights accessible.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Sarah Chen" 
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">Dr. Sarah Chen</h3>
                <p className="text-blog-primary">Technology Editor</p>
                <p className="text-muted-foreground text-sm mt-2">
                  AI researcher focused on explaining complex tech concepts in understandable terms.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1500048993953-d23a436266cf" 
                  alt="James Wilson" 
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">James Wilson</h3>
                <p className="text-blog-primary">Finance Editor</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Certified financial planner dedicated to demystifying personal finance for everyone.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
                  alt="Sofia Martins" 
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">Sofia Martins</h3>
                <p className="text-blog-primary">Travel Editor</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Photographer and writer who explores and documents hidden treasures around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-12 md:py-20 bg-blog-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-white/80 mb-6">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you!
              </p>
              <Button className="bg-white text-blog-primary hover:bg-gray-100 transition-colors inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
