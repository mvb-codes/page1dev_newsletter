"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { BubbleMenu, Editor } from "@tiptap/react";
import {
	Bold,
	Italic,
	PaintRoller,
	SquareX,
	Strikethrough,
	Underline,
} from "lucide-react";
import { Button } from "../ui/button";
import { ColorPicker } from "./color-picker";

export default function BubbleMenuComponent({ editor }: { editor: Editor }) {
	return (
		<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
			<div className="bubble-menu rounded bg-white shadow-xl flex gap-1 p-1">
				<Button
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={
						editor.isActive("bold") ? "is-active bg-gray-300 font-bold" : ""
					}
					variant="bubbleMenu"
				>
					<Bold strokeWidth={editor.isActive("bold") ? 4 : 3} />
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={
						editor.isActive("italic")
							? "is-active bg-black text-white font-bold"
							: ""
					}
					variant="bubbleMenu"
				>
					<Italic />
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					className={
						editor.isActive("strike")
							? "is-active bg-gray-300 text-primary font-bold"
							: ""
					}
					variant="bubbleMenu"
				>
					<Strikethrough />
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					className={
						editor.isActive("underline")
							? "is-active bg-black text-white font-bold"
							: ""
					}
					variant="bubbleMenu"
				>
					<Underline />
				</Button>
				<Popover modal={true}>
					<PopoverTrigger asChild>
						<div>
							<Button variant="bubbleMenu">
								<PaintRoller
									color={editor.getAttributes("textStyle").color || "#000000"}
								/>
							</Button>
						</div>
					</PopoverTrigger>
					<PopoverContent
						className="flex flex-col gap-1 shadow-2xl"
						onFocusOutside={(e: Event) => e.preventDefault()}
						onInteractOutside={(e: Event) => e.preventDefault()}
						onPointerDownOutside={(e: Event) => e.preventDefault()}
					>
						<PopoverClose className="self-end">
							<SquareX className="stroke-muted-foreground" />
						</PopoverClose>
						<ColorPicker editor={editor} />
					</PopoverContent>
				</Popover>
			</div>
		</BubbleMenu>
	);
}
