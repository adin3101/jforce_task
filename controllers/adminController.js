import Feedback from "../models/feedback.js";

export const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    res.json(deletedFeedback);
  } catch (err) {
    res.status(500).json({ message: "Error deleting feedback" });
  }
};


