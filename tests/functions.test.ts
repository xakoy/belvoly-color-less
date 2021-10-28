import Color from '../src/color';
import Dimension from '../src/dimension';
import { mix } from '../src/functions';

test("mix", () => {
    const color1 = new Color("4A90E2")
    const color2= new Color("fff")
    const result = mix(color2, color1, new Dimension('10%'))
    const rgb = result.toRGB()
    expect(rgb).toBe('#5c9be5')
})

test("mix is color string", () => {
    const result = mix( '#fff', '#4A90E2', '10%')
    expect(result.toRGB()).toBe('#5c9be5')
})
