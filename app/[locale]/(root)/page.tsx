"use client"
import { useTranslations } from "next-intl"

export default function Page() {
    const t = useTranslations("Home");

  return (


    <div className="flex flex-col">
      { t("welcomeMessage") }
    </div>  
  )
}
