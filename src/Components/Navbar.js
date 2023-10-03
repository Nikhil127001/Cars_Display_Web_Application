import Cars from '../cars'
import { useEffect, useState } from 'react'
import '../Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCarsData } from '../Redux/reducer'

const Navbar = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const handleSearch = () => {
        if (search !== '') {
            const filteredcars = Cars.filter((cars) => cars.make.toLowerCase().includes(search.toLowerCase()))

            console.log(filteredcars)

            if (filteredcars.length !== 0) {
                dispatch(setCarsData(filteredcars))
            }
        } else {
            dispatch(setCarsData([]))
        }
    }
    useEffect(() => {
        handleSearch()
    }, [search])


    return (
        <div className="Navbar_Outer">
            <div className="Navbar_Inner">
               <div className='Nav_search_outer'>
               <input className='Nav_search'
                    value={search}
                    placeholder='Search..' onChange={(e) => { setSearch(e.target.value) }} />
                    <i className="bi bi-search Nav_search_icon"></i>
               </div>

                <div className='Nav_DropDown'>
                    <text>Relevance</text>
                    <i className="bi bi-chevron-down downIcon"></i>

                </div>
                <div className='Nav_DropDown'>
                    <text>All brands</text>
                    <i className="bi bi-chevron-down downIcon"></i>

                </div>
            </div>
        </div>
    )
}

export default Navbar;