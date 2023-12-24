def flatten_array(arr, n):
    def flatten_helper(arr, current_depth):
        result = []
        for item in arr:
            if isinstance(item, list) and current_depth < n:
                result.extend(flatten_helper(item, current_depth + 1))
            else:
                result.append(item)
        return result

    return flatten_helper(arr, 0)

# Test cases
arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n1 = 0
print(flatten_array(arr1, n1))

arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n2 = 1
print(flatten_array(arr2, n2))

arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n3 = 2
print(flatten_array(arr3, n3))

