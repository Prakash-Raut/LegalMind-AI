"use client";

import { useEffect, useRef } from "react";

export function CourtPerformance() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: [
				"Supreme Court",
				"Delhi High Court",
				"Bombay High Court",
				"District Courts",
				"Consumer Forums",
				"Tribunals",
			],
			datasets: [
				{
					label: "Success Rate (%)",
					data: [85, 72, 68, 62, 78, 70],
					backgroundColor: [
						"rgba(16, 185, 129, 0.7)",
						"rgba(37, 99, 235, 0.7)",
						"rgba(245, 158, 11, 0.7)",
						"rgba(139, 92, 246, 0.7)",
						"rgba(14, 165, 233, 0.7)",
						"rgba(168, 162, 158, 0.7)",
					],
				},
			],
		};

		// Simple bar chart rendering
		const barWidth = 40;
		const barSpacing = 20;
		const chartHeight = ctx.canvas.height - 60;
		const maxValue = 100; // Percentage scale
		const yStep = chartHeight / maxValue;

		// Draw axes
		ctx.beginPath();
		ctx.moveTo(50, 20);
		ctx.lineTo(50, chartHeight + 30);
		ctx.lineTo(ctx.canvas.width - 20, chartHeight + 30);
		ctx.stroke();

		// Draw y-axis labels
		for (let i = 0; i <= maxValue; i += 20) {
			const y = chartHeight + 30 - i * yStep;
			ctx.fillStyle = "#000";
			ctx.font = "10px Arial";
			ctx.textAlign = "right";
			ctx.fillText(`${i}%`, 45, y);

			// Draw horizontal grid line
			ctx.beginPath();
			ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
			ctx.moveTo(50, y);
			ctx.lineTo(ctx.canvas.width - 20, y);
			ctx.stroke();
		}

		// Draw bars
		data.labels.forEach((label, index) => {
			const value = data.datasets[0].data[index];
			const x = 70 + index * (barWidth + barSpacing);
			const barHeight = value * yStep;
			const y = chartHeight + 30 - barHeight;

			// Draw bar
			ctx.fillStyle = data.datasets[0].backgroundColor[index];
			ctx.fillRect(x, y, barWidth, barHeight);

			// Draw value on top of bar
			ctx.fillStyle = "#000";
			ctx.font = "bold 12px Arial";
			ctx.textAlign = "center";
			ctx.fillText(`${value}%`, x + barWidth / 2, y - 5);

			// Draw x-axis label
			ctx.fillStyle = "#000";
			ctx.font = "10px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "top";

			// Split long labels into multiple lines
			const words = label.split(" ");
			let line = "";
			const lineHeight = 12;
			let yPos = chartHeight + 35;

			for (const word of words) {
				const testLine = `${line}${word} `;
				if (testLine.length > 15 && line.length > 0) {
					ctx.fillText(line, x + barWidth / 2, yPos);
					line = `${word} `;
					yPos += lineHeight;
				} else {
					line = testLine;
				}
			}

			ctx.fillText(line, x + barWidth / 2, yPos);
		});
	}, []);

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<canvas ref={canvasRef} width={600} height={300} />
		</div>
	);
}
