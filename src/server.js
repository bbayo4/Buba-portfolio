import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb'; // allows us to connect to our local db
import path from 'path'

[
  {
    name: 'learn-react',
    upvotes: 0,
    comments: [],
  }, {
    name: 'learn-node',
    upvotes: 0,
    comments: [],
  }, {
    name: 'my-thoughts-on-resumes',
    upvotes: 0,
    comments: [],
  },
]

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client/build')));
app.use(bodyParser.json());

// const uri = "mongodb+srv://bbayo:Seygal%40q15b@cluster0-gkxuc.mongodb.net/test?retryWrites=true&w=majority"
// function take care all of the setup and tear down of our DB
const withDB = async (operations, res) => {
  try{
    // db connection logic
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true})
    const db = client.db('buba-portfolio');

    await operations(db);

    client.close() // close our db

  } catch (error){
    res.status(500).json({message: 'Error connecting to db', error});
  }
}
// GET associated blogs
app.get('/api/blogs/:name', async (req, res) => {
  withDB(async (db) => {

    const blogName = req.params.name;
    const blogInfo = await db.collection('blogs').findOne({name: blogName})
    res.status(200).json(blogInfo);

  }, res)
})
// POST method for upvote
app.post('/api/blogs/:name/upvote', async (req, res) => {
  withDB(async (db) => {
    const blogName = req.params.name;
    // Query our db to find the blog which match our url
    const blogInfo = await db.collection('blogs').findOne({name: blogName});

    // Query to increment upvotes
    await db.collection('blogs').updateOne({name: blogName}, {
      '$set': {
        upvotes: blogInfo.upvotes + 1,
      }
    });

    // we update updatedBlogInfo
    const updatedBlogInfo = await db.collection('blogs').findOne({name: blogName});
    res.status(200).json(updatedBlogInfo);
  }, res);
});

// POST method for comments
app.post('/api/blogs/:name/add-comment', (req, res) => {
  const {username, text} = req.body;
  const blogName = req.params.name;

  withDB(async (db) => {
    const blogInfo = await db.collection('blogs').findOne({name: blogName})
    await db.collection('blogs').updateOne({name: blogName}, {
      '$set': {
        comments: blogInfo.comments.concat({username, text})
      }
    });
    const updatedBlogInfo = await db.collection('blogs').findOne({name: blogName});
    res.status(200).json(updatedBlogInfo);
  }, res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/build/index.html'));
})
// App listen in 8000
app.listen(8000, () =>
  console.log('bubabayo.com is listening on port 8000!'),
);
