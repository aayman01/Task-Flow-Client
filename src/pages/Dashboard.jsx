import React from "react";
// import TodoList from "@/components/todos/TodoList";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { Card, CardContent } from "@/components/ui/card";

import { CheckCircle, Circle, Clock } from "lucide-react";

// Simplified with plain JavaScript patterns
const Dashboard = () => {



  let totalTasks = 3;
  let completedTasks = 4;
  let pendingTasks = 1;
  let inProgressTasks = 0;


  // Simple JavaScript array for repeatable elements
  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: (
        <div className="p-2 rounded-full bg-blue-100">
          <CheckCircle className="h-5 w-5 text-blue-600" />
        </div>
      ),
      color: "border-blue-100",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: (
        <div className="p-2 rounded-full bg-green-100">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
      ),
      color: "border-green-100",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: (
        <div className="p-2 rounded-full bg-purple-100">
          <Clock className="h-5 w-5 text-purple-600" />
        </div>
      ),
      color: "border-purple-100",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: (
        <div className="p-2 rounded-full bg-yellow-100">
          <Circle className="h-5 w-5 text-yellow-600" />
        </div>
      ),
      color: "border-yellow-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedContainer animation="fade-in">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          Manage your tasks and stay organized
        </p>
      </AnimatedContainer>

      <AnimatedContainer
        animation="slide-up"
        delay={100}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {/* Simple JavaScript map function for rendering stats */}
        {stats.map((stat, i) => (
          <Card key={i} className={`border ${stat.color}`}>
            <CardContent className="p-4 flex items-center gap-4">
              {stat.icon}
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </AnimatedContainer>
    </div>
  );
};

export default Dashboard;
