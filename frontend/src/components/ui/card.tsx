import * as React from "react"

import { cn } from "@lib/utils"
import { Tooltip } from "./tooltip";
import VotingTooltip from "./voting_tooltip";



const PostCard = () => {
  return (
    <Card className="rounded-md my-6">
      <CardHeader>
        {/* Image */}
        <div className="w-full h-[15rem] overflow-hidden stack relative bg-black rounded-md">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="w-full h-full object-fit rounded"
          />
        </div>

        
        {/* Detail */}
        <div className="flex flex-row">
          <div>
          <CardTitle className="text-lg text-left">Bejo Sulaiman Hersanda Kasus Korupsi 271T</CardTitle>
          <CardDescription className="text-xs flex text-justify flex-col">
            <div className="w-11/12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </div>
            
            <span className="pt-4">-Yoseftian N, 3 March 2024</span>
          </CardDescription>
          </div>
          <div className="flex justify-center items-center">
<<<<<<< HEAD
            {/* Up / Bottom Vote */}
            <Tooltip></Tooltip>
=======


            <VotingTooltip></VotingTooltip>
            {/* <Tooltip></Tooltip> */}
>>>>>>> refs/remotes/origin/main
            
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { PostCard, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
