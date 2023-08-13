
    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "mongo_1"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('An Error has Occured')
        }
        console.log('All Perfect')

        const db = res1.db(dbname)

    //////////////////////////////////////////////////////////////

        // insertOne [2]

        db.collection('users').insertOne({
            name : 'Sara',
            age : 22
        },(error , data) => {
            if(error){
                console.log('Unable to insert this Data')
            }
            console.log(data.insertedId)
        })

        db.collection('users').insertOne({
            name : 'Ali',
            age : 33
        },(error , data) => {
            if(error){
                console.log('Unable to insert this Data')
            }
            console.log(data.insertedId)
        })

        //////////////////////////////////////////////////////////////
        
        // insertMany [10-------- 5 of them "age=25" ]

        db.collection ('users').insertMany(
           [ {
                name: 'Hagar',
                age: 25
            },
            {
                name: 'Adel',
                age: 30
            },
            {
                name: 'Reem',
                age: 25
            },
            {
                name: 'Sama',
                age: 24
            },
            {
                name: 'Ahmed',
                age: 45
            },
            {
                name: 'Hadeer',
                age: 22
            },
            {
                name: 'Anas',
                age: 25
            },
            {
                name: 'Mahmoud',
                age: 25
            },
            {
                name: 'Elham',
                age: 23
            },
            {
                name: 'Aya',
                age: 25
            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            } 
        )
    ////////////////////////////////////////////////////////////////////
    // Find Who have [25 years]
      
      db.collection('users').find({age:25}).toArray((error , users)=>{
        if (error) {
            return console.log('An Error has Occured')
        }
        console.log(users)
      })
    /////////////////////////////////////////////////////

    // [limit first 3 persons have "25 years"] 

      db.collection('users').find({age:25}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('An Error has Occured')
        }
        console.log(users)
      })

    ////////////////////////////////////////////////////////

    // Update Names of first 4 persons
    //[1]
      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7465")},{
        $set:{name : "Asmaa" },
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

    // [2]
      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7466")},{
        $set:{name : "Hazem" },
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

    // [3]
    db.collection("users").updateOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7467")},{
        $set:{name : "Hoda" },
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

   // [4]
   db.collection("users").updateOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7468")},{
    $set:{name : "Mostafa" },
  }).
  then((data1)=> {console.log(data1.modifiedCount)})
  .catch((error)=> {console.log(error)})

    /////////////////////////////////////////
    //increament [20 years for 1st person]    

      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7465")},{
        $inc:{age : 20}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

    ////////////////////////////////////////////////////////////////

    //increament [10 years for all persons]

      db.collection("users").updateMany({},{
        $inc : {age : 10}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
   
    //////////////////////////////////////////////////////////////

    //Delete 1st person
    
       db.collection("users").deleteOne({_id:mongodb.ObjectId("64d8e3a25b1b4045716a7465")})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))

    //////////////////////////////////////////////////////

    // Delete persons have 35 years
    
       db.collection("users").deleteMany({age:35})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))

 })
     


