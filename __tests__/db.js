// Here we will be unit testing the 3 main database functions from server/models.userModel
const db = require('../server/models/userModel');


// Jest Unit tests
describe('users table unit tests', () => {
  describe('#users table insert tests', () => {
    it('inserts correct row from query', async () => {
      const values = ['Amy', 'Codesmith', 'Javascript', 'Hard', 'Ready', 5];
      const queryString = 'INSERT INTO users (username, password, language, skill, status, sessioncount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      let result;
      await db.query(queryString, values)
        .then((data) => {
          result = data.rows[0];
        })
      expect(result).not.toBeInstanceOf(Error);
      // Test specific values of inserted user
      expect(result.username).toEqual(values[0]);
      expect(result.password).toEqual(values[1]);
      expect(result.language).toEqual(values[2]);
      expect(result.skill).toEqual(values[3]);
      expect(result.status).toEqual(values[4]);
      expect(result.sessioncount).toEqual(values[5]);
    });
  });

  // afterEach((done) => {
  //   // Delete what was just inserted
  // })

  // beforeEach((done) => {
  //   // Insert row into users
  // });

  // describe('#users table select tests', () => {
  //   it('selects correct row from users', () => {
  //     const queryString = 'SELECT * FROM users WHERE _id=1';
  //     const expectedResult = JSON.stringify({
  //       "_id": 1,
  //       "username": liammcb,
  //       "password": password,
  //       "language": C,
  //       "skill": Bad 
  //     });
  //     expect(result).not.toBeInstanceOf(Error);
  //     const table = JSON.parse(fs.readFileSync(testJsonFile));
  //     expect(table).toEqual(marketList);
  //   });
  // });

  // describe('#users table delete tests', () => {
  //   it('deletes correct row from users', () => {
  //     const queryString = 'SELECT * FROM users WHERE _id=1';
  //     const expectedResult = JSON.stringify({
  //       "_id": 1,
  //       "username": liammcb,
  //       "password": password,
  //       "language": C,
  //       "skill": Bad 
  //     });
  //     expect(result).not.toBeInstanceOf(Error);
  //     const table = JSON.parse(fs.readFileSync(testJsonFile));
  //     expect(table).toEqual(marketList);
  //   });
  // });

  // afterAll((done) => {
  //   // Delete row from users
  // });
  
});

xdescribe('sessions table unit tests', () => {
  
  beforeAll((done) => {
    // Insert row into users
  });

  afterAll((done) => {
    // Delete row from users
  });

  describe('#sessions table select tests', () => {
    it('selects correct row from users', () => {
      const queryString = 'SELECT * FROM users WHERE _id=1';
      const expectedResult = JSON.stringify({
        "_id": 1,
        "username": liammcb,
        "password": password,
        "language": CDATASection,
        "skill": Bad 
      });
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });
  });

  describe('#sessions table insert tests', () => {
    it('selects correct row from query', () => {
      const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });
  });
  
});