import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const CTA = () => (
  <section
    id="contact"
    className="border-b border-slate-800 bg-slate-950/95"
  >
    <Container className="py-14">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-md shadow-slate-900/60">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Let’s work together
            </p>
            <h3 className="text-xl font-semibold text-slate-50">
              Ready to bring more calm and confidence to your product?
            </h3>
            <p className="max-w-xl text-sm text-slate-400">
              Share where your product is today and where you&apos;d like it to
              be. We’ll respond with a clear, no-pressure next step.
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;


