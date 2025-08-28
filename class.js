const classmates = {
    1: {
        id: 1,
        name: 'Maria',
        gender: 'female',
        friends: [4, 2, 3]
    },
    2: {
        id: 2,
        name: 'Vova',
        gender: 'male',
        friends: [1, 3, 4]
    },
    3: {
        id: 3,
        name: 'Marina',
        gender: 'female',
        friends: [2, 5, 1]
    },
    4: {
        id: 4,
        name: 'Kate',
        gender: 'female',
        friends: [1, 2, 5]
    },
    5: {
        id: 5,
        name: 'Andrey',
        gender: 'male',
        friends: [4, 3]
    }
}
    
const getVertex = (adjList, vertexId) => Object.values(adjList).find(vertex => vertex.id === vertexId);

const marina = getVertex(classmates, 3);
const marinaFriends = marina.friends.map(friendId => getVertex(classmates, friendId));

console.log(marina);
console.log(marinaFriends);