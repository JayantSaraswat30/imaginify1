// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define routes that should be protected
// const isProtectedRoute = createRouteMatcher([
//   '/' // Add any additional routes here
// ]);// Update clerkMiddleware to manually protect routes

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect(); // Protect the route if it matches the defined criteria
//   }
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).)", "/", "/(api|trpc)(.)"],
// };
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};