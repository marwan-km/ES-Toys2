import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Essaka Toys project is a frontend-only app
  // using local JSON data for products and cart functionality
  // No backend routes are needed for this project

  const httpServer = createServer(app);

  return httpServer;
}
