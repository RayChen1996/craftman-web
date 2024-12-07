interface OptionsType {
  clickFn?: () => void;
  href: string;
  name: string;
}
export const options: OptionsType[] = [
  {
    name: "Product",
    href: "/products",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const footerOptions: OptionsType[] = [
  {
    name: "Purchase Policy",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Terms & Conditions",
    href: "/",
  },
];
