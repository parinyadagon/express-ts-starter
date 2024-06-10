import { ExpressApp } from "@/app/expressApp";

const server = new ExpressApp();

server.run("authenticate", "8000");
