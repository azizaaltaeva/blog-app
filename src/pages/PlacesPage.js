import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Places from '../components/Places/Places'
import MainLayout from '../layouts/MainLayout'
import { fetchPlaces } from "../store/actions/blogsActions";

const PlacesPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogsReducer.blogs);
  const [page, setPage] = useState(0);

  const blogPerPage = 6;

  const pageCount = Math.ceil(blogs.length / blogPerPage); 

  const pageVisited = page * blogPerPage;

  const paginateBlogs = blogs.slice(pageVisited, pageVisited + blogPerPage);

  const changePage = ({ selected }) => {
      setPage(selected);
  }
  
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);


  return (
    <MainLayout>
      <Places blogs={paginateBlogs} />
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
  )
}

export default PlacesPage
