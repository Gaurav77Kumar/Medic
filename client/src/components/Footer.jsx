import React from 'react'
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <>
    {/* Footer */}
<footer className="border-t border-gray-200 py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-blue-600" />
        <span className="font-semibold text-gray-900">
          MediVault
        </span>
      </div>

      <p className="text-sm text-gray-500 text-center md:text-right">
        © 2025 MediVault. Your health, your data, your control.
      </p>

    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer
