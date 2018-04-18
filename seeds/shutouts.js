
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
        {
          id: 3,
          rank: '2',
          player: 'Joe Cannon',
          nation: 'USA',
          club: 'COL',
          shutouts: '3'
        },
        {
          id: 4,
          rank: '4',
          player: 'Clint Irwin',
          nation: 'USA',
          club: 'COL',
          shutouts: '3'
        },
        {
          id: 5,
          rank: '4',
          player: 'Bouna Coundoul',
          nation: 'Senegal',
          club: 'COL',
          shutouts: '2'
        },
        {
          id: 6,
          rank: '6',
          player: 'Tim Howard',
          nation: 'USA',
          club: 'COL',
          shutouts: '1'
        },
        {
          id: 7,
          rank: '6',
          player: 'Zac MacMath',
          nation: 'USA',
          club: 'COL',
          shutouts: '1'
        },
        {
          id: 8,
          rank: '6',
          player: 'Byron Foss',
          nation: 'USA',
          club: 'COL',
          shutouts: '1'
        },
        {
          id: 9,
          rank: '6',
          player: 'D.J. Countess',
          nation: 'USA',
          club: 'COL',
          shutouts: '1'
        },
      ]);
    });
};
