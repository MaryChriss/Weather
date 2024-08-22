import { Menu } from "../Menu/Menu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
      <Menu />
    </div>
  );
}
