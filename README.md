# Graph data structures

Граф (graph) - набор вершин и связей между ними (ребер).

## Вершины

Вершина (node) - узлы или объекты в графе. Ими могут быть:

- любой настоящий предмет (человек, машина, город, село, страна и т.д.)
- или абстрактный объект (число, система, группа, компания и т.д.)

## Ребра 

Ребро (edge) - связь между двумя вершинами.

Виды ребер:

1. По направленности
    - направленные
    - ненаправленные
2. По инцидентности
    - инцидентные
    - неинцидентные

## Виды графов

Неориентированный граф - имеет ненаправленные ребра

<img src="img/01.svg">

Ориентированный граф - имеет направленные ребра

<img src="img/02.svg">

## Построение графа

1. Определить вершины
2. Определить связи
3. Провести ребра

### Матрица смежности

<img src="img/03.svg">

Матрица имеет размерность n*n, где n - количество вершин. В матрице смежности 1 - связь между вершинами, 0 - нет связи.

<table>
    <tr style="border-bottom: 1px solid #000;">
        <td style="border-right: 1px solid #000;"></td>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
    </tr>
        <tr style="border-bottom: 1px solid #000;">
        <th style="border: 0; border-right: 1px solid #000;">1</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
    </tr>
        <tr style="border-bottom: 1px solid #000;">
        <th style="border: 0; border-right: 1px solid #000;">2</th>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
        <tr style="border-bottom: 1px solid #000;">
        <th style="border: 0; border-right: 1px solid #000;">3</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
    </tr>
        <tr style="border-bottom: 1px solid #000;">
        <th style="border: 0; border-right: 1px solid #000;">4</th>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
</table>

### Списки смежности

<img src="img/04.svg" alt="text">

На рисунке представлен граф социальных связей (дружба) между одноклассниками. Группа слева и справа не имеют связей, но они все-равно являются одноклассниками, следовательно одним графом.

Необходимые списки

1. Список вершин friendsList
2. Список ребер
3. Списки вершин для каждого ребра
4. Списки инцидентных ребер для каждой вершины

```js
const friendsList = {
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
    
const kate = friendsList[4]
const kateFriends = kate.friends.map(friendId => friendsList[friendId])
```

## Ссылки

https://skillbox.ru/media/code/teoriya-grafov-derevya-planarnost-raznovidnosti-grafov