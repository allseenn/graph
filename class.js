const classMates = {
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
    
class Graph {
    constructor(adjList) {
        this.adjList = adjList || {};
    }
    getList() {
        return this.adjList;
    }
    addVertex(vertex) {
        const vertexId = vertex.id || Object.keys(this.getList()).length + 1;
        this.adjList[vertexId] = {id: vertexId, ...vertex,};
    }
    addEdge(firstVertexId, secondVertexId) {
        if(this.adjList[firstVertexId] && this.adjList[secondVertexId]) {
            if(!this.adjList[firstVertexId].friends.includes(secondVertexId) 
                && !this.adjList[secondVertexId].friends.includes(firstVertexId)){
                this.adjList[firstVertexId].friends.push(secondVertexId); 
                this.adjList[secondVertexId].friends.push(firstVertexId);
                }
        }
    }
    getVertexByName(name) {
        return Object.values(this.adjList).find(vertex => vertex.name === name);
    }
}


const classMatesGraph = new Graph(classMates);
classMatesGraph.addVertex({name: 'Ivan', gender: 'male', friends: [1, 2, 3, 4, 5]});
classMatesGraph.addEdge(1, 2);
classMatesGraph.addEdge(1, 5);
console.log(classMatesGraph.getList());
