function denouement(state="", action) {
  if (action.type == 'adddenouement') {
    return action.denouement;
  } else {
    return state;
  }
}

module.exports = denouement;
