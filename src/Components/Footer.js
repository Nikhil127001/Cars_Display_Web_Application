
import { useSelector } from 'react-redux';
import '../Home.css'
import PaginationComponent from './paginationComponent';

const Footer = () => {
    const pagesReached =  useSelector((state) => state.myReducer.pageNum)
    return (
        <div className="Footer_Outer">
            <div className="Footer_Inner">
                <text className='foot_text'>
                    {pagesReached*6} from 60
                </text>
                <div className='Foot_pagination'>
                <PaginationComponent/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;