//
// Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
// http://sass-lang.com

import Color from "./color";
import Dimension from "./dimension";

function toHSL(color: Color) {
    if (color.toHSL) {
        return color.toHSL();
    } else {
        throw new Error('Argument cannot be evaluated to a color');
    }
}

export function mix(color: string, color2: string, weight: string): Color;
export function mix(color: Color, color2: Color, weight: Dimension): Color;
export function mix (color1: Color | string, color2: Color|string, weight: Dimension| string) {
    let we: Dimension
    if (!weight) {
        we = new Dimension(50);
    }else {
        we = weight instanceof Dimension ? weight : new Dimension(weight)
    }

    const c1 = color1 instanceof Color ? color1 : new Color(color1)
    const c2 = color2 instanceof Color ? color2 : new Color(color2)
    const p = we.value / 100.0;
    const w = p * 2 - 1;
    const a = toHSL(c1).a - toHSL(c2).a;

    const w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    const w2 = 1 - w1;

    const rgb = [c1.rgb[0] * w1 + c2.rgb[0] * w2,
    c1.rgb[1] * w1 + c2.rgb[1] * w2,
    c1.rgb[2] * w1 + c2.rgb[2] * w2];

    const alpha = c1.alpha * p + c2.alpha * (1 - p);

    return new Color(rgb, alpha);
}