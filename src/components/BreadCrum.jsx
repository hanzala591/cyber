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

export default function BreadCrum({ product }) {
  const pathName = usePathname();
  const segments = pathName.split("/").filter((seg) => seg); // remove empty strings
  let hrefPath = "";

  return (
    <div className="mb-6 hidden lg:flex">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, index) => {
            hrefPath += `/${segment}`;
            const isLast = index === segments.length - 1;

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {product?._id === segment
                        ? product.name.charAt(0).toUpperCase() +
                          product.name.slice(1)
                        : segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={hrefPath}>
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
