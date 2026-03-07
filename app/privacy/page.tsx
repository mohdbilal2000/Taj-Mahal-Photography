import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Privacy Policy – Taj Mahal Photography',
  description:
    'Politique de confidentialité de Taj Mahal Photography. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles lors de la réservation de nos services photo.',
  alternates: {
    canonical: `${SITE.url}/privacy`,
    languages: {
      'fr': `${SITE.url}/privacy`,
      'en': `${SITE.url}/privacy`,
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">

        {/* Hero Banner */}
        <div className="bg-ink-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">
              Politique de Confidentialité
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Taj Mahal Photography — Agra, Inde
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">

            <p className="text-gray-500 text-sm">
              Dernière mise à jour : 1er janvier 2025 &nbsp;|&nbsp; Last updated: January 1, 2025
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Taj Mahal Photography s&apos;engage à respecter et à protéger votre vie privée.
              La présente Politique de Confidentialité décrit comment nous collectons, utilisons
              et protégeons vos informations personnelles lorsque vous utilisez notre site web
              <strong> tajmahalphotography.com</strong> ou réservez l&apos;un de nos services
              photo au Taj Mahal, Agra, Inde.
            </p>

            {/* Section 1 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              1. Informations que nous collectons
            </h2>
            <p>
              Lorsque vous effectuez une demande de renseignements ou réservez nos services
              photographiques, nous pouvons collecter les informations personnelles suivantes :
            </p>
            <ul>
              <li>
                <strong>Coordonnées :</strong> Votre nom complet, adresse e-mail, numéro
                WhatsApp et nationalité.
              </li>
              <li>
                <strong>Détails de réservation :</strong> Date souhaitée, type de service,
                taille du groupe et toute demande spéciale ou détail d&apos;occasion.
              </li>
              <li>
                <strong>Historique des communications :</strong> Messages échangés via notre
                formulaire de contact, WhatsApp ou e-mail en rapport avec votre réservation.
              </li>
              <li>
                <strong>Photographies :</strong> Images capturées lors de votre séance photo.
              </li>
              <li>
                <strong>Données de navigation :</strong> Type de navigateur, système
                d&apos;exploitation, pages consultées et date/heure d&apos;accès, afin
                d&apos;optimiser votre expérience utilisateur.
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              2. Utilisation de vos informations
            </h2>
            <p>
              Nous utilisons vos informations personnelles exclusivement pour :
            </p>
            <ul>
              <li>Traiter et confirmer votre réservation photographique.</li>
              <li>
                Communiquer avec vous concernant les détails, les horaires et la
                logistique de votre séance.
              </li>
              <li>
                Vous livrer vos photographies retouchées via une galerie en ligne privée
                et sécurisée.
              </li>
              <li>
                Envoyer des communications de suivi liées à votre réservation (par
                exemple, notifications de livraison des photos).
              </li>
              <li>
                Améliorer nos services sur la base des retours de nos clients.
              </li>
              <li>
                Vous envoyer des informations sur nos nouvelles offres, si vous y avez
                expressément consenti.
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              3. Droits sur les photos et propriété intellectuelle
            </h2>
            <p>Nous respectons pleinement vos droits à l&apos;image :</p>
            <ul>
              <li>
                Vous recevez tous les droits d&apos;utilisation personnelle sur
                l&apos;ensemble des photographies livrées.
              </li>
              <li>
                Nous pouvons demander votre autorisation écrite pour utiliser certaines
                images à des fins de portfolio, de site web ou de réseaux sociaux.
              </li>
              <li>
                Si vous ne souhaitez pas que vos photos soient utilisées à des fins
                promotionnelles, il vous suffit de nous en informer — nous respecterons
                intégralement votre décision.
              </li>
              <li>
                Nous ne vendrons jamais vos photographies à des tiers.
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              4. Partage des données
            </h2>
            <p>
              Nous ne vendons, n&apos;échangeons ni ne louons vos informations
              personnelles à des tiers. Vos données peuvent uniquement être partagées avec :
            </p>
            <ul>
              <li>
                Les prestataires de stockage cloud utilisés pour livrer votre galerie
                photo (chiffrés et protégés par mot de passe).
              </li>
              <li>
                Les prestataires de paiement le cas échéant, uniquement à des fins de
                traitement de transaction.
              </li>
              <li>
                Les partenaires de distribution ou opérateurs de voyages directement
                impliqués dans la réalisation de votre réservation — uniquement votre
                nom et vos coordonnées locales si nécessaire (hôtel pour les
                transferts, numéro de téléphone local).
              </li>
            </ul>
            <p>
              Nos partenaires sont liés par une obligation de confidentialité et ne sont
              pas autorisés à utiliser vos données à d&apos;autres fins.
            </p>

            {/* Section 5 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              5. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger
              vos informations personnelles contre tout accès non autorisé, toute
              modification ou destruction. Toutefois, aucune méthode de transmission
              sur Internet n&apos;est sécurisée à 100&nbsp;%. Si vous avez des
              préoccupations concernant la sécurité de vos données, veuillez nous
              contacter directement.
            </p>

            {/* Section 6 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              6. Conservation des données
            </h2>
            <p>
              Nous conservons vos informations personnelles jusqu&apos;à 12 mois après
              votre séance à des fins de livraison et de suivi. Les fichiers photos sont
              conservés sur nos serveurs sécurisés pendant 6 mois maximum, après quoi
              ils sont définitivement supprimés, sauf si vous demandez un stockage
              prolongé.
            </p>
            <p>
              Nous nous réservons le droit de modifier ou de mettre à jour la présente
              Politique de Confidentialité à tout moment. Toute modification sera publiée
              sur cette page avec une date de mise à jour révisée.
            </p>

            {/* Section 7 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              7. Vos droits (RGPD &amp; droits internationaux)
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et
              aux lois internationales applicables en matière de protection de la vie
              privée, vous disposez des droits suivants :
            </p>
            <ul>
              <li>
                <strong>Droit d&apos;accès :</strong> Demander l&apos;accès aux
                informations personnelles que nous détenons à votre sujet.
              </li>
              <li>
                <strong>Droit de rectification :</strong> Demander la correction
                d&apos;informations inexactes.
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> Demander la suppression de
                vos données personnelles et de vos photographies.
              </li>
              <li>
                <strong>Retrait du consentement :</strong> Retirer à tout moment votre
                consentement à l&apos;utilisation promotionnelle de vos images.
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> Recevoir vos données dans un
                format structuré et lisible par machine.
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de
                vos données à des fins de marketing direct.
              </li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, veuillez nous contacter par e-mail
              ou WhatsApp. Nous répondrons à votre demande dans un délai de 30 jours.
            </p>

            {/* Section 8 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              8. Cookies et technologies de suivi
            </h2>
            <p>
              Notre site web peut utiliser des cookies essentiels pour les
              fonctionnalités de base. Nous n&apos;utilisons pas de cookies de suivi ni
              d&apos;analyses tierces collectant des informations personnellement
              identifiables.
            </p>
            <p>
              Ce site contient des liens vers d&apos;autres sites. Veuillez noter que
              nous ne sommes pas responsables du contenu ni des pratiques de
              confidentialité de ces sites tiers. Nous vous encourageons à lire les
              politiques de confidentialité de chaque site qui collecte des informations
              vous concernant.
            </p>

            {/* Section 9 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              9. Connexion via les réseaux sociaux
            </h2>
            <p>
              Si vous interagissez avec notre page Facebook, Instagram ou LinkedIn, les
              informations que vous partagez sont régies par les politiques de
              confidentialité de ces plateformes. Nous vous encourageons à consulter ces
              politiques pour comprendre comment vos données sont traitées sur ces
              plateformes tierces.
            </p>

            {/* Section 10 */}
            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">
              10. Contactez notre Responsable de la Protection des Données
            </h2>
            <p>
              Pour toute question relative à cette Politique de Confidentialité ou pour
              exercer vos droits en matière de données personnelles, veuillez nous
              contacter :
            </p>
            <ul>
              <li>
                <strong>E-mail :</strong>{' '}
                <a href={`mailto:${SITE.email}`} className="text-amber-600 hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <strong>WhatsApp :</strong>{' '}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="text-amber-600 hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Adresse :</strong> {SITE.address.street}, {SITE.address.city},{' '}
                {SITE.address.state}, Inde {SITE.address.zip}
              </li>
              <li>
                <strong>Site web :</strong>{' '}
                <a
                  href={SITE.url}
                  className="text-amber-600 hover:underline"
                >
                  {SITE.domain}
                </a>
              </li>
            </ul>

            <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 mb-0">
                <strong>Support client 24h/24, 7j/7</strong> — Vous avez des questions sur
                votre séance ou votre réservation ? Notre équipe est disponible à tout moment
                via WhatsApp au{' '}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="font-semibold underline"
                >
                  {SITE.phoneDisplay}
                </a>.
              </p>
            </div>

          </article>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'Accueil', url: SITE.url },
            { name: 'Politique de Confidentialité', url: `${SITE.url}/privacy` },
          ])),
        }}
      />
    </div>
  );
}
