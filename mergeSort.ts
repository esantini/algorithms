
var myArray = [ 15, 8, 42, 16, 4, 23 ];
console.log("Lost Numbers: ", mergeSort(myArray));

/**
 * My approach at the Merge Sort algorithm.
 */
function mergeSort(theArray: number[]) {

	return recursion(split(true, theArray), split(false, theArray));

	function recursion(arrA: number[], arrB: number[]): number[] {
		if(arrA.length > 1) 
			arrA = recursion(split(true, arrA), split(false, arrA));
		if(arrB.length > 1)
			arrB = recursion(split(true, arrB), split(false, arrB));

		//
		// The Merge:
		//
		var result:number[] = [];
		while(arrA.length > 0 && arrB.length > 0) {
			if(arrA[0] < arrB[0]) {
				result.push(arrA.shift());
			}
			else
				result.push(arrB.shift());
		}

		// Push the leftovers into the result:
		if(arrA.length)
			result.push.apply(result, arrA);
		else if(arrB.length)
			result.push.apply(result, arrB);

		return result;
	}

	// Helper function to get the 1st or 2nd half of an array.
	function split(is1stHalf: boolean, arr: number[]): number[] {
		if(is1stHalf)
			return arr.slice(0, Math.ceil(arr.length/2));
		else 
			return arr.slice(Math.ceil(arr.length/2), arr.length);

	}
}
