import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {[
            { name: "Facebook", href: "https://facebook.com" },
            { name: "Instagram", href: "#" },
            { name: "Twitter", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "YouTube", href: "#" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {/* Add appropriate icon here */}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; © {new Date().getFullYear()} TechInnovate Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
