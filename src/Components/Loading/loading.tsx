import React from "react";
import { LoopCircleLoading } from "react-loadingg";
import { observer } from "mobx-react-lite";

const ContainerLoading: React.FC = () => <div style={{ height: "100vh" }}><LoopCircleLoading /></div>;

export default observer(ContainerLoading);
