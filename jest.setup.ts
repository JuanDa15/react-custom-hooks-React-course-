import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import {randomUUID} from 'node:crypto';
window.crypto.randomUUID = randomUUID;