
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {id: 1,
          date: 'April 16, 2005',
          home: 'RSL',
          away: 'COL',
          score: '1-0',
          series: 'RSL 1-0'
      },
        {
          id: 2,
          date: 'September 21, 2005',
          home: 'COL',
          away: 'RSL',
          score: '2-0',
          series: 'Tied 1-1'
        },
        {
          id: 3,
          date: 'October 1, 2005',
          home: 'COL',
          away: 'RSL',
          score: '2-1',
          series: 'COL 2-1'
        },
        {
          id: 4,
          date: 'October 12, 2005',
          home: 'RSL',
          away: 'COL',
          score: '0-1',
          series: 'COL 3-1'
        },
        {
          id: 5,
          date: 'May 27, 2006',
          home: 'RSL',
          away: 'COL',
          score: '2-2',
          series: 'COL 3–1–1'
        },
        {
          id: 6,
          date: 'June 9, 2006',
          home: 'COL',
          away: 'RSL',
          score: '1-0',
          series: 'COL 4–1–1'
        },
        {
          id: 7,
          date: 'August 9, 2006',
          home: 'COL',
          away: 'RSL',
          score: '1-4',
          series: 'COL 4–2–1'
        },
        {
          id: 8,
          date: 'September 2, 2006',
          home: 'RSL',
          away: 'COL',
          score: '0-1',
          series: 'COL 5–2–1'
        },
        {
          id: 9,
          date: 'April 30, 2007',
          home: 'RSL',
          away: 'COL',
          score: '0-2',
          series: 'COL 6–2–1'
        },
        {
          id: 10,
          date: 'May 10, 2007',
          home: 'COL',
          away: 'RSL',
          score: '1-1',
          series: 'COL 6-2-2'
        },
        {
        id: 11,
          date: 'September 22, 2007',
        home: 'RSL',
        away: 'RSL',
        score: '1-0',
          series: 'COL 6–3–2'
        },
        {
          id: 12,
          date: 'October 20, 2007',
          home: 'COL',
          away: 'RSL',
          score: '0-1',
          series: 'COL 6–4–2'
        },
        {
          id: 13,
          date: 'May 15, 2008',
          home: 'COL',
          away: 'RSL',
          score: '2-0',
          series: 'COL 7-4-2'
        },
        {
          id: 14,
          date: 'August 29, 2008',
          home: 'RSL',
          away: 'RSL',
          score: '2-0',
          series: 'COL 7-5-2'
        },
        {
          id: 15,
          date: 'October 25, 2008',
          home: 'COL',
          away: 'RSL',
          score: '1-1',
          series: 'COL 7-5-3'
        },
        {
          id: 16,
          date: 'October 25, 2008',
          home: 'COL',
          away: 'RSL',
          score: '2-0',
          series: 'COL 8-5-3'
        },
        {
          id: 17,
          date: 'June 6, 2009',
          home: 'RSL',
          away: 'COL',
          score: '1-1',
          series: 'COL 8-5-4'
        },
        {
          id: 18,
          date: 'October 24, 2009',
          home: 'RSL',
          away: 'RSL',
          score: '3-0',
          series: 'COL 8-6-4'
        },
        {
          id: 19,
          date: 'September 25, 2010',
          home: 'RSL',
          away: 'COL',
          score: '1-1',
          series: 'COL 8-6-5'
        },
        {
          id: 20,
          date: 'October 23, 2010',
          home: 'COL',
          away: 'RSL',
          score: '2-2',
          series: 'COL 8-6-6'
        },
        {
          id: 21,
          date: 'April 13, 2011',
          home: 'RSL',
          away: 'RSL',
          score: '1-0',
          series: 'COL 8-7-6'
        },
        {
          id: 22,
          date: 'October 14, 2011',
          home: 'COL',
          away: 'RSL',
          score: '0-0',
          series: 'COL 8-7-7'
        },
        {
          id: 23,
          date: 'April 7, 2012',
          home: 'RSL',
          away: 'COL',
          score: '2-0',
          series: 'Tied 8-8-7'
        },
        {
          id: 24,
          date: 'July 21, 2012',
          home: 'RSL',
          away: 'RSL',
          score: '2-0',
          series: 'RSL 9-8-7'
        },
        {
          id: 25,
          date: 'August 4, 2012',
          home: 'COL',
          away: 'RSL',
          score: '1-0',
          series: 'Tied 9-9-7'
        },
        {
          id: 26,
          date: 'March 16, 2013',
          home: 'RSL',
          away: 'COL',
          score: '1-1',
          series: 'Tied 9-9-8'
        },
        {
          id: 27,
          date: 'April 6, 2013',
          home: 'COL',
          away: 'RSL',
          score: '1-0',
          series: 'COL 10-9-8'
        },
        {
          id: 28,
          date: 'August 3, 2013',
          home: 'COL',
          away: 'RSL',
          score: '2-2',
          series: 'COL 10-9-9'
        },
        {
          id: 29,
          date: 'May 17, 2014',
          home: 'RSL',
          away: 'COL',
          score: '2-1',
          series: 'Tied 10-10-9'
        },
        {
          id: 30,
          date: 'August 2, 2014',
          home: 'COL',
          away: 'RSL',
          score: '0-1',
          series: 'RSL 11-10-9'
        },
        {
          id: 31,
          date: 'September 19, 2014',
          home: 'RSL',
          away: 'COL',
          score: '5-1',
          series: 'RSL 12-11-10'
        },
        {
          id: 32,
          date: 'June 7, 2015',
          home: 'RSL',
          away: 'COL',
          score: '0-0',
          series: 'RSL 12-10-10'
        },
        {
          id: 33,
          date: 'July 11, 2015',
          home: 'COL',
          away: 'RSL',
          score: '3-1',
          series: 'RSL 12–11–10'
        },
        {
          id: 34,
          date: 'October 4, 2015',
          home: 'COL',
          away: 'RSL',
          score: '1-2',
          series: 'RSL 13–11–10'
        },
        {
          id: 35,
          date: 'April 9, 2016',
          home: 'RSL',
          away: 'COL',
          score: '1-0',
          series: 'RSL 13-11-10'
        },
        {
          id: 36,
          date: 'May 7, 2016',
          home: 'COL',
          away: 'RSL',
          score: '1-0',
          series: 'RSL 14–12–10'
        },
        {
          id: 37,
          date: 'August 26, 2016',
          home: 'RSL',
          away: 'COL',
          score: '2-1',
          series: 'RSL 15–12–10'
        },
                {
          id: 38,
                  date: 'April 15, 2017',
          home: 'COL',
          away: 'RSL',
          score: '1-2',
          series: 'RSL 16–12–10'
        },
        {
          id: 39,
          date: 'August 26, 2017',
          home: 'RSL',
          away: 'COL',
          score: '4-1',
          series: 'RSL 17–12–10'
        },
        {
          id: 40,
          date: 'October 15, 2017',
          home: 'COL',
          away: 'RSL',
          score: '1-0',
          series: 'RSL 17–13–10'
        },
        {
          id: 41,
          date: 'April 21, 2018',
          home: 'RSL',
          away: 'COL',
          score: '',
          series: ''
        },
        {
          id: 42,
          date: 'July 21, 2018',
          home: 'RSL',
          away: 'COL',
          score: '',
          series: ''
        },
        {
          id: 43,
          date: 'August 25, 2018',
          home: 'COL',
          away: 'RSL',
          score: '',
          series: ''
        },
      ]);
    });
};
