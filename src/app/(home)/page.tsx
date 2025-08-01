import { BlogCard } from "@/components/BlogCard";

const dummyBlogs = [
  {
    image: "https://source.unsplash.com/random/600x400?tech",
    title: "Understanding React Server Components in Next.js",
    description: "Explore how server components improve performance and simplify data fetching in Next.js 14.",
    category: "Next.js",
  },
  {
    image: "https://source.unsplash.com/random/600x400?code",
    title: "Top 5 UI Libraries for Building Modern Frontends",
    description: "Discover the best component libraries including shadcn/ui and how to use them effectively.",
    category: "UI/UX",
  },
  {
    image: "https://source.unsplash.com/random/600x400?blog",
    title: "Creating a Blog Using External APIs in Next.js",
    description: "Learn how to connect and display dynamic blog data using APIs in a modern frontend.",
    category: "API",
  },
];


export default function Home() {
  return (
    <section className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyBlogs.map((blog, index) => (
        <BlogCard
         key={index}
         image={blog.image}
         title={blog.title}
         description={blog.description}
         category={blog.category}
         />
      ) )}
    </section>
  );
}


