let React = require('react')
let Def = require('../default')

function index(data) {
    let cardStyle = {
        margin : '2em',
        height : '75%',
    }
    let placesFormatted = data.places.map((place)=> {
        return (
            <div class='card border-dark mb-3' style={cardStyle}>
                <img src={place.pic} alt={place.name} class="card-img-top"></img>
                <div class='card-body'>
                    <h2 class='card-title'>
                        <a href={`/places/${place.id}`}>
                        {place.name}
                        </a></h2>
                    <p className="text-center">
                        {place.cuisines}
                    </p>
                    
                    <p className='text-center'>
                        Located in {place.city}, {place.state}
                    </p>
                </div>
            </div>
                
        )
    })
    return (
        <Def>
            <main>
                <h1 className='text-center'>Places!</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index