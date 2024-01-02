import { useRouter } from "next/router";
import NextLink from 'next/link';
import { NavigationMenuLink } from "./navigation-menu";

const Link = ({ href, children, ...props }: { href: string, children: React.ReactNode }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href} passHref legacyBehavior>
            <NavigationMenuLink
                className="NavigationMenuLink"
                active={isActive}
                {...props}
            >
                {children}
            </NavigationMenuLink>
        </NextLink>
    );
};

export default Link