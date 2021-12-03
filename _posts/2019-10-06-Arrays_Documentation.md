---
title:  "[ICS4UI]Arrays Documentation"
date:   2019-10-06 23:13:24
categories:
- Java
- School
- Programming
tags:
- Java
- Study
- Programing
- School
---
<h1>Arrays Class Assignment</h1>
The class Arrays contains the methods that operates the integer and string array.

<hr>

<h1>Method Summary</h1>
  <table>
   <tr> <th><b>Modifier and Type</b></th> <th>Method and Description</th></tr>

   <tr> <th><b>public static int[]</b></th> <th>makeArray:<br><i>Creates the new integer array and return created array</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>createEmptyStringArray:<br><i>Creates the String array and return created array</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>user_defined_array:<br><i>Creates the new integer array with user defined values and return the array using makeArray method</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>user_defined_array:<br><i>Creates the new String array using createEmptyStringArray and fill with user defined values and return the array using makeArray method. Print the log into the filePrintWriter myOutputAllow the program to print to external file</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>random_array:<br><i>Creates the new integer array with random values and return the array using makeArray method</i></th></tr>
   <tr> <th><b>public static void</b></th> <th>print_array:<br><i>Print the values of integer array from parameter</i></th></tr>
   <tr> <th><b>public static void</b></th> <th>printArray:<br><i>Prints the String array from parameter</i></th></tr>
   <tr> <th><b>public static void</b></th> <th>array_contains:<br><i>Prints if String array contains the String element</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>search_value:<br><i>Search the value from the array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>findElement:<br><i>return the value based on if the element exists in the String array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>findElement_loc:<br><i>return the value based on if the element exists in the String array</i></th></tr>
   <tr> <th><b>public static void</b></th> <th>element_count:<br><i>return the number of the specific element provided by the parameter that appears in the array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>countElement:<br><i>return the number of specific elemet appearing in the String array</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>change_size_of_array:<br><i>return the new array with all the values from original array but with different size</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>change_size_of_array:<br><i>return the resized array with all the elements from the original array and deleted the specific value when it is in delete mode and return the resized array with one additional empty position at specific location the user required to insert new element</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>insert_element:<br><i>return the new array with all the values from original array and additional value using change_size_of_array method</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>insert:<br><i>return the new array with the new element inserted using change_size_of_array</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>selection_sort_array:<br><i>return the sorted array of the original array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>largest_element:<br><i>return the largest number in array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>findLargest:<br><i>return the largest value based on the alphabetical order</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>smallest_value:<br><i>return the smallest number in array</i></th></tr>
   <tr> <th><b>public static int</b></th> <th>findSmallest:<br><i>return the smallest value based on the alphabetical order</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>delete_element:<br><i>return the new array with all the values from original array and the selected value deleted using change_size_of_array method and search_value method</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>removeElementByItem:<br><i>return the new array with the element deleted from the original array using change_size_of_array</i></th></tr>
   <tr> <th><b>public static int[]</b></th> <th>make_copied_array:<br><i>return the new array with all the values from original array</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>duplicateArray:<br><i>return the new copied array</i></th></tr>
   <tr> <th><b>public static boolean</b></th> <th>identical:<br><i>return true when two arrays are identical to each other and if not, return false</i></th></tr>
   <tr> <th><b>public static boolean</b></th> <th>sameArray:<br><i>return true when two String arrays are identical to each other, and false when two arrays are different from each other</i></th></tr>
   <tr> <th><b>public static String[]</b></th> <th>reverse:<br><i>return the new String array with the location of the elements are reveresed</i></th></tr>
  </table>


<hr>
<h1>Method Detail</h1>
<!--Integer-->
<h4>makeArray</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] makeArray:</b><br><i>Creates the new integer array and return created array</i></th> <th><b>int array_size:</b><br><i>The size of the array the user want to create</i></th> <th><i>Created int type array with Parameters</i></th> </tr>
</table>

<h4>createEmptyStringArray</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static String[] createEmptyStringArray:</b><br><i>Creates the String array and return created array</i></th> <th><b>int array_size:</b><br><i>The size of the array the user want to create</i></th> <th><i>Created String type array with Parameters</i></th> </tr>
</table>

<h4>user_defined_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] user_defined_array:</b><br><i>Creates the new integer array with user defined values and return the array using makeArray method</i></th> <th><b>NA</b><br></th> <th><i>Created int type array with value that user entered</i></th> </tr>
</table>

<h4>user_defined_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static String[] user_defined_array:</b><br><i>Creates the new String array using createEmptyStringArray and fill with user defined values and return the array using makeArray method. Print the log into the file</i><b>PrintWriter myOutput</b><i>Allow the program to print to external file</i></th> <th><br></th> <th><i>Created String type array with value that user entered, and print all the logs into the file</i></th> </tr>
</table>

<h4>random_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] random_array:</b><br><i>Creates the new integer array with random values and return the array using makeArray method</i></th> <th><b>NA</b><br></th> <th><i>Created int type array with random value</i></th> </tr>
</table>

<h4>print_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static void print_array:</b><br><i>Print the values of integer array from parameter</i></th> <th><b>int[] array:</b><br><i>The array the user wants to print to the screen and file</i></th> <th><i>Created int type array with value</i></th> </tr>
</table>

<h4>printArray</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static void printArray:</b><br><i>Prints the String array from parameter</i></th> <th><b>String[] array:</b><br><i>The String array that is being required to print</i><b>PrintWriter myOutput</b><i>Allow the program to print to external file</i></th> <th><i>N/A</i></th> </tr>
</table>

<h4>array_contains</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static void array_contains:</b><br><i>Prints if String array contains the String element</i></th> <th><b>String[] array:</b><br><i>The String array that is being searched from</i><br><b>String element:</b><i>The String element that the method is looking for in the array</i><b>PrintWriter myOutput</b><i>Allow the program to print to external file</i></th> <th><i>N/A</i></th> </tr>
</table>

<h4>search_value</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int search_value:</b><br><i>Search the value from the array</i></th> <th><b>int[] array:</b><i>The array looking for the value</i><b>int target:</b><i>The value that the program is looking for</i><b>boolean mode:</b><i>Select if the user wants to print out every log or not</i><br></th> <th><i>if the value exists in the array, return the location and if not, return -1</i></th> </tr>
</table>

<h4>findElement</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static int findElement:</b><br><i>return the value based on if the element exists in the String array</i></th> <th><b>String[] array:</b><br><i>The String array that is being searched from</i><br><b>String element:</b><i>The String element that the method is looking for in the array</i></th> <th><i>return 1 if the element exists, and return -1 if the element does not exists</i></th> </tr>
</table>

<h4>findElement_loc</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static int findElement_loc:</b><br><i>return the value based on if the element exists in the String array</i></th> <th><b>String[] array:</b><br><i>The String array that is being searched from</i><b>String element:</b><i>The String element that the method is looking for in the array</i></th> <th><i>return the index of the element's location if the element exists in the array, and return -1 if the element does not exists</i></th> </tr>
</table>

<h4>element_count</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static void element_count:</b><br><i>return the number of the specific element provided by the parameter that appears in the array</i></th> <th><b>int[] array:</b><i>The array looking for the value</i><b>int target:</b><i>The value that the program is looking for</i><br></th> <th><i>return the number of the element appears in the array</i></th> </tr>
</table>

<h4>countElement</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static int countElement:</b><br><i>return the number of specific elemet appearing in the String array</i></th> <th><b>String[] array:</b><br><i>The String array that the program is counting the number of appearance from</i><b>String target:</b><br><i>The String element that the program is looking for in the String array</i></th> <th><i>return the number of the String element appearing in the String array</i></th> </tr>
</table>

<h4>change_size_of_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] change_size_of_array:</b><br><i>return the new array with all the values from original array but with different size</i></th> <th><b>int[] original_array:</b><i>The original array that the program is resizing</i><b>int operation:</b><i>Decides if the program is expanding the size or making it smaller</i><b>int hole:</b><i>Set the location of the empty spot when the program is expanding the size of the array</i><br></th> <th><i>return the new array that is resized from the original array</i></th> </tr>
</table>

<h4>change_size_of_array</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static String[] change_size_of_array:</b><br><i>return the resized array with all the elements from the original array and deleted the specific value when it is in delete mode and return the resized array with one additional empty position at specific location the user required to insert new element</i></th> <th><b>String[] original_array:</b><br><i>The original String array that the program is resizing</i><b>in operation:</b><br><i>The operation that the program is operating (insert or delete)</i><b>String target:</b><br><i>The String element that the program is deleteing or inserting to the original array</i><b>int hole:</b><br><i>The location that the program is inserting the new element to original array</i></th> <th><i>return the new String array with the elements that the user required to have</i></th> </tr>
</table>

<h4>insert_element</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] insert_element:</b><br><i>return the new array with all the values from original array and additional value using change_size_of_array method</i></th> <th><b>int[] array:</b><i>The original array that the program is inserting the value to</i><b>int target:</b><i>the value that the program is inserting to the array</i><b>int index:</b><i>The location that the program is inserting the value into the array</i><br></th> <th><i>return the new array with the value inserted to the original array</i></th> </tr>
</table>

<h4>insert</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static String[] insert:</b><br><i>return the new array with the new element inserted using change_size_of_array</i></th> <th><b>String[] array:</b><br><i>The String array that the program is inserting the element to</i><b>Strin target:</b><br><i>The String element that the program is inserting to the array</i><b>int location:</b><br><i>The index that the program is inserting the element into  array</i><b>PrintWrite myOutput:</b><br><i>The PrintWriter element that allows the method to output to the external file</i></th> <th><i>return the new String array with the element inserted to the original array</i></th> </tr>
</table>

<h4>selection_sort_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] selection_sort_array:</b><br><i>return the sorted array of the original array</i></th> <th><b>int[] array_original:</b><i>The original array that the program is sorting using the values using selection sort algorithm</i><b>boolean respond_option:</b><i>select if the program is printing the log of the operation or not</i><br></th> <th><i>return the sorted array</i></th> </tr>
</table>

<h4>largest_element</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int largest_element:</b><br><i>return the largest number in array</i></th> <th><b>int[] array:</b><i>The array that the program is looking for the largest value</i><br></th> <th><i>return the maximum value in the array</i></th> </tr>
</table>

<h4>findLargest</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static int findLargest:</b><br><i>return the largest value based on the alphabetical order</i></th> <th><b>String[] array:</b><br><i>The String array that the program is searching the largest value</i></th> <th><i>return the index of the largest element of the array</i></th> </tr>
</table>

<h4>smallest_value</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int smallest_value:</b><br><i>return the smallest number in array</i></th> <th><b>int[] array:</b><i>The array that the program is looking for the smallest value</i><br></th> <th><i>return the minimum value in the array</i></th> </tr>
</table>

<h4>findSmallest</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static int findSmallest:</b><br><i>return the smallest value based on the alphabetical order</i></th> <th><b>String[] array:</b><br><i>The String array that the program is searching the smallest value</i></th> <th><i>return the index of the smallest element of the array</i></th> </tr>
</table>

<h4>delete_element</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] delete_element:</b><br><i>return the new array with all the values from original array and the selected value deleted using change_size_of_array method and search_value method</i></th> <th><b>int[] array:</b><i>The original array that the program is deleting the value from</i><b>int target:</b><i>the value that the program is deleting from the array</i><br></th> <th><i>return the new array with the value deleted to the original array</i></th> </tr>
</table>

<h4>removeElementByItem</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static String[] removeElementByItem:</b><br><i>return the new array with the element deleted from the original array using change_size_of_array</i></th> <th><b>String[] array:</b><br><i>The String array that the program is deleting the element from</i><b>Strin target:</b><br><i>The String element that the program is deleting from the array</i><b>PrintWrite myOutput:</b><br><i>The PrintWriter element that allows the method to output to the external file</i></th> <th><i>return the new String array with the element deleted to the original array</i></th> </tr>
</table>

<h4>make_copied_array</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static int[] make_copied_array:</b><br><i>return the new array with all the values from original array</i></th> <th><b>int[] array:</b><i>The original array that the program is copying the value from</i><br></th> <th><i>return the new array with the identical value copied from the original array</i></th> </tr>
</table>

<h4>duplicateArray</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static String[] duplicateArray:</b><br><i>return the new copied array</i></th> <th><b>String[] array:</b><br><i>The String array that the program is duplicating from</i></th> <th><i>return the new String array with duplicated size and values from the original array from the parameter</i></th> </tr>
</table>

<h4>identical</h4>
<table>
<tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
<tr> <th><b>public static boolean identical:</b><br><i>return true when two arrays are identical to each other and if not, return false</i></th> <th><b>int[] array1:</b><i>The first array that the program is comparing</i><b>int[] array2:</b><i>The second array that the program is comparing</i><br></th> <th><i>return true when two integer arrays are identical and if not, return false</i></th> </tr>
</table>

<h4>sameArray</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static boolean sameArray:</b><br><i>return true when two String arrays are identical to each other, and false when two arrays are different from each other</i></th> <th><b>String[] array1:</b><br><i>The frist String array that the program is comparing</i><b>String[] array2:</b><br><i>The second String array that the program is comparing</i></th> <th><i>return true value when two String arrays are identical, and false if they are not identical</i></th> </tr>
</table>

<h4>reverse</h4>
<table>
 <tr> <th><b>Method Summary</b></th> <th><b>Parameters</b></th> <th><b>Return</b></th> </tr>
 <tr> <th><b>public static String[] reverse:</b><br><i>return the new String array with the location of the elements are reveresed</i></th> <th><b>String[] array:</b><br><i>The String array that the program is reversing the elemets' location</i><b>PrintWriter myOutput:</b><br><i>Allow the program to print to external file</i></th> <th><i>return the new String array with the elemets' location in the array reversed</i></th> </tr>
</table>
