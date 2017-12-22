function notegenerale(state="", action) {
  if (action.type == 'addnotegenerale') {
    return action.notegenerale;
  } else {
    return state;
  }
}

module.exports = notegenerale;
