// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import postRoutes from './routes/posts.js';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config(); 

// app.use(bodyParser.json({limit:"30mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
// app.use(cors());

// app.use('/posts',postRoutes);

// //const CONNECTION_URL = process.env.CONNECTION_URL;

// //const CONNECTION_URL = 'mongodb+srv://memories:1234@cluster0.9bybbnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env. CONNECTION_URL)
// .then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
// .catch((error) => console.log(error.message));

// //mongoose.set('useFindAndModify',false);





import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config(); 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
