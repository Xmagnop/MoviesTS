import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import { observer } from "mobx-react-lite";
import '../../Views/Home/index.css';

const ContainerLoading: React.FC = () => <div className="list-container"><LoopCircleLoading /></div>;

export default observer(ContainerLoading);