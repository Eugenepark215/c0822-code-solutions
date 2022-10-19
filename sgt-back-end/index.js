const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res) => {
  if (req.body === undefined || req.body.course === undefined || req.body.name === undefined || req.body.score === undefined || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Invalid content'
    });
  }
  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *
  `;
  const params = [req.body.course, req.body.name, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
