"use client";
import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

type Props = {};

const ModeToggle = (props: Props) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	}, [darkMode]);

	return (
		<span
			onClick={() => {
				setDarkMode(!darkMode);
			}}
			className=''
		>
			{darkMode ? <MdSunny className="h-5 w-5 text-textDark"/> : <IoMoon className="h-5 w-5"/>}
		</span>
	);
};

export default ModeToggle;
