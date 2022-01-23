const express=require('express');
const { json } = require('express/lib/response');

const app=express();

const Joi=require('joi'); //return a class

app.use(express.json);

const cArray=[
    {id:1,name:'c1'},
    {id:2,name:'c2'},
    {id:3,name:'c3'}
]

        //url   //function
app.get('/',(req,res)=>{

   // console.log("get req: hello");
   res.send('get req: hello');

});

app.get('/api/courses',(req,res)=>{

    res.send([1,3,4,9])
});

app.get('/api/courses/:id',(req,res)=>{

    const course=cArray.find(cc=>cc.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send("course cant found")
    }else{
        
        res.send(course.name);
        

    }
    


});


app.post('/api/courses',(req,res)=>{

    const schema={
        name:Joi.string().max(10).min(5)
    }

    const result=Joi.validate(req.body.schema);

    if(result.error){

        res.status(404).send(result.error.details[0].message);
        return;
    }

    const newCourse={
        id:cArray.length+1,
        name:req.body.name
    }

    cArray.push(newCourse);
    res.send(newCourse);

})

const port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`connected on port ${port}`));