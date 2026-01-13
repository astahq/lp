import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";

  if (!formId) {
    throw new Error("Form ID is not set");
  }

  const formUrl = `https://formspree.io/f/${formId}`;
  const [state, handleSubmit] = useForm(formId);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about Asta? We're here to help you make smarter
            auction decisions.
          </p>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Ways to Reach Us
                </h2>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@useasta.com"
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Email Us
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        hello@useasta.com
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://cal.com/sefa-oruc-asta/15min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Book a Demo
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Schedule a 15-minute call
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        See Asta in action with a live walkthrough
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Enterprise Enquiries
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        For volume pricing and custom solutions
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Contact us for tailored packages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h2>
              {state.succeeded ? (
                <div className="text-center py-8">
                  <p className="text-lg font-medium text-foreground mb-2">
                    Thanks for your message!
                  </p>
                  <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  action={formUrl}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your enquiry..."
                      rows={5}
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full rounded-lg"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
