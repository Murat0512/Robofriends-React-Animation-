import React from 'react';  // We need to import react in this file to make the return statement work. We can also import react 
// component from react library but we can also use it without importing it because of the new jsx transform in react 17 and above.
//  But it's a good practice to import it.


const Card = ({name, email, id}) => {
    // We can also use destructuring to get the name, email and id from the props object.
    return (
        <div className= ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt = 'robot' src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;