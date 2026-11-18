import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Car,
  CarFront,
  Check,
  MapPin,
  MessageCircle,
  Settings2,
  Snowflake,
  Truck,
  Users,
} from "lucide-react";

import chevroletOnix from "@/assets/chevrolet-onix-plus.webp.asset.json";
import mercedesCla from "@/assets/mercedes-cla-200.webp.asset.json";
import mercedesGlc from "@/assets/mercedes-glc-200.webp.asset.json";
import mercedesSprinter from "@/assets/mercedes-sprinter-motorhome.webp.asset.json";
import nissanFrontier from "@/assets/nissan-frontier-4x4.webp.asset.json";
import renaultFluence from "@/assets/renault-fluence.webp.asset.json";
import { PageHero } from "@/components/site/page-hero";
import { ReservationCta } from "@/components/site/reservation-cta";

export const Route = createFileRoute("/vehiculos")({
  head: () => ({
    meta: [
      { title: "Vehículos | Del Valle Patagonia Rent a Car" },
      {
        name: "description",
        content: "Conocé las categorías de vehículos de Del Valle para recorrer General Roca, el Alto Valle y la Patagonia.",
      },
      { property: "og:title", content: "Vehículos | Del Valle Patagonia Rent a Car" },
      {
        property: "og:description",
        content: "Encontrá el vehículo adecuado para tus trayectos urbanos y tus viajes por la Patagonia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://del-valle-road-rentals.lovable.app/vehiculos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://del-valle-road-rentals.lovable.app/vehiculos" }],
  }),
  component: VehiclesPage,
});

const categories = [
  {
    name: "Económico",
    icon: Car,
    description: "Una opción ágil y práctica para moverte por la ciudad y descubrir el Alto Valle.",
    features: ["Ideal para ciudad", "Uso eficiente", "Equipaje liviano"],
  },
  {
    name: "Sedán",
    icon: CarFront,
    description: "Comodidad y espacio para disfrutar tanto de los trayectos urbanos como de la ruta.",
    features: ["Confort en ruta", "Amplio baúl", "Viajes en familia"],
  },
  {
    name: "SUV",
    icon: CarFront,
    description: "Mayor amplitud y una posición de manejo elevada para tus escapadas patagónicas.",
    features: ["Interior espacioso", "Ideal para viajes", "Más capacidad de equipaje"],
  },
  {
    name: "Camioneta",
    icon: Truck,
    description: "Robustez y versatilidad para quienes necesitan espacio y capacidad de carga.",
    features: ["Gran capacidad", "Uso versátil", "Consulta según recorrido"],
  },
];

const fleet = [
  {
    name: "Chevrolet Onix Plus",
    category: "Económico",
    detail: "Compacto · 5 puertas",
    image: chevroletOnix,
    passengers: 5,
    luggage: 2,
    transmission: "Manual",
  },
  {
    name: "Renault Fluence",
    category: "Sedán",
    detail: "Sedán · 4 puertas",
    image: renaultFluence,
    passengers: 5,
    luggage: 3,
    transmission: "Manual",
  },
  {
    name: "Mercedes Benz CLA 200",
    category: "Premium",
    detail: "Sedán · 4 puertas",
    image: mercedesCla,
    passengers: 5,
    luggage: 2,
    transmission: "Automático",
  },
  {
    name: "Mercedes Benz Sprinter Motorhome",
    category: "Motorhome",
    detail: "Casa rodante · 4 personas",
    image: mercedesSprinter,
    passengers: 4,
    luggage: 4,
    transmission: "Manual",
  },
  {
    name: "Nissan Frontier 4x4",
    category: "Camioneta 4x4",
    detail: "Doble cabina · 4x4",
    image: nissanFrontier,
    passengers: 5,
    luggage: 4,
    transmission: "Automático",
  },
  {
    name: "Mercedes Benz GLC 200",
    category: "SUV Premium",
    detail: "SUV · 5 puertas",
    image: mercedesGlc,
    passengers: 5,
    luggage: 3,
    transmission: "Automático",
  },
];

function VehiclesPage() {
  return (
    <>
      <PageHero
        eyebrow="NUESTRA FLOTA"
        title="Elegí el vehículo para tu recorrido"
        description="Opciones para cada tipo de viaje, con atención personalizada para ayudarte a encontrar la categoría que mejor se adapta a vos."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon, description, features }) => (
            <article key={name} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-accent">
                <Icon className="h-8 w-8" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-primary">{name}</h2>
              <p className="mt-3 text-muted-foreground">{description}</p>
              <ul className="mt-5 flex-1 space-y-3 text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacto"
                className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-primary hover:text-primary/75"
              >
                Consultar disponibilidad
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Las categorías y modelos disponibles se confirman al momento de realizar tu consulta.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14" aria-labelledby="fleet-title">
        <div className="mb-7">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">ELEGÍ TU VEHÍCULO</p>
          <h2 id="fleet-title" className="mt-2 text-3xl font-bold text-primary">
            Opciones para tu próximo viaje
          </h2>
          <div className="mt-3 h-1 w-16 bg-accent" />
        </div>

        <div className="space-y-5">
          {fleet.map(({ name, category, detail, image, passengers, luggage, transmission }) => (
            <article
              key={name}
              className="grid overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:grid-cols-[250px_minmax(0,1fr)_190px]"
            >
              <div className="flex min-h-48 items-center justify-center border-b border-border bg-secondary p-3 lg:border-b-0 lg:border-r">
                <img
                  src={image.url}
                  alt={`${name} disponible para consultar`}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-44 w-full object-contain"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
                  {category}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-primary">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{detail}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-primary" />
                    {passengers} pasajeros
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {luggage} valijas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Settings2 className="h-4 w-4 text-primary" />
                    {transmission}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Snowflake className="h-4 w-4 text-primary" />
                    Aire acondicionado
                  </span>
                </div>

                <div className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    Disponibilidad según fechas
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    Condiciones al reservar
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Retiro en General Roca · Lugar y horario a coordinar
                </div>
              </div>

              <div className="flex flex-col justify-center border-t border-border p-6 lg:border-l lg:border-t-0 lg:text-right">
                <p className="text-sm text-muted-foreground">Tarifa</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">A consultar</p>
                <p className="mt-1 text-xs text-muted-foreground">Según fechas y duración del alquiler</p>
                <Link
                  to="/contacto"
                  aria-label={`Consultar por ${name}`}
                  className="mt-5 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Consultar
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-6 rounded-xl bg-secondary p-7 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg font-bold text-primary">Retiro coordinado</h2>
              <p className="mt-1 text-sm text-muted-foreground">Coordiná lugar y horario al momento de reservar.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg font-bold text-primary">Atención personalizada</h2>
              <p className="mt-1 text-sm text-muted-foreground">Resolvemos tus dudas antes de confirmar el viaje.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Car className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg font-bold text-primary">Una opción para cada plan</h2>
              <p className="mt-1 text-sm text-muted-foreground">Contanos tu recorrido y te ayudamos a elegir.</p>
            </div>
          </div>
        </div>
      </section>

      <ReservationCta
        title="¿No sabés qué categoría elegir?"
        description="Contanos cuántas personas viajan, cuánto equipaje llevan y qué recorrido tienen en mente."
        label="Pedir asesoramiento"
        to="/contacto"
      />
    </>
  );
}
