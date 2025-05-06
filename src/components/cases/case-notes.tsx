"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Sample data - would be fetched based on ID in a real app
const notes = [
	{
		id: "1",
		content:
			"Client provided additional details about his whereabouts on the day of the alleged incident. Need to verify with witnesses.",
		createdAt: "2023-05-20T14:30:00",
		user: {
			name: "Advocate Sharma",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "AS",
		},
	},
	{
		id: "2",
		content:
			"Reviewed CCTV footage from nearby shop. Quality is poor but might be useful for establishing timeline.",
		createdAt: "2023-05-18T10:15:00",
		user: {
			name: "Advocate Sharma",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "AS",
		},
	},
	{
		id: "3",
		content:
			"Contacted potential expert witness Dr. Gupta for forensic analysis of financial documents.",
		createdAt: "2023-05-15T16:45:00",
		user: {
			name: "Advocate Sharma",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "AS",
		},
	},
];

export function CaseNotes({ id }: { id: string }) {
	const [newNote, setNewNote] = useState("");

	const handleAddNote = () => {
		if (newNote.trim()) {
			// In a real app, this would add the note to the database
			setNewNote("");
		}
	};

	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Case Notes</CardTitle>
				<CardDescription>Private notes and observations</CardDescription>
			</CardHeader>
			<CardContent className="max-h-[300px] overflow-auto space-y-4">
				{notes.map((note) => (
					<div key={note.id} className="flex gap-3">
						<Avatar className="h-8 w-8">
							<AvatarImage
								src={note.user.avatar || "/placeholder.svg"}
								alt={note.user.name}
							/>
							<AvatarFallback>{note.user.initials}</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<span className="text-sm font-medium">{note.user.name}</span>
								<span className="text-xs text-muted-foreground">
									{new Date(note.createdAt).toLocaleString()}
								</span>
							</div>
							<p className="text-sm">{note.content}</p>
						</div>
					</div>
				))}
			</CardContent>
			<CardFooter className="flex flex-col gap-2">
				<Textarea
					placeholder="Add a note..."
					value={newNote}
					onChange={(e) => setNewNote(e.target.value)}
					className="min-h-[80px]"
				/>
				<Button
					onClick={handleAddNote}
					className="ml-auto"
					disabled={!newNote.trim()}
				>
					Add Note
				</Button>
			</CardFooter>
		</Card>
	);
}
