// jest.mock('sqlite3', () => {
//     console.log(' ============   hello   =============');
//     return {
//         message: "This works regardless of how you require sqlite3 unless the manual mock directory is there"
//     }
// });

it('Some weird shenanigans', () => {
    const sq = require('./node_modules/sqlite3/lib/sqlite3');
    console.log(sq);
    
    expect(1 + 1).toBe(2);
});