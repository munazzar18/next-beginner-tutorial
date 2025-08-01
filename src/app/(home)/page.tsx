import { BlogCard } from "@/components/BlogCard";
import { GetPublicBlogs } from "@/lib/getPublicBlogs";

interface Category {
 _id: string, 
    content: string
}

interface Blogs {
  _id: string, 
  user: {
    _id: string, 
    name: string
  },
  title: string, 
  description: string, 
  image: string, 
  category: Category[]
}

interface BlogData {
  totalCount: number,
  page: number,
  totalPages: number,
  data: Blogs[]
}


export default async function Home() {
  const blogs : BlogData = await GetPublicBlogs()
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL as string

  return (
    <section className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.data.map((blog, index) => (
        <BlogCard
         key={index}
         image={blog.image.includes('https') ? blog.image : imageUrl + blog.image}
         title={blog.title}
         description={blog.description}
         category={blog.category.map((cat) => cat.content).join(", ")}
         author={blog.user.name}
         />
      ) )}
    </section>
  );
}


