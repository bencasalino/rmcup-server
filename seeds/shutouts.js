
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shutouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shutouts').insert([
        {
          id: 1,
          rank: '1',
          player: 'Nick Rimando',
          nation: 'USA',
          club: 'RSL',
          shutouts: '11'
        },
        {
          id: 2,
          rank: '2',
          player: 'Matt Pickens',
          nation: 'USA',
          club: 'COL',
          shutouts: '3'
        },
      ]);
    });
};
