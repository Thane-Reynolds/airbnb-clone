import * as React from 'react';
import star from '../images/star.png';

export function Card({
   title,
   person,
   img,
   country,
   rating,
   price,
   reviewCount,
}) {
   const [myVar, setMyVar] = React.useState('');
   const [cssClasses, setCSSClasses] = React.useState('');

   function handleClick() {
      setMyVar('hello Thane');
      setCSSClasses(cssClasses === 'card-clicked' ? '' : 'card-clicked');
   }

   return (
      <div className={`card ${cssClasses}`} onClick={handleClick}>
         <div className='card--image-div'>
            <span className='card--context'>SOLD OUT</span>
            <img
               src={`/images/${img}`}
               alt={person}
               className='card--focusimage'
            />
         </div>
         <div className='card--textcontent'>
            <div className='card--ratingandlocation'>
               <img src={star} alt='A star' className='card--star' />
               <span className='card--ratingtext'>{rating}</span>
               <span className='card--people-location'>
                  ({reviewCount}) &#183; {country}{' '}
               </span>
            </div>
            <p className='card--eventdescription'>{title}</p>
            <p className='card--cost'>
               <span className='card--from'>From ${price}</span> / person
            </p>
         </div>
         <h2>{myVar}</h2>
      </div>
   );
}
