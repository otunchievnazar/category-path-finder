const getCategoryPath = (categories, categoryName) => {

    if (!categories || !categoryName) return undefined;

    const stack = [];

    // Initialize the stack with top-level categories and their paths
    for (let i = categories.length - 1; i >= 0; i--) {
        stack.push({
            category: categories[i],
            path: `/${categories[i].name}`
        });
    }

    while (stack.length > 0) {
        const { category, path } = stack.pop();

        // Check if current category matches target
        if (category.name === categoryName) {
            return path;
        }

        // Add subcategories to the stack
        const subcategories = category.subcategories;
        if (subcategories && subcategories.length > 0) {
            for (let i = subcategories.length - 1; i >= 0; i--) {
                stack.push({
                    category: subcategories[i],
                    path: `${path}/${subcategories[i].name}`
                });
            }
        }
    }

    return undefined;
};

module.exports = getCategoryPath;