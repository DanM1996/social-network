const router = require('express').Router();
const {
   getThoughts,
   getThoughtById,
   createThought,
   createReaction,
   deleteReaction,
   updateThought,
   deleteThought
} = require('../../controllers/thought-controller')

// api/thought
router
    .route('/')
    .get(getThoughts)
    .post(createThought);
// api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// api/thought/:thoughtId/:reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;
