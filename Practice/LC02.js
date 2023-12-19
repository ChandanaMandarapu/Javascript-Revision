const expect = function(val) {
    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return {"value": true};
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return {"value": true};
            } else {
                throw new Error("Equal");
            }
        }
    };
};

// Example usage:
try {
    const result1 = expect(5).toBe(5);
    console.log(result1);
} catch (error) {
    console.error({"error": error.message});
}

try {
    const result2 = expect(5).toBe(null);
    console.log(result2);
} catch (error) {
    console.error({"error": error.message});
}

try {
    const result3 = expect(5).notToBe(null);
    console.log(result3);
} catch (error) {
    console.error({"error": error.message});
}
