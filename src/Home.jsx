import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, FlaskConical, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">NEXGENE PEPTIDES</h1>
        <p className="text-lg text-gray-600">
          Your trusted source for high-purity research peptides. For laboratory research only.
        </p>
        <Button size="lg">Browse Catalog</Button>
      </div>

      {/* Product Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <FlaskConical className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold">BPC-157</h2>
            <p>High-purity research peptide. Available in 5mg and 10mg vials. COA included.</p>
            <Button className="mt-2">View Product</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <FlaskConical className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold">Semaglutide (Ozempic)</h2>
            <p>Research-grade compound. Verified purity. Not for human consumption.</p>
            <Button className="mt-2">View Product</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <ShieldCheck className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold">Quality Guaranteed</h2>
            <p>Every batch tested. Certificates of Analysis available for all products.</p>
          </CardContent>
        </Card>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t pt-6 space-y-4 text-center">
        <h3 className="text-lg font-semibold">Get the Latest Research Updates</h3>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Your email address" />
          <Button>Subscribe</Button>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 NEXGENE PEPTIDES – For Research Use Only. Not for Human Consumption.
        </p>
      </div>
    </div>
  );
}
