import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <main className=' bg-slate-800'>
      <Navbar />
      {children}
    </main>
  );
}

export default LayoutMain;