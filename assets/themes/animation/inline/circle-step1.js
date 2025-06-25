// 内联动画：绘制以A为圆心的圆
export default function(paperScope) {
    const { Point, Path } = paperScope;
    
    // 设置点A和B
    const A = new Point(100, 150);
    const B = new Point(200, 150);
    
    // 绘制线段AB
    const line = new Path.Line(A, B);
    line.strokeColor = 'red';
    line.strokeWidth = 2;
    
    // 标记点A和B
    const pointA = new Path.Circle(A, 3);
    pointA.fillColor = 'red';
    
    const pointB = new Path.Circle(B, 3);
    pointB.fillColor = 'red';
    
    // 添加文字标签
    const textA = new paperScope.PointText(A.add([-15, -10]));
    textA.content = 'A';
    textA.fontSize = 14;
    textA.fillColor = 'black';
    
    const textB = new paperScope.PointText(B.add([10, -10]));
    textB.content = 'B';
    textB.fontSize = 14;
    textB.fillColor = 'black';
    
    // 动画：逐渐绘制以A为圆心、AB为半径的圆
    const radius = A.getDistance(B);
    const circle = new Path.Circle(A, radius);
    circle.strokeColor = 'blue';
    circle.strokeWidth = 2;
    circle.fillColor = 'rgba(0, 100, 255, 0.1)';
    
    // 简单的动画效果
    circle.scale(0);
    circle.tween(
        { scaling: 0 },
        { scaling: 1 },
        {
            duration: 2000,
            easing: 'easeInOutQuad'
        }
    );
    
    paperScope.view.draw();
} 