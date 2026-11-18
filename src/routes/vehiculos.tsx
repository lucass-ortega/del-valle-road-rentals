import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, CarFront, Check, MapPin, MessageCircle, Truck } from "lucide-react";

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
