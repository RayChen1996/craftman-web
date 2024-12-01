import {
  Noto_Sans_TC,
  Noto_Sans_Mono,
  Noto_Serif_TC,
  Ibarra_Real_Nova,
  Roboto,
  Raleway,
} from "next/font/google";

export const noto_sans_tc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const archivo_black = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const italianno = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});
export const noto_serif_tc = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});
export const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
  display: "swap",
});
export const ibarra_real_nova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--font-ibarra-real-nova",
  display: "swap",
});
