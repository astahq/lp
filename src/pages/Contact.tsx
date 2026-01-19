import { FormEvent, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MessageSquare } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormState {
  submitting: boolean;
  succeeded: boolean;
  errors: Record<string, string[]>;
  formErrors: string[];
}

const Contact = () => {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [state, setState] = useState<FormState>({
    submitting: false,
    succeeded: false,
    errors: {},
    formErrors: [],
  });

  if (!formId || !recaptchaSiteKey) {
    throw new Error("Form ID or reCAPTCHA site key is not set");
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      return;
    }

    setState({ submitting: true, succeeded: false, errors: {}, formErrors: [] });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("g-recaptcha-response", recaptchaToken);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: {}, formErrors: [] });
        form.reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaToken("");
      } else {
        const fieldErrors: Record<string, string[]> = {};
        const formErrors: string[] = [];

        if (data.errors) {
          data.errors.forEach((err: { field?: string; message: string }) => {
            if (err.field) {
              if (!fieldErrors[err.field]) {
                fieldErrors[err.field] = [];
              }
              fieldErrors[err.field].push(err.message);
            } else {
              formErrors.push(err.message);
            }
          });
        } else {
          formErrors.push("Submission failed. Please try again.");
        }

        setState({
          submitting: false,
          succeeded: false,
          errors: fieldErrors,
          formErrors,
        });
      }
    } catch (error) {
      setState({
        submitting: false,
        succeeded: false,
        errors: {},
        formErrors: ["Network error. Please try again."],
      });
    }
  };

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || "");
  };

  const onRecaptchaExpired = () => {
    setRecaptchaToken("");
  };

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
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    {state.errors.name && (
                      <p className="text-sm text-destructive">
                        {state.errors.name[0]}
                      </p>
                    )}
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
                    {state.errors.email && (
                      <p className="text-sm text-destructive">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                    {state.errors.subject && (
                      <p className="text-sm text-destructive">
                        {state.errors.subject[0]}
                      </p>
                    )}
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
                    {state.errors.message && (
                      <p className="text-sm text-destructive">
                        {state.errors.message[0]}
                      </p>
                    )}
                  </div>
                  {state.formErrors.length > 0 && (
                    <div className="text-sm text-destructive">
                      {state.formErrors.map((error, i) => (
                        <p key={i}>{error}</p>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaSiteKey}
                      onChange={onRecaptchaChange}
                      onExpired={onRecaptchaExpired}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting || !recaptchaToken}
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
