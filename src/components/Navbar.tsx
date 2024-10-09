import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
         }}
      >
         {["Home", "About", "Profile"].map((item) => (
            <Link
               to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
               }`}
            >
               {item}
            </Link>
         ))}
      </div>
   );
};

export default Navbar;
