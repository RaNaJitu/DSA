const user = [
{name: "A", city: "Delhi"}, 
{name: "B", city: "Mumbai"}
]

const groupByCity = {} 

for (let data of user) { 
  groupByCity[data.city] = groupByCity[data.city] || [];
  groupByCity[data.city].push(data);
}

console.log(groupByCity); // Output: { Delhi: [ { name: 'A', city: 'Delhi' } ], Mumbai: [ { name: 'B', city: 'Mumbai' } ] }