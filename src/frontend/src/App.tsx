import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Phone, Tag, Truck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WA_NUMBER = "923048100500";
const PHONE_DISPLAY = "0304-8100500";

const products = [
  {
    id: 1,
    name: "White Swiss Lawn Laser Cut Shawl",
    img: "/assets/uploads/screenshot_20260328-014548-019d3117-4eba-70e3-ba6e-75fe34b9a728-1.jpg",
    category: "shawls",
  },
  {
    id: 2,
    name: "White & Pink Swiss Lawn Shawl",
    img: "/assets/uploads/screenshot_20260328-012521-019d3117-5b8f-735f-8e4e-f65661441276-2.jpg",
    category: "shawls",
  },
  {
    id: 3,
    name: "Beige Swiss Lawn Laser Cut Shawl",
    img: "/assets/uploads/img_20260328_014650_442-019d3117-5baf-7729-a1ae-d57dd08cf73d-3.jpg",
    category: "shawls",
  },
  {
    id: 4,
    name: "Embroidered 3-Piece Lawn Suit",
    img: "/assets/uploads/img_20260328_015128_386-019d3117-5e0b-7526-ab3c-4169b0fe9f10-4.jpg",
    category: "suits",
  },
  {
    id: 5,
    name: "Blue Floral Embroidered Suit",
    img: "/assets/uploads/img_20260328_015309_402-019d3117-5e71-75e9-80fe-0b1aba3d7b64-5.jpg",
    category: "suits",
  },
  {
    id: 6,
    name: "Brown Laser Cut Swiss Lawn Shawl",
    img: "/assets/uploads/screenshot_20260328-014535-019d3117-62f4-774f-bbc0-57b6de531ca5-6.jpg",
    category: "shawls",
  },
  {
    id: 7,
    name: "Black Swiss Lawn Laser Cut Shawl",
    img: "/assets/uploads/img_20260328_015215_800-019d3117-638f-705f-8df4-e716694d248f-7.jpg",
    category: "shawls",
  },
  {
    id: 8,
    name: "Navy Blue Laser Cut Shawl",
    img: "/assets/uploads/screenshot_20260328-014612-019d3117-6405-7141-9315-30ae1a41cd25-8.jpg",
    category: "shawls",
  },
  {
    id: 9,
    name: "Maroon Swiss Lawn Shawl",
    img: "/assets/uploads/screenshot_20260328-014518-019d3117-6a27-7277-a2f6-7c1fda3219b2-9.jpg",
    category: "shawls",
  },
  {
    id: 10,
    name: "Zara Shahjahan Embroidered Suit",
    img: "/assets/uploads/screenshot_20260328-012547-019d3117-6c86-7479-ae82-9ecd8607c230-10.jpg",
    category: "suits",
  },
  {
    id: 11,
    name: "Beige Embroidered Lawn Suit",
    img: "/assets/uploads/screenshot_20260328-015345-019d3117-6c78-709f-a512-3b1cb39382d4-11.jpg",
    category: "suits",
  },
];

const PROMO_ITEMS = ["a", "b", "c"] as const;

type Filter = "all" | "shawls" | "suits";

function waLink(productName: string) {
  const msg = encodeURIComponent(`I want to order ${productName}`);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

function PromoItem({ suffix }: { suffix: string }) {
  return (
    <span key={suffix} className="flex items-center gap-6 px-4">
      <span className="flex items-center gap-1.5">
        <Truck size={13} /> FREE HOME DELIVERY IN LAHORE
      </span>
      <span className="opacity-40">|</span>
      <span className="flex items-center gap-1.5">
        <Tag size={13} /> 60% OFF ON SELECTED LINES
      </span>
      <span className="opacity-40">|</span>
      <span className="flex items-center gap-1.5">
        <Phone size={13} /> {PHONE_DISPLAY}
      </span>
      <span className="opacity-40">|</span>
      <span className="flex items-center gap-1.5">
        <MessageCircle size={13} /> WhatsApp Us Now
      </span>
      <span className="opacity-40 px-8">✦</span>
    </span>
  );
}

export default function App() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  function scrollToCollection() {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Promo Bar */}
      <div className="bg-blush text-olive text-xs font-medium overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {PROMO_ITEMS.map((s) => (
            <PromoItem key={s} suffix={s} />
          ))}
          {PROMO_ITEMS.map((s) => (
            <PromoItem key={`dup-${s}`} suffix={`dup-${s}`} />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F7F2E8] border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <button
            type="button"
            className="font-serif text-xl md:text-2xl font-bold tracking-widest text-olive uppercase cursor-pointer bg-transparent border-0 p-0"
            onClick={scrollToCollection}
            data-ocid="nav.link"
          >
            Mahi Rishoor<span className="text-maroon">.</span>
          </button>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium text-olive">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`hover:text-maroon transition-colors pb-0.5 ${filter === "all" ? "border-b-2 border-maroon text-maroon" : ""}`}
              data-ocid="nav.all.tab"
            >
              New Arrivals
            </button>
            <button
              type="button"
              onClick={() => setFilter("shawls")}
              className={`hover:text-maroon transition-colors pb-0.5 ${filter === "shawls" ? "border-b-2 border-maroon text-maroon" : ""}`}
              data-ocid="nav.shawls.tab"
            >
              Shawls
            </button>
            <button
              type="button"
              onClick={() => setFilter("suits")}
              className={`hover:text-maroon transition-colors pb-0.5 ${filter === "suits" ? "border-b-2 border-maroon text-maroon" : ""}`}
              data-ocid="nav.suits.tab"
            >
              Suits
            </button>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="hover:text-maroon transition-colors pb-0.5"
              data-ocid="nav.sale.tab"
            >
              Sale
            </button>
          </nav>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded transition-colors"
            data-ocid="nav.button"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile filter tabs */}
        <div className="md:hidden flex gap-4 px-4 pb-3 text-xs tracking-widest uppercase font-medium text-olive overflow-x-auto">
          {(["all", "shawls", "suits"] as Filter[]).map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap pb-0.5 ${filter === f ? "border-b-2 border-maroon text-maroon" : ""}`}
              data-ocid={`nav.${f}.tab`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src="/assets/uploads/img_20260328_015309_402-019d3117-5e71-75e9-80fe-0b1aba3d7b64-5.jpg"
          alt="Mahi Rishoor Summer Collection"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive/80 via-olive/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-lg"
            >
              <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                New Collection 2026
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                Summer Elegance
                <br />
                <span className="italic text-blush">Redefined</span>
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                Premium Swiss Lawn & Embroidered Suits — now at 60% off.
                <br />
                Free delivery across Lahore.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={scrollToCollection}
                  className="bg-maroon hover:bg-maroon-dark text-white tracking-widest uppercase text-xs px-8 py-3 h-auto rounded-none"
                  data-ocid="hero.primary_button"
                >
                  Shop Now
                </Button>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-olive transition-colors tracking-widest uppercase text-xs px-6 py-3 rounded-none font-medium"
                  data-ocid="hero.secondary_button"
                >
                  <MessageCircle size={14} /> Order Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Free Delivery Banner */}
      <div className="bg-maroon text-white text-center py-4 px-4">
        <p className="text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-3">
          <Truck size={16} />
          Free Home Delivery in Lahore — Order on WhatsApp: {PHONE_DISPLAY}
          <Truck size={16} />
        </p>
      </div>

      {/* Collection */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-maroon font-medium mb-3">
            Exclusive Offers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive mb-3">
            Our Collection
          </h2>
          <div className="w-16 h-0.5 bg-maroon mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="group bg-card rounded overflow-hidden shadow-card hover:shadow-lg transition-shadow"
              data-ocid={`products.item.${idx + 1}`}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-2 left-2 bg-maroon text-white text-xs font-bold tracking-wider rounded-none px-2 py-1 border-0">
                  60% OFF
                </Badge>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-serif text-sm md:text-base font-semibold text-olive leading-tight mb-3">
                  {product.name}
                </h3>
                <a
                  href={waLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full bg-whatsapp hover:bg-green-600 text-white text-xs font-semibold tracking-wider uppercase py-2.5 rounded transition-colors"
                  data-ocid={`products.button.${idx + 1}`}
                >
                  <MessageCircle size={13} /> Order on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-olive text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Ready to Order?
            </h2>
            <p className="text-white/70 text-sm mb-8">
              Message us on WhatsApp — we&apos;ll help you place your order
              instantly.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded transition-colors"
              data-ocid="contact.primary_button"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1B16] text-white/70 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-serif text-xl font-bold text-white tracking-widest uppercase mb-3">
                Mahi Rishoor<span className="text-maroon-light">.</span>
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Premium Swiss Lawn shawls and embroidered lawn suits.
                <br />
                Elegance at every thread.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-maroon-light" />
                  <a
                    href="tel:03048100500"
                    className="hover:text-white transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle size={14} className="text-whatsapp" />
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Truck size={14} className="text-maroon-light" />
                  <span>Free delivery in Lahore</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Shop
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className="hover:text-white transition-colors"
                  >
                    All Products
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter("shawls")}
                    className="hover:text-white transition-colors"
                  >
                    Swiss Lawn Shawls
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter("suits")}
                    className="hover:text-white transition-colors"
                  >
                    Embroidered Suits
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Mahi Rishoor. All rights reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
