import React, { useState } from "react"
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"

const employees = [
  {
    id: 1,
    name: "James King",
    title: "President and CEO",
    avatar: "https://i.pravatar.cc/120?img=2",
    officePhone: "781-000-0001",
    mobilePhone: "617-000-0001",
    email: "jking@fakemail.com",
  },
  {
    id: 2,
    name: "Julie Taylor",
    title: "VP of Marketing",
    avatar: "https://i.pravatar.cc/120?img=5",
    officePhone: "781-000-0002",
    mobilePhone: "617-000-0002",
    email: "jtaylor@fakemail.com",
  },
  {
    id: 3,
    name: "Eugene Lee",
    title: "CFO",
    avatar: "https://i.pravatar.cc/120?img=33",
    officePhone: "781-000-0003",
    mobilePhone: "617-000-0003",
    email: "elee@fakemail.com",
  },
  {
    id: 4,
    name: "John Williams",
    title: "VP of Engineering",
    avatar: "https://i.pravatar.cc/120?img=17",
    officePhone: "781-000-0004",
    mobilePhone: "617-000-0004",
    email: "jwilliams@fakemail.com",
  },
  {
    id: 5,
    name: "Ray Moore",
    title: "VP of Sales",
    avatar: "https://i.pravatar.cc/120?img=51",
    officePhone: "781-000-0005",
    mobilePhone: "617-000-0005",
    email: "raymoore@fakemail.com",
  },
  {
    id: 6,
    name: "Paul Jones",
    title: "QA Manager",
    avatar: "https://i.pravatar.cc/120?img=55",
    officePhone: "781-000-0006",
    mobilePhone: "617-000-0006",
    email: "pauljones@fakemail.com",
  },
]

// State to hold the search query input by the user
function HomePage({ onEmployeeSelect }) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter employees based on the search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar onSearchChange={setSearchQuery} />
      <EmployeeList
        employees={filteredEmployees}
        onEmployeeSelect={onEmployeeSelect}
      />
    </div>
  )
}

export default HomePage
