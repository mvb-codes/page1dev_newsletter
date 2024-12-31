import { Editor, FloatingMenu } from "@tiptap/react";
import { Heading1, Heading2, Heading3, List } from "lucide-react";
import { Button } from "../ui/button";

export const FloatingMenuComponent = ({ editor }: { editor: Editor }) => {
	return (
		<FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
			<div
				data-testid="floating-menu"
				className="floating-menu rounded bg-white shadow-xl flex gap-1 p-2"
			>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive("heading", { level: 1 }) ? "is-active " : ""
					}
					variant="bubbleMenu"
				>
					<Heading1 />
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive("heading", { level: 2 }) ? "is-active" : ""
					}
					variant="bubbleMenu"
				>
					<Heading2 />
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={
						editor.isActive("heading", { level: 3 }) ? "is-active" : ""
					}
					variant="bubbleMenu"
				>
					<Heading3 />
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive("bulletList") ? "is-active" : ""}
					variant="bubbleMenu"
				>
					<List />
				</Button>
			</div>
		</FloatingMenu>
	);
};
