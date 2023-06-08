const {MongoClient} = require('mongodb');


async function main(){

  const uri = "mongodb+srv://testcse_341class:moicanoTlacatl@cluster0.hjruwih.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try{
    await client.connect();

    /*await createListing(client, {
      name:"Lovely loft",
      summamry:"A charming loft in Paris",
      bedrooms: 1,
      badrooms: 1

    });*/

    await createMultipleListings(client, [
      {
      name:"Lovely loft",
      summamry:"A charming loft in Paris",
      bedrooms: 1,
      badrooms: 1
      },
      {
        name:"Infinite Views",
        summamry:"Modern home with infinite views from the infinite pool",
        property_type: "house",
        bedrooms: 5,
        badrooms: 4.5,
        beds: 5
        },

     ])

    //await listDatabases(client);



  }catch(e){
    console.error(e);
  }finally{
    await client.connect();
  }

}

main().catch(console.error);
async function findListingByName(client, nameOfListing){
  
}

async function createMultipleListings(client, newListing){
  const result = await client.db("sample_airbnb").collection("ListingsAndReviews").insertMany(newListing);
  console.log(`${result.insertedCount} new listings created with the following id(s):`);
  console.log(result.insertedIds);
}

async function createListing(client, newListing){
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  
  console.log(`New Listing created with the following id: ${result.insertedId}`)

};

async function listDatabases(client){

  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ")
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`)
    
  });

}