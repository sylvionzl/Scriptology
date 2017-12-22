function structure(state="", action) {
  if (action.type == 'addstructure') {
    return action.structure;
  } else {
    return state;
  }
}

module.exports = structure;
