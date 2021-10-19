import React from 'react';
import { observer } from "mobx-react-lite";
import './index.css';
import { Pagination } from '@mui/material';

interface Iprops {
    pages_total: number;
    page_current: number;
    setPage: (page: number) => void;
}

const CustomPagination: React.FC<Iprops> = (props) =>{

    const handleChangePage = (page: number) => {
        props.setPage(page);
    }

    return(
        <div className="pagination_container">
            <Pagination hideNextButton={false} hidePrevButton={false} count={props.pages_total} page={props.page_current} shape="rounded" color="secondary" size="small" onChange={(event: object, page: number) => handleChangePage(page)} />
        </div>
    )

}

export default observer(CustomPagination);