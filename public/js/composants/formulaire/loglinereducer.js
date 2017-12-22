function logline(state="", action) {
  if (action.type == 'addlogline') {
    return action.logline;
  } else {
    return state;
  }
}

module.exports = logline;
