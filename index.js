/**
 * Converts any function into a memoized function, caching results for repeated calls with the same arguments.
 * @param (Function) fn The function to be memoized.
 * @returns (Function) The memoized function.
 */

const memoize = (fn) => {
    const memoCache = new Map();

    return (...args) => {
        const argsString = JSON.stringify(args);

        if (memoCache.has(argsString)) {
            const cachedResult = memoCache.get(argsString);
            return cachedResult;
        }

        // Execute the original function if the result is not in the cache const result 
        const result = fn(...args);

        // Cache the result for future use
        memoCache.set(argsString, result);
        return result;
    }
};

module.exports = memoize;