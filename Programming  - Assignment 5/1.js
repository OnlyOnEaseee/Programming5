
const orderGenerator = (array, query, ascending, descending) => {

    let order = confirm(query);

    if(order) {
        ascending(array);
    } else {
        descending(array);
    }
};

orderGenerator(
    [3, 67, 12, 634, -2142, 143, 0, 131435],
    'Sort array in ascending order?', 
    (array) => alert(array.sort((a, b) => a - b)),
    (array) => alert(array.sort((a, b) => b - a)),
);