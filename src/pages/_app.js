import React from "react";
import { AuthProvider } from "util/auth";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";
import Navbar2 from "components/Navbar2";
import Footer from "components/Footer"
function MyApp({ Component, serverEmotionCache, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider serverEmotionCache={serverEmotionCache}>
        <AuthProvider>
        <Navbar2
    color="default"
    logo="logo.svg"
    logoInverted="logo.svg"

  />
          <Component {...pageProps} />
          <Footer
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="logo.svg"
        logoInverted="logo.svg"
        sticky={false}
      />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
