export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  featured?: boolean;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Top 10 Treks in Nepal: A Hiker's Paradise",
    excerpt: "Discover the most breathtaking trekking routes in Nepal, from Everest Base Camp to Annapurna Circuit",
    content: `
      <p>Nepal is a dream destination for trekkers and adventure enthusiasts. With its diverse landscapes and challenging trails, it offers some of the world's most spectacular hiking experiences.</p>
      
      <h2>Everest Base Camp Trek</h2>
      <p>The most iconic trek in Nepal, this route takes you through Sherpa villages, stunning mountain landscapes, and offers breathtaking views of Mount Everest. It's a challenging but rewarding 12-14 day journey.</p>
      
      <h2>Annapurna Circuit</h2>
      <p>Considered one of the most diverse treks in the world, the Annapurna Circuit offers a mix of cultural experiences and stunning mountain scenery. The trek passes through multiple climate zones and traditional villages.</p>
      
      <h2>Preparing for Your Trek</h2>
      <p>Proper preparation is key. Ensure you have the right gear, are physically fit, and understand the altitude challenges. Hiring a local guide can enhance your experience and safety.</p>
    `,
    coverImage: "/images/20141119-Annapurna-Sunrise.jpg",
    date: "April 15, 2025",
    category: "Trekking & Adventure",
    featured: true,
    author: {
      name: "Raj Sherpa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Experienced mountain guide and trekking expert with 15 years of exploring Nepalese trails."
    },
    tags: ["Trekking", "Hiking", "Mountains", "Adventure"]
  },
  {
    id: "2",
    title: "Exploring Kathmandu: A Cultural Journey",
    excerpt: "Dive into the rich cultural heritage of Nepal's vibrant capital city",
    content: `
      <p>Kathmandu, the capital of Nepal, is a mesmerizing blend of ancient traditions and modern life. From historic temples to bustling markets, the city offers an incredible cultural experience.</p>
      
      <h2>Must-Visit Temples</h2>
      <p>Explore iconic sites like Swayambhunath (Monkey Temple) and Pashupatinath Temple. These sacred spaces offer insights into Nepal's spiritual traditions and architectural marvel.</p>
      
      <h2>Local Markets and Cuisine</h2>
      <p>Wander through Thamel's vibrant streets, try traditional momos, and experience the warm hospitality of Nepalese people. Don't miss trying dal bhat, the national dish of Nepal.</p>
      
      <h2>Cultural Festivals</h2>
      <p>Time your visit during festivals like Dashain or Tihar to experience the most vibrant celebrations of Nepalese culture.</p>
    `,
    coverImage: "/images/swyambu.jpeg",
    date: "April 10, 2025",
    category: "Cultural Experiences",
    author: {
      name: "Maya Tamang",
      avatar: "/images/swyambu.jpeg",
      bio: "Cultural anthropologist and travel writer specializing in Nepalese traditions."
    },
    tags: ["Culture", "Kathmandu", "Travel", "Festivals"]
  },
  {
    id: "3",
    title: "Wildlife Safari in Chitwan National Park",
    excerpt: "Discover the incredible biodiversity of Nepal's most famous national park",
    content: `
      <p>Chitwan National Park offers a unique wildlife experience in the heart of Nepal. Home to endangered species like the Bengal tiger and one-horned rhinoceros, it's a must-visit for nature lovers.</p>
      
      <h2>Safari Experiences</h2>
      <p>Take a jeep safari or a guided walking tour to spot wildlife. Elephant safaris provide a unique perspective of the park's diverse ecosystem.</p>
      
      <h2>Conservation Efforts</h2>
      <p>Learn about the park's critical conservation efforts and the importance of protecting Nepal's unique wildlife habitats.</p>
      
      <h2>Local Communities</h2>
      <p>Interact with the indigenous Tharu community and learn about their traditional way of life closely connected to the national park.</p>
    `,
    coverImage: "/images/rhino.jpeg",
    date: "April 5, 2025",
    category: "Wildlife & Nature",
    author: {
      name: "Anil Sharma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Wildlife photographer and conservation expert with deep knowledge of Nepalese ecosystems."
    },
    tags: ["Wildlife", "Nature", "Conservation", "Safari"]
  },
  {
    id: "4",
    title: "Pokhara: Serenity by the Lakeside",
    excerpt: "Explore the enchanting city of Pokhara with its stunning Phewa Lake and magnificent mountain views",
    content: `
      <p>Pokhara, Nepal's second-largest city, offers a perfect blend of natural beauty and adventure. With the magnificent Annapurna range in the background and the serene Phewa Lake at its heart, Pokhara is a must-visit destination in Nepal.</p>
      
      <h2>Phewa Lake</h2>
      <p>Start your Pokhara experience with a relaxing boat ride on Phewa Lake. The reflection of the Himalayas on its clear waters creates a mesmerizing view, especially during sunrise and sunset. Visit the Tal Barahi Temple, situated on a small island in the lake.</p>
      
      <h2>Adventure Activities</h2>
      <p>Pokhara is known as Nepal's adventure capital. Try paragliding from Sarangkot for breathtaking aerial views of the mountains and lake. Other popular activities include zip-lining, ultra-light flights, and mountain biking in the surrounding hills.</p>
      
      <h2>Peace Pagoda</h2>
      <p>Hike to the World Peace Pagoda (Shanti Stupa) for panoramic views of Pokhara, the lake, and the Annapurna range. The white pagoda itself is an impressive structure built by Japanese Buddhist monks.</p>
      
      <h2>Where to Stay</h2>
      <p>Lakeside Pokhara offers a range of accommodations from budget hostels to luxury hotels. Most places provide stunning views and easy access to restaurants, shops, and the lake.</p>
    `,
    coverImage: "/images/pokhara city.jpg",
    date: "April 2, 2025",
    category: "Trekking & Adventure",
    author: {
      name: "Suman Gurung",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Travel writer and photographer specializing in Himalayan destinations."
    },
    tags: ["Pokhara", "Lakes", "Adventure", "Mountains"]
  },
  {
    id: "5",
    title: "Authentic Nepalese Cuisine: A Food Lover's Guide",
    excerpt: "Discover the rich flavors and unique dishes that define Nepalese culinary traditions",
    content: `
      <p>Nepalese cuisine is as diverse as its landscapes and cultures, influenced by its neighbors India and Tibet while maintaining its unique identity. Here's your guide to the must-try dishes in Nepal.</p>
      
      <h2>Dal Bhat: The National Dish</h2>
      <p>Dal Bhat is the staple food of Nepal, consisting of steamed rice, lentil soup, and various side dishes like curried vegetables, pickles, and sometimes meat. Locals say, "Dal Bhat power, 24 hour!" – referring to the sustaining energy this balanced meal provides.</p>
      
      <h2>Momos: Nepalese Dumplings</h2>
      <p>These steamed or fried dumplings filled with vegetables, chicken, or buffalo meat are Nepal's most beloved snack. Served with spicy tomato chutney, you'll find momos in every restaurant from high-end establishments to street vendors.</p>
      
      <h2>Newari Cuisine</h2>
      <p>The Newari people of Kathmandu Valley have a distinctive culinary tradition. Try Choila (spiced grilled meat), Wo (lentil pancakes), and Yomari (sweet dumplings) for an authentic taste of this ancient culture.</p>
      
      <h2>Where to Eat</h2>
      <p>For authentic local food, look beyond tourist restaurants and find small local eateries called "bhattis." In Kathmandu, Thamel has numerous options, while Pokhara's Lakeside offers restaurants with beautiful views to complement your meal.</p>
    `,
    coverImage: "/images/nepalicusine.jpeg",
    date: "March 28, 2025",
    category: "Local Cuisine",
    author: {
      name: "Priya Shrestha",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Culinary expert and food blogger exploring traditional Nepalese recipes and food culture."
    },
    tags: ["Food", "Cuisine", "Cooking", "Culture"]
  },
  {
    id: "6",
    title: "Lumbini: Birthplace of Buddha",
    excerpt: "Journey to the sacred site where Siddhartha Gautama, the founder of Buddhism, was born over 2,500 years ago",
    content: `
      <p>Lumbini, located in the Terai plains of southern Nepal, is one of the world's most important religious sites as the birthplace of Siddhartha Gautama, who later became Buddha. This UNESCO World Heritage Site attracts pilgrims and tourists from around the globe.</p>
      
      <h2>Maya Devi Temple</h2>
      <p>The heart of Lumbini is the Maya Devi Temple, which marks the exact spot where Queen Maya Devi gave birth to Siddhartha Gautama in 563 BCE. Inside, you can see the marker stone and ancient ruins that date back to the 3rd century BCE.</p>
      
      <h2>Ashoka Pillar</h2>
      <p>Near the temple stands the famous pillar erected by Indian Emperor Ashoka during his pilgrimage to Lumbini in 249 BCE. The inscriptions on the pillar confirm this as Buddha's birthplace and represent one of the earliest archaeological evidence of Buddha's historical existence.</p>
      
      <h2>Monastic Zone</h2>
      <p>The Lumbini Monastic Zone contains monasteries built by Buddhist communities from various countries, each representing their unique architectural traditions. The Peace Pagoda, Japanese-style temple, and Tibetan monastery are particularly impressive.</p>
      
      <h2>Planning Your Visit</h2>
      <p>Lumbini is about 300 km from Kathmandu, with the nearest airport at Bhairahawa. The best time to visit is from October to May when the weather is pleasant. Accommodations range from simple guesthouses to comfortable hotels.</p>
    `,
    coverImage: "/images/lumbini.jpg",
    date: "March 20, 2025",
    category: "Cultural Experiences",
    author: {
      name: "Tenzin Dorje",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Buddhist scholar and travel writer specializing in religious and cultural sites across Asia."
    },
    tags: ["Buddhism", "History", "Religion", "Heritage"]
  },
  {
    id: "7",
    title: "Navigating Nepal's Festival Calendar",
    excerpt: "Experience the vibrant cultural celebrations that bring Nepal's traditions to life throughout the year",
    content: `
      <p>Nepal's calendar is filled with colorful festivals that showcase the country's rich cultural heritage and religious diversity. Planning your visit around these events can add an unforgettable dimension to your travel experience.</p>
      
      <h2>Dashain: The Great Festival</h2>
      <p>Dashain, Nepal's longest and most important festival, celebrates the victory of good over evil. Occurring in September-October (during the Nepali month of Kartik), it features family gatherings, flying kites, building bamboo swings, and receiving tika (rice and yogurt blessing) from elders.</p>
      
      <h2>Tihar: Festival of Lights</h2>
      <p>Following Dashain, Tihar (also known as Deepawali) illuminates Nepal with oil lamps, candles, and colorful lights. Each of the five days honors different deities and animals, including crows, dogs, and cows. The third day celebrates Lakshmi, the goddess of wealth, with homes beautifully decorated to welcome her.</p>
      
      <h2>Holi: Colors of Spring</h2>
      <p>This joyful spring festival involves throwing colored powders and water at friends and strangers alike. Celebrated in February-March, Holi has everyone on the streets joining the playful chaos, accompanied by music, dance, and special treats.</p>
      
      <h2>Indra Jatra: Kathmandu's Living Goddess</h2>
      <p>This eight-day festival in Kathmandu's Durbar Square features a rare public appearance by the Kumari, Nepal's living goddess. Masked dances, processions, and the raising of a wooden pole (Yosin) create an atmosphere that seems to transport visitors back in time.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    date: "March 15, 2025",
    category: "Cultural Experiences",
    author: {
      name: "Maya Tamang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Cultural anthropologist and travel writer specializing in Nepalese traditions."
    },
    tags: ["Festivals", "Culture", "Traditions", "Celebrations"]
  }
];
