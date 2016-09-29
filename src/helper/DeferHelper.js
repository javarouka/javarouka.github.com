const EMPTY_CATCH = () => Promise.resolve();

export function defer(job, ms) {
    setTimeout(job, ms);
}

export function delayFor(ms){
    return new Promise(resolve => {
        defer(resolve, ms);
    });
}

export function rejectFor(ms){
    return new Promise((resolve, reject) => {
        defer(reject, ms);
    })
}

export function silenceAll(promises){
    return Promise.all(promises.map((promise) => {
        return promise.catch(EMPTY_CATCH)
    }));
}

export function executeIfNotTimeout(ms, ...promise) {
    return Promise.race([
        ...promise,
        rejectFor(ms)
    ]);
}

export function tryExecute(job, args, context = null) {
    return new Promise((resolve, reject)=> {
        try {
            resolve(job.apply(context, args));
        }
        catch(err) {
            reject(err);
        }
    });
}

export default {
    defer,
    delayFor,
    rejectFor,
    silenceAll,
    executeIfNotTimeout,
    tryExecute
};