import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "../../src/css/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Condorman Hotel",
    description: "Gestion de l'hotel Condorman",
};

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={montserrat.variable}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Toaster position="center" />
                {children}
            </body>
        </html>
    );
}
