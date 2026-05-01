class Solution {
    threeSum(arr) {
        const twoSum = (arr, tarSum) => {
            let left = 0;
            let right = arr.length - 1;
            const pairs = [];

            while (left < right) {
                const sum = arr[left] + arr[right];

                if (sum === tarSum) {
                    pairs.push([arr[left], arr[right]]);

                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum > tarSum) {
                    right--;
                } else {
                    left++;
                }
            }
            return pairs;
        };

        arr.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < arr.length - 2; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            const pairs = twoSum(arr.slice(i + 1), -arr[i]);
            pairs.forEach(pair => result.push([arr[i], ...pair]));
        }

        return result;
    }
}