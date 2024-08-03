import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Scroll from "./Scroll/Scroll";
 
const firaSans = Fira_Sans({
  subsets: ["latin"],  
  weight: "400",       
});

export const metadata = {
  title: "Chennai | Digital print",
  description: "Digital print in Chennai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Scroll />
        {children}
      </body>
    </html>
  );
}
