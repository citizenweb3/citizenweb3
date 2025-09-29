import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Citizen Web3",
    description: "Non‑custodial, privacy‑focused, self‑hosted validator",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>{children}</body>
        </html>
    )
}