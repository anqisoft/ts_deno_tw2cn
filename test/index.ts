/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_deno_tw2cn/test/index.ts
*/

import { convert } from "../index.ts";

(() => {
	const FILE_WRITE_MODE = { mode: 0o777 };

	const SOURCE_FILENAME = 'zh_tw.txt';
	Deno.writeTextFileSync(SOURCE_FILENAME, '干，天干，今天干燥，如今天干燥热，假如今天干燥热晕了', FILE_WRITE_MODE);

	const GOAL_FILENAME = 'zh_cn.txt';
	console.log(convert(SOURCE_FILENAME, GOAL_FILENAME));
})();
