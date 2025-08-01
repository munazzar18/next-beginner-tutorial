import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {

    const navItems = [
        {name: 'Home' , href: '/'},
        {name: 'Blogs' , href: '/blogs'},
        {name: 'About' , href: '/about'},
    ]


  return (
   <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm">
    <div className="max-2-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
        StackToAI
        </Link>

    <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => 
        <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {item.name}
        </Link>
        )}
        <ThemeToggle/>
        <Link href="/login" className="px-4 py-2 border rounded-md text-sm font-medium border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900" >
        Login
        </Link>
    </nav>

    <div className="md:hidden" ></div>

    </div>
   </header>
  );
}
