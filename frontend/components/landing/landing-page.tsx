"use client";

import Image from "next/image";
import { useState, type ReactNode, type SVGProps } from "react";
import {
  ArrowRightIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/landing/icons";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

type ContactItem = {
  label: string;
  value: string;
  description?: string;
  href: string;
  icon: IconComponent;
  external?: boolean;
};

const clinicName = "Dra. Suzana Silveira";
const clinicShortName = "Dra. Suzana Silveira";
const clinicSpecialty = "Medica Infectologista CRM-SP: 70.700 | RQE: 49.110";
const clinicAddress =
  "Av. Anchieta, 585 - Jardim Nova America São José dos Campos SP CEP: 12242-280";
const clinicPhoneDisplay = "+55 (12) 98886-1256";
const clinicPhoneNumber = "5512988861256";
const clinicPhoneHref = `tel:+${clinicPhoneNumber}`;
const clinicEmail = "susilveira1@gmail.com";
const clinicEmailHref = "mailto:susilveira1@gmail.com";
const clinicLogoSrc = "/logo-suzana.jpeg";
const instagramUrl = "https://www.instagram.com/drasuzanasilveira/";
const whatsappText = encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta.",
);

const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${whatsappText}`;

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  clinicAddress,
)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  clinicAddress,
)}&z=16&output=embed`;

const heroNavigation: NavigationItem[] = [
  { label: "Início", href: "#home" },
  { label: "Localização", href: "#location" },
  { label: "Contato", href: "#contact" },
];

const contactCards: ContactItem[] = [
  {
    label: "WhatsApp",
    value: clinicPhoneDisplay,
    href: whatsappUrl,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Telefone",
    value: clinicPhoneDisplay,
    href: clinicPhoneHref,
    icon: PhoneIcon,
  },
  {
    label: "E-mail",
    value: clinicEmail,
    href: clinicEmailHref,
    icon: MailIcon,
  },
];

const footerNavigation: NavigationItem[] = [
  { label: "Início", href: "#home" },
  { label: "Localização", href: "#location" },
  { label: "Contato", href: "#contact" },
];

const footerDetails: ContactItem[] = [
  {
    label: "WhatsApp",
    value: clinicPhoneDisplay,
    href: whatsappUrl,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "E-mail",
    value: clinicEmail,
    href: clinicEmailHref,
    icon: MailIcon,
  },
  {
    label: "Endereço",
    value: clinicAddress,
    href: mapsSearchUrl,
    icon: MapPinIcon,
    external: true,
  },
];

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <main className="bg-[#f7fbfe]">
        <HeroSection />
        <LocationSection />
      </main>
      <Footer currentYear={currentYear} />
    </div>
  );
}

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="grid `min-h-[100svh]` lg:grid-cols-[1.02fr_0.98fr]"
    >
      <div className="flex min-h-[52svh] flex-col bg-[#f5f9fd] px-5 py-5 sm:px-8 sm:py-6 md:px-10 lg:px-16 lg:py-8">
        <div className="motion-fade-up border-b border-[#c7dbef] pb-5">
          <div className="flex items-center justify-between gap-3 sm:gap-5">
            <a
              href="#home"
              className="flex min-w-0 items-center gap-3 text-[#7ea9d5]"
            >
              <ClinicLogo tone="hero" size="sm" />
              <span className="truncate text-xs font-semibold sm:text-sm">
                {clinicShortName}
              </span>
            </a>

            <div className="hidden xl:flex xl:items-center xl:gap-7">
              <nav className="flex items-center gap-7 text-sm text-[#7ea9d5]">
                {heroNavigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="link-soft hover:text-[#5f8fbe]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive-soft inline-flex items-center justify-center rounded-md bg-[#8abdeb] px-4 py-2 text-sm font-medium text-slate-900 hover:bg-[#7fb6e5]"
              >
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-controls="hero-mobile-nav"
              className="interactive-outline inline-flex shrink-0 items-center justify-center rounded-md border border-[#c7dbef] bg-white px-4 py-2 text-sm font-medium text-[#6c97c3] hover:border-[#8abdeb] xl:hidden"
            >
              {isMenuOpen ? "Fechar" : "Menu"}
            </button>
          </div>

          {isMenuOpen ? (
            <div
              id="hero-mobile-nav"
              className="mt-5 grid gap-5 border-t border-[#d7e7f4] pt-5 xl:hidden"
            >
              <nav className="grid gap-3 text-sm text-[#7ea9d5]">
                {heroNavigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-1 py-1.5 transition-colors hover:text-[#5f8fbe]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="interactive-soft inline-flex w-full items-center justify-center rounded-md bg-[#8abdeb] px-4 py-2 text-sm font-medium text-slate-900 hover:bg-[#7fb6e5] sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          ) : null}
        </div>

        <div className="motion-fade-up motion-delay-1 flex flex-1 flex-col justify-center py-10 sm:py-12 lg:py-14">
          <div className="max-w-xl">
            <h1 className="font-display leading-[0.95] tracking-[-0.07em] text-[#8abdeb]">
              <span className="mt-1 block text-[clamp(3.25rem,6vw,5.35rem)] font-semibold">
                Cuidado com
              </span>
              <span className="mt-1 block text-[clamp(3.25rem,6vw,5.35rem)] font-semibold">
                sua saúde
              </span>
            </h1>
            <div className="mt-6 h-px w-32 bg-[#8abdeb] sm:w-48" />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6f8dab] sm:text-base sm:leading-8">
              Atendimento em infectologia com escuta qualificada, rigor técnico
              e uma experiência acolhedora do primeiro contato ao
              acompanhamento.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#location"
              className="interactive-outline inline-flex w-full items-center justify-center border border-[#8abdeb] px-6 py-3 text-sm font-medium text-[#6c97c3] hover:bg-[#e7f2fb] sm:w-auto"
            >
              Ver localização
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="interactive-soft inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#34e07a] px-6 py-3 text-sm font-medium !text-white hover:from-[#22c55e] hover:to-[#4ade80] sm:w-auto"
            >
              Mensagem no WhatsApp
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="motion-fade-up motion-delay-2 flex items-center gap-3 pt-5 text-[#6c97c3] sm:pt-6">
          <SocialCircle href={clinicEmailHref} ariaLabel="E-mail">
            <MailIcon className="size-4" />
          </SocialCircle>
          <SocialCircle href={instagramUrl} ariaLabel="Instagram" external>
            <InstagramIcon className="size-4" />
          </SocialCircle>
          <SocialCircle href={whatsappUrl} ariaLabel="WhatsApp" external>
            <WhatsAppIcon className="size-4" />
          </SocialCircle>
        </div>
      </div>

      <div className="motion-fade-in motion-delay-2 flex min-h-[44svh] flex-col bg-[#dcebf8] sm:min-h-[48vh] lg:min-h-[100svh]">
        <div className="relative min-h-[44svh] flex-1 overflow-hidden sm:min-h-[48vh] lg:min-h-0">
          <Image
            src="/foto.JPG"
            alt="Imagem principal da clínica"
            fill
            priority
            className="object-cover object-[center_-60px]"
          />
        </div>
        <HeroSignature />
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section
      id="location"
      className="bg-[#fbfdff] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-8">
          <div className="space-y-6 lg:col-start-1 lg:row-start-1">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
                Localização
              </p>
              <address className="not-italic">
                <h2 className="max-w-2xl text-[clamp(1.35rem,3vw,1.5rem)] font-semibold leading-tight tracking-[-0.04em] text-gray-850">
                  {clinicAddress}
                </h2>
              </address>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="group interactive-soft inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[#7fb6e5] sm:w-auto"
              >
                Abrir no Google Maps
                <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive-outline inline-flex w-full items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink  hover:border-brand/40 sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#d7e7f4] bg-white shadow-[0_30px_70px_-46px_rgba(100,139,176,0.45)] sm:rounded-[34px] lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="aspect-[4/3] min-h-[280px] sm:aspect-[16/11] sm:min-h-[360px]">
              <iframe
                title="Mapa com a localização da clínica"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <div className="border-t border-[#d7e7f4] pt-5 lg:col-start-1 lg:row-start-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
              Contato
            </p>
            <div className="mt-4 max-w-xl overflow-hidden rounded-[28px] border border-[#d7e7f4] bg-white">
              <div className="divide-y divide-[#d7e7f4]">
                {contactCards.map((item) => (
                  <ContactInlineItem key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function AboutSection() {
//   const aboutCards = [
//     {
//       label: "Atendimento humano",
//       text: "Escuta qualificada, acompanhamento próximo e cuidado centrado na pessoa em cada etapa da consulta.",
//       icon: HeartPulseIcon,
//     },
//     {
//       label: "Rigor técnico",
//       text: "Atuação em infectologia com condutas baseadas em evidências, avaliação individualizada e orientação clara.",
//       icon: ShieldCheckIcon,
//     },
//     {
//       label: "Experiência acolhedora",
//       text: "Um consultório pensado para transmitir calma, confiança e clareza desde o primeiro contato.",
//       icon: SparkleIcon,
//     },
//   ];

//   return (
//     <section
//       id="sobre"
//       className="bg-[#f5f9fd] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24"
//     >
//       <div className="mx-auto w-full max-w-7xl">
//         <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
//           <div className="space-y-5">
//             <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
//               Sobre
//             </p>

//             <div className="space-y-4">
//               <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-tight tracking-[-0.06em] text-ink">
//                 Sobre a Dra. Suzana Silveira
//               </h2>

//               <div className="h-px w-28 bg-[#8abdeb]" />

//               <p className="max-w-xl text-sm leading-7 text-[#6f8dab] sm:text-base sm:leading-8">
//                 Médica infectologista com atuação voltada a um cuidado técnico,
//                 humano e contemporâneo, unindo escuta qualificada, precisão
//                 clínica e acompanhamento próximo.
//               </p>

//               <p className="max-w-xl text-sm leading-7 text-[#6f8dab] sm:text-base sm:leading-8">
//                 A proposta do consultório é oferecer uma experiência clara e
//                 acolhedora, com atenção individualizada e orientações seguras
//                 para cada paciente.
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-1">
//             {aboutCards.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.label}
//                   className="rounded-[28px] border border-[#d7e7f4] bg-white p-5 shadow-[0_30px_70px_-46px_rgba(100,139,176,0.45)] sm:p-6"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#eef6fd] text-brand">
//                       <Icon className="size-5" />
//                     </div>

//                     <div className="space-y-2">
//                       <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
//                         {item.label}
//                       </p>
//                       <p className="text-sm leading-7 text-muted">
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function ContactInlineItem({ item }: { item: ContactItem }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className="group flex min-h-[76px] items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-[#f8fbfe] sm:min-h-[88px] sm:px-5"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eef6fd] text-brand transition-transform duration-300 ease-out group-hover:scale-105">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0 space-y-1.5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
          {item.label}
        </p>
        <p className="break-words text-sm leading-6 font-medium text-ink transition-colors group-hover:text-[#4f84b4]">
          {item.value}
        </p>
      </div>
    </a>
  );
}

function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer id="contact" className="bg-[#fbfdff] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-line/90 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <ClinicLogo size="md" />
              <div>
                <p className="text-base font-semibold text-ink">{clinicName}</p>
                <p className="text-sm text-muted">
                  Infectologista e especialista em Medicina de Família e
                  Comunidade
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-muted">
              Atuação em infectologia, docência médica, gestão em saúde e
              acreditação de serviços, com uma prática técnica, humana e atual.
            </p>
          </div>

          <div className="flex items-center gap-3 text-muted">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="interactive-outline inline-flex size-10 items-center justify-center rounded-full border border-line bg-white hover:border-brand/40 hover:text-ink"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="interactive-outline inline-flex size-10 items-center justify-center rounded-full border border-line bg-white hover:border-brand/40 hover:text-ink"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.05fr_0.7fr_1fr]">
          <div className="space-y-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
              Informações profissionais
            </p>
            <p className="max-w-[520px] text-sm leading-7 text-muted">
              Médica Infectologista CRM-SP: 70.700 | RQE: 49.110
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
              Navegação
            </p>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              {footerNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">
              Contato
            </p>
            <div className="mt-5 grid gap-5">
              {footerDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-start gap-3 text-sm text-muted transition hover:text-ink"
                  >
                    <Icon className="mt-1 size-4 text-brand" />
                    <div>
                      <p className="font-medium text-ink">{item.label}</p>
                      <p className="mt-1 leading-6">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line/90 pt-6 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            Copyright {currentYear} {clinicName}. Todos os direitos reservados.
          </p>
          <p>Experiência digital em saúde calma, clara e contemporânea.</p>
        </div>
      </div>
    </footer>
  );
}

function HeroScene() {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 620 680"
        className="h-full w-full"
        role="img"
        aria-label="Composição editorial minimalista para a seção principal da landing page"
      >
        <rect width="620" height="680" fill="#dcebf8" />
        <g fill="none" stroke="#f7fbff" strokeWidth="1.5">
          <path d="M502 48c10-16 27-25 46-25 22 0 42 11 54 29-17-8-35-8-50 1 11 5 18 16 19 29-11-9-26-12-39-8 6 7 8 16 7 25-10-10-25-14-39-10 5-12 6-26 2-39Z" />
          <path d="M548 33c-3 24-16 45-37 57" />
          <path d="M530 28c-1 20 7 38 22 51" />
          <path d="M120 536c-10 18-28 31-49 36 14-13 20-31 16-49-11 8-25 11-38 8 10-10 14-24 11-38-9 7-21 9-32 7 10-8 16-20 16-33 10 12 25 20 41 21 12 1 23 6 31 15" />
          <path d="M111 541c-5 33-2 64 10 94" />
          <path d="M94 551c22 20 47 34 75 41" />
        </g>
        <circle cx="322" cy="292" r="155" fill="#f5f9fd" />
        <g clipPath="url(#hero-circle)">
          <path
            d="M228 455c0-69 56-125 125-125s125 56 125 125v77H228v-77Z"
            fill="#f8fbfe"
          />
          <path
            d="M314 208c41 0 74 32 74 72v60c0 41-33 74-74 74s-74-33-74-74v-60c0-40 33-72 74-72Z"
            fill="#f3d9ca"
          />
          <path
            d="M243 291c0-56 33-102 73-102 42 0 89 35 89 92v20c-24-15-48-23-73-24-36-2-65-22-81-52-5 21-8 44-8 66Z"
            fill="#273241"
          />
          <path
            d="M272 441c9-32 31-58 62-72 31 14 53 40 62 72v92H272v-92Z"
            fill="#ffffff"
          />
          <path
            d="M238 494h165c42 0 76 34 76 76v32H162v-32c0-42 34-76 76-76Z"
            fill="#edf5fb"
          />
          <path
            d="M250 501c39 18 82 28 126 28 36 0 71-7 103-20v93H162v-32c0-33 18-62 45-76 13 4 27 7 43 7Z"
            fill="#f8fbfe"
          />
          <path d="M292 445h46l18 38-42 46-40-46 18-38Z" fill="#ffffff" />
          <rect
            x="220"
            y="517"
            width="238"
            height="24"
            rx="12"
            fill="#d8e8f6"
          />
          <rect
            x="280"
            y="508"
            width="118"
            height="9"
            rx="4.5"
            fill="#9fc7ea"
          />
        </g>
        <rect
          x="474"
          y="279"
          width="88"
          height="88"
          fill="#8abdeb"
          fillOpacity="0.72"
        />
        <path
          d="M534 600h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm-44 22h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm-44 22h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Zm22 0h8a3 3 0 1 1 0 6h-8a3 3 0 1 1 0-6Z"
          fill="#a8cae8"
        />
        <defs>
          <clipPath id="hero-circle">
            <circle cx="322" cy="292" r="155" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroSignature() {
  return (
    <div className="border-t border-white/60 bg-[#edf5fb] px-5 py-5 sm:px-8 sm:py-6">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <div className="min-w-0">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7ea9d5]">
            {clinicSpecialty}
          </p>

          <div className="mt-2">
            <p className="text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-none tracking-[-0.04em] text-[#7ea9d5]">
              Dra. Suzana Aparecida Silveira
            </p>
          </div>
        </div>

        <div className="hidden min-w-[120px] items-center justify-end sm:flex">
          <span className="h-px w-full bg-[#c7dbef]" />
        </div>
      </div>
    </div>
  );
}

function SocialCircle({
  href,
  ariaLabel,
  children,
  external = false,
}: {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className="interactive-icon flex size-10 items-center justify-center rounded-full bg-[#8abdeb] text-[#f5f9fd] hover:bg-[#77b0e1]"
    >
      {children}
    </a>
  );
}

function ClinicLogo({
  tone = "default",
  size = "md",
}: {
  tone?: "default" | "hero";
  size?: "sm" | "md";
}) {
  const toneClasses =
    tone === "hero"
      ? "border-[#8abdeb]/70 bg-white/90"
      : "border-brand/20 bg-white";
  const sizeClasses =
    size === "sm" ? "size-13 p-1 sm:size-14" : "size-14 p-1 sm:size-16";

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border shadow-[0_18px_38px_-30px_rgba(100,139,176,0.45)] ${toneClasses} ${sizeClasses}`}
    >
      <Image
        src={clinicLogoSrc}
        alt="Logo da Dra. Suzana Silveira"
        fill
        sizes={size === "sm" ? "56px" : "64px"}
        className="object-contain p-0.5"
      />
    </div>
  );
}
