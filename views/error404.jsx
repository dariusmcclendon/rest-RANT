let React = require('react')
let Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404 : PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/404.jpg"></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
                
                <p>Oops, sorry, we can't find this page!</p>
                <div></div>
            </main>
        </Def>
    )
}

module.exports = error404