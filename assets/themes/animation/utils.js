let {Path,PointText,Point} = paper;
const OPACITY = 0;

// function moveCircle(center, movePoint, color) {
//     var count = 0;
//     var mySet = setInterval(function () {
//         count++
//         var vr = 0.01,
//             cos = Math.cos(vr),
//             sin = Math.sin(vr);
//         var x1 = movePoint.x - center.x,
//             y1 = movePoint.y - center.y,
//             x2 = x1 * cos - y1 * sin,
//             y2 = y1 * cos + x1 * sin;
//         movePoint.x = center.x + x2;
//         movePoint.y = center.y + y2;
//         var move_circle = new Path.Circle(movePoint, 1)
//         move_circle.fillColor = color;
//         move_circle.opacity = 1;
//         console.log(count);
//         if (count > 700) {
//             clearInterval(mySet)
//         }
//     }, 10)

// }
// var center = new Point(500, 300)
// var movePoint = new Point(400, 300)
// moveCircle(center, movePoint, 'red')

function gavingLine(p1, p2, color = LAYER_COLOR[currentLayer]) {
    var line = new Path.Line(p1, p2)
    line.strokeColor = color;
    return line;
}
function gavingPoint(x, y, color = LAYER_COLOR[currentLayer]) {
    let point = new Point(x, y);
    new Path.Circle({
        center: point,
        radius: 2,
        fillColor: color,
        opacity: 1
    });
    return point;
}

const PlayObjects = [];
const LAYER_COLOR = ['red', '#333'];
let currentLayer = 0;

function layerIncr() {
    currentLayer++;
}
function layerDecr() {
    currentLayer--;
}

//要播放动画需要调用此函数
function addToPlay(objs) {
    if (currentLayer > 1) {
        return;
    }
    if (!(objs instanceof Array)) {
        objs = [objs];
    }
    PlayObjects.push(objs);
}

//调用这个函数播放所有动画
function play() {
    if (PlayObjects.length <= 0) {
        return;
    }
    let fs = PlayObjects.shift();
    let tween = null;
    for (let i = 0; i < fs.length; i++) {
        tween = fs[i]();
    }
    tween.then(play);
}

// 动画-直线连接起点和终点
function growLong(line) {
    return () => line.tween(
        {
            'segments[1].point': [line.segments[0].point.x, line.segments[0].point.y],
            'opacity': 1,
            // 'strokeColor': 'green',
        },
        {
            'segments[1].point': [line.segments[1].point.x, line.segments[1].point.y],
            // 'opacity': 1,
            // 'strokeWidth': 1
        },
        {
            // easing: 'easeInOutCubic',
            duration: 1000
        });
}

function drawLine(p1, p2, color = LAYER_COLOR[currentLayer], opacity = OPACITY) {
    var line = new Path.Line(p1, p2);
    line.strokeColor = color
    line.opacity = opacity;
    addToPlay(growLong(line));
    return line
}

//慢慢显现
function fadein(g, color = LAYER_COLOR[currentLayer], duration = 1000) {
    return () => g.tween({
        'opacity': 1,
        'strokeColor': color,
    }, {
        duration: duration
    });
}

function drawCircle(center, point, color = LAYER_COLOR[currentLayer]) {
    var circle = new Path.Circle(center, point.subtract(center).length);
    circle.strokeColor = color;
    circle.opacity = OPACITY;

    addToPlay(circleAsCompass(circle, point));

    return circle;
}
// 模拟圆规画圆
function circleAsCompass(circle, fromPoint, duration = 1000) {
    return () => {
        drawLine(circle.position, fromPoint, 'black', 1).onFrame = function (e) {
            this.rotate(360 / (duration / 1000 * 60), circle.position);
            if (e.count >= duration / 1000 * 60) {
                this.remove();
            }
        };
        return circle.tween({
            'opacity': 0,
        }, {
            'opacity': 1
        }, {
            duration: duration
        });
    }

}

//点显现
function vipPoint(point, color = LAYER_COLOR[currentLayer]) {
    let vipPoint = new Path.Circle({
        center: point,
        radius: 3,
        fillColor: color,
        opacity: OPACITY
    });

    return () => vipPoint.tween(
        {
            'opacity': 1,
            // 'radius': 4
        },
        {
            // easing: 'easeInOutCubic',
            duration: 1000
        })
}
function pointText(point, tc, duration = 1000) {
    var text = new PointText(point);
    text.fillColor = 'black';
    text.content = tc;
    text.opacity = OPACITY;
    // console.log(text);
    return () => text.tween(
        {
            'opacity': 1
        },
        {
            duration: duration
        })
}

function extendLine(A, B, number = 10) {
    let AB_Vec = B.subtract(A);
    let BF = drawLine(B, B.add(AB_Vec.multiply(number)), LAYER_COLOR[currentLayer]);
    return BF;
}
function showText(textArry) {
    var i = 0
    setInterval(function () {
        var text = new PointText({
            point: [400, 600],
            content: textArry[i],
            fillColor: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 20,
            opacity: 1
        });
        i++
        text.onFrame = function () {
            if (text.point.y > 100 + 30 * i)
                text.point.y--
        }
        i++
    }, 2000);
}

export { gavingLine, gavingPoint, drawLine, drawCircle, vipPoint, pointText, extendLine, showText, growLong, addToPlay, fadein, play, circleAsCompass, LAYER_COLOR, layerIncr, layerDecr }