let React = require('react')
let Def = require('../default')

function show(data){
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} className="float-left"></img>
                    <p>Located in {data.place.city}, {data.place.state}</p>
                    <h1>{data.place.name}</h1>
                    <div className="col-sm-6">
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </div>
                    <div className="col-sm-6">
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                    <div>
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
                        <h1>Add A Comment</h1>
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
                                <input className="form-control" 
                                        id="rant" 
                                        name="rant" 
                                        type="checkbox"
                                        required
                                        />
                            </div>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </div>
                    {comments}
                </div>
                </div>
               

                
                
            </main>
        </Def>
    )
}

module.exports = show