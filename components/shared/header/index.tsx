'use client'; 

import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";
import { useLocale, useTranslations } from 'next-intl';

const Header = () => {
  const locale = useLocale();

  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${APP_NAME} logo`}
            width={50}
            height={50}
            priority={true}
            fetchPriority="high"
          />
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>

        <div className="flex items-center gap-2 bg-amber-300">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href={`/${locale}/cart`}>
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={`/${locale}/user`}>
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
