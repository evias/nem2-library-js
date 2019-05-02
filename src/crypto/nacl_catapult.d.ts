/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export declare module nacl_catapult {
    function randomBytes(numberBytes: number): Uint8Array;
    function add(p, q): void;
    function crypto_verify_32(x, xi, y, yi): number;
    function gf(init?): Float64Array;
    function modL(r, x): void;
    function pack(r, p): void;
    function reduce(r): void;
    function scalarbase(p, sw): void;
    function scalarmult(p, q, s): void;
    function unpackneg(r, p): number;
}
