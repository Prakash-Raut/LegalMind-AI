"use client";

import { useEffect, useRef } from "react";

export function ClientMetrics() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: ["Q1", "Q2", "Q3", "Q4"],
			datasets: [
				{
					label: "New Clients",
					data: [8, 12, 15, 10],
					backgroundColor: "rgba(37, 99, 235, 0.7)",
				},
				{
					label: "Returning Clients",
					data: [15, 18, 22, 25],
					backgroundColor: "rgba(16, 185, 129, 0.7)",
				},
			],
		};

		// Simple stacked bar chart rendering
		const barWidth = 60;
		const barSpacing = 40;
		const chartHeight = ctx.canvas.height - 60;
		const maxStackValue = data.datasets.reduce((max, dataset) => {
			const stackSum = Math.max(
				...data.labels.map((_, i) =>
					data.datasets.reduce((sum, ds) => sum + ds.data[i], 0),
				),
			);
			return Math.max(max, stackSum);
		}, 0);
		const yStep = chartHeight / (maxStackValue + 5);

		// Draw axes
		ctx.beginPath();
		ctx.moveTo(50, 20);
		ctx.lineTo(50, chartHeight + 30);
		ctx.lineTo(ctx.canvas.width - 20, chartHeight + 30);
		ctx.stroke();

		// Draw y-axis labels
		for (let i = 0; i <= maxStackValue; i += 10) {
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

		// Draw stacked bars
		data.labels.forEach((label, labelIndex) => {
			let stackBase = chartHeight + 30;

			data.datasets.forEach((dataset, datasetIndex) => {
				const value = dataset.data[labelIndex];
				const x = 80 + labelIndex * (barWidth + barSpacing);
				const barHeight = value * yStep;
				const y = stackBase - barHeight;

				// Draw bar
				ctx.fillStyle = dataset.backgroundColor;
				ctx.fillRect(x, y, barWidth, barHeight);

				// Draw value in middle of bar
				ctx.fillStyle = "#fff";
				ctx.font = "bold 12px Arial";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				if (barHeight > 15) {
					// Only draw text if bar is tall enough
					ctx.fillText(value.toString(), x + barWidth / 2, y + barHeight / 2);
				}

				// Update stack base for next dataset
				stackBase = y;
			});

			// Draw x-axis label
			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "top";
			ctx.fillText(
				label,
				80 + labelIndex * (barWidth + barSpacing) + barWidth / 2,
				chartHeight + 35,
			);
		});

		// Draw legend
		const legendX = ctx.canvas.width - 150;
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
			<canvas ref={canvasRef} width={600} height={300} />
		</div>
	);
}
