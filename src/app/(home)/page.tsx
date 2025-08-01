import { BlogCard } from "@/components/BlogCard";

const dummyBlogs = [
  {
    image: "https://picsum.photos/600/400?random=1",
    title: "Understanding React Server Components in Next.js",
    description: "...",
    category: "Next.js",
  },
  {
  image: "https://placehold.co/600x400/0044CC/FFFFFF?text=Top+UI+Libraries",
  title: "Top 5 UI Libraries for Building Modern Frontends",
  description: "...",
  category: "UI/UX",
},
  {
    image: "https://placehold.co/600x400/0044cc/ffffff?text=API+Blog",
    title: "Creating a Blog Using External APIs in Next.js",
    description: "...",
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


