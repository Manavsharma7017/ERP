import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/admissions" element={<div className="p-8"><h1 className="text-2xl font-bold">Admissions - Coming Soon</h1></div>} />
            <Route path="/staff" element={<div className="p-8"><h1 className="text-2xl font-bold">Staff - Coming Soon</h1></div>} />
            <Route path="/courses" element={<div className="p-8"><h1 className="text-2xl font-bold">Courses & Batches - Coming Soon</h1></div>} />
            <Route path="/fees" element={<div className="p-8"><h1 className="text-2xl font-bold">Fees & Payments - Coming Soon</h1></div>} />
            <Route path="/hostel" element={<div className="p-8"><h1 className="text-2xl font-bold">Hostel - Coming Soon</h1></div>} />
            <Route path="/attendance" element={<div className="p-8"><h1 className="text-2xl font-bold">Attendance - Coming Soon</h1></div>} />
            <Route path="/exams" element={<div className="p-8"><h1 className="text-2xl font-bold">Exams - Coming Soon</h1></div>} />
            <Route path="/timetable" element={<div className="p-8"><h1 className="text-2xl font-bold">Timetable & Events - Coming Soon</h1></div>} />
            <Route path="/reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Reports - Coming Soon</h1></div>} />
            <Route path="/settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
