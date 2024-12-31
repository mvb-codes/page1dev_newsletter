"use client";

import Tiptap from "@/components/editor/editor";

export default function Editor() {
	return (
		<div className="flex justify-center items-center">
			<Tiptap className="h-full min-h-screen w-[70%] shadow-2xl flex flex-col" />
		</div>
	);
}
