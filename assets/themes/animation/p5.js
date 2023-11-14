import * as utils from "./utils.js";
import {elementIP3} from "./EI.js";

let {Point} = paper;

let A = new Point(100, 100),
    B = new Point(50, 200),
    C = new Point(150, 200),
    AB = utils.gavingLine(A, B),
    AC = utils.gavingLine(A,C),
    BC = utils.gavingLine(B,C);
utils.addToPlay(utils.pointText(A, ' A', 1));
utils.addToPlay(utils.pointText(B.add([-5, 15]), 'B', 1));
utils.addToPlay(utils.pointText(C.add([0, 15], 1), 'C', 1));

utils.play();