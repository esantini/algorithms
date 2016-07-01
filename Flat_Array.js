/*
	Create a function that takes an array.
	If the array has nested arrays take its contents and place them where the nested array was.
	
	Example:
		input = [1, 2, [3, 4, [5, [], 6] , 7, 8], 9];
		output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
*/

// Iterative:
	function iterativeFlatArray(arr) {
		var result = [];
		var done = false;
		var _i;
	
		while(!done) {
	
			done = true; // not really done. It'll change back to false if there's an array inside the array.
	
			for(var i = 0; i < arr.length; i++){
				
				if(arr[i] instanceof Array) { // array inside array found.
					done = false;
					
					for(var j = 0; j < arr[i].length; j++) { //	flattening sub array
						result.push(arr[i][j]);
					}
	
				} else {
					result.push(arr[i]); 
				}
			}
	
			if(!done){	// prepare for next iteration.
				arr = result;
				result = [];
			}
		}
		return result;
	}
	
	var flatArray = iterativeFlatArray([1, 2, [3, 4, [5, [], 6], 7, 8], 9]);
	console.log(flatArray.toString());
	

//	Recursive
	function recursiveFlatArray(arr){
		var result = [];
		for(var i in arr) {
			if(arr[i] instanceof Array)
				result = result.concat( recursiveFlatArray(arr[i]) );
			else {
				result.push(arr[i]);
			}
		}
		return result;
	}
	var flatArray = recursiveFlatArray([1, 2, [3, 4, [5, [], 6], 7, 8], 9]);
	console.log(flatArray.toString());


// Splice:
	function spliceFlatArray(arr){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] instanceof Array) {
				[].splice.apply(arr, [i, 1].concat(arr[i--]));
			}
		}
		return arr;
	}
	
	var flatArray = spliceFlatArray(  [1, 2,   [3, 4,  [5, [], 6]  , 7, 8]  , 9]);
	console.log(flatArray.toString());
