let React = require('react')
let Def = require('../default.jsx')

function edit_form(data){
    console.log(data)
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action= {`/places/${data.place.id}?_method=PUT`} >
                <div className = "form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" 
                            id="name" 
                            name="name" 
                            required
                            value={data.place.name}/>
                </div>
                <div className = "form-group">
                    <label htmlFor="pic">Picture URL</label>
                    <input className="form-control" 
                        type="url" 
                        id="pic" 
                        name="pic"/>
                </div>
                <div className = "form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" 
                        id="city" 
                        name="city"
                        value={data.place.city}/>
                </div>
                <div className = "form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" 
                        id="state" 
                        name="state"
                        value={data.place.state}/>
                </div>
                <div className = "form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" 
                        id="cuisines" 
                        name="cuisines" 
                        required
                        value={data.place.cuisines}/>
                </div>
                <input className="btn btn-primary" type="submit" value="Make Changes" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form