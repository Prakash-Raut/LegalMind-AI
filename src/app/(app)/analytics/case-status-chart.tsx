"use client";

import { useEffect, useRef } from "react";

export function CaseStatusChart() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: ["Active", "Pending", "Won", "Lost", "Settled"],
			datasets: [
				{
					data: [42, 15, 25, 8, 10],
					backgroundColor: [
						"rgba(37, 99, 235, 0.7)",
						"rgba(245, 158, 11, 0.7)",
						"rgba(16, 185, 129, 0.7)",
						"rgba(239, 68, 68, 0.7)",
						"rgba(139, 92, 246, 0.7)",
					],
					borderColor: [
						"rgba(37, 99, 235, 1)",
						"rgba(245, 158, 11, 1)",
						"rgba(16, 185, 129, 1)",
						"rgba(239, 68, 68, 1)",
						"rgba(139, 92, 246, 1)",
					],
					borderWidth: 1,
				},
			],
		};

		// Simple pie chart rendering
		const centerX = ctx.canvas.width / 2;
		const centerY = ctx.canvas.height / 2;
		const radius = Math.min(centerX, centerY) * 0.8;

		const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
		let currentAngle = 0;

		data.datasets[0].data.forEach((value, index) => {
			const sliceAngle = (2 * Math.PI * value) / total;

			ctx.beginPath();
			ctx.arc(
				centerX,
				centerY,
				radius,
				currentAngle,
				currentAngle + sliceAngle,
			);
			ctx.lineTo(centerX, centerY);
			ctx.fillStyle = data.datasets[0].backgroundColor[index];
			ctx.fill();
			ctx.stroke();

			// Draw label
			const labelAngle = currentAngle + sliceAngle / 2;
			const labelX = centerX + radius * 0.7 * Math.cos(labelAngle);
			const labelY = centerY + radius * 0.7 * Math.sin(labelAngle);

			ctx.fillStyle = "#fff";
			ctx.font = "bold 12px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(`${Math.round((value / total) * 100)}%`, labelX, labelY);

			currentAngle += sliceAngle;
		});

		// Draw legend
		const legendX = 10;
		let legendY = ctx.canvas.height - data.labels.length * 20 - 10;

		data.labels.forEach((label, index) => {
			ctx.fillStyle = data.datasets[0].backgroundColor[index];
			ctx.fillRect(legendX, legendY, 15, 15);
			ctx.strokeRect(legendX, legendY, 15, 15);

			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "left";
			ctx.textBaseline = "middle";
			ctx.fillText(
				`${label} (${data.datasets[0].data[index]})`,
				legendX + 20,
				legendY + 7.5,
			);

			legendY += 20;
		});
	}, []);

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<canvas ref={canvasRef} width={300} height={300} />
		</div>
	);
}
