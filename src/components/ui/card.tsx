import React from "react";
export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={`border bg-white text-slate-900 ${className}`.trim()} {...props} />; }
export function CardHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={`flex flex-col space-y-1.5 p-6 ${className}`.trim()} {...props} />; }
export function CardTitle({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className={`font-semibold leading-none tracking-tight ${className}`.trim()} {...props} />; }
export function CardDescription({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) { return <p className={`text-sm text-slate-500 ${className}`.trim()} {...props} />; }
export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={`p-6 pt-0 ${className}`.trim()} {...props} />; }
