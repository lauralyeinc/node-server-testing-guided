
const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    // test('should be testing environment', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // });  // took this out of package.json 

    // with async/await 
    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200); 
              //500 break it and fix it
        });
        it('should be json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json'); 
        })
        it('should return the right object', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({api: "up"}); 
        })
    });
});


    //without async/await 

  // describe('GET /', () => {
    //     it('should return 200 OK', () => {
    //         request(server)    //returning a promise, not a negtive response 
    //             .get('/')
    //             .then(res => {
    //                 expect(res.status).toBe(200);   //500 break it and fix it. 
    //                     // returning before this can run... 
    //             });
    //     });



 // using jest only 
// test('true', () => {
//     expect(true).toBe(true);
// });