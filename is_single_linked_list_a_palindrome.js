/*
	Check if a single-linked list of objects is a palindrome.
*/

function Node(val, prev){
	if(!(this instanceof Node)) throw new Error('Node must be called as a constructor');

	if(prev) prev.next = this;

	this.val = val;
}

var myList = new Node('a');
(function() {
	var b = new Node('b', myList);
	b = new Node('c', b);
	b = new Node('c', b);
	b = new Node('d', b);
	b = new Node('c', b);
	b = new Node('c', b);
	b = new Node('b', b);
	b = new Node('a', b);
})();


console.log( checkPalin(myList) );

function checkPalin(list) {

	var arr = [];
	var faster = list;

	while(true) { 
		arr.push(list.val);// keep 1st half in 'arr'

		if(!faster.next) break;
		faster = faster.next;

		list = list.next; // 'list' ends up in the middle
		
		if(!faster.next) break;// length of 'list' is even
		faster = faster.next;
	}

	//	traverse 'arr' from end to front and compare with 'list'
	for (var i = arr.length - 1; i >= 0; i--) {
		if( arr[i] != list.val ) return false;
		list = list.next;
	}

	return true;
}
