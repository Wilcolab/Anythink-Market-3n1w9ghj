/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * @route POST /
    * @group Comments - Operations about comments
    * @param {string} content.body.required - Content of the comment
    * @param {string} author.body.required - Author of the comment
    * @param {string} postId.body.required - ID of the post the comment belongs to
    * @returns {object} 201 - The newly created comment
    * @returns {Error}  400 - Error message
    * @description Creates a new comment.
    */

 /**
    * @route GET /post/:postId
    * @group Comments - Operations about comments
    * @param {string} postId.path.required - ID of the post to retrieve comments for
    * @returns {Array<object>} 200 - List of comments for the specified post
    * @returns {Error}  400 - Error message
    * @description Retrieves all comments for a specific post.
    */

 /**
    * @route PUT /:id
    * @group Comments - Operations about comments
    * @param {string} id.path.required - ID of the comment to update
    * @param {string} content.body.required - Updated content of the comment
    * @returns {object} 200 - The updated comment
    * @returns {Error}  400 - Error message
    * @returns {Error}  404 - Comment not found
    * @description Updates the content of a specific comment.
    */

 /**
    * @route DELETE /:id
    * @group Comments - Operations about comments
    * @param {string} id.path.required - ID of the comment to delete
    * @returns {object} 200 - Success message
    * @returns {Error}  400 - Error message
    * @returns {Error}  404 - Comment not found
    * @description Deletes a specific comment.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//hey github copilot

// Create a new comment
router.post("/", async (req, res) => {
  try {
    const { content, author, postId } = req.body;
    const newComment = new Comment({ content, author, postId });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get comments for a specific post
router.get("/post/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a comment
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(     id, { content }, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});