'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Button } from '@/components/ui/button'



export function ThemeToggle(){
    const {theme , setTheme} = useTheme()
    const [ mounted , setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

if(!mounted) return null

const isDark = theme === 'dark'

return (
    <Button
    variant='ghost'
    size="icon"
    onClick = {() => setTheme(isDark ? 'light' : 'dark')}
    className="text-xl"
    >
        {isDark ? <MdOutlineLightMode/> : <MdDarkMode/>}
    </Button>
)





}