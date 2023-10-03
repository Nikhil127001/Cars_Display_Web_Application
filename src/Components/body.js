
import Cars from '../cars';
import { useEffect, useState } from 'react';
import '../Home.css'
import ImgMediaCard from './ImageCardComponent';
import { useSelector,useDispatch } from 'react-redux';
import { setCarsData } from '../Redux/reducer';


const Body = () => {
    const dispatch = useDispatch();
    const pageNum = useSelector((state) => state.myReducer.pageNum)

    const searchedCars = useSelector((state) => state.myReducer.carsData)

    const [cars , setcars] = useState([])

    const extractCars = (pagenum) => {
       const startIndex = 6*(pagenum -1);
      try{
        const currentPageCars =  Cars.slice(startIndex, startIndex+6);
        setcars(currentPageCars);
      }catch(err){
        console.log(err);
      }
    }

    useEffect(() => {
        
        extractCars(pageNum?pageNum:1);
    },[pageNum])

    return (
        <div className="Body_Outer">
            <div className="Body_Inner row g-4">
                {
                   (searchedCars.length != 0 ?searchedCars:cars).map((car, idx) => (
                        <ImgMediaCard key={idx} car={car} />
                    )
                    )
                }

            </div>
        </div>
    )
}

export default Body;