import type { NavbarProps } from "./Navbar.types";

function Navbar({ title, id }: NavbarProps) {
  return (
    <li>
      <p id={id}>{title}</p>
    </li>
  );
}

export default Navbar;
