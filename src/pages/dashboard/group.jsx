import React from "react";
import { KanbanBoard } from "@/widgets/layout";

export function Group() {
  return (
    <div className="pt-4">
      <KanbanBoard type="Group"/>
    </div>
  );
}

export default Group;
