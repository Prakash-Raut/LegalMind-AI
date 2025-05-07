"use client";

import { useEffect, useRef } from "react";

export function CaseTimeline() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			datasets: [
				{
					label: "New Cases",
					data: [5, 3, 7, 4, 6, 8, 5, 4, 7, 6, 9, 4],
					borderColor: "rgba(37, 99, 235, 1)",
					backgroundColor: "rgba(37, 99, 235, 0.2)",
				},
				{
					label: "Resolved Cases",
					data: [3, 2, 4, 5, 3, 6, 4, 3, 5, 7, 4, 6],
					borderColor: "rgba(16, 185, 129, 1)",
					backgroundColor: "rgba(16, 185, 129, 0.2)",
				},
			],
		};

		// Simple line chart rendering
		const chartHeight = ctx.canvas.height - 60;
		const chartWidth = ctx.canvas.width - 60;
		const xStep = chartWidth / (data.labels.length - 1);
		const maxValue = Math.max(...data.datasets.flatMap((d) => d.data)) + 2;
		const yStep = chartHeight / maxValue;

		// Draw axes
		ctx.beginPath();
		ctx.moveTo(40, 20);
		ctx.lineTo(40, chartHeight + 30);
		ctx.lineTo(chartWidth + 50, chartHeight + 30);
		ctx.stroke();

		// Draw x-axis labels
		data.labels.forEach((label, index) => {
			const x = 40 + index * xStep;
			ctx.fillStyle = "#000";
			ctx.font = "10px Arial";
			ctx.textAlign = "center";
			ctx.fillText(label, x, chartHeight + 45);
		});

		// Draw y-axis labels
		for (let i = 0; i <= maxValue; i += 2) {
			const y = chartHeight + 30 - i * yStep;
			ctx.fillStyle = "#000";
			ctx.font = "10px Arial";
			ctx.textAlign = "right";
			ctx.fillText(i.toString(), 35, y);

			// Draw horizontal grid line
			ctx.beginPath();
			ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
			ctx.moveTo(40, y);
			ctx.lineTo(chartWidth + 50, y);
			ctx.stroke();
		}

		// Draw datasets
		data.datasets.forEach((dataset, datasetIndex) => {
			ctx.beginPath();
			dataset.data.forEach((value, index) => {
				const x = 40 + index * xStep;
				const y = chartHeight + 30 - value * yStep;

				if (index === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}

				// Draw point
				ctx.fillStyle = dataset.borderColor;
				ctx.beginPath();
				ctx.arc(x, y, 4, 0, Math.PI * 2);
				ctx.fill();
			});

			ctx.strokeStyle = dataset.borderColor;
			ctx.lineWidth = 2;
			ctx.stroke();

			// Draw area under the line
			const firstX = 40;
			const lastX = 40 + (dataset.data.length - 1) * xStep;

			ctx.lineTo(lastX, chartHeight + 30);
			ctx.lineTo(firstX, chartHeight + 30);
			ctx.closePath();

			ctx.fillStyle = dataset.backgroundColor;
			ctx.fill();
		});

		// Draw legend
		const legendX = ctx.canvas.width - 150;
		const legendY = 30;

		data.datasets.forEach((dataset, index) => {
			const y = legendY + index * 20;

			ctx.fillStyle = dataset.backgroundColor;
			ctx.fillRect(legendX, y, 15, 15);

			ctx.strokeStyle = dataset.borderColor;
			ctx.strokeRect(legendX, y, 15, 15);

			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "left";
			ctx.fillText(dataset.label, legendX + 20, y + 7.5);
		});
	}, []);

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<canvas ref={canvasRef} width={600} height={300} />
		</div>
	);
}
