import { ArrowRight, Bot, BarChart3, FileText, Mail, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  { icon: Bot, title: 'Qualification IA des leads', text: 'Vos prospects sont analysés automatiquement et classés en chaud, tiède ou froid.' },
  { icon: FileText, title: 'Devis & documents PDF', text: 'Générez vos devis, contrats et documents clients depuis un simple formulaire.' },
  { icon: BarChart3, title: 'Dashboards KPI', text: 'Suivez vos performances en temps réel avec Google Sheets et Looker Studio.' },
  { icon: Mail, title: 'Emails & relances automatiques', text: 'Envoyez confirmations, relances, notifications et rapports sans action manuelle.' }
];

const stack = ['Tally', 'Make.com', 'OpenAI', 'Google Sheets', 'Gmail', 'Looker Studio'];
const benefits = ['Moins de tâches répétitives', 'Réponse instantanée aux prospects', 'Suivi clair des performances', 'Systèmes simples à maintenir'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <section className="relative gradient-grid">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,.45),transparent_32%),radial-gradient(circle_at_75%_10%,rgba(14,165,233,.35),transparent_28%),linear-gradient(to_bottom,transparent,#050816_82%)]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">JVL</div>
            <span className="font-semibold tracking-wide">JVL Automation</span>
          </div>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 md:block">Audit gratuit</a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pt-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">Automatisation IA · Make.com · CRM · Reporting</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Automatisez votre entreprise avec l’IA.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              JVL Automation aide les PME, indépendants et agences à gagner du temps, réduire les tâches manuelles et centraliser leurs processus grâce à des automatisations sur mesure.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-7 py-4 font-semibold text-white shadow-glow transition hover:bg-indigo-400">Réserver un appel <ArrowRight size={18} /></a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white/90 transition hover:bg-white/10">Voir les automatisations</a>
            </div>
          </div>

          <div className="card rounded-[2rem] p-5 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">Workflow intelligent</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live</span>
              </div>
              <div className="space-y-3">
                {stack.map((item, i) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-sm text-indigo-200">{i + 1}</div>
                    <div className="font-medium">{item}</div>
                    {i < stack.length - 1 && <ArrowRight className="ml-auto text-slate-500" size={18} />}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">De la capture du lead jusqu’au rapport hebdomadaire automatisé, votre système travaille pour vous.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-300">Solutions</p>
          <h2 className="text-3xl font-bold md:text-5xl">Des systèmes concrets pour supprimer le travail manuel.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card rounded-3xl p-6">
              <Icon className="mb-5 text-indigo-300" size={30} />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="card rounded-[2rem] p-8">
            <Zap className="mb-5 text-cyan-300" size={34} />
            <h2 className="text-3xl font-bold">Exemple de système complet</h2>
            <p className="mt-4 leading-8 text-slate-300">Un prospect remplit un formulaire Tally. Make récupère les données, l’IA qualifie le lead, Google Sheets devient le CRM, un email part automatiquement, l’équipe est notifiée et un dashboard suit les résultats.</p>
          </div>
          <div className="grid gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                <CheckCircle2 className="text-emerald-300" size={22} />
                <span className="text-slate-200">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card rounded-[2rem] p-8">
            <h3 className="text-2xl font-bold">Setup automatisation</h3>
            <p className="mt-3 text-slate-400">Création d’un workflow sur mesure pour votre activité.</p>
            <p className="mt-8 text-4xl font-bold">Sur devis</p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li>• Analyse du besoin</li><li>• Création Make.com</li><li>• Connexion formulaires, CRM, emails</li><li>• Tests et mise en production</li>
            </ul>
          </div>
          <div className="card rounded-[2rem] border-indigo-400/40 p-8 shadow-glow">
            <h3 className="text-2xl font-bold">Accompagnement & optimisation</h3>
            <p className="mt-3 text-slate-400">Supervision, maintenance et amélioration continue.</p>
            <p className="mt-8 text-4xl font-bold">300€/mois</p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li>• Support prioritaire WhatsApp</li><li>• Corrections et maintenance</li><li>• Optimisation des workflows</li><li>• Rapport mensuel automatisé</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 rounded-3xl border border-white/10 bg-white/[.04] p-6 text-slate-300">Le système est hébergé et supervisé par JVL Automation afin de garantir son bon fonctionnement, les mises à jour, le support et la maintenance continue.</p>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 pt-10 text-center">
        <ShieldCheck className="mx-auto mb-6 text-indigo-300" size={38} />
        <h2 className="text-4xl font-bold md:text-5xl">Prêt à automatiser votre activité ?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">Demandez un audit gratuit. Nous identifions les tâches répétitives à automatiser et les gains de temps possibles pour votre entreprise.</p>
        <div className="mt-9 rounded-[2rem] border border-white/10 bg-white/[.05] p-4">
          <a href="mailto:contact@jvlautomation.com?subject=Demande%20d'audit%20gratuit%20JVL%20Automation" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto">Demander un audit gratuit <ArrowRight size={18} /></a>
          <p className="mt-4 text-sm text-slate-500">Remplace ce bouton par ton formulaire Tally dès qu’il est prêt.</p>
        </div>
      </section>
    </main>
  );
}
