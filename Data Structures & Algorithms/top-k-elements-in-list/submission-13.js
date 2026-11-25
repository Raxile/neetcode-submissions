class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
topKFrequent(nums, k) {
    const count = new Map()
    for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1)   // Map keeps numbers as numbers

    const buckets = Array.from({ length: nums.length + 1 }, () => [])

    for (const [num, freq] of count) {
        buckets[freq].push(num)     // which index? what goes in?
    }

    const result = []
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      result.push(...buckets[i])
    }
    return result.slice(0, k)
}
}
