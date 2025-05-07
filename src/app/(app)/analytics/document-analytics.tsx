"use client";

import { useEffect, useRef } from "react";

export function DocumentAnalytics() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: [
				"Petitions",
				"Affidavits",
				"Legal Notices",
				"Agreements",
				"Court Orders",
				"Evidence Docs",
				"Misc",
			],
			datasets: [
				{
					label: "Created",
					data: [45, 32, 28, 22, 18, 25, 15],
					backgroundColor: "rgba(37, 99, 235, 0.7)",
				},
				{
					label: "Downloaded",
					data: [38, 25, 22, 20, 15, 18, 10],
					backgroundColor: "rgba(16, 185, 129, 0.7)",
				},
				{
					label: "Shared",
					data: [22, 18, 15, 12, 10, 8, 5],
					backgroundColor: "rgba(245, 158, 11, 0.7)",
				},
			],
		};

		// Simple grouped bar chart rendering
		const groupWidth = 150;
		const barWidth = 30;
		const barSpacing = 5;
		const chartHeight = ctx.canvas.height - 60;
		const maxValue = Math.max(...data.datasets.flatMap((d) => d.data)) + 5;
		const yStep = chartHeight / maxValue;

		// Draw axes
		ctx.beginPath();
		ctx.moveTo(50, 20);
		ctx.lineTo(50, chartHeight + 30);
		ctx.lineTo(ctx.canvas.width - 20, chartHeight + 30);
		ctx.stroke();

		// Draw y-axis labels
		for (let i = 0; i <= maxValue; i += 10) {
			const y = chartHeight + 30 - i * yStep;
			ctx.fillStyle = "#000";
			ctx.font = "10px Arial";
			ctx.textAlign = "right";
			ctx.fillText(i.toString(), 45, y);

			// Draw horizontal grid line
			ctx.beginPath();
			ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
			ctx.moveTo(50, y);
			ctx.lineTo(ctx.canvas.width - 20, y);
			ctx.stroke();
		}

		// Draw grouped bars
		data.labels.forEach((label, labelIndex) => {
			const groupX = 80 + labelIndex * groupWidth;

			data.datasets.forEach((dataset, datasetIndex) => {
				const value = dataset.data[labelIndex];
				const x = groupX + datasetIndex * (barWidth + barSpacing);
				const barHeight = value * yStep;
				const y = chartHeight + 30 - barHeight;

				// Draw bar
				ctx.fillStyle = dataset.backgroundColor;
				ctx.fillRect(x, y, barWidth, barHeight);

				// Draw value on top of bar
				ctx.fillStyle = "#000";
				ctx.font = "10px Arial";
				ctx.textAlign = "center";
				ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
			});

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
				if (testLine.length > 10 && line.length > 0) {
					ctx.fillText(
						line,
						groupX + (data.datasets.length * (barWidth + barSpacing)) / 2,
						yPos,
					);
					line = `${word} `;
					yPos += lineHeight;
				} else {
					line = testLine;
				}
			}

			ctx.fillText(
				line,
				groupX + (data.datasets.length * (barWidth + barSpacing)) / 2,
				yPos,
			);
		});

		// Draw legend
		const legendX = 80;
		const legendY = 30;

		data.datasets.forEach((dataset, index) => {
			const y = legendY + index * 20;

			ctx.fillStyle = dataset.backgroundColor;
			ctx.fillRect(legendX, y, 15, 15);

			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "left";
			ctx.fillText(dataset.label, legendX + 20, y + 7.5);
		});
	}, []);

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<canvas ref={canvasRef} width={800} height={300} />
		</div>
	);
}
