import express from "express"
import { editFeedback, getAllFeedback } from "../controllers/feedbackController.js";
import { deleteFeedback } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/auth.js";



const router = express.Router();

router.get('/feedbacks',verifyToken,getAllFeedback );
router.put('/editfeedbacks/:id',verifyToken,editFeedback );
router.delete('/deletefeedbacks/:id',verifyToken, deleteFeedback);

export default router;
