import asynHandler from "../middleware/async";
import ErrorResponse from "../utils/errorResponse";
import { Request,Response,NextFunction } from "express";
import { client } from "../index";


export const getTweetData = async (req:Request,res:Response,next:NextFunction)=>{
    const tweetId= req.params.tweetId;
    const data = await client.v2.singleTweet(tweetId, {
        expansions: [
          'geo.place_id'
        ],"tweet.fields":['geo'],
        "place.fields":["contained_within","country","country_code","geo","id","name","place_type"]
      });
      if(!data){
        return next(
            new ErrorResponse(`No tweet was found with id of ${tweetId}`, 404)
          );
      }

      res.status(200).json({
        success: true,
        data: data,
      });
    
}