一个用于兼容less.js里面颜色计算的类库

# 使用
```
    npm i belvoly-color-less
```

# API

## mix
颜色混合函数，对应`less`里面的 [`mix`](https://lesscss.org/functions/#color-operations-mix) 方法。


| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| color1 | 颜色对象 | Color  \ string | - |
| color2 | 颜色对象 | Color  \ string | - |
| weight | 可选, 两种颜色之间的百分比平衡点，默认为50% | string | 50% |

返回值
Color

### 示例
``` js
    import { mix } from 'belvoly-color-less'
    const color = mix('#fff', '#4A90E2', '10%')
    const rgb = color.toRGB() 
    // rgb === '#5c9be5'
```