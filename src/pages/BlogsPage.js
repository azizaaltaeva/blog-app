import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../components/Blogs/Blogs";
import MainLayout from "../layouts/MainLayout";
import { fetchBlogs } from "../store/actions/blogsActions";
import './pages.scss';

const BlogsPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogsReducer.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const [page, setPage] = useState(0);

  const blogPerPage = 6;

  const pageCount = Math.ceil(blogs.length / blogPerPage); 

  const pageVisited = page * blogPerPage;

  const paginateBlogs = blogs.slice(pageVisited, pageVisited + blogPerPage);

  const changePage = ({ selected }) => {
      setPage(selected);
  }

  const { loading, error } = useSelector((state) => state.blogsReducer.blogs);
  return (
    <MainLayout>
      {loading && <h1>...Loading</h1>}
      {!loading && error && <h1>{error}</h1> }
      {!loading && blogs.length > 0 && <Blogs blogs={paginateBlogs} /> }
      <ReactPaginate 
                previousLabel={'<'} 
                nextLabel={'>'} 
                pageCount={pageCount} 
                onPageChange={changePage} 
                containerClassName="pagination" 
                previousLinkClassName="previousBtn" 
                nextLinkClassName="nextBtn" 
                activeClassName="activeBtn" 
                disabledClassName="disabledBtn" 
      />
    </MainLayout>
  );
};

export default BlogsPage;
