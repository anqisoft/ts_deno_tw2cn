# ts_deno_tw2cn
## <en_us>
Created on Wed Jan 11 2024 08:45:13<br>
Feature: Translate file content from Traditional Chinese to Simplified Chinese.
</en_us><br>

## <zh_cn>
创建：2024年1月11日 08:45:13<br>
功能：翻译文件中的繁体中文到简体中文。
</zh_cn><br>

## <zh_tw>
創建：2024年1月11日 08:45:13<br>
功能：翻譯文件中的繁體中文到簡體中文。
</zh_tw><br>

## typescript version
github: https://github.com/anqisoft/ts_deno_tw2cn
deno: https://deno.land/x/tw2cn

## javascript version
github: https://github.com/anqisoft/js_node_tw2cn
npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn

## base
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
deno: https://deno.land/x/cn_and_tw
### javascript
github: https://github.com/anqisoft/js_cn_and_tw
npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## sibling
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
deno: https://deno.land/x/cn2tw
### javascript
github: https://github.com/anqisoft/js_node_cn2tw
npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw

### import
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
