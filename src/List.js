import React from 'react';

class List extends React.Component {

    render() {
        return(
            <> 
            {
                this.props.people.map((person) => {
                    const {id, name, image, age} = person;
                    return ( 
                        <article key={id} className='person'>
                            <img src={image} alt={name}></img>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>
                    );
                })
            }  
            </>  
        );
    };    
}

export default List;