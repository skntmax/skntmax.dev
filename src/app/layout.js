import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import Script from "next/script";

export const metadata = {
  title: "Byte Code",
  description: "Unlocking maximum potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      ></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        />
      </body>
    </html>
  );
}
