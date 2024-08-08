import { ReactNode } from "react";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <main className=''>
      {children}
    </main>
  );
}

export default LayoutMain;