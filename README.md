### Introduce
<ul>
<li><en_us>Translate file content from Traditional Chinese to Simplified Chinese.</en_us></li>
<li><zh_cn>翻译文件中的繁体中文到简体中文。</zh_cn></li>
<li><zh_tw>翻譯文件中的繁體中文到簡體中文。</zh_tw></li>
</ul>

### Import
```typescript
import { convert } from 'https://deno.land/x/tw2cn/@v0.0.1/index.ts';
```

### Usage1
```bash
::deno run --allow-run --allow-read --allow-write https://deno.land/x/tw2cn/@v0.0.1/index.ts ~sourceFilename~ ~goalFilename~
deno run --allow-run --allow-read --allow-write https://deno.land/x/tw2cn/@v0.0.1/index.ts zh_tw.txt zh_cn.txt
```

### Usage2
```typescript
import { convert } from 'https://deno.land/x/tw2cn/@v0.0.1/index.ts';
// convert(~sourceFilename1~, ~goalFilename1~);
convert('zh_tw.txt', 'zh_cn.txt');
```

## typescript version
github: https://github.com/anqisoft/ts_deno_tw2cn
<br>deno: https://deno.land/x/tw2cn

### javascript version
github: https://github.com/anqisoft/js_node_tw2cn
<br>npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn

## base
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
<br>deno: https://deno.land/x/cn_and_tw

### javascript
github: https://github.com/anqisoft/js_cn_and_tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## sibling
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
<br>deno: https://deno.land/x/cn2tw

### javascript
github: https://github.com/anqisoft/js_node_cn2tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw
