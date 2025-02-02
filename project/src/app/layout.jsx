import "../index.css";

export const metadata = {
  title: "My PortFoilo",
  description: "My PortFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
