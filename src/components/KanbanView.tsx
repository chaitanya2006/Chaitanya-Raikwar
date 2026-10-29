import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertCircle, Plus, MoreHorizontal } from 'lucide-react';

interface KanbanTask {
  id: string;
  title: string;
  category: string;
  assignee: string;
  status: 'backlog' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export const KanbanView: React.FC = () => {
  const [tasks, setTasks] = useState<KanbanTask[]>([
    {
      id: 'k-1',
      title: 'Import & clean 27,468 rows from global_fuel_prices_Dataset.csv',
      category: 'Data Prep',
      assignee: 'Data Engineer',
      status: 'done',
      priority: 'high',
    },
    {
      id: 'k-2',
      title: 'Normalize multi-currency values to standard USD/Liter benchmarks',
      category: 'Data Prep',
      assignee: 'Data Analyst',
      status: 'done',
      priority: 'high',
    },
    {
      id: 'k-3',
      title: 'Build World Choropleth Map for Petrol and Diesel prices',
      category: 'Visualizations',
      assignee: 'BI Specialist',
      status: 'done',
      priority: 'high',
    },
    {
      id: 'k-4',
      title: 'Implement 2020-2027 Trendline area charts for 4 commodities',
      category: 'Visualizations',
      assignee: 'BI Specialist',
      status: 'done',
      priority: 'medium',
    },
    {
      id: 'k-5',
      title: 'Develop Regional Tax Percentage Donut Chart with drill-down',
      category: 'Visualizations',
      assignee: 'Frontend Eng',
      status: 'done',
      priority: 'medium',
    },
    {
      id: 'k-6',
      title: 'Cross-filtering latency optimization under 10ms for 5 filters',
      category: 'Performance',
      assignee: 'QA Lead',
      status: 'done',
      priority: 'high',
    },
    {
      id: 'k-7',
      title: 'Build Dr. Sarah Mitchell Policy Reform Simulator',
      category: 'Scenarios',
      assignee: 'Economics Analyst',
      status: 'done',
      priority: 'high',
    },
    {
      id: 'k-8',
      title: 'Build Marcus Thompson Freight Route Bunkering Optimizer',
      category: 'Scenarios',
      assignee: 'Logistics Consultant',
      status: 'done',
      priority: 'medium',
    },
    {
      id: 'k-9',
      title: 'Build Prof. Elena Rodriguez Income & Affordability Regression',
      category: 'Scenarios',
      assignee: 'Researcher',
      status: 'done',
      priority: 'medium',
    },
    {
      id: 'k-10',
      title: 'Publish interactive Web integration with hero and story carousel',
      category: 'Web Integration',
      assignee: 'Full Stack Eng',
      status: 'done',
      priority: 'high',
    },
  ]);

  const columns = [
    { key: 'backlog', label: 'Backlog', color: 'bg-slate-100 text-slate-700' },
    { key: 'in_progress', label: 'In Progress', color: 'bg-amber-100 text-amber-800' },
    { key: 'review', label: 'Peer Review', color: 'bg-blue-100 text-blue-800' },
    { key: 'done', label: 'Completed (100%)', color: 'bg-emerald-100 text-emerald-800' },
  ];

  const moveTask = (taskId: string, newStatus: KanbanTask['status']) => {
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)));
  };

  return (
    <div className="font-sans border border-slate-300 bg-white rounded shadow-md p-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Project Kanban Delivery Board
          </h3>
          <p className="text-xs text-slate-500">
            Tracking analytics milestones, data preparation, dashboarding, and stakeholder scenario deliverables.
          </p>
        </div>
        <div className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center space-x-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>All 10 Milestones Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.key);

          return (
            <div key={col.key} className="bg-slate-50 rounded border border-slate-200 p-2.5 flex flex-col min-h-[420px]">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${col.color}`}>
                  {col.label}
                </span>
                <span className="text-xs text-slate-400 font-mono font-medium">
                  {colTasks.length}
                </span>
              </div>

              {/* Tasks List */}
              <div className="space-y-2 flex-1">
                {colTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-2.5 bg-white rounded border border-slate-200 shadow-xs hover:shadow-sm transition text-xs"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-medium text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                        {task.category}
                      </span>
                      <span className={`font-semibold uppercase ${
                        task.priority === 'high' ? 'text-rose-600' : 'text-amber-600'
                      }`}>
                        {task.priority}
                      </span>
                    </div>

                    <div className="font-medium text-slate-800 leading-snug mb-2">
                      {task.title}
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] text-slate-500 pt-1 border-t border-slate-100">
                      <span>{task.assignee}</span>

                      {/* Status quick mover */}
                      <select
                        value={task.status}
                        onChange={(e) => moveTask(task.id, e.target.value as any)}
                        className="text-[10px] bg-slate-50 border border-slate-200 rounded px-1 py-0.5"
                      >
                        <option value="backlog">Backlog</option>
                        <option value="in_progress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </div>
                ))}

                {colTasks.length === 0 && (
                  <div className="h-24 flex items-center justify-center text-xs text-slate-400 italic">
                    No tasks in this lane
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
