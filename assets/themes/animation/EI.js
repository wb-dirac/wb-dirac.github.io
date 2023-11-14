import * as utils from "./utils.js";

let {Point} = paper;

//命题1画出以B,C为边的等边三角形BCD
export function drawRegularTriangle(A, B) {
    utils.layerIncr();
    let circle_A = utils.drawCircle(A, B);

    let circle_B = utils.drawCircle(B, A);

    let intersections = circle_B.getIntersections(circle_A);

    let C = intersections[0].point;

    utils.addToPlay([utils.vipPoint(C, 'red'), utils.pointText(C, ' C')]);

    let AC = utils.drawLine(A, C);
    let BC = utils.drawLine(B, C);

    utils.layerDecr();
    return [C, AC, BC];
}

//卷I命题2
export function elementIP2(AB, C) {
    utils.layerIncr();

    let textArry = ['作已知线段AB和线段外一点C',
        '连接BC',
        '根据命题1画出以BC为边的等边三角形BCD',
        '以B为圆心，AB长度为半径作圆B',
        '延长DB与圆B相交于点E',
        '以D为圆心，DE长度为半径作圆D',
        '延长DB与圆D相交于点F',
        '因为, BD = CD, DE = DF,',
        '所以, DE - BD=DF - CD=AB',
        '即，CF = AB, 证毕'
    ];

    let A = new Point(AB.segments[0].point.x, AB.segments[0].point.y),
        B = new Point(AB.segments[1].point.x, AB.segments[1].point.y);


    //--------------------- play! -----------------------------
    utils.showText(textArry);
    //连接BC
    let lineBC = utils.drawLine(B, C);

    //根据命题1画出以BC为边的等边三角形BCD
    let [D, BD, CD] = drawRegularTriangle(B, C);
    utils.addToPlay([utils.fadein(CD), utils.fadein(BD), utils.pointText(D.add([-10, 15]), 'D')]);

    //以B为圆心，AB长度为半径作圆B
    let circle_BA = utils.drawCircle(B, A);
    //延长DB与圆B相交于点E
    let BE = utils.extendLine(D, B, 3);

    let E = BE.getIntersections(circle_BA)[0].point;
    utils.addToPlay([utils.vipPoint(E), utils.pointText(E.add([5, 15]), 'E')]);

    //以D为圆心，DE长度为半径作圆D
    let circleDE = utils.drawCircle(D, E);

    //延长DB与圆D相交于点F
    let CF = utils.extendLine(D, C, 3);

    let F = CF.getIntersections(circleDE)[0].point;
    utils.addToPlay([utils.vipPoint(F), utils.pointText(F.add([5, 15]), 'F')]);

    let lineCF = utils.drawLine(C, F);
    //因为,BD=CD,DE=DF,
    //所以,DE-BD=DF-CD=AB
    //即，CF=AB,证毕
    //---------------------------play end------------------------------------
    utils.layerDecr();
    return [lineCF, F];
}

//卷I命题2
export function elementIP3(AB, c) {
    utils.layerIncr();
    let A = new Point(AB.segments[0].point.x, AB.segments[0].point.y);
    //过A作c等长线AD
    let [AD, D] = elementIP2(c, A);
    utils.addToPlay([utils.fadein(AD), utils.pointText(D.add([5, 15]), 'D')]);
    //以为圆心AD为半径画圆
    let circleAD = utils.drawCircle(A, D);
    //取圆ADE与AB的交点E
    let E = AB.getIntersections(circleAD)[0].point;
    utils.layerDecr();
    return E;
}