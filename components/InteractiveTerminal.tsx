"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Sparkles, Send, Minimize2, Maximize2 } from "lucide-react";

interface CommandLog {
 type: "input" | "output" | "system";
 text: string;
}

export default function InteractiveTerminal() {
 const [isOpen, setIsOpen] = useState(false);
 const [minimized, setMinimized] = useState(false);
 const [inputVal, setInputVal] = useState("");
 const [logs, setLogs] = useState<CommandLog[]>([
 { type: "system", text: "IoT Lab OS v4.2.0 (x86_64-kiit-linux)" },
 { type: "system", text: "Type 'help' to view available diagnostic commands." },
 ]);
 const [autoPromptShown, setAutoPromptShown] = useState(false);
 const [showMatrix, setShowMatrix] = useState(false);

 const inputRef = useRef<HTMLInputElement>(null);
 const bottomRef = useRef<HTMLDivElement>(null);

 // Auto-appear notification banner after 4 seconds of idle wait
 useEffect(() => {
 const timer = setTimeout(() => {
 if (!autoPromptShown) {
 setAutoPromptShown(true);
 }
 }, 4000);

 return () => clearTimeout(timer);
 }, [autoPromptShown]);

 // Keyboard shortcut listener: 'T' toggles terminal
 useEffect(() => {
 const handleKeyDown = (e: KeyboardEvent) => {
 if ((e.key === "t" || e.key === "T") && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
 e.preventDefault();
 setIsOpen((prev) => !prev);
 }
 };
 window.addEventListener("keydown", handleKeyDown);
 return () => window.removeEventListener("keydown", handleKeyDown);
 }, []);

 useEffect(() => {
 bottomRef.current?.scrollIntoView({ behavior: "smooth" });
 }, [logs]);

 const handleCommand = (cmd: string) => {
 const trimmed = cmd.trim().toLowerCase();
 if (!trimmed) return;

 const newLogs: CommandLog[] = [...logs, { type: "input", text: `> ${cmd}` }];

 switch (trimmed) {
 case "help":
 newLogs.push({
 type: "output",
 text: "AVAILABLE COMMANDS:\n projects - View active R&D hardware & AI projects\n domains - List 11 lab technical & creative guilds\n team - View lab leadership & coordinators\n matrix - Toggle digital matrix waterfall effect\n clear - Clear terminal history\n exit - Close terminal",
 });
 break;
 case "projects":
 newLogs.push({
 type: "output",
 text: "[PROJECTS DIRECTORY]\n 1. Smart Campus Ambient IoT Mesh (LoRaWAN + ESP32)\n 2. AI Edge Vision Gatekeeper (YOLOv8 + Raspberry Pi)\n 3. IoT Lab Next-Gen Digital Portal (Next.js 13)\n 4. Codeforces Bench & Analytics Engine (PostgreSQL)\n 5. Autonomous Drone Swarm Telemetry (ROS2 + PX4)",
 });
 break;
 case "domains":
 newLogs.push({
 type: "output",
 text: "[TECHNICAL & CREATIVE GUILDS]\n Technical: CP, App Dev, Web Dev, IoT & Embedded, ML & AI, Cybersecurity\n Creative: Content, GD & UI/UX, Video Production, Marketing, Administration",
 });
 break;
 case "team":
 newLogs.push({
 type: "output",
 text: "[LAB LEADERSHIP]\n Faculty Coordinators: Dr. Abhishek Ray, Dr. Junali Jasmine Jena\n Student Leads: Sujal Raj (Coordinator), Priyam Vatsa (Lead), Aaryan Sharma (Tech)",
 });
 break;
 case "matrix":
 setShowMatrix((prev) => !prev);
 newLogs.push({
 type: "output",
 text: showMatrix ? "Matrix mode deactivated." : "Matrix rain initiated... Welcome to the lab matrix.",
 });
 break;
 case "clear":
 setLogs([]);
 return;
 case "exit":
 setIsOpen(false);
 return;
 default:
 newLogs.push({
 type: "output",
 text: `Command not recognized: '${trimmed}'. Type 'help' for options.`,
 });
 break;
 }

 setLogs(newLogs);
 setInputVal("");
 };

 return (
 <>
 {/* Auto-Appeared Floating Prompt HUD in Bottom Corner */}
 {autoPromptShown && !isOpen && (
 <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 border border-brand-blue-400/20 bg-white px-4 py-2.5 -2xl shadow-brutal-sm transition-all duration-300">
 <div className="flex h-3 w-3 items-center justify-center">
 <span className="h-2 w-2 bg-brand-blue/10" />
 </div>
 <span className="font-mono text-xs text-brand-blue font-medium">
 Press <kbd className=" border border-brand-blue bg-gray-100 px-1.5 py-0.5 text-[10px] text-brand-blue font-bold">T</kbd> to launch Lab Terminal
 </span>
 <button
 onClick={() => setIsOpen(true)}
 className=" bg-brand-blue/10 p-1 hover:bg-brand-blue/10 text-brand-blue transition-colors"
 >
 <TerminalIcon className="h-4 w-4" />
 </button>
 </div>
 )}

 {/* Floating HUD Trigger Button */}
 {!isOpen && (
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-6 right-20 z-40 flex h-12 w-12 items-center justify-center border border-brand-blue bg-white text-brand-blue shadow-brutal transition-all hover:scale-110 hover:border-brand-blue-400 hover:shadow-brutal-sm"
 title="Open Interactive Terminal (Shortcut: T)"
 >
 <TerminalIcon className="h-5 w-5" />
 </button>
 )}

 {/* Interactive Terminal Modal Window */}
 {isOpen && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-blue/10 ">
 <div
 className={`relative w-full max-w-2xl overflow-hidden border border-brand-blue bg-[#0B1536]/95 text-green-400 shadow-brutal transition-all duration-300 ${
 minimized ? "h-14" : "h-[480px]"
 }`}
 >
 {/* Terminal Window Header Bar */}
 <div className="flex items-center justify-between border-b border-brand-blue bg-brand-blue/10 px-6 py-3 font-mono text-xs text-brand-blue">
 <div className="flex items-center gap-2">
 <TerminalIcon className="h-4 w-4 text-brand-blue" />
 <span>iot_lab_os@kiit:~$ (Interactive CLI)</span>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => setMinimized((prev) => !prev)}
 className="text-brand-blue/80 hover:text-white p-1"
 >
 {minimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
 </button>
 <button
 onClick={() => setIsOpen(false)}
 className="text-brand-blue/80 hover:text-red-400 p-1"
 >
 <X className="h-4 w-4" />
 </button>
 </div>
 </div>

 {/* Terminal Output Body */}
 {!minimized && (
 <div className="flex flex-col justify-between h-[calc(100%-48px)] p-6 font-mono text-xs space-y-4">
 <div className="overflow-y-auto space-y-2 pr-2 scrollbar-thin">
 {logs.map((log, index) => (
 <div
 key={index}
 className={
 log.type === "input"
 ? "text-brand-blue font-bold"
 : log.type === "system"
 ? "text-brand-blue/80 italic"
 : "text-green-400 whitespace-pre-wrap leading-relaxed"
 }
 >
 {log.text}
 </div>
 ))}
 <div ref={bottomRef} />
 </div>

 {/* Input Line */}
 <form
 onSubmit={(e) => {
 e.preventDefault();
 handleCommand(inputVal);
 }}
 className="flex items-center gap-2 pt-2 border-t border-brand-blue"
 >
 <span className="text-brand-blue font-bold">{`>`}</span>
 <input
 ref={inputRef}
 type="text"
 value={inputVal}
 onChange={(e) => setInputVal(e.target.value)}
 placeholder="Type command (e.g. help, projects, matrix)..."
 className="w-full bg-transparent text-white font-mono outline-none placeholder-gray-500"
 autoFocus
 />
 <button type="submit" className="text-brand-blue hover:text-white">
 <Send className="h-4 w-4" />
 </button>
 </form>
 </div>
 )}
 </div>
 </div>
 )}
 </>
 );
}
