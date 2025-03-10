import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckSquare, LogOut, Settings, User } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useSession } from "@/context/SessionContext";
import { logoutUser } from "@/lib/authApi";

const Navbar= () => {
  const navigate = useNavigate();
  const {isLoggedIn, user, logout} = useSession();


  const handleLogout = async () => {
    try {
      const {data} = await logoutUser();
      if(data){
        logout();
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <AnimatedContainer
      animation="slide-down"
      className="border-b border-gray-100 bg-white/80 backdrop-blur-lg sticky top-0 z-10 w-full"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/icon.svg" alt="TaskFlow" className="h-8 w-8" />
          <span className="font-bold text-xl">TaskFlow</span>
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center gap-4 py-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {user?.name
                        ? getInitials(user.name)
                        : user?.email?.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/dashboard"
                    className="cursor-pointer flex w-full items-center"
                  >
                    <CheckSquare className="mr-2 h-4 w-4" />
                    <span>My Tasks</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="cursor-pointer flex w-full items-center"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/settings"
                    className="cursor-pointer flex w-full items-center"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-red-500 focus:text-red-500"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </AnimatedContainer>
  );
};

export default Navbar;
