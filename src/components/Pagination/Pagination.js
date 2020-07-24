import React from 'react';
import "./Pagination.scss";
import { NavLink } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <NavLink onClick={(e) => {
                            e.preventDefault();
                            paginate(number)}} exact to="/" className="page-link">
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;
