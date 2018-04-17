
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('champions').del()
    .then(function () {
      // Inserts seed entries
      return knex('champions').insert([
        {
          id: 1,
          year: '2005',
          winner: 'COL',
          loser: 'RSL',
          points: '9–3',
          series: 'COL 1-0'
        },
        {
          id: 2,
          year: '2006',
          winner: 'COL',
          loser: 'RSL',
          points: '7–4',
          series: 'COL 2-0'
        },
      ]);
    });
};
