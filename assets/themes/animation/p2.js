import * as utils from "./utils.js";
import { elementIP2 } from "./EI.js";

let {Point} = paper;

let A = new Point(150, 70),
    B = new Point(150, 120),
    C = utils.gavingPoint(120, 150, 'red'),
    AB = utils.gavingLine(A, B, 'red');
//作已知线段AB和线段外一点C
utils.addToPlay(utils.pointText(A, ' A', 1));
utils.addToPlay(utils.pointText(B.add([0, 5]), ' B', 1));
utils.addToPlay(utils.pointText(C.add([-5, 15], 1), ' C', 1));

let [CF,] = elementIP2(AB, C);
utils.addToPlay(utils.fadein(CF));

utils.play();