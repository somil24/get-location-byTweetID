import express from 'express';
import cors from "cors"
import morgan from "morgan"
import { TwitterApi } from 'twitter-api-v2'
import configFN from './config/config';
import getTweetDataRoute from './routes/getTweetDataRoute';


const config = configFN(process.env.NODE_ENV || "development");
const BEARER_TOKEN=config.BEARER_TOKEN;
const PORT = config.PORT || 5000;

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(getTweetDataRoute)


app.get("/test/v1",(req:any,res:any)=>{
    res.send("Hello World");
    console.log("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });

export const client = new TwitterApi(BEARER_TOKEN);


