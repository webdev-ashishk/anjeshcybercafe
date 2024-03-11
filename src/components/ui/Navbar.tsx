import { DarkMode } from "../DarkMode";

export default function Navbar() {
  return (
    <div className="absolute z-10 light:text-blue-400 mt-10 w-full">
      <nav className="flex justify-between text-2xl ">
        <div className="logo mx-10">logo</div>
        <ul className="flex gap-10 mx-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <div className="services">
            Services
            <ul id="servicesItems" className="services-items rounded-lg mx-3">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <DarkMode />
        </ul>
      </nav>
    </div>
  );
}
