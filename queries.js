const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get
  read(rmcup, path) {
    return database(path)
      .select()
      .where("matches", matches);
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
  update(matches, body, path) {
    return database(path)
      .update(body)
      .where("matches", matches)
      .returning("*")
      .then(record => record[0]);
  },
  delete(matches, path) {
    return database(path)
      .delete()
      .where("matches", matches);
  }
};