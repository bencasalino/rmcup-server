const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get
  read(rmcup, path) {
    return database(path)
      .select()
      .where("rmcup", rmcup);
    // .first();
  },
  // post
  create(body, path) {
    return database(path)
      .insert(body)
      .returning("*")
      .then(record => record[0]);
  },
  // put
  update(rmcup, body, path) {
    return database(path)
      .update(body)
      .where("rmcup", rmcup)
      .returning("*")
      .then(record => record[0]);
  },
  delete(rmcup, path) {
    return database(path)
      .delete()
      .where("rmcup", rmcup);
  }
};