
export default (allCakes, cakeName) => {
    const matchCakes = (cake) => cake.title.match(new RegExp(cakeName, 'i'));
    return allCakes.filter(cake => matchCakes(cake, cakeName));   
};