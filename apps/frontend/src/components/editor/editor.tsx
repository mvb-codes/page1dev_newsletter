"use client";

import { BubbleMenu as BubbleMenuExtension } from "@tiptap/extension-bubble-menu";
import Color from "@tiptap/extension-color";
import FloatingMenu from "@tiptap/extension-floating-menu";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenuComponent from "./bubble-menu";
import { CustomBold } from "./custom-editor-extensions/custom-bold";
import { FloatingMenuComponent } from "./float-menu";

const Tiptap = ({ className }: { className?: string }) => {
	const editor = useEditor({
		injectCSS: false,
		immediatelyRender: false,
		extensions: [
			StarterKit.configure({
				bold: false,
			}),
			CustomBold,
			Underline,
			TextStyle,
			Color.configure({
				types: ["textStyle"],
			}),
			BubbleMenuExtension.configure({
				element: document.querySelector(".bubble-menu") as HTMLElement,
			}),
			FloatingMenu.configure({
				element: document.querySelector(".floating-menu") as HTMLElement,
			}),
		],
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none flex-1",
			},
		},
		content: "<p>Hello World!</p>",
	});

	return (
		<>
			<EditorContent className={className} editor={editor} />
			{editor && <BubbleMenuComponent editor={editor} />}
			{editor && <FloatingMenuComponent editor={editor} />}
		</>
	);
};

export default Tiptap;
