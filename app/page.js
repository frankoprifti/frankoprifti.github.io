import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Revealer from "@/layouts/Revealer";
import TunisLayout from "@/layouts/TunisLayout";

const Page = () => {
  return (
    <TunisLayout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
        {/* Portfolio Starts */}
        <Portfolio />
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
        {/* Blog Starts */}
        <Blog />
        {/* Blog Ends */}
      </div>
      <Revealer />
    </TunisLayout>
  );
};
export default Page;
