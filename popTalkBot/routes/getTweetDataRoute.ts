import {Router} from 'express';
import {getTweetData} from '../controller/getTweetDataController';
const router = Router({ mergeParams: true });

router.route("/tweet-data/:tweetId").get(getTweetData)

export default router;