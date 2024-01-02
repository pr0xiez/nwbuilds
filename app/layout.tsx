import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from 'geist/font/sans';
import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'nwbuilds',
  description: 'New World game build info',
}

const menuContentClassName = "p-3 flex flex-col space-y-1"
const linkClassname = "dark:hover:bg-zinc-800 hover:bg-zinc-300 rounded p-1.5"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className="border-b flex space-x-4 h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <HomeIcon className="h-[1.2rem] w-[1.2rem] text-jade-500 cursor-pointer" />
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>DPS</NavigationMenuTrigger>
                    <NavigationMenuContent className={menuContentClassName}>
                      <Link href="rapier" legacyBehavior passHref>
                        <NavigationMenuLink className={linkClassname}>Rapier</NavigationMenuLink>
                      </Link>
                      <Link href="spear" legacyBehavior passHref>
                        <NavigationMenuLink className={linkClassname}>Spear</NavigationMenuLink>
                      </Link>
                      <Link href="greatsword" legacyBehavior passHref>
                        <NavigationMenuLink className={linkClassname}>Greatsword</NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Heal</NavigationMenuTrigger>
                    <NavigationMenuContent className={menuContentClassName}>
                      <Link href="lifestaff" legacyBehavior passHref>
                        <NavigationMenuLink className={linkClassname}>Lifestaff</NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
                {/* <NavigationMenuIndicator /> */}
              </NavigationMenu>
              </div>

              {/* 
              <Link href="spear" legacyBehavior passHref>
                        <NavigationMenuLink>Spear</NavigationMenuLink>
                      </Link>
                      <Link href="greatsword" legacyBehavior passHref>
                        <NavigationMenuLink>Greatsword</NavigationMenuLink>
                      </Link>
                      <Link href="blunderbuss" legacyBehavior passHref>
                        <NavigationMenuLink>Blunderbuss</NavigationMenuLink>
                      </Link>
              */}

              <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
