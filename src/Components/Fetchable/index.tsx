// MARK: React
import React from "react";

// Mark: Styles
import { observer } from "mobx-react-lite";

// MARK: Components
import Loadable, { ILoadableProps } from "../Loading/loadable";

// MARK: Implementation
interface IProps {
    loadableProps: ILoadableProps;
    hasError?: boolean;
    errorComponent?: React.ReactNode;
}

const Fetchable: React.FC<IProps> = (props) => {
    const {
        children,
        errorComponent,
        hasError,
        loadableProps,
    } = props;

    return (
        <Loadable
            isLoading={loadableProps.isLoading}
            loadingComponent={loadableProps.loadingComponent}
        >
            {(hasError) ? (
                errorComponent
            ) : (
                children
            )}
        </Loadable>
    );
};

export default observer(Fetchable);
