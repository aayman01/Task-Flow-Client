import React, { useState } from "react";
// import TodoItem from "./TodoItem";
// import TodoForm from "./TodoForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Search, FilterX } from "lucide-react";
import { Input } from "@/components/ui/input";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const TodoList = () => {
//   const { todos, isLoading } = useTodos();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("all");

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTodo(null);
  };

//   const filteredTodos = todos.filter((todo) => {
//     // Filter by view (tab)
//     if (view === "active" && todo.status === "completed") return false;
//     if (view === "completed" && todo.status !== "completed") return false;

//     // Filter by status
//     if (filterStatus !== "all" && todo.status !== filterStatus) return false;

//     // Filter by priority
//     if (filterPriority !== "all" && todo.priority !== filterPriority)
//       return false;

//     // Filter by search term
//     if (
//       searchTerm &&
//       !todo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       !todo.description.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });
let filteredTodos = [];

  const clearFilters = () => {
    setFilterStatus("all");
    setFilterPriority("all");
    setSearchTerm("");
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Your Tasks</h2>
          <Button
            onClick={() => setIsFormOpen(true)}
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus size={16} /> New Task
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex flex-1 gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>

            {(filterStatus !== "all" ||
              filterPriority !== "all" ||
              searchTerm) && (
              <Button
                variant="outline"
                size="icon"
                onClick={clearFilters}
                title="Clear all filters"
              >
                <FilterX size={18} />
              </Button>
            )}
          </div>
        </div>
      </div>

      <Tabs value={view} onValueChange={setView} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <AnimatedContainer animation="fade-in" className="space-y-1">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-gray-500">
                {searchTerm ||
                filterStatus !== "all" ||
                filterPriority !== "all"
                  ? "No tasks match your filters"
                  : "No tasks yet. Create your first task!"}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo, index) => (
              <AnimatedContainer
                key={todo.id}
                animation="slide-up"
                delay={index * 50}
              >
                <TodoItem todo={todo} onEdit={handleEditClick} />
              </AnimatedContainer>
            ))
          )}
        </AnimatedContainer>
      </Tabs>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>
              {editingTodo ? "Edit Task" : "Create New Task"}
            </DialogTitle>
          </DialogHeader>
          <TodoForm onClose={handleFormClose} initialData={editingTodo} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TodoList;
