'use client'; 

import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { useLocale, useTranslations } from 'next-intl';
import Link from "next/link";
import Menu from "./menu";

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

        <Menu />
      </div>
    </header>
  );
};

export default Header;
