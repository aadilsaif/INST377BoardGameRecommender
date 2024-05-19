"use client";
import "../styles/globals.css";
import Link from "next/link";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { AppShell } from '@mantine/core';

/*export const metadata = {
    title: "Board Games Recommendation App",
    description: "I am going to recomend you some board games!",
};*/
 
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript/>
            </head>
            <body>
            <MantineProvider  defaultColorScheme="dark">
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 150, breakpoint: 'sm'}}
                padding="md"
                footer={{ height: 50 }}>
                <AppShell.Header>
                    Board Games Recommendation App
                </AppShell.Header>
                <AppShell.Navbar>
                    <AppShell.Section><h5 className="navtitle">Navigate to Page</h5></AppShell.Section>
                    <NavLink component={Link} href="/" label="Home"/>
                    <NavLink component={Link} href="/quiz" label="Quiz"/>
                    <NavLink component={Link} href="/about" label="About"/>
                </AppShell.Navbar>
                <AppShell.Main>
                    {children}
                </AppShell.Main>
                <AppShell.Footer>
                    <h4>Project by Aadil Saif, Egypt Butler, Allen Liu, and Erick Rivadeniera</h4>
                </AppShell.Footer>
            </AppShell>
            </MantineProvider>
            </body>
        </html>
    );
}

