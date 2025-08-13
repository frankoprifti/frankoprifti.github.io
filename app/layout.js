import "@css/circle.css";
import "@css/component.css";
// import "@css/font-awesome.css";
import "@css/font-awesome.min.css";
import "@css/style.css";
import "./globals.css";
// <!-- Live Style Switcher - demo only --;
import TunisState from "@/context/context";
import TunisCss from "@/layouts/TunisCss";
import "@css/styleswitcher.css";
import { Open_Sans, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata = {
  title: "Franko Prifti - React & React Native Developer",
  description:
    "With over 7 years of experience in web and mobile development, I have acquired a comprehensive skill set in React, React Native, Node.js, Firebase, and other technologies. I have successfully delivered cross-platform mobile applications using React Native and Flutter, and engineered server-side solutions using Node.js and Firebase. I hold a Master's degree in Business Informatics from the University of Tirana, and I am passionate about learning new technologies and creating high-quality applications.",
  keywords: ['Franko Prifti', 'React Developer', 'Frontend Developer']
};

const fontFamily = `${open_sans.variable} ${poppins.variable}`;

export default function RootLayout({ children }) {
  return (
    <TunisState>
      <html
        lang="en"
        className="overflow-x-hidden h-full js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
      >
        <head>
          <TunisCss />
          <title>Franko Prifti - React & React Native Developer</title>
          <meta name="title" content="Franko Prifti - React & React Native Developer" />
          <meta name="description" content="With over 7 years of experience in web and mobile development, I have acquired a comprehensive skill set in React, React Native, Node.js, Firebase, and other technologies. I have successfully delivered cross-platform mobile applications using React Native and Flutter, and engineered server-side solutions using Node.js and Firebase. I hold a Master's degree in Business Informatics from the University of Tirana, and I am passionate about learning new technologies and creating high-quality applications." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://frankoprifti.github.io" />
          <meta property="og:title" content="Franko Prifti - React & React Native Developer" />
          <meta property="og:description" content="With over 7 years of experience in web and mobile development, I have acquired a comprehensive skill set in React, React Native, Node.js, Firebase, and other technologies. I have successfully delivered cross-platform mobile applications using React Native and Flutter, and engineered server-side solutions using Node.js and Firebase. I hold a Master's degree in Business Informatics from the University of Tirana, and I am passionate about learning new technologies and creating high-quality applications." />
          <meta property="og:image" content="https://i.ibb.co/x5GckZT/Screenshot-2024-02-21-at-11-51-04.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://frankoprifti.github.io" />
          <meta property="twitter:title" content="Franko Prifti - React & React Native Developer" />
          <meta property="twitter:description" content="With over 7 years of experience in web and mobile development, I have acquired a comprehensive skill set in React, React Native, Node.js, Firebase, and other technologies. I have successfully delivered cross-platform mobile applications using React Native and Flutter, and engineered server-side solutions using Node.js and Firebase. I hold a Master's degree in Business Informatics from the University of Tirana, and I am passionate about learning new technologies and creating high-quality applications." />
          <meta property="twitter:image" content="https://i.ibb.co/x5GckZT/Screenshot-2024-02-21-at-11-51-04.jpg" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4TJ5MSK1YK"></script>
        </head>
        <body
          className={`${fontFamily} font-Poppins text-fs-16 font-medium leading-lh-1.6`}
        >
          {children}
          <GoogleAnalytics gaId="G-4TJ5MSK1YK" />
        </body>
      </html>
    </TunisState>
  );
}
