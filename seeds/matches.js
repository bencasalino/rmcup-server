
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {id: 1,
          date: 'April 16, 2005',
          home: 'RSL',
          away: 'COR',
          score: '1-0',
          series: 'RSL 1-0'
      },
        {
          id: 2,
          date: 'September 21, 2005',
          home: 'COR',
          away: 'RSL',
          score: '2-0',
          series: 'Tied 1-1'
        },
      ]);
    });
};
