"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Heart, RefreshCw, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=2400&q=92";

const categories = [
  {
    name: "Leather Shoes",
    description: "Polished formals and refined everyday pairs.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=88"
  },
  {
    name: "Ladies Bags",
    description: "Structured leather carry for work and evening.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=88"
  },
  {
    name: "Wallets",
    description: "Slim essentials finished with quiet detail.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=88"
  },
  {
    name: "Belts",
    description: "Full-grain leather for a complete wardrobe.",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=88"
  }
] as const;

const products = [
  {
    name: "Heritage Oxford Shoe",
    price: "৳ ৪,৯৯০",
    rating: "4.9",
    description: "ফুল-গ্রেইন লেদার, আরামদায়ক ইনসোল।",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Black Derby Essential",
    price: "৳ ৫,৪৯০",
    rating: "4.8",
    description: "অফিস ও ইভেন্টের জন্য মিনিমাল ফর্মাল।",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Executive Leather Loafer",
    price: "৳ ৪,৪৯০",
    rating: "4.8",
    description: "স্মার্ট-ক্যাজুয়াল স্টাইলের জন্য সফট লেদার।",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Signature Brown Monk",
    price: "৳ ৫,৯৯০",
    rating: "4.9",
    description: "প্রিমিয়াম কাট, ব্রোঞ্জ টোন হার্ডওয়্যার।",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Structured Leather Tote",
    price: "৳ ৩,৯৯০",
    rating: "4.9",
    description: "প্রতিদিনের ক্যারি, প্রিমিয়াম স্ট্রাকচার।",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Minimal Crossbody Bag",
    price: "৳ ৩,৪৯০",
    rating: "4.7",
    description: "কমপ্যাক্ট, এলিগ্যান্ট, শহুরে ব্যবহারের জন্য।",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Slim Bifold Wallet",
    price: "৳ ১,৭৯০",
    rating: "4.8",
    description: "স্লিম প্রোফাইল, স্মুথ লেদার ফিনিশ।",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=88"
  },
  {
    name: "Full Grain Belt",
    price: "৳ ২,১৯০",
    rating: "4.7",
    description: "ক্লাসিক বাকল, দীর্ঘস্থায়ী লেদার।",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1000&q=88"
  }
] as const;

const reasons = [
  { title: "Genuine Leather", text: "Selected leather with a refined grain, rich touch, and lasting structure.", icon: ShieldCheck },
  { title: "Cash on Delivery", text: "A familiar and trusted payment option for customers across Bangladesh.", icon: BadgeDollarSign },
  { title: "Fast Delivery", text: "Ready-stock essentials prepared for quick dispatch and careful packaging.", icon: Truck },
  { title: "Easy Exchange", text: "Clear exchange support so every purchase feels confident and considered.", icon: RefreshCw }
] as const;

const reviews = [
  {
    name: "Nabila Rahman",
    role: "Dhaka",
    quote: "The leather feels rich without looking loud. The shoes arrived beautifully packed and ready for work."
  },
  {
    name: "Arif Hossain",
    role: "Chattogram",
    quote: "The silhouette is clean, the sole feels stable, and the finish is far better than typical local options."
  },
  {
    name: "Mehzabin Noor",
    role: "Sylhet",
    quote: "My tote looks elegant with everything. It has that calm international feel I wanted."
  }
] as const;

const instagramImages = [
  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=88",
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=88",
  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=88",
  "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=88",
  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=88",
  "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=88"
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } }
};

function SectionIntro({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <motion.div variants={fadeUp} className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-secondary">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{text}</p> : null}
    </motion.div>
  );
}

function Rating({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-1 text-arven-gold" aria-label={value + " out of 5 rating"}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-3.5 fill-current" aria-hidden="true" />
      ))}
      <span className="ml-1 text-xs font-medium text-muted-foreground">{value}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="relative min-h-[94svh] overflow-hidden bg-arven-black text-white">
          <motion.img
            src={heroImage}
            alt="Premium brown leather shoes in an elegant lifestyle setting"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.62]"
            initial={{ scale: 1.04, opacity: 0.48 }}
            animate={{ scale: 1, opacity: 0.62 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,8,0.95),rgba(10,10,8,0.72)_46%,rgba(10,10,8,0.22)),radial-gradient(circle_at_26%_24%,rgba(185,133,75,0.3),transparent_34%)]" />
          <Container className="relative flex min-h-[94svh] items-end pb-16 pt-32 sm:pb-24 lg:pb-28">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.42em] text-arven-gold">Premium Leather | Timeless Style</motion.p>
              <motion.h1 variants={fadeUp} className="mt-5 text-balance text-4xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
                Luxury leather shoes for the modern gentleman.
              </motion.h1>
              <motion.p variants={fadeUp} lang="bn" className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                প্রিমিয়াম লেদার শু, ব্যাগ, ওয়ালেট ও বেল্ট। পরিশীলিত ডিজাইন, দীর্ঘস্থায়ী ব্যবহার।
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-arven-gold text-arven-black shadow-[0_18px_45px_rgba(185,133,75,0.25)] hover:bg-arven-gold-light">
                  <a href="#best-sellers">Shop Now <ShoppingBag className="size-4" aria-hidden="true" /></a>
                </Button>
                <Button asChild variant="outline" className="border-white/22 bg-transparent text-white hover:bg-white hover:text-arven-black">
                  <a href="#categories">Explore Collection <ArrowRight className="size-4" aria-hidden="true" /></a>
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <motion.section id="categories" className="bg-background py-16 sm:py-24 lg:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionIntro eyebrow="Featured Categories" title="Leather essentials, edited for a refined wardrobe." text="A focused collection system for shoes, bags, wallets, and belts with the same restrained ARVEN identity." />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <motion.article key={category.name} variants={fadeUp} whileHover={{ y: -6 }} className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-[0_28px_80px_rgba(10,10,8,0.12)]">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <ArrowRight className="size-4 text-secondary transition group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </motion.section>

        <motion.section id="best-sellers" className="border-y border-border bg-[#f4f1ec] py-16 sm:py-24 lg:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <SectionIntro align="center" eyebrow="Best Sellers" title="Premium leather pieces with a quieter kind of confidence." text="Eight homepage-ready products presented with Bangla prices and concise Bangla details." />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <motion.article key={product.name} variants={fadeUp} whileHover={{ y: -6 }} className="group overflow-hidden rounded-lg border border-black/10 bg-background shadow-sm transition-shadow hover:shadow-[0_30px_80px_rgba(10,10,8,0.14)]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <button className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white/92 text-arven-black shadow-sm transition hover:bg-arven-gold hover:text-arven-black" aria-label={"Add " + product.name + " to wishlist"}>
                      <Heart className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-semibold leading-6">{product.name}</h3>
                      <p lang="bn" className="shrink-0 text-sm font-semibold text-secondary">{product.price}</p>
                    </div>
                    <p lang="bn" className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{product.description}</p>
                    <div className="mt-3"><Rating value={product.rating} /></div>
                    <Button className="mt-5 w-full bg-arven-black text-white hover:bg-secondary">Add to Cart</Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </motion.section>

        <motion.section className="bg-background py-16 sm:py-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <SectionIntro align="center" eyebrow="Why Choose ARVEN" title="Made to feel premium from first glance to daily use." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <motion.article key={reason.title} variants={fadeUp} className="group bg-background p-6 transition hover:bg-arven-black hover:text-white sm:p-8">
                    <div className="flex size-12 items-center justify-center rounded-md bg-arven-black text-arven-gold transition group-hover:bg-arven-gold group-hover:text-arven-black">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground transition group-hover:text-white/62">{reason.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </Container>
        </motion.section>

        <motion.section className="bg-arven-black py-16 text-white sm:py-24 lg:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <motion.div variants={fadeUp} className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-arven-gold">Customer Reviews</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl">Loved for quiet luxury and everyday confidence.</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="max-w-md text-sm leading-7 text-white/58">Review cards are ready for verified customer data when the store system is connected.</motion.p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <motion.article key={review.name} variants={fadeUp} whileHover={{ y: -5 }} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-arven-gold/40 hover:bg-white/[0.06] sm:p-8">
                  <Rating value="5.0" />
                  <p className="mt-6 text-base leading-8 text-white/74">“{review.quote}”</p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <p className="mt-1 text-sm text-white/46">{review.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </motion.section>

        <motion.section className="bg-background py-16 sm:py-24 lg:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <SectionIntro align="center" eyebrow="Instagram Gallery" title="A polished leather mood, ready for ARVEN social storytelling." />
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {instagramImages.map((image, index) => (
                <motion.div key={image} variants={fadeUp} whileHover={{ y: -4 }} className="group aspect-square overflow-hidden rounded-lg bg-muted shadow-sm">
                  <img src={image} alt={"ARVEN leather gallery image " + (index + 1)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </motion.div>
              ))}
            </div>
          </Container>
        </motion.section>

        <motion.section className="bg-[#f4f1ec] py-16 sm:py-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <Container>
            <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-secondary">Newsletter</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl">Be first to know when ARVEN collections arrive.</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">Receive launch updates, new arrivals, and leather care notes from ARVEN Leather.</p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
                <input type="email" placeholder="Email address" className="h-12 flex-1 rounded-md border border-border bg-background px-4 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
                <Button className="h-12 bg-arven-black text-white hover:bg-secondary">Subscribe</Button>
              </form>
            </motion.div>
          </Container>
        </motion.section>
      </main>
      <SiteFooter />
    </>
  );
}
