import "@/styles/globals.css";

import NavigationBars from "@/components/shared/LayoutItems/NavigationBars";
import FDBox from "@/template/components/FDBox/FDBox";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationBars>
      <FDBox className="min-h-[84vh] w-full">{children}</FDBox>
    </NavigationBars>
  );
}
