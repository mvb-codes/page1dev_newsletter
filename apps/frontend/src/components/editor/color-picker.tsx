"use client";
import { Editor } from "@tiptap/react";
import { HexColorPicker } from "react-colorful";

export const ColorPicker = ({ editor }: { editor: Editor }) => {
	return (
		<div className="color-picker">
			<HexColorPicker
				color={editor.getAttributes("textStyle").color}
				onChange={(color) => editor.chain().focus().setColor(color).run()}
				style={{ width: "100%" }}
			/>
		</div>
	);
};
