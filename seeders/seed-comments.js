let db = require('../models')

async function seed(){
    //Get the place
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    //Create sample comment
    let comment = await db.Comment.create({
        author: "Famished Fran",
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //add comment to place's comment array
    place.comments.push(comment.id)

    //save the place
    await place.save()

    //Exit the process
    process.exit()
}



seed()