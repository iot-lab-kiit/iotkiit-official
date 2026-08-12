"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageNotFound = () => {
	const asPath = usePathname();
	const [path, setPath] = useState(asPath);
	useEffect(() => {
		setPath(asPath);
	}, [asPath]);
	return (
		<>
			<ThemeProvider
				theme={createTheme({
					palette: {
						primary: {
							main: "#4763B7",
						},
					},
				})}
			>
				<div className="flex w-full flex-col items-center justify-center md:h-[93vh] pt-8">
					<Image
						src="/images/closed-img.svg"
						alt="closed"
						height={225}
						width={303}
					/>

					<div className="mt-5 text-center leading-[1.2] text-[34px] md:text-[44px]">
						we don&apos;t any page with name
						<span
							style={{
								fontSize: "50px",
								fontWeight: 700,
								color: "red",
							}}
						>
							{" " + path}
						</span>
					</div>
					<div className="mt-3 md:mt-1" />
				</div>
				<div className="mt-10 md:mt-0" />
			</ThemeProvider>
		</>
	);
};

export default PageNotFound;
