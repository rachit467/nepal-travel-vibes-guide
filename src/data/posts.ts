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
  excerpt: "Discover the most breathtaking trekking routes in Nepal, from Everest Base Camp to Annapurna Circuit.",
  content: `
    <p>Nepal is a dream destination for trekkers and adventure enthusiasts. With its diverse landscapes and challenging trails, it offers some of the world's most spectacular hiking experiences. From the foothills of the Annapurna range to the base of Mount Everest, there is something for every level of hiker.</p>
    
    <h2>1. Everest Base Camp Trek</h2>
    <p>The most iconic trek in Nepal, this route takes you through traditional Sherpa villages, ancient monasteries, and some of the most stunning mountain scenery in the world. The journey typically takes 12–14 days and culminates at the base of the world’s tallest mountain, Mount Everest (8,848m).</p>
    
    <h2>2. Annapurna Circuit</h2>
    <p>Known for its incredible diversity, the Annapurna Circuit trek combines cultural richness with natural beauty. You'll pass through subtropical forests, alpine landscapes, and the arid Mustang region. A major highlight is crossing the Thorong La Pass (5,416m).</p>
    
    <h2>3. Langtang Valley Trek</h2>
    <p>This shorter trek is ideal for those looking for beauty and culture closer to Kathmandu. Langtang offers panoramic mountain views, glacial rivers, and warm Tamang hospitality.</p>
    
    <h2>4. Manaslu Circuit Trek</h2>
    <p>A less-crowded alternative to the Annapurna Circuit, the Manaslu trek offers rugged terrain, remote villages, and a sense of true Himalayan wilderness. The trail circles the world’s eighth-highest peak, Mount Manaslu (8,163m).</p>
    
    <h2>5. Ghorepani Poon Hill Trek</h2>
    <p>Perfect for beginners or trekkers on a tight schedule, this trek offers incredible sunrise views over the Annapurna and Dhaulagiri ranges from Poon Hill. It typically takes 4–6 days to complete.</p>
    
    <h2>6. Upper Mustang Trek</h2>
    <p>Explore the once-forbidden kingdom of Lo. This trek leads through desert-like terrain, Tibetan-influenced culture, and ancient cave dwellings. It’s an unforgettable cultural and spiritual journey.</p>
    
    <h2>7. Gokyo Lakes Trek</h2>
    <p>A scenic alternative to the Everest Base Camp route, the Gokyo trek takes you to a series of turquoise glacial lakes and offers a panoramic viewpoint from Gokyo Ri.</p>
    
    <h2>8. Mardi Himal Trek</h2>
    <p>This relatively new trail offers solitude and jaw-dropping close-up views of Machapuchare (Fishtail), Mardi Himal, and Annapurna South. It’s perfect for a shorter, off-the-beaten-path experience.</p>
    
    <h2>9. Kanchenjunga Base Camp Trek</h2>
    <p>One of the most remote and wild trekking experiences in Nepal. The trek takes you to the base of the world’s third-highest mountain, Mount Kanchenjunga (8,586m), through pristine forests and villages untouched by modernity.</p>
    
    <h2>10. Helambu Trek</h2>
    <p>Close to Kathmandu and culturally rich, the Helambu trek is known for its Hyolmo Buddhist heritage, scenic landscapes, and accessibility. Ideal for short trips with minimal altitude gain.</p>

    <h2>Preparing for Your Trek</h2>
    <p>Proper preparation is key to a successful trekking experience in Nepal. Here are some tips:</p>
    <ul>
      <li>Train physically before your trek, especially with cardio and endurance exercises.</li>
      <li>Pack appropriate clothing for varying climates, including warm layers and waterproof gear.</li>
      <li>Acclimatize properly to avoid altitude sickness, especially on high-altitude treks.</li>
      <li>Consider hiring a licensed guide and porter for safety, navigation, and cultural insights.</li>
      <li>Respect local customs and natural surroundings—leave no trace.</li>
    </ul>

    <p>With the right mindset and preparation, trekking in Nepal will be a life-changing journey. Whether it’s your first time or your tenth, the Himalayas always have something new to offer.</p>
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
  excerpt: "Dive into the rich cultural heritage of Nepal's vibrant capital city.",
  content: `
    <p>Kathmandu, the capital of Nepal, is a mesmerizing blend of ancient traditions and modern life. With its labyrinthine alleys, centuries-old temples, and vibrant street life, the city offers an immersive cultural experience for every traveler.</p>

    <h2>Must-Visit Temples</h2>
    <p>Kathmandu is home to some of the most sacred and architecturally significant temples in Nepal. Visit <strong>Swayambhunath Stupa</strong> (also known as the Monkey Temple), perched on a hill with panoramic views of the city. This UNESCO World Heritage Site is a symbol of harmony between Buddhism and Hinduism. Another must-see is the <strong>Pashupatinath Temple</strong>, a major Hindu pilgrimage site located along the Bagmati River. It’s not only a religious center but also a place to witness centuries-old cremation rituals and spiritual ceremonies.</p>

    <h2>Local Markets and Cuisine</h2>
    <p>No cultural journey in Kathmandu is complete without a walk through its bustling markets. <strong>Thamel</strong>, the tourist hub, offers everything from handicrafts to trekking gear, live music, and cozy cafés. For a more local flavor, explore <strong>Asan Bazaar</strong>, a traditional market known for spices, textiles, and household goods. </p>
    <p>When it comes to food, Kathmandu is a culinary delight. Taste the beloved <strong>momos</strong> (Nepalese dumplings), sample flavorful <strong>dal bhat</strong> (lentils with rice), and sip on a cup of traditional <strong>masala tea</strong> while people-watching in a local teahouse. Don't forget to try <strong>Newari cuisine</strong> if you're looking for something truly authentic and unique.</p>

    <h2>Cultural Festivals</h2>
    <p>Kathmandu comes alive during its festivals. Visit during <strong>Dashain</strong>—the longest and most auspicious festival celebrated by Nepalese across the country. Or experience <strong>Tihar</strong>, the festival of lights, when homes and temples are decorated with oil lamps and colorful rangoli. Other notable festivals include <strong>Indra Jatra</strong>, celebrated in Kathmandu Durbar Square with chariot processions, masked dances, and sacred rituals.</p>

    <h2>Conclusion</h2>
    <p>Kathmandu is more than just a gateway to the Himalayas—it's a cultural treasure chest waiting to be explored. Whether you're marveling at ancient temples, bargaining in local bazaars, or sharing a meal with a local family, the city offers unforgettable moments at every turn. Embrace the chaos, dive into its rhythm, and let Kathmandu show you the soul of Nepal.</p>
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
      <p><strong>Chitwan National Park</strong>, located in the subtropical lowlands of south-central Nepal, is one of Asia’s premier wildlife-viewing destinations. Designated a UNESCO World Heritage Site, the park spans over 900 square kilometers and is home to an astonishing array of flora and fauna. For nature lovers and adventure seekers alike, Chitwan offers an unforgettable safari experience deep in the heart of the jungle.</p>

    <h2>Safari Experiences</h2>
    <p>Visitors can explore the park through various safari options, each offering a unique way to encounter wildlife:</p>
    <ul>
      <li><strong>Jeep Safaris:</strong> The most popular way to traverse the vast park landscape. Guided by experts, jeep safaris allow you to cover more ground and increase your chances of spotting elusive animals like the Bengal tiger or sloth bear.</li>
      <li><strong>Elephant Safaris:</strong> Riding on the back of a trained elephant, you can move silently through tall grasses—perfect for close-up views of rhinos and deer.</li>
      <li><strong>Walking Safaris:</strong> For those seeking a more intimate experience, walking safaris with trained naturalists offer a chance to learn about plants, animal tracks, and bird calls.</li>
      <li><strong>Canoe Rides:</strong> Glide along the Rapti or Narayani River to spot crocodiles, kingfishers, and other aquatic life in their natural habitat.</li>
    </ul>

    <h2>Conservation Efforts</h2>
    <p>Chitwan National Park plays a crucial role in the conservation of endangered species, particularly the <strong>one-horned rhinoceros</strong> and the <strong>Royal Bengal tiger</strong>. Anti-poaching units, wildlife monitoring systems, and community-based conservation programs have been instrumental in increasing animal populations over the years.</p>
    <p>Educational visitor centers within the park also help spread awareness about the importance of protecting biodiversity and preserving Nepal's rich natural heritage.</p>

    <h2>Local Communities</h2>
    <p>Chitwan isn’t just about wildlife—it's also about the people who coexist with nature. The indigenous <strong>Tharu community</strong> has lived in this region for centuries. Their eco-friendly lifestyle, unique culture, and traditional dances are integral to the Chitwan experience.</p>
    <p>Many Tharu-run homestays and eco-lodges offer visitors an immersive stay, where they can enjoy local cuisine, learn about traditional farming techniques, and even participate in cultural performances.</p>

    <h2>Conclusion</h2>
    <p>Whether you’re tracking tigers, watching rhinos graze, or learning about the harmonious relationship between people and nature, a wildlife safari in Chitwan National Park is a truly enriching experience. It's a rare chance to see wild Nepal in all its raw beauty while supporting crucial conservation and local empowerment efforts.</p>
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
  <p>Nepal is a land of vibrant traditions and spiritual celebrations. With its multi-ethnic and multi-religious communities, the country hosts a wide array of festivals throughout the year, offering visitors a chance to experience its rich cultural tapestry.</p>

  <h2>Dashain</h2>
  <p>Dashain is the most important and widely celebrated Hindu festival in Nepal. Lasting 15 days, it symbolizes the triumph of good over evil. Families gather, receive blessings, and enjoy feasts together. It's a time of homecoming and celebration across the nation.</p>

  <h2>Tihar</h2>
  <p>Also known as the festival of lights, Tihar spans five days and honors animals like crows, dogs, and cows—each with its own symbolic significance. Homes are decorated with oil lamps and colorful rangolis, and the goddess Lakshmi is worshipped for wealth and prosperity.</p>

  <h2>Holi</h2>
  <p>Known as the festival of colors, Holi is a lively celebration of spring and the victory of good over evil. People throw colored powders, dance, and sing in the streets. It’s a joyous time that brings communities together regardless of background.</p>

  <h2>Buddha Jayanti</h2>
  <p>This sacred day commemorates the birth, enlightenment, and death of Lord Buddha. Lumbini, his birthplace, and Buddhist stupas across the country hold special ceremonies and processions, drawing pilgrims from all over the world.</p>

  <h2>Indra Jatra</h2>
  <p>Celebrated in Kathmandu, Indra Jatra is a vibrant festival honoring Indra, the god of rain. The event features traditional dances, chariot processions, and the display of the living goddess, Kumari. It's one of the most colorful festivals in the Kathmandu Valley.</p>

  <h2>Planning Your Trip Around Festivals</h2>
  <p>Festivals in Nepal follow the lunar calendar, so dates vary each year. If you're planning your visit to coincide with a specific celebration, it's best to check the local festival calendar. Participating in a festival can offer an unforgettable glimpse into the heart of Nepalese life.</p>
`,

    coverImage: "/images/indrajatra.jpg",
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
