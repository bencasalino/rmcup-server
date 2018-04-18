
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
        {
          id: 3,
          rank: '1',
          player: 'Álvaro Saborío',
          nation: 'Costa Rica',
          club: 'RSL',
          goals: '5'
        },
        {
          id: 4,
          rank: '4',
          player: 'Fabian Espindola',
          nation: 'Argentina',
          club: 'RSL',
          goals: '4'
        },
        {
          id: 5,
          rank: '4',
          player: 'Jeff Cunningham',
          nation: 'Jamaica',
          club: 'COL/RSL',
          goals: '4'
        },
        {
          id: 6,
          rank: '6',
          player: 'Javier Morales',
          nation: 'Argentina',
          club: 'RSL',
          goals: '3'
        },
        {
          id: 7,
          rank: '6',
          player: 'Conor Casey',
          nation: 'USA',
          club: 'COL',
          goals: '3'
        },
        {
          id: 8,
          rank: '6',
          player: 'Robbie Findley',
          nation: 'USA',
          club: 'RSL',
          goals: '3'
        },
        {
          id: 9,
          rank: '9',
          player: 'Joshua Gatt',
          nation: 'USA',
          club: 'COL',
          goals: '2'
        },
        {
          id: 10,
          rank: '9',
          player: 'Brooks Lennon',
          nation: 'USA',
          club: 'RSL',
          goals: '2'
        },
        {
          id: 11,
          rank: '9',
          player: 'Luis Silva',
          nation: 'USA',
          club: 'RSL',
          goals: '2'
        },
        {
          id: 12,
          rank: '9',
          player: 'Kevin Doyle',
          nation: 'Ireland',
          club: 'COL',
          goals: '2'
        },
        {
          id: 13,
          rank: '9',
          player: 'Deshorn Brown',
          nation: 'Jamaica',
          club: 'COL',
          goals: '2'
        },
        {
          id: 14,
          rank: '9',
          player: 'Omar Cummings',
          nation: 'Jamaica',
          club: 'COL',
          goals: '2'
        },
        {
          id: 15,
          rank: '9',
          player: 'Nicolas Hernandez',
          nation: 'Argentina',
          club: 'COL',
          goals: '2'
        },
        {
          id: 16,
          rank: '9',
          player: 'Dedi Ben Dayan',
          nation: 'Isreal',
          club: 'COL',
          goals: '2'
        }
      ]);
    });
};
