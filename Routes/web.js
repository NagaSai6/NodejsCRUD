const homeController = require("../app/controllers/homeController")


function initRoutes(app){
    app.get("/",homeController().index)
    app.get("/person",homeController().register)
    app.get("/person/:id",homeController().edit)
//     app.get("/lbsnaa/:id",homecontroller().back)
    app.get("/personDelete/:id",homeController().delete)

    app.post("/register",homeController().postMethod)

    app.post("/person/:id",homeController().update)

    
}

module.exports = initRoutes
