import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MessageSquare, User, Calendar, Tag } from 'lucide-react';
import { PageFooter } from '../components/PageFooter';
import { PageHeader } from '../components/PageHeader';
import { PageSEO } from '../components/PageSEO';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  author: string;
  content: string[];
  tip: string;
  comments: Comment[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Errores Comunes al Cocinar Pasta',
    subtitle: 'Evita estos errores y logra la pasta perfecta cada vez',
    category: 'Técnicas',
    date: '10 de junio, 2025',
    author: 'Francisco S. Sfiligoy Borkoski',
    content: [
      'La pasta es uno de los platillos más populares del mundo, pero también uno de los más maltratados en la cocina casera. Muchas personas cometen errores básicos que afectan significativamente el resultado final.',
      'El primer gran error es no salar suficientemente el agua. El agua debe estar "salada como el mar" — esto no es exageración. La pasta absorbe sabor principalmente durante la cocción, y si el agua no tiene sal, la pasta será insípida por dentro sin importar qué salsa uses.',
      'El segundo error es enjuagar la pasta después de colarla. Al hacer esto eliminas el almidón superficial que ayuda a que la salsa se adhiera mejor. La única excepción es cuando vas a usar la pasta en ensaladas frías.',
      'El tercer error es romper los espaguetis antes de cocinarlos. En Italia esto se considera casi un insulto culinario. Los espaguetis están diseñados para ser comidos enrollados en el tenedor — su longitud es parte de la experiencia.',
    ],
    tip: 'Guarda siempre una taza del agua de cocción de la pasta. Esta agua almidonada es oro líquido para ajustar la consistencia de tu salsa.',
    comments: [
      {
        id: 1,
        author: 'Carlos M.',
        date: '11 jun 2025',
        content: '¡Excelente artículo! No sabía lo del agua de cocción. Lo probaré hoy mismo.',
      },
      {
        id: 2,
        author: 'Ana García',
        date: '12 jun 2025',
        content: 'Siempre enjuagaba la pasta y nunca entendía por qué la salsa no se pegaba bien. ¡Ahora tiene sentido!',
      },
      {
        id: 3,
        author: 'Luis T.',
        date: '13 jun 2025',
        content: 'Muy útil. ¿Podrían hacer un artículo sobre tipos de pasta y qué salsa va con cada una?',
      },
    ],
  },
  {
    id: 2,
    title: 'Cómo Planificar Comidas para Toda la Semana',
    subtitle: 'Ahorra tiempo y dinero con una buena planificación semanal',
    category: 'Organización',
    date: '5 de junio, 2025',
    author: 'Francisco S. Sfiligoy Borkoski',
    content: [
      'Planificar las comidas de la semana con anticipación es uno de los hábitos más transformadores que puedes adoptar en tu vida culinaria. No solo ahorras tiempo y dinero, sino que también reduces el estrés de la pregunta diaria: "¿Qué cocinamos hoy?"',
      'El proceso comienza los domingos. Dedica 20 minutos a revisar qué tienes en la nevera y despensa, luego decide el menú de lunes a viernes. Los fines de semana suelen ser más flexibles, así que puedes improvisar.',
      'Un truco poderoso es cocinar en lotes (batch cooking). Por ejemplo, puedes cocer una olla grande de arroz el domingo que sirva para varios días. También puedes dejar marinadas las carnes, cortar vegetales y preparar bases de salsas que uses durante la semana.',
      'La clave del éxito es la variedad. Asegúrate de incluir diferentes proteínas (legumbres, carnes, huevos, pescado), variedad de vegetales y distintas técnicas de cocción para que las comidas no se vuelvan monótonas.',
    ],
    tip: 'Haz una lista de compras organizada por secciones del supermercado (lácteos, carnes, verduras, despensa). Ahorrarás tiempo y evitarás compras impulsivas.',
    comments: [
      {
        id: 1,
        author: 'Sofía R.',
        date: '6 jun 2025',
        content: 'Llevo 3 semanas haciendo esto y el cambio es increíble. Gasto mucho menos y como mucho mejor.',
      },
      {
        id: 2,
        author: 'Martín B.',
        date: '7 jun 2025',
        content: '¿Tienen alguna plantilla de planificación descargable? Sería muy útil para empezar.',
      },
    ],
  },
  {
    id: 3,
    title: 'Guía de Especias para Principiantes',
    subtitle: 'Las especias esenciales y cómo combinarlas correctamente',
    category: 'Ingredientes',
    date: '1 de junio, 2025',
    author: 'Francisco S. Sfiligoy Borkoski',
    content: [
      'Las especias son el alma de la cocina. Con los mismos ingredientes básicos, las especias pueden transformar un plato ordinario en algo extraordinario. Sin embargo, para muchos cocineros principiantes, el mundo de las especias puede resultar abrumador.',
      'Comienza con un botiquín básico de especias: sal, pimienta negra, comino, pimentón (dulce y ahumado), orégano, ajo en polvo, cúrcuma y canela. Con estas 8 especias puedes preparar una variedad enorme de platillos de distintas cocinas del mundo.',
      'El secreto para usar especias correctamente es tostarlas brevemente en una sartén seca antes de usarlas. Esto activa sus aceites esenciales y multiplica su sabor e intensidad. Hazlo a fuego medio y mueve constantemente para que no se quemen.',
      'Aprende las combinaciones clásicas: comino + cilantro + cúrcuma para cocina india; pimentón + orégano + ajo para cocina mediterránea; canela + comino + jengibre para cocina árabe. Estas combinaciones son tu punto de partida.',
    ],
    tip: 'Almacena las especias en frascos herméticos, alejadas del calor y la luz directa. Las especias molidas duran entre 1 y 3 años si se almacenan correctamente.',
    comments: [
      {
        id: 1,
        author: 'Diana P.',
        date: '2 jun 2025',
        content: 'No sabía lo de tostar las especias. ¡Voy a probarlo esta noche!',
      },
      {
        id: 2,
        author: 'Roberto K.',
        date: '3 jun 2025',
        content: 'Artículo excelente. La parte de las combinaciones clásicas es muy práctica.',
      },
      {
        id: 3,
        author: 'Valentina S.',
        date: '4 jun 2025',
        content: 'Podrían profundizar más en especias latinoamericanas como el achiote o el ají amarillo.',
      },
    ],
  },
];

function CommentSection({ comments, postId }: { comments: Comment[]; postId: number }) {
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');
  const [allComments, setAllComments] = useState<Comment[]>(comments);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !author.trim()) return;
    const comment: Comment = {
      id: allComments.length + 1,
      author: author.trim(),
      date: 'Ahora mismo',
      content: newComment.trim(),
    };
    setAllComments((prev) => [...prev, comment]);
    setNewComment('');
    setAuthor('');
  };

  return (
    <section className="mt-8 pt-6 border-t border-gray-200">
      <h4 className="text-gray-800 mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-green-600" />
        Comentarios ({allComments.length})
      </h4>

      {/* Comments list */}
      <div className="space-y-4 mb-6">
        {allComments.map((comment) => (
          <article key={comment.id} className="bg-gray-50 rounded-lg p-4">
            <header className="flex items-center gap-2 mb-2">
              <div className="bg-green-100 p-1.5 rounded-full">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <h5 className="text-gray-700">{comment.author}</h5>
              <span className="text-gray-400 text-xs">· {comment.date}</span>
            </header>
            <p className="text-gray-600 text-sm">{comment.content}</p>
          </article>
        ))}
      </div>

      <hr className="border-gray-200 mb-4" />

      {/* Comment form */}
      <div>
        <h5 className="text-gray-700 mb-3">Dejar un comentario</h5>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor={`comment-author-${postId}`} className="block text-sm font-medium text-gray-700 mb-2">
              Tu nombre
            </label>
            <input
              id={`comment-author-${postId}`}
              name="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Tu nombre"
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>
          <div>
            <label htmlFor={`comment-content-${postId}`} className="block text-sm font-medium text-gray-700 mb-2">
              Comentario
            </label>
            <textarea
              id={`comment-content-${postId}`}
              name="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario..."
              rows={3}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={!newComment.trim() || !author.trim()}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Publicar Comentario
          </button>
        </form>
      </div>
    </section>
  );
}

export function BlogPage() {
  const navigate = useNavigate();
  const [expandedPost, setExpandedPost] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-green-50">
      <PageSEO
        title="Blog de Cocina | Consejos y técnicas culinarias"
        description="Artículos sobre cocina casera: errores comunes al cocinar pasta, planificación de comidas, especias para principiantes y más tips para recetas sencillas."
        path="/blog"
      />
      <PageHeader
        title="Blog de Cocina"
        subtitle="Artículos, consejos y trucos culinarios"
      />

      <main className="container mx-auto px-4 py-8 sm:py-10 max-w-4xl">
        {/* Blog intro */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-800 mb-4 border-b-2 border-green-300 pb-2">
            Artículos Recientes
          </h2>
          <p className="text-gray-600">
            Explora nuestras entradas más recientes con consejos prácticos, técnicas y recetas detalladas.
            <br />
            Nuestros autores son chefs y nutricionistas con experiencia en cocina casera.
          </p>
        </section>

        {/* Blog posts */}
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
            {/* Post header */}
            <header className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
              </div>
              <h2
                className="text-green-800 mb-2 cursor-pointer hover:text-green-600 transition-colors text-lg sm:text-xl"
                onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">{post.subtitle}</p>
            </header>

            {/* Post content */}
            {expandedPost === post.id && (
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {post.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tip box with pre */}
                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 mb-4">
                  <h5 className="text-green-800 mb-2">💡 Tip del Editor</h5>
                  <pre className="text-green-700 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                    {post.tip}
                  </pre>
                </div>

                <hr className="border-gray-200 my-6" />

                <CommentSection comments={post.comments} postId={post.id} />
              </div>
            )}

            {expandedPost !== post.id && (
              <div className="px-6 pb-5">
                <button
                  onClick={() => setExpandedPost(post.id)}
                  className="mt-3 text-green-600 hover:text-green-700 text-sm underline"
                >
                  Leer artículo completo →
                </button>
              </div>
            )}
          </article>
        ))}
      </main>

      <PageFooter currentPage="/blog" />
    </div>
  );
}
