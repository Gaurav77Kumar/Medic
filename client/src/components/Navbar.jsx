import React from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-3xl font-semibold text-gray-900">
            Medic
          </span>
        </Link>

        <Link
          to="/auth"
          className="flex items-center gap-2 rounded-md bg-blue-500 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-600"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
