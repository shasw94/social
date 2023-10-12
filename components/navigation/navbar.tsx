"use client"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCalendarDays, faGraduationCap, faRobot } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const features: { title: string; href: string; description: string }[] = [
    {
        title: "Feature 1",
        href: "/docs/primitives/alert-dialog",
        description:
            "This is a random feature to fill in here.",
    },
    {
        title: "Feature 2",
        href: "/docs/primitives/hover-card",
        description:
            "Feature number 2, a short description....",
    },
    {
        title: "Feature 3",
        href: "/docs/primitives/progress",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
        title: "Feature 4",
        href: "/docs/primitives/scroll-area",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
        title: "Feature 5",
        href: "/docs/primitives/tabs",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
        title: "Feature 6",
        href: "/docs/primitives/tooltip",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
]

export function NavBar() {
    const router = useRouter();
    return (
        <NavigationMenu className="bg-[#5D5DF5]">
            <NavigationMenuList className="bg-[#5D5DF5]">
                <div className="flex flex-col md:flex-row items-center justify-between w-screen">
                    <div className="px-4 font-black text-white flex items-center justify-center">
                        <div className="pr-4 text-muted-gray">
                            <FontAwesomeIcon icon={faRobot} size="2xl" />
                        </div>
                        <div>SAMPLE PAGE</div>
                        <div className="pl-4 md:pl-8 text-muted-gray">
                            <FontAwesomeIcon icon={faBorderAll} color="gray" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-max">
                        <NavigationMenuItem className="bg-[#5D5DF5]">
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    SAMPLE PAGE
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Awesome feature description here.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Feature 1">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Feature 2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Feature 3">
                                        Lorem ipsum dolor sit amet
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>More</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {features.map((feature) => (
                                        <ListItem
                                            key={feature.title}
                                            title={feature.title}
                                            href={feature.href}
                                        >
                                            {feature.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </div>
                    <div className="w-full md:w-3/6">
                        <NavigationMenuItem className="flex justify-center">
                            <div className="w-4/6">
                                <Input type="text" placeholder="Search" />
                            </div>
                        </NavigationMenuItem>
                    </div>
                    <div className="px-4">
                        <NavigationMenuItem>
                            <Button type="submit" className="" onClick={()=>router.push('/login')}>
                                Login
                            </Button>
                        </NavigationMenuItem>
                    </div>
                </div>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"