
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
        {
          id: 3,
          year: '2007',
          winner: 'RSL',
          loser: 'COL',
          points: '7–4',
          series: 'COL 2-1'
        },
        {
          id: 4,
          year: '2008',
          winner: 'RSL',
          loser: 'COL',
          points: '4–4',
          series: 'Tied 2-2'
        },
        {
          id: 5,
          year: '2009',
          winner: 'RSL',
          loser: 'COL',
          points: '4–4',
          series: 'RSL 3-2'
        },
        {
          id: 6,
          year: '2010',
          winner: 'RSL',
          loser: 'COL',
          points: '2-2',
          series: 'RSL 4-2'
        },
        {
          id: 7,
          year: '2011',
          winner: 'RSL',
          loser: 'COL',
          points: '7–4',
          series: 'RSL 4-1'
        },
        {
          id: 8,
          year: '2012',
          winner: 'RSL',
          loser: 'COL',
          points: '7–4',
          series: 'RSL 6-3'
        },
        {
          id: 9,
          year: '2013',
          winner: 'COL',
          loser: 'RSL',
          points: '7–4',
          series: 'RSL 5-2'
        },
        {
          id: 10,
          year: '2014',
          winner: 'RSL',
          loser: 'COL',
          points: '7–4',
          series: 'RSL 9-0'
        },
        {
          id: 11,
          year: '2015',
          winner: 'COL',
          loser: 'RSL',
          points: '7–4',
          series: 'RSL 4-4'
        },
        {
          id: 12,
          year: '2016',
          winner: 'RSL',
          loser: 'COL',
          points: '7–4',
          series: 'CRSL 6-3'
        },
        {
          id: 13,
          year: '2013',
          winner: 'RSL',
          loser: 'COL',
          points: '6-3',
          series: 'RSL 6-3'
        }, {
          id: 14,
          year: '2018',
          winner: 'null',
          loser: 'null',
          points: '0',
          series: 'null'
        },

      ]);
    });
};
