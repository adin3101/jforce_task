import Feedback from "../models/feedback.js"

export const getAllFeedback = async(req,res)=>{
    try {
        const feedbacks = await Feedback.find();
        console.log('Feedback Data:', feedbacks);
        res.status(200).json(feedbacks);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message:"error fething feedback"})
    }
};

export const getUserFeedback = async (req, res) => {
    const { id } = req.params;
  
    try {
      const feedback = await Feedback.findById(id);
      if (!feedback) {
        return res.status(404).json({ message: "Feedback not found" });
      }
      res.json(feedback);
    } catch (err) {
      console.error('Error fetching feedback:', err);
      res.status(500).json({ message: "Error fetching feedback" });
    }
  };

export const addFeedBack = async(req, res)=>{
    const{content,userId}=req.body;
    const newfeedback = new Feedback({content,userId});
    try {
        await newfeedback.save();
        res.status(200).json(newfeedback);
    } catch (error) {
        
        res.status(500).json({ message: "Error saving feedback",error: error.message },error);
    }
};

export const editFeedback = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
  
    try {
      const updatedFeedback = await Feedback.findByIdAndUpdate(id, { content }, { new: true });
      res.json(updatedFeedback);
    } catch (err) {
        console.error("Error updating feedback:", err);
      res.status(500).json({ message: "Error updating feedback" });
    }
  };