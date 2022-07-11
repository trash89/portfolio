export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/activity.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/resume.svelte"),
	() => import("../../src/routes/thanks.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"activity": [[0, 2], [1]],
	"resume": [[0, 4], [1]],
	"thanks": [[0, 5], [1]]
};