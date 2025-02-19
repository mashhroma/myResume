import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Савкина Мария - frontend-разработчик",
	description: "Это мое резюме :)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body>{children}</body>
		</html>
	);
}
