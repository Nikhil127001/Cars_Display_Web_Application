import { useSelector ,useDispatch} from "react-redux"
import { setPageNum } from "../Redux/reducer"
import { Link } from "react-router-dom";

const PaginationComponent = () => {
    const dispatch = useDispatch();

    const currentPageNum = useSelector((state) => state.myReducer.pageNum);
    const handlePageClick = (pageNumber) => {
        dispatch(setPageNum(pageNumber));
      };

      const length = 10;

      let arr = Array.from({ length }, (_, index) => index + 1);


    return(
        <nav aria-label="Page navigation example">
  <ul class="pagination">
  {currentPageNum > 1 ? <li onClick={() => handlePageClick(currentPageNum-1)}  className="pages"><Link className="pageLinks" to={`/page/${currentPageNum-1}`}> <span aria-hidden="true">&laquo;</span></Link></li>
  :
  <li className="Button_disabled"> <span aria-hidden="true">&laquo;</span></li>
  }

    {arr.map((page,idx) => (<li key={idx} onClick={() => handlePageClick(page)}  className="pages"><Link className="pageLinks" to={`/page/${page}`}>{page}</Link></li>))}

    {currentPageNum < 10 ? <li onClick={() => handlePageClick(currentPageNum+1)}  className="pages"><Link className="pageLinks" to={`/page/${currentPageNum + 1}`}> <span aria-hidden="true">&raquo;</span></Link></li> : <li className="Button_disabled"> <span aria-hidden="true">&raquo;</span></li>}
  </ul>
</nav>
    )
}

export default PaginationComponent