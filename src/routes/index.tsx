import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ArrowRight, CalendarDays, Car, Clock, Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/renault-rumbo-a-los-andes.png.asset.json";
import roca from "@/assets/roca.jpg";
import neuquen from "@/assets/neuquen.jpg";
import bariloche from "@/assets/bariloche.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Del Valle Rent a Car — Tu próximo destino empieza acá" },
      { name: "description", content: "Alquilá tu vehículo en General Roca, Alto Valle y Patagonia de forma simple y segura." },
      { property: "og:title", content: "Del Valle Rent a Car" },
      { property: "og:description", content: "Alquiler de autos en General Roca, Alto Valle y Patagonia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Inicio", "Vehículos", "Cómo reservar", "Destinos", "Contacto"];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 120 40" className="h-10 w-24">
        <path d="M2 36 Q35 2 60 18 T118 34 Q70 24 2 36Z" className={light ? "fill-primary-foreground" : "fill-primary"} />
        <path d="M20 38 Q60 22 110 36 Q60 30 20 38Z" className="fill-accent" />
      </svg>
      <div className={`leading-none ${light ? "text-primary-foreground" : "text-primary"}`}>
        <div className="font-display text-2xl font-extrabold italic tracking-tight">DEL VALLE</div>
        <div className="text-[10px] font-semibold italic tracking-[0.4em]">RENT A CAR</div>
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, value, w }: { label: string; icon: typeof Car; value: string; w: string }) {
  return (
    <label className={`flex flex-col gap-1.5 ${w}`}>
      <span className="text-sm font-medium">{label}</span>
      <span className="flex h-11 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" /> {value}
      </span>
    </label>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-background font-sans">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n, i) => (
            <a key={n} href="#" className={`pb-1 text-sm font-medium ${i === 0 ? "border-b-2 border-accent text-primary" : ""}`}>{n}</a>
          ))}
          <a href="#" className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"><CalendarDays className="h-4 w-4" />Reservar ahora</a>
        </nav>
        <button onClick={() => setOpen(!open)} aria-label="Abrir menú" className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>
      {open && (
        <div className="absolute inset-x-0 top-[66px] z-50 border-t-4 border-accent bg-navy px-6 py-4 shadow-xl md:hidden animate-in slide-in-from-top-2 fade-in">
          {nav.map((n, i) => (
            <a key={n} href="#" onClick={() => setOpen(false)} className={`flex items-center justify-between border-b border-primary-foreground/10 py-3.5 font-medium text-primary-foreground ${i === 0 ? "text-accent" : ""}`}>
              {n}<ArrowRight className="h-4 w-4 text-accent" />
            </a>
          ))}
          <a href="#" className="mt-4 flex items-center justify-center gap-2 rounded-md bg-accent py-3 font-semibold text-accent-foreground"><CalendarDays className="h-4 w-4" />Reservar ahora</a>
        </div>
      )}

      <section className="relative">
        <img src={hero.url} alt="Renault azul rumbo a los Andes" width={1774} height={887} className="h-[480px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />
        <div className="absolute inset-0 mx-auto max-w-7xl px-6 pt-14 text-primary-foreground">
          <p className="text-sm tracking-[0.25em]">GENERAL ROCA · ALTO VALLE · PATAGONIA</p>
          <div className="mt-3 h-1 w-14 bg-accent" />
          <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[0.95] md:text-6xl">Tu próximo destino empieza acá</h1>
          <p className="mt-4 max-w-sm text-xl">Alquilá tu vehículo de forma simple, segura y sin complicaciones.</p>
        </div>
      </section>

      <div className="relative mx-auto -mt-24 max-w-6xl px-6">
        <div className="rounded-xl bg-card p-7 [box-shadow:var(--shadow-card)]">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-primary"><Car className="h-6 w-6" />Encontrá tu próximo vehículo</h2>
          <div className="mt-5 flex flex-wrap items-end gap-4">
            <Field label="Lugar de retiro" icon={MapPin} value="General Roca, Río Negro" w="flex-[2] min-w-52" />
            <Field label="Fecha de retiro" icon={CalendarDays} value="Seleccionar fecha" w="flex-[1.4] min-w-40" />
            <Field label="Hora" icon={Clock} value="10:00" w="flex-1 min-w-28" />
            <Field label="Fecha de devolución" icon={CalendarDays} value="Seleccionar fecha" w="flex-[1.4] min-w-40" />
            <Field label="Hora" icon={Clock} value="10:00" w="flex-1 min-w-28" />
            <button className="flex h-11 items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground"><ArrowRight className="h-5 w-5 text-accent" />Buscar vehículos</button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-primary">Destinos populares</h2>
        <div className="mt-3 h-1 w-16 bg-accent" />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[["General Roca", roca], ["Neuquén", neuquen], ["Bariloche", bariloche]].map(([n, img]) => (
            <a key={n} href="#" className="group relative h-48 overflow-hidden rounded-xl">
              <img src={img} alt={n} loading="lazy" width={1088} height={608} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <span className="absolute bottom-4 left-5 font-display text-3xl font-bold text-primary-foreground">{n}</span>
              <ArrowRight className="absolute bottom-5 right-5 h-7 w-7 text-accent" />
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-navy text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-sm">
          <Logo light />
          <div className="flex gap-2"><MapPin className="h-4 w-4" /><div>General Roca, Río Negro<br />Alto Valle, Patagonia</div></div>
          <div className="space-y-1"><div className="flex gap-2"><Phone className="h-4 w-4" />+54 298 456-7890</div><div className="flex gap-2"><MessageCircle className="h-4 w-4" />+54 9 298 456-7890</div></div>
          <div className="flex gap-2"><Mail className="h-4 w-4" />reservas@delvallerentacar.com.ar</div>
          <nav className="flex gap-5">{nav.map((n) => <a key={n} href="#">{n}</a>)}</nav>
          <div className="flex gap-3"><Instagram /><Facebook /></div>
        </div>
      </footer>
    </div>
  );
}
