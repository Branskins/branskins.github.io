"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, type NavLinkProps } from "@portfolio/ui";

const NAV_ITEMS = [
  { index: "01", label: "index", href: "/" },
  { index: "02", label: "projects", href: "/projects" },
  { index: "03", label: "blog", href: "/blog" },
  { index: "04", label: "cv", href: "/cv" },
];

function NextNavLink({ href, className, children }: NavLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <Nav
      brand={
        <>
          YOUR_NAME<span>_</span>
        </>
      }
      items={NAV_ITEMS}
      activeHref={pathname}
      linkComponent={NextNavLink}
    />
  );
}
