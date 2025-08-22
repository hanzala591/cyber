"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
export default function BreadCrum({ pathName }) {
  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          {/* {pathName.map((value, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${value}`}>{value}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            );
          })} */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
