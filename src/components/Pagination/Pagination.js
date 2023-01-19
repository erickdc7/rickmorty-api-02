import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setpageNumber, info }) => {
    const [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);
    }, []);


    return (
        <>
            <style jsx>
                {
                    `
                        @media screen and (max-width: 768px) {
                            .next,
                            .prev {
                                display: none;
                            }
                            .pagination {
                                font-size: 14px;
                            }
                        }
                    `
                }
            </style>
            <ReactPaginate
                className="pagination justify-content-center gap-2 my-4"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-outline-dark next"
                previousClassName="btn btn-outline-dark prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                activeClassName="active"
                onPageChange={(data) => { setpageNumber(data.selected + 1) }}
                pageCount={info?.pages}
            />
        </>
    )
}

export default Pagination