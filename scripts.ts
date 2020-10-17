function findMedian(a: number[]): number {

    //determine if length of array is even (true) (if not = false)
    const even = a.length % 2 === 0;
    console.log(even);

    //if then else:  if even take length of array and divide by 1; if odd, length of array and divide by 2 then return the largest of that integer.
    return even ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];


}

console.log(findMedian([2, 4, 7]));
console.log(findMedian([2, 4, 7, 6]));
console.log(findMedian([2, 4, 7, 6, 6]));
console.log(findMedian([2, 4, 7, 6, 6, 8]));