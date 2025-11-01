import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export function MobileDrawer() {
  const learnLinks = [
    { href: "/learn/getting-started", label: "Getting Started" },
    { href: "/learn/growing-techniques", label: "Growing Techniques" },
    { href: "/learn/business-guide", label: "Business Guide" },
    { href: "/resources", label: "Resources & Tools" },
  ];

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/training", label: "Training Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
  ];

  return (
    <Drawer>
      <DrawerTrigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-foreground shadow-sm transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        aria-label="Open navigation menu"
      >
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6 items-start text-left">
          <Link
            href="/"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <Icons.logo className="w-auto h-[40px]" />
            <DrawerTitle>{siteConfig.name}</DrawerTitle>
          </Link>
          <DrawerDescription>{siteConfig.description}</DrawerDescription>
        </DrawerHeader>
        <nav className="px-6 pb-6 space-y-6">
          <div className="grid gap-3">
            {primaryLinks.map((link) => (
              <DrawerClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-transparent px-4 py-2 text-base font-medium text-foreground transition hover:border-input hover:bg-muted"
                >
                  {link.label}
                </Link>
              </DrawerClose>
            ))}
          </div>
          <div className="rounded-xl border bg-muted/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Learn
            </p>
            <div className="mt-3 grid gap-2">
              {learnLinks.map((link) => (
                <DrawerClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </div>
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Link
              href="/learn/getting-started"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
              )}
            >
              {siteConfig.cta}
            </Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
