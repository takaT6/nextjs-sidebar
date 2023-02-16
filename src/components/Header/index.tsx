import { useState } from "react";
import classes from "src/components/Header/Header.module.css"
import Siderbar from "../Sidebar"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen);
	};
	return (
		<>
			<header className={classes.header}>

				<div className={classes.hamburger} onClick={handleClick}>🍔</div>
				This is header.
			</header>

			{isOpen && <Siderbar />}
		</>
	)
}

export default Header