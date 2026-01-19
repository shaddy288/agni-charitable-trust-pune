import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const amounts = [500, 1000, 2500, 5000, 10000];

export function DonationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async () => {
    setIsProcessing(true);
    
    // Simulating payment gateway integration (Razorpay/Stripe placeholder)
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    
    // This is a placeholder for actual payment integration
    // In production, you would integrate with Razorpay or Stripe here
    console.log("Initiating payment for amount:", amount);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success(`Thank you for your donation of ₹${amount}!`, {
      description: "Your contribution will help transform lives.",
    });
    
    setIsProcessing(false);
  };

  return (
    <section id="donate" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Support Our Cause
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              Make a Donation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your generous contribution helps us continue our mission of
              empowering communities. Every rupee you donate goes directly
              towards education, healthcare, and women empowerment programs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">
                  100% of donations go towards our programs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">
                  Tax benefits under Section 80G
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">
                  Transparent reporting on fund utilization
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-elevated p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-foreground">
                    Choose Amount
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Select or enter custom amount
                  </p>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
                <div className="col-span-3">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Pay Button */}
              <Button
                variant="donate"
                size="xl"
                className="w-full"
                onClick={handleDonation}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ₹
                    {customAmount
                      ? parseInt(customAmount).toLocaleString()
                      : selectedAmount.toLocaleString()}{" "}
                    Now
                  </>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm mt-4">
                Secured by 256-bit encryption
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
