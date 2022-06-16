export function binarySearch<A>(arr: A[], pred: (a: A) => boolean, start: number = 0, end: number = arr.length): number {
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (pred(arr[mid])) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}

export function binarySearchLeft<A>(arr: A[], target: A, start: number = 0, end: number = arr.length): number {
    return binarySearch(arr, a => a < target, start, end);
}

export function binarySearchRight<A>(arr: A[], target: A, start: number = 0, end: number = arr.length): number {
    return binarySearch(arr, a => a <= target, start, end);
}
