import { useNavigate } from 'react-router';
import { Mail } from 'lucide-react';
import { PageFooter } from '../components/PageFooter';
import { PageHeader } from '../components/PageHeader';
import { PageSEO } from '../components/PageSEO';
import { CONTACT_EMAIL, CONTACT_PHONE, LOCATION, SITE_OWNER } from '../data/site';

export function SupplierContactPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50">
      <PageSEO
        title="Contacto | Recetas Sencillas"
        description="Contáctanos para consultas, sugerencias o comentarios sobre recetas sencillas. Escríbenos por correo desde Salta, Argentina."
        path="/supplier-contact"
      />
      <PageHeader
        title="Contacto"
        subtitle="Escríbeme sobre recetas o sugerencias"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <main>
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl text-green-800 mb-4 border-b-2 border-green-300 pb-2">
              Contacto del sitio de recetas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Recetas Sencillas es un proyecto remoto creado por {SITE_OWNER}.
              Si tienes consultas, sugerencias o comentarios sobre las recetas, puedes escribirme por correo.
            </p>
          </section>

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-green-600" aria-hidden="true" />
              </div>
              <address className="not-italic">
                <h3 className="text-green-800 mb-2">Correo electrónico</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-green-600 hover:underline text-base sm:text-lg break-all">
                  {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Cel: {CONTACT_PHONE}
                  <br />
                  {LOCATION} · Proyecto 100% remoto
                </p>
              </address>
            </div>
          </div>
        </main>
      </div>

      <PageFooter currentPage="/supplier-contact" />
    </div>
  );
}
