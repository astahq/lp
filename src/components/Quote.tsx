const Quote = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed">
            "The biggest challenge for everyone buying at an auction is the cost
            of analyzing the legal pack. People spend £600 each time with
            solicitors and often they don't even end up buying.{" "}
            <span className="text-primary font-semibold">
              If only there was a better way…
            </span>
            "
          </p>
          <footer className="mt-8 text-muted-foreground">
            — UK Property Investor
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
