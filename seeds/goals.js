
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {
          id: 1,
          rank: '1',
          player: 'Joao Plata',
          nation: 'Ecuador',
          club: 'RSL',
          goals: '5'
        },
        {
          id: 2,
          rank: '1',
          player: 'Yura Movsisyan',
          nation: 'Armenia',
          club: 'RSL',
          goals: '5'
        },
      ]);
    });
};
