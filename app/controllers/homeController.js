const People = require("../models/person")
function homeController(){
    return{
        index(req,res){
            
            People.find({},function(err,result){
                res.render("index",{result})
            })
        },
        register(req,res){
            res.render("Register")
        },
        postMethod(req,res){
       
        const {name,age,phone,gender} = req.body

           const person = new People()
           person.Name = name
           person.age=age
           person.gender=gender
           person.mobileNumber = phone

           person.save()
           res.redirect("/")

        },
        edit(req,res){
            res.render("edit")
        },
        update(req,res){
           
            People.findOneAndUpdate({_id:req.params.id},{
                Name:req.body.name,
                age:req.body.age,
                gender:req.body.gender,
                mobileNumber:req.body.phone

            },{ new: true },(err,result)=>{
                if(!err){
                    res.redirect("/")
                }
            })
        },
        delete(req,res){
            People.findByIdAndDelete({_id:req.params.id},(err,result)=>{
                if(!err){
                    res.redirect("/")
                }else{
                    console.log("deletion failed");
                }
            })
        }

    }
}
module.exports = homeController