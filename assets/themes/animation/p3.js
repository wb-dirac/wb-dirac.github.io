import * as utils from "./utils.js";
import {elementIP3} from "./EI.js";

let {Point} = paper;

let A = new Point(100, 100),
    B = new Point(200, 100),
    C = new Point(100, 200),
    AB = utils.gavingLine(A, B),
    c = utils.gavingLine(C, new Point(150, 200));
utils.addToPlay(utils.pointText(A, ' A', 1));
utils.addToPlay(utils.pointText(B.add([0, 5]), ' B', 1));
utils.addToPlay(utils.pointText(C.add([-5, 15], 1), ' C', 1));

let E = elementIP3(AB, c);
utils.addToPlay([utils.vipPoint(E), utils.pointText(E.add([0, -2]), ' E')]);

utils.addToPlay(utils.fadein(utils.drawLine(A, E), 'green'));
utils.play();