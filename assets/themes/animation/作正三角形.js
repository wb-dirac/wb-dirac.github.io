import { gavingLine, pointText,addToPlay,play } from "./utils.js";
import {drawRegularTriangle} from "./EI.js";

let { Point } = paper;

let A = new Point(100, 100);
let B = new Point(150, 100);
let AB = gavingLine(A, B, 'red');
addToPlay([pointText(A.add([-14, 0]), ' A', 1), pointText(B.add([0, 5]), ' B', 1)]);

let [C, AC, BC] = drawRegularTriangle(A, B, 1);
play()


