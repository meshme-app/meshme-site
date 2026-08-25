import type { SiteLanguage } from "@/components/language-provider"

export const languageMeta: Record<SiteLanguage, { label: string; flag: string }> = {
  pt: { label: "Português", flag: "🇧🇷" },
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
}

export const homeHero: Record<
  SiteLanguage,
  {
    badge: string
    titleLine1: string
    titleHighlight: string
    paragraphStart: string
    paragraphHighlight: string
    paragraphEnd: string
    ctaPrimary: string
    ctaSecondary: string
  }
> = {
  pt: {
    badge: "Para Pessoas",
    titleLine1: "Sozinho, com colegas ou com a sua empresa.",
    titleHighlight: "Comece agora na MeshMe.",
    paragraphStart: "Registre suas atividades, crie desafios e participe de eventos reais. ",
    paragraphHighlight: "Prêmios e comunidade",
    paragraphEnd: " fazem parte da jornada.",
    ctaPrimary: "Começar agora. É grátis.",
    ctaSecondary: "Ver como funciona",
  },
  en: {
    badge: "For People",
    titleLine1: "Alone, with friends, or with your company.",
    titleHighlight: "Start now on MeshMe.",
    paragraphStart: "Log your activities, create challenges and join real events. ",
    paragraphHighlight: "Prizes and community",
    paragraphEnd: " are part of the journey.",
    ctaPrimary: "Get started. It's free.",
    ctaSecondary: "See how it works",
  },
  es: {
    badge: "Para Personas",
    titleLine1: "Solo, con amigos o con tu empresa.",
    titleHighlight: "Empieza ahora en MeshMe.",
    paragraphStart: "Registra tus actividades, crea desafíos y participa en eventos reales. ",
    paragraphHighlight: "Premios y comunidad",
    paragraphEnd: " son parte del camino.",
    ctaPrimary: "Empieza ahora. Es gratis.",
    ctaSecondary: "Ver cómo funciona",
  },
}

export const homeFeatures: Record<
  SiteLanguage,
  {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    integrationsLabel: string
    tip: string
    items: { title: string; description: string }[]
  }
> = {
  pt: {
    badge: "Como funciona",
    titleStart: "Sua jornada esportiva",
    titleHighlight: "começa aqui",
    subtitle: "Ferramentas simples e poderosas para você se manter ativo, conectado e motivado",
    integrationsLabel: "Integrado com:",
    tip: "Dica: Se fizer sentido, indique para o seu RH e acumule ainda mais vantagens para você e seus colegas.",
    items: [
      {
        title: "Registre suas atividades e concorra a prêmios",
        description:
          "Poste seus treinos com modalidade, tempo e distância. Acompanhe sua evolução, acumule pontos e concorra a prêmios exclusivos da plataforma.",
      },
      {
        title: "Crie desafios de atividade física com seus colegas",
        description:
          "Monte desafios personalizados com amigos ou colegas de trabalho. Defina metas, acompanhe rankings e celebre conquistas juntos.",
      },
      {
        title: "Encontre corridas de rua e grupos esportivos recorrentes",
        description:
          "Descubra eventos próximos a você, grupos de corrida, peladas de futebol, treinos de beach tennis e muito mais. A comunidade está esperando por você.",
      },
      {
        title: "Crie o perfil da sua empresa e convide mais pessoas",
        description:
          "Você não precisa ser do RH para começar uma comunidade esportiva na sua empresa. Crie o perfil corporativo, convide colegas e promova o bem-estar no trabalho.",
      },
    ],
  },
  en: {
    badge: "How it works",
    titleStart: "Your sports journey",
    titleHighlight: "starts here",
    subtitle: "Simple, powerful tools to help you stay active, connected and motivated",
    integrationsLabel: "Works with:",
    tip: "Tip: If it makes sense, suggest it to your HR team and unlock even more perks for you and your coworkers.",
    items: [
      {
        title: "Log your workouts and enter to win prizes",
        description:
          "Post your workouts with type, duration and distance. Track your progress, earn points and enter exclusive platform prize draws.",
      },
      {
        title: "Create fitness challenges with your coworkers",
        description:
          "Build custom challenges with friends or coworkers. Set goals, track rankings and celebrate wins together.",
      },
      {
        title: "Find local races and recurring sports groups",
        description:
          "Discover events near you, running groups, pickup soccer games, beach tennis sessions and more. The community is waiting for you.",
      },
      {
        title: "Set up your company profile and invite more people",
        description:
          "You don't have to work in HR to start a sports community at your company. Create the corporate profile, invite coworkers and promote wellbeing at work.",
      },
    ],
  },
  es: {
    badge: "Cómo funciona",
    titleStart: "Tu camino deportivo",
    titleHighlight: "empieza aquí",
    subtitle: "Herramientas simples y poderosas para mantenerte activo, conectado y motivado",
    integrationsLabel: "Se integra con:",
    tip: "Consejo: Si tiene sentido, coméntaselo a tu equipo de RRHH y consigan aún más beneficios para ti y tus colegas.",
    items: [
      {
        title: "Registra tus entrenamientos y participa por premios",
        description:
          "Publica tus entrenamientos con modalidad, tiempo y distancia. Sigue tu evolución, acumula puntos y participa por premios exclusivos de la plataforma.",
      },
      {
        title: "Crea desafíos de actividad física con tus colegas",
        description:
          "Arma desafíos personalizados con amigos o colegas de trabajo. Define metas, sigue los rankings y celebra los logros juntos.",
      },
      {
        title: "Encuentra carreras y grupos deportivos recurrentes",
        description:
          "Descubre eventos cerca de ti, grupos de running, partidos de fútbol, entrenamientos de beach tennis y mucho más. La comunidad te está esperando.",
      },
      {
        title: "Crea el perfil de tu empresa e invita a más personas",
        description:
          "No necesitas trabajar en RRHH para empezar una comunidad deportiva en tu empresa. Crea el perfil corporativo, invita a tus colegas y promueve el bienestar en el trabajo.",
      },
    ],
  },
}

export const homeCta: Record<
  SiteLanguage,
  {
    titleLine1: string
    titleHighlight: string
    subtitle: string
    badges: { secure: string; rating: string; free: string; users: string }
  }
> = {
  pt: {
    titleLine1: "Pronto para começar",
    titleHighlight: "sua jornada?",
    subtitle: "Junte-se a milhares de pessoas que já estão se movimentando, competindo e se conectando através da MeshMe",
    badges: { secure: "Dados seguros", rating: "4.8/5 Avaliação", free: "100% gratuito", users: "+10k usuários" },
  },
  en: {
    titleLine1: "Ready to start",
    titleHighlight: "your journey?",
    subtitle: "Join thousands of people who are already moving, competing and connecting through MeshMe",
    badges: { secure: "Secure data", rating: "4.8/5 rating", free: "100% free", users: "+10k users" },
  },
  es: {
    titleLine1: "Listo para empezar",
    titleHighlight: "tu camino?",
    subtitle: "Únete a miles de personas que ya se están moviendo, compitiendo y conectando a través de MeshMe",
    badges: { secure: "Datos seguros", rating: "4.8/5 calificación", free: "100% gratis", users: "+10k usuarios" },
  },
}

export const tourHero: Record<
  SiteLanguage,
  { badge: string; titleStart: string; titleHighlight: string; subtitle: string; ctaPrimary: string }
> = {
  pt: {
    badge: "Tour pelo app",
    titleStart: "Como funciona a",
    titleHighlight: "MeshMe",
    subtitle: "Veja como é usar o app, tela por tela, do primeiro desafio até o pódio.",
    ctaPrimary: "Começar agora. É grátis.",
  },
  en: {
    badge: "App tour",
    titleStart: "How",
    titleHighlight: "MeshMe works",
    subtitle: "See what it's like to use the app, screen by screen, from your first challenge to the podium.",
    ctaPrimary: "Get started. It's free.",
  },
  es: {
    badge: "Tour de la app",
    titleStart: "Cómo funciona",
    titleHighlight: "MeshMe",
    subtitle: "Descubre cómo es usar la app, pantalla por pantalla, desde tu primer desafío hasta el podio.",
    ctaPrimary: "Empieza ahora. Es gratis.",
  },
}

export const tourSteps: Record<SiteLanguage, { title: string; description: string }[]> = {
  pt: [
    {
      title: "Desafios premiados, da empresa e em grupo",
      description:
        "Na tela inicial você encontra os desafios premiados da plataforma, os desafios fechados da sua empresa e os desafios em grupo que você mesmo pode criar com amigos ou colegas de trabalho.",
    },
    {
      title: "Participe e acompanhe o ranking",
      description:
        'Ao entrar em um desafio premiado, veja os detalhes da premiação, toque em "Participar" e acompanhe sua posição no ranking em tempo real.',
    },
    {
      title: "Troque MeshCoins por recompensas",
      description:
        "No topo da tela inicial fica o contador de MeshCoins, a moeda da MeshMe. Toque nele para abrir a loja de recompensas e trocar seus pontos por vouchers de marcas parceiras.",
    },
    {
      title: "Próximos torneios e histórico",
      description:
        "No segundo menu da barra de navegação, a aba Torneios mostra os próximos eventos que estão por vir e o histórico completo de edições anteriores.",
    },
    {
      title: "Detalhes de cada torneio",
      description: "Toque em um torneio para ver todas as informações do evento e navegar entre as abas disponíveis.",
    },
    {
      title: "Acompanhe os jogos agendados",
      description:
        "Dentro do torneio, a aba Agendados mostra todos os jogos programados, para você nunca perder a próxima partida.",
    },
    {
      title: "Crie sua empresa ou entre com um código",
      description:
        "No menu Empresas, crie o perfil da sua empresa do zero ou entre em uma já existente usando o código enviado pelo responsável de RH.",
    },
    {
      title: "Desafios fechados e Painel de RH",
      description:
        "Dentro da empresa, participe de desafios fechados criados para incentivar a atividade física do time. Quem cria a empresa recebe um e-mail com acesso ao Painel de RH, um painel próprio para gerenciar tudo pelo navegador.",
    },
    {
      title: "Feed, curtidas e comentários",
      description:
        "Os desafios da empresa têm um feed próprio, onde você curte, comenta e acompanha as publicações dos colegas de trabalho enquanto o desafio avança.",
    },
    {
      title: "Acompanhe suas estatísticas no perfil",
      description:
        "No perfil você acompanha check-ins, distância, tempo e outras estatísticas, além de navegar pelas abas de torneios, desafios e registros para ver todo o seu histórico.",
    },
    {
      title: "Registre sua atividade em qualquer tela",
      description:
        "O botão flutuante fica acessível nas quatro abas principais do app. Escolha em qual desafio quer registrar a atividade, ou registre direto no seu perfil para bater suas metas pessoais.",
    },
    {
      title: "Todos os seus registros, organizados",
      description: "Veja o histórico completo de atividades registradas e acompanhe sua evolução ao longo do tempo.",
    },
  ],
  en: [
    {
      title: "Prize challenges, company challenges and group challenges",
      description:
        "On the home screen you'll find the platform's prize challenges, your company's private challenges and group challenges you can create yourself with friends or coworkers.",
    },
    {
      title: "Join in and track the ranking",
      description:
        'When you open a prize challenge, check out the prize details, tap "Participate" and track your ranking position in real time.',
    },
    {
      title: "Trade MeshCoins for rewards",
      description:
        "At the top of the home screen you'll find your MeshCoins counter, MeshMe's own currency. Tap it to open the rewards store and trade your points for vouchers from partner brands.",
    },
    {
      title: "Upcoming tournaments and history",
      description:
        "In the app's second navigation menu, the Tournaments tab shows upcoming events and the full history of past editions.",
    },
    {
      title: "Details for every tournament",
      description: "Tap a tournament to see all the event information and browse through the available tabs.",
    },
    {
      title: "Follow the scheduled matches",
      description:
        "Inside the tournament, the Scheduled tab shows every upcoming match, so you never miss the next game.",
    },
    {
      title: "Create your company or join with a code",
      description:
        "In the Companies menu, set up your company profile from scratch or join an existing one using the code your HR contact sends you.",
    },
    {
      title: "Private challenges and the HR Dashboard",
      description:
        "Inside the company, join private challenges created to encourage physical activity across the team. Whoever creates the company gets an email with access to the HR Dashboard, a dedicated panel to manage everything from a browser.",
    },
    {
      title: "Feed, likes and comments",
      description:
        "Company challenges have their own feed, where you can like, comment and follow your coworkers' posts as the challenge unfolds.",
    },
    {
      title: "Track your stats in your profile",
      description:
        "In your profile you can track check-ins, distance, time and other stats, plus browse the tournaments, challenges and log tabs to see your full history.",
    },
    {
      title: "Log your activity from any screen",
      description:
        "The floating button is accessible from all four main tabs of the app. Choose which challenge to log your activity to, or log it straight from your profile to hit your personal goals.",
    },
    {
      title: "All your logs, organized",
      description: "See the full history of your logged activities and track your progress over time.",
    },
  ],
  es: [
    {
      title: "Desafíos premiados, de la empresa y en grupo",
      description:
        "En la pantalla de inicio encuentras los desafíos premiados de la plataforma, los desafíos cerrados de tu empresa y los desafíos en grupo que tú mismo puedes crear con amigos o colegas de trabajo.",
    },
    {
      title: "Participa y sigue el ranking",
      description:
        'Al entrar en un desafío premiado, revisa los detalles del premio, toca "Participar" y sigue tu posición en el ranking en tiempo real.',
    },
    {
      title: "Cambia tus MeshCoins por recompensas",
      description:
        "En la parte superior de la pantalla de inicio está el contador de MeshCoins, la moneda de MeshMe. Tócalo para abrir la tienda de recompensas y cambiar tus puntos por vales de marcas asociadas.",
    },
    {
      title: "Próximos torneos e historial",
      description:
        "En el segundo menú de navegación, la pestaña Torneos muestra los próximos eventos y el historial completo de ediciones anteriores.",
    },
    {
      title: "Detalles de cada torneo",
      description: "Toca un torneo para ver toda la información del evento y navegar entre las pestañas disponibles.",
    },
    {
      title: "Sigue los partidos programados",
      description:
        "Dentro del torneo, la pestaña Programados muestra todos los partidos, para que nunca te pierdas el próximo.",
    },
    {
      title: "Crea tu empresa o ingresa con un código",
      description:
        "En el menú Empresas, crea el perfil de tu empresa desde cero o únete a una ya existente con el código que te envía tu responsable de RRHH.",
    },
    {
      title: "Desafíos cerrados y Panel de RRHH",
      description:
        "Dentro de la empresa, participa en desafíos cerrados creados para fomentar la actividad física del equipo. Quien crea la empresa recibe un correo con acceso al Panel de RRHH, un panel propio para gestionar todo desde el navegador.",
    },
    {
      title: "Feed, me gusta y comentarios",
      description:
        "Los desafíos de la empresa tienen su propio feed, donde puedes dar like, comentar y seguir las publicaciones de tus colegas mientras avanza el desafío.",
    },
    {
      title: "Sigue tus estadísticas en tu perfil",
      description:
        "En tu perfil puedes seguir check-ins, distancia, tiempo y otras estadísticas, además de navegar por las pestañas de torneos, desafíos y registros para ver todo tu historial.",
    },
    {
      title: "Registra tu actividad desde cualquier pantalla",
      description:
        "El botón flotante está disponible en las cuatro pestañas principales de la app. Elige en qué desafío quieres registrar tu actividad, o regístrala directamente en tu perfil para cumplir tus metas personales.",
    },
    {
      title: "Todos tus registros, organizados",
      description: "Consulta el historial completo de actividades registradas y sigue tu evolución con el tiempo.",
    },
  ],
}

export const tourCta: Record<
  SiteLanguage,
  { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string }
> = {
  pt: {
    title: "Pronto para começar?",
    subtitle: "Baixe o app e comece sua jornada esportiva hoje mesmo.",
    ctaPrimary: "Começar agora. É grátis.",
    ctaSecondary: "Voltar para a home",
  },
  en: {
    title: "Ready to get started?",
    subtitle: "Download the app and start your fitness journey today.",
    ctaPrimary: "Get started. It's free.",
    ctaSecondary: "Back to home",
  },
  es: {
    title: "¿Listo para empezar?",
    subtitle: "Descarga la app y empieza hoy tu camino deportivo.",
    ctaPrimary: "Empieza ahora. Es gratis.",
    ctaSecondary: "Volver al inicio",
  },
}
