import React, { useState, useEffect } from "react";
import { Typography, Card, CardHeader, Button } from "@material-tailwind/react";
import { TaskCardShort } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import { upcomingTask, halfDoughnutChartsData } from "@/data";
import { KanbanBoard } from "@/widgets/layout";

export function Personal() {
  return (
    <div className="container mx-auto p-8">
      <KanbanBoard />
    </div>
  );
}


export default Personal;