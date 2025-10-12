import { useState } from "react";
import { X, Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = new FormData();
  payload.append("name", formData.name);
  payload.append("email", formData.email);
  payload.append("message", formData.message);
  payload.append("_subject", "New Contact via Modal");
  payload.append("_captcha", "false");

  try {
    const res = await fetch("https://formsubmit.co/amnaasif320@gmail.com", {
      method: "POST",
      body: payload,
    });

    if (res.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      onClose();
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
  } catch (err) {
    toast({
      title: "Network error",
      description: "Check your connection and try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-lg bg-card border border-border/50 shadow-card animate-slide-up">
        <CardContent className="p-0">
          {/* Header */}
          <div className="relative p-6 bg-gradient-secondary rounded-t-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-secondary-foreground hover:bg-secondary-foreground/20"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-secondary-foreground/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-foreground mb-1">
                Let's Connect
              </h2>
              <p className="text-secondary-foreground/90">
                I'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                <User className="w-4 h-4" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-ring"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-ring"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                <MessageSquare className="w-4 h-4" />
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-ring min-h-24 resize-none"
                placeholder="Tell me about your project or just say hi!"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-secondary text-secondary-foreground hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};