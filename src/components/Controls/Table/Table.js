import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Pagination from "../../Controls/pagination/pagination";

export default class TableComponent extends Component {
  render() {
    return (
      <div className={`white-table ${this.props.className}`}>
        <ReactTable
          data={this.props.data}
          columns={this.props.columns}
          sortable={false}
          filterable={false}
          resizable={this.props.resizable ? this.props.resizable : false}
          showPagination={this.props.nopagination ? false : true}
          showPageSizeOptions={true}
          defaultPageSize={8}
          noDataText={"No data found"}
          minRows={1}
          defaultPage={this.props.pageNum ? this.props.pageNum : 1}
          getTrProps={this.props.onRowClick}
          PaginationComponent={Pagination}
          totalPage={
            this.props.totalPage === undefined ? 0 : this.props.totalPage
          }
          // totalPage={3}
          handlePageClick={this.props.handlePageClick}
          // page={1}
        />
      </div>
    );
  }
}
