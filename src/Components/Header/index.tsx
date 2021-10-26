import React from "react";
import Logo from "../../Images/logo-movies.png";
import "./index.css";
import { observer } from "mobx-react-lite";
import { Flex, Image, Input } from "@chakra-ui/react";

interface Iprops {
	setFilterTitle?: (title: string) => void;
}

const Header: React.FC<Iprops> = (props) => {
	const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (props.setFilterTitle) {
			props.setFilterTitle(e.target.value);
		}
	};

	return (
		<>
			<Flex
				alignItems="center"
				justifyContent="space-around"
				p={5}
			>
				<Image src={Logo} />
				{
					props.setFilterTitle
					&& <Input
						w="sm"
						borderRadius="2xl"
						bgColor="whiteAlpha.900"
						fontWeight="semibold"
						onChange={handleChangeFilter}
						placeholder="Pesquisar"
					/>
				}
			</Flex>
			{/* <div className="header" >
				<img alt="logo" src={Logo} className="Logo-img" onClick={()=>history.push("/home")} />
				{props.setFilterTitle && <input className="search-input" onChange={handleChangeFilter} placeholder="Pesquisar" />}
			</div> */}
		</>
	);
};

export default observer(Header);
