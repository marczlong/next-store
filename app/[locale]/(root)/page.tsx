"use client";

import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";
import { useTranslations } from "next-intl";
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = () => {
  // const t = useTranslations("Home");

  return (
    <div className="flex flex-col">
      {/* { t("welcomeMessage") } */}

      <ProductList data={sampleData.products} title="Products" limit={4} />
    </div>
  );
};
export default HomePage;
