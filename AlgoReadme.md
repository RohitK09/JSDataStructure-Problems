**Important Alogoriths**

1. Kadanes's Alogorithms
used mostly for finding maxsubarray. the concept is that if the sum of the array is max till arr[i], then
arr[i+1] will have the largest sum or not.

// Below modification will allow the program to work even if all the
	// elements in the array are negative
	public int KandaneModify(int[] arrA) {
		int max_end_here = arrA[0];
		int max_so_far = arrA[0];
		for(int i=1;i<arrA.length;i++){
			max_end_here = Math.max(arrA[i], max_end_here+arrA[i]);
			max_so_far = Math.max(max_so_far,max_end_here);
		}
		return max_so_far;
	}

* **Disjoint sets**
	**can be used for finding cycle in a graph**
	operations supported are : UNION,Find,MakeSet
	* CREATE-SET(x) – creates a new set with one element {x}.
	* _MERGE_-SETS(x, y) – merge into one set the set that contains element x and the set that contains element y (x and y are in different sets). The original sets will be destroyed.
	* FIND-SET(x) – returns the representative or a pointer to the representative of the set that contains element x.

