import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  // CSS classes for the list items
  const listIMGStyle = "h-4 w-4 sm:h-6 sm:w-6 sm:group-hover:hidden md:hidden";
  const listNameStyle =
    "hidden text-lg sm:group-hover:block md:block hover:text-teal-700 hover:border-b-[2px] hover:border-b-teal-100 transition duration-300 ease-in-out group";

  // Hooks for navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // Function to redirect to home and scroll to top
  const redirectToHome = () => {
    navigate("/");
    scroll.scrollToTop();
  };

  // Function to render the navbar based on the current location
  const renderNavbar = () => {
    if (location.pathname === "/") {
      return (
        <div className="h-full w-4/5">
          <ul className="flex flex-row h-full w-full justify-evenly items-center md:justify-between">
            <Link
              onClick={redirectToHome}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer group">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/102/102665.png"
                  alt="shop"
                />
                <p className={listNameStyle}>Home</p>
              </li>
            </Link>

            <Link
              to="author"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer group transition duration-500 ease-in-out">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/8896/8896566.png"
                  alt="authors"
                />
                <p className={listNameStyle}>Author</p>
              </li>
            </Link>
            <Link
              to="featured"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer group">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/4059/4059951.png"
                  alt="featured products"
                />
                <p className={listNameStyle}>Featured</p>
              </li>
            </Link>
            <RouterLink to="/books?query=All Books">
              <li className="cursor-pointer group">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/2702/2702134.png"
                  alt="books"
                />
                <p className={listNameStyle}>Books</p>
              </li>
            </RouterLink>
            <div className="w-1/5">
              <ul className="flex flex-row justify-between md:justify-evenly">
                <RouterLink to="cart">
                  <li className="cursor-pointer">
                    <img
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
                      alt="cart"
                    />
                  </li>
                </RouterLink>

                <li className="cursor-pointer">
                  <img
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                    alt="user"
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="h-full w-4/5">
          <ul className="flex flex-row h-full w-full justify-evenly items-center">
            <Link
              onClick={redirectToHome}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer group">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/102/102665.png"
                  alt="shop"
                />
                <p className={listNameStyle}>Home</p>
              </li>
            </Link>
            <RouterLink to="/books?query=All Books">
              <li className="cursor-pointer group">
                <img
                  className={listIMGStyle}
                  src="https://cdn-icons-png.flaticon.com/128/2702/2702134.png"
                  alt="books"
                />
                <p className={listNameStyle}>Books</p>
              </li>
            </RouterLink>
            <RouterLink to="cart">
              <li className="cursor-pointer">
                <img
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
                  alt="cart"
                />
              </li>
            </RouterLink>
            <li className="cursor-pointer">
              <img
                className="h-4 w-4 sm:h-6 sm:w-6"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                alt="user"
              />
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <nav className="fixed bg-white h-16 w-screen flex flex-row items-center justify-between z-50">
      <RouterLink onClick={redirectToHome}>
        <div className="ml-4 text-lg font-semibold sm:text-xl md:text-2xl lg:ml-8 cursor-pointer">
          <h1>Bookery</h1>
        </div>
      </RouterLink>
      {renderNavbar()}
    </nav>
  );
};

export default Navigation;
