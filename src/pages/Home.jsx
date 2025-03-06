import { Button } from "@/components/ui/button";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import Navbar from "@/components/NavBar";

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-12 pb-24 flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <AnimatedContainer animation="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
                Secure and Effortless Task Management
              </h1>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-in" delay={200}>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Stay organized with TaskFlow, the task manager that combines
                security, simplicity, and Google Calendar integration.
              </p>
            </AnimatedContainer>

            <AnimatedContainer
              animation="fade-in"
              delay={400}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 bg-blue-400 hover:bg-blue-500">
                Get Started
                {/* <Link to={isAuthenticated ? "/dashboard" : "/auth"}>
                  {isAuthenticated ? "Go to Dashboard" : "Get Started"}{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link> */}
              </Button>

              {/* {!isAuthenticated && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8"
                >
                  <Link to="/auth">Login</Link>
                </Button>
              )} */}
            </AnimatedContainer>
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-gray-50 py-10 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
