import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

function Header() {
  return (
    <header>
      <Heading title="DevCompass" subtitle="Level Up Your Learning Journey" />
      <ul>
        <Navbar title="Profile" id="001" />
      </ul>
    </header>
  );
}

export default Header;
