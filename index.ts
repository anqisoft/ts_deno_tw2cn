/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_deno_tw2cn/index.ts
 *
 * <en_us>
 * Created on Thu Jan 11 2024 09:10:25
 * Feature: Translate file content from Traditional Chinese to Simplified Chinese.
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月11日 09:10:25
 * 功能：翻译文件中的繁体中文到简体中文。
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月11日 09:10:25
 * 功能：翻譯文件中的繁體中文到簡體中文。
 * </zh_tw>
 */

/* readme.md
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

## This
### typescript
github: https://github.com/anqisoft/ts_deno_tw2cn
<br>deno: https://deno.land/x/tw2cn

### javascript
github: https://github.com/anqisoft/js_node_tw2cn
<br>npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn

## Base
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
<br>deno: https://deno.land/x/cn_and_tw

### javascript
github: https://github.com/anqisoft/js_cn_and_tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## Sibling
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
<br>deno: https://deno.land/x/cn2tw

### javascript
github: https://github.com/anqisoft/js_node_cn2tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw
*/

import { tw2cn } from 'https://deno.land/x/cn_and_tw@v0.0.3/index.ts';
import { assert } from 'https://deno.land/std@0.211.0/assert/mod.ts';

/**
 * <en_us>Convert Traditional Chinese to Simplified Chinese in a file</en_us>
 * <zh_cn>转换文件中的繁体中文到简体中文</zh_cn>
 * <zh_tw>轉換檔案中的繁體中文到簡體中文</zh_tw>
 *
 * @param sourceFilename string <en_us>Original document, including Traditional Chinese</en_us><zh_cn>原始文件，含繁体中文</zh_cn><zh_tw>原始文件，含繁體中文</zh_tw>
 * @param goalFilename string <en_us>Target Simplified Chinese file</en_us><zh_cn>目标简体文件</zh_cn><zh_tw>目標簡體文件</zh_tw>
 *
 * @returns boolean <en_us>Conversion is successful or not.</en_us><zh_cn>转换成功与否</zh_cn><zh_tw>轉換成功與否</zh_tw>
 */
export function convert(sourceFilename: string, goalFilename: string): boolean {
	const FILE_WRITE_MODE = { mode: 0o777 };
	try {
		const fileInfo = Deno.statSync(sourceFilename);
		assert(fileInfo.isFile);

		const SOURCE_CONTENT = Deno.readTextFileSync(sourceFilename);
		Deno.writeTextFileSync(goalFilename, tw2cn(SOURCE_CONTENT), FILE_WRITE_MODE);

		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}

(() => {
	const START_DATE = new Date();

	const [source, goal] = Deno.args;
	console.log(convert(source, goal));

	const END_DATE = new Date();
	const USED_MILLISECONDS: number = END_DATE.getTime() - START_DATE.getTime();
	console.log(
		'Used',
		USED_MILLISECONDS,
		'milliseconds, it is equivalent to ',
		parseFloat((USED_MILLISECONDS / 1000).toFixed(4)),
	);
})();
