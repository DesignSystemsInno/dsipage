import { TiContacts } from 'react-icons/ti';
import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsHeadset } from 'react-icons/bs';
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from 'react-icons/fa';

const IconBoxData = [
  {
    id: 1,
    classOption: 'bg-primary',
    icon: 'fal fa-layer-group fa-2x text-white',
    title: 'Good Performance',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state .',
  },
  {
    id: 2,
    classOption: 'bg-danger',
    icon: 'fal fa-shield-check fa-2x text-white',
    title: 'Highly Secure',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
  {
    id: 3,
    classOption: 'bg-dark',
    icon: 'fal fa-code fa-2x text-white',
    title: 'Fast Development',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
];
const FaqOneData = [
  {
    id: 1,
    faqTitle: 'How does back pricing work?',
    faqDesc:
      'Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.',
  },
  {
    id: 2,
    faqTitle: 'How do I calculate how much price?',
    faqDesc:
      'Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.',
  },
  {
    id: 3,
    faqTitle: 'Can you show me an example?',
    faqDesc:
      'Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.',
  },
];

const TestimonialData = [
  {
    id: 1,
    authorImg: '/testimonial/ogazas.png',
    authorName: 'Julián Ogaza',
    authorTitle: 'Designer Product',
    quoteTitle: 'Hay un sentimiento mezclado con visión.',
    authorQuote:
      'Diseñador con gusto por el detalle, la interacción con otras personas, culturas y entornos.',
  },
  {
    id: 2,
    authorImg: '/testimonial/youngs.png',
    authorName: 'Juan Young',
    authorTitle: 'Security Software',
    quoteTitle: 'Somos pioneros en nuevas estrategias!',
    authorQuote:
      'Autodidacta por excelencia, con una amplia gama de conocimientos en desarrollo. La computación es su mayor pasión.',
  },
  {
    id: 3,
    authorImg: '/testimonial/jairos.png',
    authorName: 'Jairo Carvajal',
    authorTitle: 'Founder | Software Engineer',
    quoteTitle: 'Creemos en lo que hacemos!',
    authorQuote:
      'Le gusta innovar, diseñar, experimentar y crear soluciones tecnológicas que resuelvan problemas sociales.',
  },
  {
    id: 4,
    authorImg: '/testimonial/andress.png',
    authorName: 'Julián Múnera',
    authorTitle: 'Interaction Design',
    quoteTitle: 'Creamos soluciones modernas.',
    authorQuote:
      'Es una persona con conocimientos en diseño, con una visión moderna e innata. ',
  },
  {
    id: 5,
    authorImg: '/testimonial/camilos.png',
    authorName: 'Camilo Galvis',
    authorTitle: 'Cofounder | Full Stack Developer',
    quoteTitle: 'Existe una comunidad de gente innovadora!',
    authorQuote:
      'Es una persona dedicada a la objetividad, le gusta estudiar los sistemas y analizar la manera en que estos se pueden relacionar y transformar.',
  },
  {
    id: 6,
    authorImg: '/testimonial/mateos.png',
    authorName: 'Mateo Bolivar',
    authorTitle: 'Front End Developer',
    quoteTitle: 'Somos un equipo con muchas capacidades.',
    authorQuote:
      'Aficionado a la programación, le gusta entender y recrear nuevas herramientas para la sociedad.',
  },
];

const TestimonialOneData = [
  {
    id: '#testimonial-tab-1',
    activeClass: 'active',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-1.jpg',
    authorAvatar: '/testimonial/1.jpg',
  },
  {
    id: '#testimonial-tab-2',
    title: 'Embarrassed by the First Version.',
    desc: 'Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.',
    authorName: 'Rupan Oberoi',
    authorDesn: 'Web Designer',
    authorThumb: '/testimonial/t-2.jpg',
    authorAvatar: '/testimonial/2.jpg',
  },
  {
    id: '#testimonial-tab-3',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-3.jpg',
    authorAvatar: '/testimonial/3.jpg',
  },
  {
    id: '#testimonial-tab-4',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-4.jpg',
    authorAvatar: '/testimonial/4.jpg',
  },
  {
    id: '#testimonial-tab-5',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-5.jpg',
    authorAvatar: '/testimonial/5.jpg',
  },
];

const registerTestimonial = [
  {
    active: 'active show',
    target: 'testimonial-tab-1',
    header: 'The Best Template You Got to Have it!',
    info: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.',
    name: 'Joe Richard',
    title: 'Visual Designer',
  },
  {
    target: 'testimonial-tab-2',
    header: 'Amazing Quiety template!',
    info: 'Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.',
    name: 'Oberoi R.',
    title: 'CEO at Herbs',
  },
  {
    target: 'testimonial-tab-3',
    header: 'Embarrassed by the First Version!',
    info: ' Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.',
    name: 'Joan Dho',
    title: 'Founder and CTO',
  },
];
const registerTestimonialTarget = [
  {
    active: 'active',
    target: '#testimonial-tab-1',
    image: '/testimonial/1.jpg',
  },
  {
    target: '#testimonial-tab-2',
    image: '/testimonial/2.jpg',
  },
  {
    target: '#testimonial-tab-3',
    image: '/testimonial/3.jpg',
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Nosotros',
    href: '/about-us',
  },
  {
    title: 'Servicios',
    href: '/#servicios',
  },
  // {
  //   title: 'Precios',
  //   href: '/',
  // },
  {
    title: 'Proyectos',
    href: '/',
  },
];

const footerPages = [
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blogs',
  },
  {
    title: 'Blog Details',
    href: '/blog-single',
  },
  {
    title: 'Politics HiWay',
    href: '/politics-hiway',
  },
  {
    title: 'Politics CoWay',
    href: '/politics-coway',
  },
  {
    title: 'Career Single',
    href: '/career-single',
  },
  {
    title: 'Services Single',
    href: '/single-service',
  },
];
const footerTemplate = [
  {
    title: 'Politics HiWay',
    href: '/politics-hiway',
  },
  {
    title: 'Politics CoWay',
    href: '/politics-coway',
  },
  {
    title: 'Support',
    href: '/help-center',
  },
  {
    title: 'Support Single',
    href: '/help-center-single',
  },
  {
    title: 'Request for Demo',
    href: '/request-demo',
  },
  {
    title: 'Coming Soon',
    href: '/coming-soon',
  },
  {
    title: 'Career Single',
    href: '/career-single',
  },
];

//navbar data
const navHome = [
  {
    title: 'HiWay',
    info: "App Móvil Transporte Público",
    href: 'hiway',
  },
  {
    title: 'Dodo',
    info: 'E-Commerce Impresión Bajo Demanda',
    href: 'dodo',
  },
  {
    title: 'IoT Pandas',
    info: 'Software Inmuebles del Futuro',
    href: 'https://www.iotpandaservices.com',
  },
  {
    title: 'CoWay',
    info: 'App Móvil Para Ganadería',
    href: 'coway',
  },
  // {
  //   title: 'Software Application',
  //   info: 'IT solutions and SaaS Application',
  //   href: 'software-application',
  // },
  // {
  //   title: 'Startup Agency',
  //   info: 'Different type of Agency',
  //   href: 'startup-agency',
  // },
  // {
  //   title: 'Data Analysis',
  //   info: ' Software & Data Analysis',
  //   href: 'data-analysis',
  // },
  // {
  //   title: 'App Landing Two',
  //   info: 'Software & Data Analysis',
  //   href: 'app-landing-two',
  // },
];

const navCompanyLinks = [
  {
    title: 'Politics HiWay',
    icon: <BiLogIn />,
    href: 'politics-hiway',
  },
  {
    title: 'Politics CoWay',
    icon: <BiLogIn />,
    href: 'politics-coway',
  },
  {
    title: 'Service Single',
    icon: <BiServer />,
    href: 'single-service',
  },
  {
    title: 'Our Latest News',
    icon: <BiNews />,
    href: 'blogs',
  },
  {
    title: 'News Details',
    icon: <BiDetail />,
    href: 'blog-single',
  },
  {
    title: 'Career',
    icon: <HiOutlineAcademicCap />,
    href: 'career',
  },
  {
    title: 'Career Single',
    icon: <HiOutlineAcademicCap />,
    href: 'career-single',
  },
  {
    title: 'Integrations',
    icon: <BiRocket />,
    href: 'integrations',
  },
  {
    title: 'Integrations Single',
    icon: <BiPaperPlane />,
    href: 'integration-single',
  },
];

const navCompanyPage = [
  {
    title: 'Help Center',
    icon: <BiHelpCircle />,
    href: 'help-center',
  },
  {
    title: 'Help Details',
    icon: <BsHeadset />,
    href: 'help-center-single',
  },
  {
    title: 'Request for Demo',
    icon: <FaLaptopCode />,
    href: 'request-demo',
  },
  {
    title: 'User Login',
    icon: <BiLogIn />,
    href: 'login',
  },
  {
    title: 'Dodo formulario inversión',
    icon: <BiLogIn />,
    href: 'dodo-formulario-inversion',
  },
  {
    title: 'Dodo reuniones',
    icon: <BiLogIn />,
    href: 'reuniones',
  },
  {
    title: 'User SignUp',
    icon: <BiUser />,
    href: 'register',
  },
  {
    title: 'Recovery Account',
    icon: <FaRegTrashAlt />,
    href: 'password-reset',
  },
  {
    title: '404 Page',
    icon: <BiError />,
    href: '404',
  },
  {
    title: 'Coming Soon',
    icon: <FaRegClock />,
    href: 'coming-soon',
  },
];

//
const testimonialAuthor = [
  {
    name: 'Camilo Galvis',
    title: 'Founder | Mobile Designer-Developer',
    image: '/testimonial/camilo2.png',
    target: '#testimonial-tab-1',
  },
  {
    name: 'Jairo Carvajal',
    title: 'Founder | Software Engineer',
    image: '/testimonial/jairo2.png',
    target: '#testimonial-tab-2',
  },
  {
    name: 'Felipe Oyuela',
    title: 'CEO | Project Management',
    image: '/testimonial/felipe2.png',
    target: '#testimonial-tab-3',
  },
  {
    name: 'Julian Ogaza',
    title: 'Product Design Engineer',
    image: '/testimonial/julian2.png',
    target: '#testimonial-tab-4',
  },
  {
    name: 'Juan M. Young',
    title: 'Security Software Developer',
    image: '/testimonial/juan2.png',
    target: '#testimonial-tab-5',
  },
];

const testimonialOne = [
  {
    name: 'Camilo Galvis',
    title: 'Founder | Visual, Web & App Developer',
    header: 'Tenemos una comunión innovadora!',
    description:
      'Es una persona dedicada a la objetividad, le gusta estudiar los sistemas y analizar la manera en que estos se pueden transformar. Ha desarrollado backend como frontend, aplicaciones web & móviles. Es el cofundador de HiWay.',
    image: '/testimonial/camilo2.png',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {
    name: 'Jairo Carvajal',
    title: 'Founder | Software Engineer',
    header: 'Creemos en lo que hacemos!',
    description:
    'Se caracteriza por ser una persona que escucha a los demás y convertirse en un agente solucionador de problemas utilizando el pensamiento crítico. Le gusta contribuir con el desarrollo de actividades grupales asumiendo con responsabilidad sus funciones. Dentro de sus principales habilidades se destacan la capacidad de crear, innovar, diseñar, proponer ideas en el ámbito de la tecnología para el desarrollo de soluciones a diferentes problemáticas. Cofundador de Dodo y IoT Pandas.',    
    image: '/testimonial/jairo2.png',
    target: 'testimonial-tab-2',
  },
  {
    name: 'Felipe Oyuela',
    title: 'CEO | Project Management',
    header: 'Hacemos parte del futuro.',
    description:
    'Es innovador y creativo, comprende la necesidad de usar la tecnogia para mejorar la calidad de vida en el planeta. Se encarga de idear las aplicaciones y soluciones más acertivas para nuestros clientes.',    
    image: '/testimonial/felipe2.png',
    target: 'testimonial-tab-3',
  },
  {
    name: 'Julian Ogaza',
    title: 'Product Design Engineer',
    header: 'Hay un sentimiento mezclado con visión.',
    description:
    'Diseñador en proceso, gusto por el detalle, la interacción con otras personas, culturas y entornos. Características que  le  exigen ser  una  persona proactiva, con conocimientos  en software CAD  y de  producción, tales como Solidworks, Creo Parametric, Rhino y Cinema 4D; adicional, conocimientos en programas  de  diseño  como Illustrator, Photoshop y After Effects  y  competencias comerciales  como manejo de clientes, trabajo  en equipo y coordinación logística.',    
    image: '/testimonial/julian2.png',
    target: 'testimonial-tab-4',
  },
  {
    name: 'Juan Manuel Young',
    title: 'Security Software Developer',
    header: 'Somos pioneros en nuevas estrategias.',
    description:
    'Es autodidacta por excelencia, con una amplia gama de conocimientos en desarrollo de aplicaciones web & móvil, en IoT y sobre todo, en seguridad informática. La computación es su mayor pasión.',    
    image: '/testimonial/juan2.png',
    target: 'testimonial-tab-5',
  },
];

//pricing data
const pricingData = [
  {
    title: 'Stater',
    price: '$25',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'left--40 bottom--40',
    listItem: [
      {
        li: '1 Team',
      },
      {
        li: '1 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: 'Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Advanced',
    price: '$45',
    time: '/month',
    bgColor: 'bg-gradient',
    textColor: 'text-warning',
    btnColor: 'btn-primary',

    listItem: [
      {
        li: '5 Team',
      },
      {
        li: '3 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '24 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Premium',
    price: '$75',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'right--40 top--40',
    listItem: [
      {
        li: '6 Team',
      },
      {
        li: '8 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '40 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: '/integations/7.png',
    className: 'integration-7',
  },
  {
    image: '/integations/8.png',
    className: 'integration-8',
  },
  {
    image: '/integations/9.png',
    className: 'integration-9',
  },
  {
    image: '/integations/10.png',
    className: 'integration-10',
  },
  {
    image: '/integations/11.png',
    className: 'integration-11',
  },
  {
    image: '/integations/12.png',
    className: 'integration-12',
  },
];

const integrationFeature = [
  {
    logo: '/integations/1.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/2.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/3.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/4.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/5.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/6.png',
    type: 'Basic',
    class: 'bg-danger-soft text-danger',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/7.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/8.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/9.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
];

const integrationOneLeft = [
  {
    image: '/integations/1.png',
    className: 'integration-1',
  },
  {
    image: '/integations/2.png',
    className: 'integration-2',
  },
  {
    image: '/integations/3.png',
    className: 'integration-3',
  },
  {
    image: '/integations/4.png',
    className: 'integration-4',
  },
  {
    image: '/integations/5.png',
    className: 'integration-5',
  },
  {
    image: '/integations/6.png',
    className: 'integration-6',
  },
];

//ourTeam data
const ourTeam = [
  {
    name: 'Mateo Bolivar',
    title: 'Front End Developer',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658377868/DSIimages/Mateo_Bolivar_uvu13g.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658372733/DSIimages/Mateo_Bol%C3%ADvar_ctoucq.mp4',
    project: 'github',
    linkedin: 'https://www.linkedin.com/in/mateo-bolivar-8b3123206/',
    twitter: 'https://twitter.com/ElTeo2002',
    projectFiles: 'https://github.com/TheTGM',
    facebook: 'https://www.facebook.com/people/Mateo-Bolivar/100009134829284/',
  },
  {
    name: 'Julián Ogaza',
    title: 'Designer Product',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658377870/DSIimages/Juli%C3%A1n_Ogaza_fuovis.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658372779/DSIimages/Juli%C3%A1n_Ogaza_1_yp5lgu.mp4',
    project: 'behance',
    linkedin: 'https://www.linkedin.com/in/julian-villanil-ogaza-vargas-7b020722b',
    twitter: '#!',
    projectFiles: 'https://www.behance.net/ogaza_portfolio/',
    facebook: '#!'
  },
  {
    name: 'Juan Young',
    title: 'Security Software',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658377872/DSIimages/Juan_Manuel_Young_nzrelt.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658372811/DSIimages/Juan_Manuel_Young_3_c5w8qi.mp4',
    project: 'github',
    linkedin: 'https://www.linkedin.com/in/juan-manuel-young-hoyos/',
    twitter: 'https://twitter.com/jmyounghoyos',
    projectFiles: 'https://github.com/Youngermaster',
    facebook: '#!'
  },
  {
    name: 'Jairo Carvajal',
    title: 'Founder | Software Engineer',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658377873/DSIimages/Jairo_Carvajal_vx8xqm.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658372835/DSIimages/Jairo_Alonso_2_r75pjb.mp4',
    project: 'github',
    linkedin: 'https://www.linkedin.com/in/jairo-carvajal-ochoa-246b3923a',
    twitter: 'https://twitter.com/Jairo66908141?t=DakAn9zV4DSsbUqa3kRHMg&s=08',
    projectFiles: 'https://github.com/jcarvajalo',
    facebook: 'https://www.facebook.com/profile.php?id=100080496203497'
  },
  {
    name: 'Camilo Galvis',
    title: 'CoFounder | Full Stack Developer',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658377884/DSIimages/Camilo_Galvis_fjadpf.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658372936/DSIimages/Camilo_Galvis_h0gswi.mp4',
    project: 'github',
    linkedin: 'https://www.linkedin.com/in/camilo-galvis-5a6b93b8/',
    twitter: 'https://twitter.com/cglv11',
    projectFiles: 'https://github.com/cglv11',
    facebook: 'https://www.facebook.com/camilo.galvis.9'
  },
  {
    name: 'Julián Múnera',
    title: 'Interaction Design',
    image: 'https://res.cloudinary.com/jairo/image/upload/v1658454899/DSIimages/Andr%C3%A9s_Juli%C3%A1n_M%C3%BAenra_l5d52f.jpg',
    video: 'https://res.cloudinary.com/jairo/video/upload/v1658454896/DSIimages/Andr%C3%A9s_Juli%C3%A1n_M%C3%BAnera_lmve9p.mp4',
    project: 'behance',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A9s-juli%C3%A1n-m%C3%BAnera-uribe-2095b5193/',
    twitter: '#!',
    projectFiles: 'https://www.behance.net/andresmunera2',
    facebook: '#!'
  },
];

//blog data
const blogFeatureData = [
  {
    image: '/blog/blog-1.jpg',
    type: 'Design',
    header: 'Do you really understand the concept of product value?',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Jane Martin',
    data: 'April 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-2.jpg',
    type: 'Customer',
    header: 'Why communities help you build better products for your business',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the  other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Veronica P. Byrd',
    data: 'April 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-3.jpg',
    type: 'Development',
    header: 'Why communities help you build better products',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Martin Gilbert',
    data: 'May 20, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-4.jpg',
    type: 'Marketing',
    header: 'The role of product ops in successful distributed teams',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/4.jpg',
    author: 'Raymond H. Martin',
    data: 'June 10, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-5.jpg',
    type: 'UI/UX',
    header: 'The modern product manager’s tech stack',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/5.jpg',
    author: 'Luthar Martin',
    data: 'July 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-6.jpg',
    type: 'Management',
    header: '30 product management thought leaders to follow',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Donna Martin',
    data: 'August 25, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-7.jpg',
    type: 'Design',
    header: 'New analyst report: Digital product management tools and tech',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Donna R. Book',
    data: 'September 24, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-8.jpg',
    type: 'Development',
    header: 'A frank discussion about diversity, inclusion, and allyship',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Donna R. Martin',
    data: 'October 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-9.jpg',
    type: 'Design',
    header: '4 steps for measuring the impact of product discovery',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/2.jpg',
    author: 'Martin Luthar',
    data: 'November 24, 2021',
    class: 'bg-warning-soft',
  },
];

//career data
const careerJobCard = [
  {
    type: 'Remote - Full Time',
    position: 'Developer',
    title: 'Jr Frontend Developer',
    className: 'bg-primary-soft text-primary',
    listItem: [
      {
        media: 'Google',
        location: 'London, UK',
        salary: '$35-$45k',
      },
    ],
  },
  {
    type: 'Remote - Full Time',
    position: 'Designer',
    title: 'UI/UX and Product Design Engineer',
    className: 'bg-danger-soft text-danger',
    listItem: [
      {
        media: 'Figma',
        location: 'San Francissco',
        salary: '$25-$35k',
      },
    ],
  },
  {
    type: 'Full Time',
    position: 'Manager',
    title: 'Senior Office Manager',
    className: 'bg-success-soft text-success',
    listItem: [
      {
        media: 'Dribble',
        location: 'California',
        salary: '$55-$65k',
      },
    ],
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'Senior Backend Developer',

    listItem: [
      {
        media: 'Slack',
        location: 'United State US',
        salary: '$55-$62k',
      },
    ],
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: 'All Support Articles',
    target: 'support-tab-1',
    class: 'show active',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Payments Query',
    target: 'support-tab-2',
    listItem: [
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Setup or Installment',
    target: 'support-tab-3',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Technical Support',
    target: 'support-tab-4',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Retailers & Customer',
    target: 'support-tab-5',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Security Issues',
    target: 'support-tab-6',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Brand Creation',
    target: 'support-tab-7',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Legal Support',
    target: 'support-tab-8',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
];

//desktop app integration two
const brandName = [
  {
    image: '/integations/airbnb.png',
    brand: 'Airbnb',
  },
  {
    image: '/integations/figma.png',
    brand: 'Figma',
  },
  {
    image: '/integations/facebook.png',
    brand: 'Facebook',
  },
  {
    image: '/integations/sales-force.png',
    brand: 'Sales Force',
  },
  {
    image: '/integations/atlassian.png',
    brand: 'Atlassion',
  },
  {
    image: '/integations/dropbox-2.png',
    brand: 'Dropbox',
  },
  {
    image: '/integations/dynamic-365.png',
    brand: 'Dynamic-365',
  },
  {
    image: '/integations/erecruiter.png',
    brand: 'Erecruiter',
  },
  {
    image: '/integations/evernote.png',
    brand: 'Evernote',
  },
  {
    image: '/integations/google-icon.png',
    brand: 'Google',
  },
  {
    image: '/integations/slack.png',
    brand: 'Slack',
  },
  {
    image: '/integations/google-analytics.png',
    brand: 'Google Analytics',
  },
  {
    image: '/integations/google-drive.png',
    brand: 'Google Drive',
  },
  {
    image: '/integations/hubspot.png',
    brand: 'Hubspot',
  },
  {
    image: '/integations/instagram.png',
    brand: 'Instagram',
  },
  {
    image: '/integations/linkedin.png',
    brand: 'Linkedin',
  },
  {
    image: '/integations/mailchimp.png',
    brand: 'Mailchimp',
  },
  {
    image: '/integations/marekto.png',
    brand: 'Merekto',
  },
];

export {
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHome,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
};
