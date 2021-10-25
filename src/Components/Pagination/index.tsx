import React from "react";
import { observer } from "mobx-react-lite";
import { Flex, Button } from "@chakra-ui/react";

interface IProps {
	goNextPage: () => void;
	goPreviousPage: () => void;
}

const CustomPagination: React.FC<IProps> = (props) =>

	(
		<Flex direction="row" wrap="nowrap" justifyContent="center" >
			<Button onClick={()=>props.goPreviousPage()} m={5} size="lg" fontSize="lg" >Back</Button>
			<Button onClick={()=>props.goNextPage()} m={5} size="lg" fontSize="lg" >Next</Button>
		</Flex>
	)

;

export default observer(CustomPagination);
