let React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            </head>
            
            <body className="bg-light">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class='container'>
                        <a class="navbar-brand" href="/">Rest-Rant</a>
                        <div id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a href="/" class="nav-link active">Home</a></li>
                                    
                                <li class="nav-item active">
                                    <a href="/places" class="nav-link">Places</a></li>
                                <li class="nav-item active">
                                    <a href="/places/new" class="nav-link">Add A Place</a></li>
                            </ul>
                        </div>
                    </div>
                        
                        
                </nav>
            <div class='container'>
                
                {html.children}
            </div>
                
            </body>
        </html>
    )

}

module.exports = Def