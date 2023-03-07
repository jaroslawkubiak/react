import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/button" },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        className="m-3"
        to={link.path}
        key={link.label}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 mr-3 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
