const fullfill = (value, time) =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
});

const reject = (reason, time) =>  new Promise((resolve, reject) => {
    setTimeout(() => reject(reason), time);
});

const p1 = fullfill("success", 1000);
const p2 = reject("kaboom", 2000);

// await Promise.all([p1, p2]);//all
// await Promise.race([p1, p2]);//first timeout
// await Promise.any([p1, p2]);//first success
await Promise.allSettled([p1, p2]);//all settled

