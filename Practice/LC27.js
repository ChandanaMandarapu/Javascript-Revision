def compact_object(obj):
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            compact_value = compact_object(value)
            if compact_value is not None:
                result[key] = compact_value
    elif isinstance(obj, list):
        result = [compact_object(item) for item in obj if compact_object(item) is not None]
    else:
        result = obj if bool(obj) else None
    
    return result

# Test cases
obj1 = [None, 0, False, 1]
print(compact_object(obj1))

obj2 = {"a": None, "b": [False, 1]}
print(compact_object(obj2))

obj3 = [None, 0, 5, [0], [False, 16]]
print(compact_object(obj3))

