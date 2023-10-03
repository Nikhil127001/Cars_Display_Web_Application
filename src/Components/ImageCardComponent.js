import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../images/sample.jpg'
import '../Home.css'

export default function ImgMediaCard(props) {

    const {car } = props;
    return (
        <Card className='Card' sx={{ maxWidth: 350, height: 400, backgroundColor: '#edf0f7', borderRadius: 4 }}>
            <div className='ImageComponent'><img className='ImageSize' src={car.imageURL} alt='Nothing to Show' /></div>
            <CardContent className='cardBottomComp'>
               <div style={{display:'flex' , flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center'}}>
               <Typography gutterBottom variant="h5" component="div">
                    {car.make}
                </Typography>
                <text style={{border: '1px dashed #000', padding : '2px', width: '53px', borderRadius: '20px', fontSize: '13px',display: 'flex', justifyContent : 'center', fontWeight: '700'}} >{car.year}</text>
               </div>
                <div className='cardDetails'>
                    <div className='colu'>

                        <div className='detailsItems'>
                            <i class="bi bi-people-fill"></i>
                            <text className='icons'> {car.sittingCapacity} people</text>
                        </div>

                        <div className='detailsItems'>
                        <i class="bi bi-speedometer"></i>

                            <text className='icons'>{car.average} km/1-litre</text>
                        </div>
                    </div>
                    <div className='colu'>
                        <div className='detailsItems'>                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fuel-pump-fill" viewBox="0 0 16 16">
  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z"/>
</svg>
<text className='icons'>{car.fuelType}</text>
</div>
                        <div className='detailsItems'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
</svg>
                            <text className='icons'>{car.type}</text>
</div>

                    </div>
                    
                </div>
                <hr/>
                <div className='Card_Bottom'>
                    <text>
                        <text style={{fontSize: '19px', fontWeight: '500'}}>${car.rentPrice}</text>/month
                    </text>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button style={{height : '25px', width: '25px', display : 'flex', justifyContent: 'center', alignItems: 'center',
                    border: '1px'
                    , borderRadius: '7px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', marginRight: '10px'}}>
                    <i class="bi bi-heart"></i>

                        </button>
                        <button style={{height : '25px', width: '25px', display : 'flex', justifyContent: 'center', alignItems: 'center',
                    border: '1px'
                    , borderRadius: '7px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width : '80px', backgroundColor: 'blueviolet', color: 'white', fontSize: '12px'}}>
                    Rent now

                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}