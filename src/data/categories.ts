
export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    description: "Explore the latest innovations, trends, and insights in the world of technology.",
    slug: "technology",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "2",
    name: "Lifestyle",
    description: "Discover tips and ideas for enhancing your daily life, from home design to personal growth.",
    slug: "lifestyle",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
  },
  {
    id: "3",
    name: "Health",
    description: "Learn about wellness practices, fitness approaches, and strategies for maintaining optimal health.",
    slug: "health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: "4",
    name: "Travel",
    description: "Journey to fascinating destinations around the world and get inspired for your next adventure.",
    slug: "travel",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
  },
  {
    id: "5",
    name: "Finance",
    description: "Gain insights into personal finance, investing strategies, and building long-term wealth.",
    slug: "finance",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d"
  }
];
