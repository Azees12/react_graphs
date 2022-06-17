import React from 'react'
import {DataGrid} from "@mui/x-data-grid";

function Table(props) {
  return (
    <DataGrid
         rows={props.props.data}
         columns={props.props.columns}
         pageSize={5}
         rowsPerPageOptions= {[5]}
         
         
    />
  )
}

export default Table