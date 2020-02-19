const Hobbits = require('../hobbits/hobbitsModel.js');
const db = require('../data/dbConfig.js'); 

describe('hobbits model', () =>{
    describe('insert', () => {
        it('should insert the hobbit into the db', async () => {
            await Hobbits.insert({name: 'gaffer'});
            await Hobbits.insert({name: 'sam'});

            const hobbits =  await db('hobbits'); 
            expect(hobbits).toHaveLength(2);    
                // 0 model is set to null    // should pass now. 
        }); 
        it('should return the hobbit inserted', async () => {
            let hobbit = await Hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer'); 

            hobbit = await Hobbits.insert({name: 'sam'});
            expect(hobbit.name).toBe('sam');    // break it and fix it 
        });

        beforeEach(async () => {
            await db('hobbits').truncate();
            // cleaning every time run tests so we aren't adding more people each run. 2, 4, 8, 16 etc. 
        })
    });
});





    // jest only 
// test('true', () => {
//     expect(true).toBe(true);
// });