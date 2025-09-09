import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { DataTable } from "../components/ui/data-table";
import { PlusIcon, MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock student data
  const students = [
    {
      id: "ST001",
      name: "Naman Singh",
      email: "naman.singh@student.edu",
      course: "Computer Science Engineering",
      year: "3rd Year",
      status: "Active",
      phone: "+91 9876543210",
      admissionDate: "2022-08-15"
    },
    {
      id: "ST002", 
      name: "Manav Sharma",
      email: "manav.sharma@student.edu",
      course: "Mechanical Engineering",
      year: "2nd Year",
      status: "Active",
      phone: "+91 9876543211",
      admissionDate: "2023-08-20"
    },
    {
      id: "ST003",
      name: "Chinki Kumari",
      email: "chinki.kumari@student.edu",
      course: "Civil Engineering",
      year: "4th Year", 
      status: "Inactive",
      phone: "+91 9876543212",
      admissionDate: "2021-08-10"
    },
    {
      id: "ST004",
      name: "Mad Ram",
      email: "mad.ram@student.edu",
      course: "Electronics Engineering",
      year: "1st Year",
      status: "Active",
      phone: "+91 9876543213",
      admissionDate: "2024-08-25"
    }
  ];

  const columns = [
    {
      key: "id",
      label: "Student ID",
      sortable: true
    },
    {
      key: "name", 
      label: "Name",
      sortable: true,
      render: (value: string, row: any) => (
        <div className="flex flex-col">
          <span className="font-medium">{value}</span>
          <span className="text-sm text-muted-foreground">{row.email}</span>
        </div>
      )
    },
    {
      key: "course",
      label: "Course", 
      sortable: true
    },
    {
      key: "year",
      label: "Year",
      sortable: true
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge 
          variant="outline"
          className={value === "Active" 
            ? "bg-green-500/10 text-green-700 border-green-500/20" 
            : "bg-red-500/10 text-red-700 border-red-500/20"
          }
        >
          {value}
        </Badge>
      )
    },
    {
      key: "actions",
      label: "Actions",
      render: (value: any, row: any) => (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">View</Button>
          <Button variant="outline" size="sm">Edit</Button>
        </div>
      )
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground mt-1">
            Manage student information and records
          </p>
        </div>
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="erp-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search students by name, ID, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <MixerHorizontalIcon className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>All Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable 
            data={filteredStudents}
            columns={columns}
            searchTerm={searchTerm}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Students;