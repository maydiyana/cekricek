"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div class="ml-auto mt-1">
      <button onClick={() => setTheme('light')}><span>☀️</span></button>
      <button onClick={() => setTheme('dark')}><span>🌙</span></button>
    </div>
  )
}
 export default ThemeChanger
