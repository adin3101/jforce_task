import express from "express"
import { addFeedBack, editFeedback, getAllFeedback, getUserFeedback } from "../controllers/feedbackController.js";
import { verifyToken } from "../middleware/auth.js";



const router = express.Router();

router.get('/userfeedback/:id', getUserFeedback);

router.get('/feedbacks',verifyToken, getAllFeedback );
router.post('/addfeedback',verifyToken, addFeedBack);
router.put('/editfeedbacks/:id',verifyToken, editFeedback );

export default router;
