import Link from "next/link";

const NavbarItem: React.FC<{
  text: string;
  route: string;
  children?: React.ReactNode;
}> = ({ text, route, children }) => {
  return (
    <li className="h-fit hidden lg:inline-block md:hidden sm:hidden">
      <Link
        href={`/${route}`}
        className="p-2 inline-block ease-in-out duration-150 hover:text-purple-600"
      >
        {text}
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;
