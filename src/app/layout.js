import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <header style={{ 
        padding: "2rem",
      }}
      >
        
        <Image src="/logo_color.svg" alt="KiteMill Logo" width={150} height={150} />
        
    </header>{children}
    <footer
    style={{ 
      padding: "1rem",
    }}>
    </footer>
  </body>
</html>
     
  );
}
