Category Path Finder
A highly efficient utility function for finding the path to a category in a nested category structure.
Overview
This utility provides a way to traverse complex nested category structures and find the path to a specific category by name. The implementation uses an optimized iterative approach with a stack data structure to ensure maximum performance and minimal memory overhead.
Implementation Details
The getCategoryPath function accepts a nested category structure and a category name, then returns the full path to that category or undefined if not found.

Time and Space Complexity Analysis
Time Complexity: O(n)

In the worst case, we might need to visit every category in the structure once to find our target category or determine it doesn't exist.
The algorithm uses an iterative approach rather than recursion, which eliminates function call overhead.
Early returns for edge cases further optimize performance.

Space Complexity: O(w)

Where w is the maximum width of the tree at any level.
In the worst case, this would be O(n) if all nodes are at the same level.
The iterative stack-based implementation avoids recursion stack overflow issues for deeply nested categories.
The space usage is optimized by only keeping necessary path information on the stack.