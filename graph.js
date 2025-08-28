new LeaderLine(
    document.getElementById('g1'),
    document.getElementById('g2'),
    {
        color: 'black',      // Черный цвет линии
        size: 2,             // Толщина линии
        startPlug: 'none',   // Без стрелки в начале
        endPlug: 'behind',     // Без стрелки в конце
        path: 'straight',     // Прямая линия (вместо кривой по умолчанию)
        startSocket: 'top'
    }
);
new LeaderLine(
    document.getElementById('g2'),
    document.getElementById('g3'),
    {
        color: 'black',      // Черный цвет линии
        size: 2,             // Толщина линии
        startPlug: 'none',   // Без стрелки в начале
        endPlug: 'behind',     // Без стрелки в конце
        path: 'straight'     // Прямая линия (вместо кривой по умолчанию)
    }
);
new LeaderLine(
    document.getElementById('g3'),
    document.getElementById('g4'),
    {
        color: 'black',      // Черный цвет линии
        size: 2,             // Толщина линии
        startPlug: 'none',   // Без стрелки в начале
        endPlug: 'behind',     // Без стрелки в конце
        path: 'straight',    // Прямая линия (вместо кривой по умолчанию)
        endSocket: 'bottom'
    }
);
new LeaderLine(
    document.getElementById('g1'),
    document.getElementById('g3'),
    {
        color: 'black',      // Черный цвет линии
        size: 2,             // Толщина линии
        startPlug: 'none',   // Без стрелки в начале
        endPlug: 'behind',     // Без стрелки в конце
        path: 'straight',     // Прямая линия (вместо кривой по умолчанию)
        startSocket: 'bottom'
    }
);
new LeaderLine(
    document.getElementById('g2'),
    document.getElementById('g4'),
    {
        color: 'black',      // Черный цвет линии
        size: 2,             // Толщина линии
        startPlug: 'behind',   // Без стрелки в начале
        endPlug: 'behind',     // Без стрелки в конце
        path: 'straight',     // Прямая линия (вместо кривой по умолчанию)
        endSocket: 'top'
    }
);
