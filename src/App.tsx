import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
    // Implement your actual sign-in logic here
  };

  const handleEmailCodeSignIn = () => {
    console.log("Sending sign-in code to:", email);
    // Implement your email code sign-in logic here
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side - Background Image */}
      <div className="relative flex-1 hidden lg:block">
        <div className="absolute inset-0">
          <img
            src="https://images-upload-s3-to-db.s3.us-east-1.amazonaws.com/af4302aab422052df58678707fa121c7"
            alt="Shipping port with container ships"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="https://images-upload-s3-to-db.s3.us-east-1.amazonaws.com/6d79d727b1252d7b34e90141310ed156" alt="Logo" className="h-12 w-auto object-contain" />
            {/* <div className="flex items-center">
              <div className="text-blue-600 h-8 w-8 border-2 border-blue-600 rounded-lg flex items-center justify-center">
                <div className="h-4 w-4 bg-blue-600 rounded-sm"></div>
              </div>
              <span className="ml-2 text-xl font-bold">
                <span className="text-gray-800">VOLTUS</span>
                <span className="text-blue-500">WAVE</span>
              </span>
            </div> */}
          </div>

          {/* Sign In Header */}
          <h1 className="text-2xl font-semibold text-center mb-8">Sign In</h1>

          {/* Login Form Fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Email" 
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-600">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
              <div className="flex justify-end">
                <a 
                  className="text-xs text-blue-500 hover:underline cursor-pointer"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <Button 
              type="button" 
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={handleSignIn}
            >
              Sign In
            </Button>

            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={handleEmailCodeSignIn}
            >
              Email Sign-in code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}