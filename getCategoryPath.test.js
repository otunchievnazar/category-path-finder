const getCategoryPath = require('./getCategoryPath');
const { describe, test, expect } = require('@jest/globals');

describe('getCategoryPath', () => {
    const categories = [
        {
            name: 'category1',
            subcategories: [
                {
                    name: 'category2',
                    subcategories: []
                },
                {
                    name: 'category3',
                    subcategories: [
                        {
                            name: 'category4',
                            subcategories: []
                        }
                    ]
                }
            ]
        },
        {
            name: 'category5',
            subcategories: []
        }
    ];

    test('finds deeply nested category', () => {
        expect(getCategoryPath(categories, 'category4')).toBe('/category1/category3/category4');
    });

    test('finds category at second level', () => {
        expect(getCategoryPath(categories, 'category2')).toBe('/category1/category2');
    });

    test('finds category at root level', () => {
        expect(getCategoryPath(categories, 'category5')).toBe('/category5');
    });

    test('returns undefined for non-existent category', () => {
        expect(getCategoryPath(categories, 'nonExistentCategory')).toBeUndefined();
    });

    test('handles empty categories array', () => {
        expect(getCategoryPath([], 'category1')).toBeUndefined();
    });

    test('handles null categories', () => {
        expect(getCategoryPath(null, 'category1')).toBeUndefined();
    });

    test('handles empty category name', () => {
        expect(getCategoryPath(categories, '')).toBeUndefined();
    });

    test('handles null category name', () => {
        expect(getCategoryPath(categories, null)).toBeUndefined();
    });

    // Performance test for large category structures
    test('handles large category structures efficiently', () => {
        // Create a large category structure
        const largeCategories = createLargeCategories(1000);

        // Measure execution time
        const start = performance.now();
        const result = getCategoryPath(largeCategories, 'category999');
        const end = performance.now();

        expect(result).toBe('/category999');
        expect(end - start).toBeLessThan(100); // Should complete in under 100ms
    });
});

// Helper to create a large category structure for performance testing
function createLargeCategories(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push({
            name: `category${i}`,
            subcategories: []
        });
    }
    return result;
}