import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  const locale = useLocale();
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href={`/${locale}/cart`}>
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/${locale}/user`}>
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href={`/${locale}/cart`}>
                <ShoppingCart />
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href={`/${locale}/user`}>
                <UserIcon />
                Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
