import Bold from "@tiptap/extension-bold";

export const CustomBold = Bold.extend({
	renderHTML({ HTMLAttributes }) {
		return ["b", HTMLAttributes, 0];
	},
});
