import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import { observer } from "mobx-react-lite";

const ContainerLoading: React.FC = () => <LoopCircleLoading />;

export default observer(ContainerLoading);