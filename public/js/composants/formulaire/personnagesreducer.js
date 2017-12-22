function personnages(state="", action) {
  if (action.type == 'addpersonnages') {
    return action.personnages;
  } else {
    return state;
  }
}

module.exports = personnages;
