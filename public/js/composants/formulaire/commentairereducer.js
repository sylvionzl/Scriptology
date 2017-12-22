function commentaire(state="", action) {
  if (action.type == 'addcommentaire') {
    return action.commentaire;
  } else {
    return state;
  }
}

module.exports = commentaire;
