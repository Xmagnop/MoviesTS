// MARK: React
import React from "react";

// MARK: Mobx
import { observer } from "mobx-react-lite";

// MARK: Implementation
export interface ILoadableProps {
	isLoading: boolean;
	loadingComponent: React.ReactElement;
}

const Loadable: React.FC<ILoadableProps> = (props) => {
	const {
		children,
		isLoading,
		loadingComponent,
	} = props;

	return (
		isLoading
			? loadingComponent
			: (
				<>
					{children}
				</>
			)
	);
};

export default observer(Loadable);
