"use client"

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" className="flex items-center gap-2 h-9 px-3">
                {/* <SunIcon className="h-4 w-4" />
                <span className="text-sm">Theme</span> */}
            </Button>
        )
    }

    return (
        <Button 
            variant="ghost" 
            className="flex items-center gap-2 h-9 px-3"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? (
                <SunIcon className="h-4 w-4" />
            ) : (
                <MoonIcon className="h-4 w-4" />
            )}
            <span className="text-sm">
                {theme === "light" ? "Light" : "Dark"}
            </span>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ModeToggle