"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../components/ui/navbar-menu";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed  top-0 max-h-fit inset-x-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <img src="/logo.svg" alt="AussieTechJobs" className="h-8 w-auto" /> */}
            <span className="text-xl font-bold text-gray-900">AussieTechJobs</span>
          </Link>

          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Jobs">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/jobs/software">Software Development</HoveredLink>
                <HoveredLink href="/jobs/data">Data Science</HoveredLink>
                <HoveredLink href="/jobs/design">UX/UI Design</HoveredLink>
                <HoveredLink href="/jobs/devops">DevOps</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Companies">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/companies/startups">Startups</HoveredLink>
                <HoveredLink href="/companies/enterprise">Enterprise</HoveredLink>
                <HoveredLink href="/companies/remote">Remote-first</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/salaries" className="text-gray-600 hover:text-gray-900">
              Salaries
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
          </Menu>

          <div className="flex items-center space-x-4">
            <Link href="/api/auth/signin" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link href="/api/auth/signin" className="text-gray-600 hover:text-gray-900">
              Sign up
            </Link>
            <Link
              href="/post-job"
              className="bg-primary hover:bg-popover text-white px-4 py-2 rounded-md"
            >
              Post a job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}