import React from "react";
import Logo from "../../Images/logo-movies.png";
import { observer } from "mobx-react-lite";
import { Flex, Image, Input } from "@chakra-ui/react";

interface Iprops {
	setFilterTitle?: (title: string) => void;
	doFilter?: () => void;
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
				direction={{ base: "column", md: "row" }}
			>
				<Image
					marginBottom={{ base:"5", md:"0" }}
					src={Logo}
				/>
				{
					props.setFilterTitle
					&& <Input
						w="sm"
						maxW="65vw"
						borderRadius="2xl"
						bgColor="whiteAlpha.900"
						fontWeight="semibold"
						onKeyPress={(e)=>{
							if(props.doFilter && e.key === "Enter"){
								props.doFilter();
							}
						}}
						onChange={handleChangeFilter}
						placeholder="Pesquisar"
					/>
				}
			</Flex>
		</>
	);
};

export default observer(Header);
