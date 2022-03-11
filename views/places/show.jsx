let React = require('react')
let Def = require('../default')

function show(data){
    let commentStyle={
        margin: '4px',
    }
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    let rating = (
        <h4 classname="inactive">
            Not yet rated
        </h4>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c)=>{
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
            stars +='⭐️'
        }
        rating = (
            <h4>
                {stars} stars
            </h4>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border container bg-white" style={commentStyle}>
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className='btn btn-danger' value="Delete Comment"></input>
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
            <h1 className='text-center'>{data.place.name}</h1>
                <div className="row">
                    <div className="col">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid border"></img>
                        <p>Located in {data.place.city}, {data.place.state}</p>
                        
                    
                    </div>
                    <div className="col">
                        
                        <h2>Description</h2>
                            <h3 class='text-secondary'>
                            {data.place.showEstablished()}
                            </h3>

                            <h4 class='text-secondary'>
                                Serving {data.place.cuisines}
                            </h4>
                            <h2>Rating</h2>
                            {rating}
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                            </a>
                            <form method="POST" action={`places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                Delete
                                </button>
                            </form>
                    </div>
                        
                </div>
                       
                <div>
                    <h2>Comments</h2>
                    <div>
                        <h3>Add A Comment</h3>
                        <form method="POST" action={`/places/${data.place.id}/comment`}>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input className="form-control" 
                                        id="author" 
                                        name="author" 
                                        required
                                        />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Your comment here...</label>
                                <input className="form-control" 
                                        id="content" 
                                        name="content" 
                                        required
                                        />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stars">Star Rating</label>
                                <input className="form-control" 
                                        id="star-rating" 
                                        name="stars"
                                        type="number"
                                        step="0.5" 
                                        required
                                        />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rant">Rant</label>
                                <input 
                                        id="rant" 
                                        name="rant" 
                                        type="checkbox"
                                    
                                        />
                            </div>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </div>
                    {comments}
                </div>
                
               

                
                
            </main>
        </Def>
    )
}

module.exports = show