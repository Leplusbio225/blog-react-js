import { Outlet } from "react-router";
import { Link } from "react-router";

const Layout = () => {
  return (
    <>
      <header className="p-2 flex justify-between">
        <nav>
          <h1 className="text-blue-800 font-bold">MyBlog</h1>
        </nav>
        <ul className="flex items-center gap-2 text-black font-bold">
          <li>
            <Link to="/" className="hover:text-orange-600 transition-all" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-orange-600 transition-all" href="/">
              New Post
            </Link>
          </li>
        </ul>
      </header>

      <main className="py-4 px-2 space-y-2">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
