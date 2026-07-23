class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
    if(!this.keyStore.has(key)) {
        this.keyStore.set(key, [])
    }
    // push [value, timestamp] pair
    this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
    const pairs = this.keyStore.get(key) || []
    let left = 0
    let right = pairs.length - 1
    let result = ""
    while(left <= right) {
    const mid = Math.floor((left + right) / 2)
        
    if(pairs[mid][1] <= timestamp) {
            result = pairs[mid][0]   // save value
            left = mid+1     // go right for larger timestamp
        } else {
            right = mid-1    // go left
        }
    }
    return result


    }
}
