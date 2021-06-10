import React from 'react'
import ReactPaginate from "react-paginate";
import "./pagination.css"
import BackPaginationSvg from '../../../assets/images/backPagination.svg';
import NextPaginationSvg from '../../../assets/images/nextPagination.svg';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';



class Pagination extends React.Component {
  render() {
    return (
      <div className="">
        <ReactPaginate
          previousLabel={ <div style={{ marginTop : '-30px',backgroundColor: "darkslategrey",borderRadius: "105px",color:"#ffffff", padding: "5px 15px"}}><KeyboardArrowLeftIcon color="#FFFFFF" /> Previous </div>}
          nextLabel={ <div style ={{ marginTop : '-30px', backgroundColor: "darkslategrey", borderRadius: "105px", color:"#ffffff", padding: "5px 15px"}}>Next <KeyboardArrowRightIcon  color="#FFFFFF"/> </div> }
          // previousLabel={<FastRewindRoundedIcon />}
          // nextLabel={<FastForwardRoundedIcon />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.totalPage}
          marginPagesDisplayed={2}
          // pageRangeDisplayed={5}          
          forcePage={this.props.defaultPage - 1}
          onPageChange={this.props.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    )
  }
}
export default Pagination