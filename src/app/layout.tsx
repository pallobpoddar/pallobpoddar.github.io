import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pallob Poddar",
	description: "Pallob Poddar portfolio website",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<head>
				<link
					href="https://db.onlinewebfonts.com/c/a78cfad3beb089a6ce86d4e280fa270b?family=Calibri"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
