import { StepConfig, StepType } from './types';

export const STEPS: StepConfig[] = [
  // ETAPA 1 - ABERTURA
  {
    id: 1,
    type: StepType.NARRATIVE,
    title: "Você prometeu que esse ano seria diferente. Lembra?",
    content: [
      "Mas olha sua vida agora: mesma rotina, mesmos vícios, <b>mesmas desculpas.</b>",
      "E o pior:",
      "você já começou a se conformar em viver contando moedas, adiando sonhos e vivendo no piloto automático, como se isso fosse <span class='text-brand-red font-bold'>NORMAL</span>."
    ],
    image: "https://i.ibb.co/ZRvLbfwD/Captura-de-tela-2026-01-26-102159.png",
    imageCaption: "A verdade é dura, mas necessária:\nninguém muda a vida pensando. <b>Só muda agindo diferente.</b>",
    ctaText: "EU NÃO QUERO CONTINUAR ASSIM!"
  },
  // ETAPA 2
  {
    id: 2,
    type: StepType.NARRATIVE,
    title: "Você acha que está no controle ...",
    content: [
      "Mas vive como um <b>rato</b> em um labirinto invisível.",
      "E pra te manter preso, não precisam de algemas. <b>Basta ocupar sua mente o tempo todo:</b>",
      "• redes sociais",
      "• prazer fácil",
      "• distrações constantes",
      "• falsas urgências",
      "Você acha que escolhe ... <b>mas só reage.</b>",
      "Isso não é coincidência. É um sistema. É o modo de <span class='text-brand-red font-bold'>SOBREVIVÊNCIA</span>.",
      "E funciona tão bem que você acredita que é livre ... quando, na verdade, só está <span class='text-brand-red font-bold'>ANESTESIADO</span>."
    ],
    ctaText: "QUERO SAIR DESSE CICLO"
  },
  // ETAPA 3
  {
    id: 3,
    type: StepType.NARRATIVE,
    title: "A saída existe, mas ela cobra um preço.",
    content: [
      "Não é dinheiro. Não é sorte. Não é talento.",
      "É <span class='text-brand-red font-bold'>RENÚNCIA</span>.",
      "• Renunciar aos vícios que aliviam por minutos e cobram anos",
      "• Renunciar às pessoas que te puxam pra baixo",
      "• Renunciar aos hábitos que te mantêm pequeno.",
      "<b>Ninguém evolui carregando tudo.</b>",
      "A pergunta não é 'será que dá certo?'.",
      "A pergunta é: <b>Você realmente está disposto a pagar esse preço?</b>"
    ],
    ctaText: "SIM, ESTOU DISPOSTO!"
  },
  // ETAPA 4 - PERGUNTA 1
  {
    id: 4,
    type: StepType.QUIZ,
    title: "O que você mais quer transformar atualmente?",
    options: [
      "Criar disciplina e parar de procrastinar",
      "Evoluir mentalmente e emocionalmente",
      "Melhorar o físico e a autoestima",
      "Aprender a gerar renda no digital",
      "Organizar a vida, rotina e dinheiro",
      "Todas as alternativas!"
    ]
  },
  // ETAPA 5 - PERGUNTA 2
  {
    id: 5,
    type: StepType.QUIZ,
    title: "Hoje, o que mais está te travando na prática?",
    options: [
      "Falta de disciplina e constância",
      "Procrastinação e vícios digitais",
      "Falta de clareza do que fazer",
      "Falta de energia, físico e rotina bagunçada",
      "Falta de dinheiro e direção profissional",
      "Tudo! Estou perdido"
    ]
  },
  // ETAPA 6 - PERGUNTA 3
  {
    id: 6,
    type: StepType.QUIZ,
    title: "Qual dessas frases mais parece com você?",
    options: [
      "Eu sei o que preciso fazer, mas não faço",
      "Começo animado e abandono no meio",
      "Estou cansado de tentar sem método",
      "Tenho potencial, mas estou desperdiçando",
      "Não aguento mais viver no modo automático"
    ]
  },
  // ETAPA 7 - PERGUNTA 4
  {
    id: 7,
    type: StepType.QUIZ,
    title: "Se nada mudar nos próximos 3 meses, o que mais te assusta?",
    options: [
      "Continuar exatamente onde estou",
      "Olhar pra trás e ver que perdi mais tempo",
      "Me tornar alguém frustrado comigo mesmo",
      "Nunca sair da média",
      "Depender sempre dos outros"
    ]
  },
  // ETAPA 8 - PERGUNTA 5
  {
    id: 8,
    type: StepType.QUIZ,
    title: "Quando você tenta mudar, o que geralmente acontece?",
    options: [
      "Começo motivado, mas perco constância",
      "Tento sozinho, sem um método claro",
      "Me empolgo com conteúdos, mas não aplico",
      "Até mudo por um tempo, mas depois volto ao padrão",
      "Sinceramente, nunca tive um plano estruturado"
    ]
  },
  // ETAPA 9 - PROCESSAMENTO
  {
    id: 9,
    type: StepType.PROCESSING,
    content: ["Espere alguns segundos, estamos identificando suas objeções..."],
    duration: 8
  },
  // ETAPA 10 - DIAGNÓSTICO
  {
    id: 10,
    type: StepType.DIAGNOSIS,
    title: "Seu Diagnóstico de Evolução",
    content: [
      "Com base nas suas respostas, identificamos um padrão claro no seu momento atual.",
      "Hoje, você está preso no que chamamos de <strong class='text-brand-gold'>Modo Sobrevivência Evolutiva</strong>: existe vontade real de mudar, mas falta estrutura, disciplina funcional e um plano diário claro de execução.",
      "Esse padrão não acontece por falta de potencial.",
      "Acontece porque você nunca teve um método <b>simples, aplicável e impossível de ignorar.</b>",
      "<b>O que você realmente precisa agora:</b>",
      "• Um método diário, simples e executável",
      "• Disciplina que funcione mesmo sem motivação",
      "• Clareza total do que fazer todos os dias",
      "• Um processo que reconstrua sua identidade pela ação",
      "E é exatamente isso que o <span class='text-brand-red font-bold'>Código da Evolução</span> entrega."
    ],
    ctaText: "QUERO ACESSAR MEU PROTOCOLO!"
  },
  // ETAPA FINAL - FILTRO
  {
    id: 11,
    type: StepType.FINAL,
    title: "ANTES DE CONTINUAR, ATENÇÃO:",
    content: [
      "O Código da Evolução vai te levar para <b>longe da zona de conforto</b>.",
      "<b>Não é motivação vazia.</b> Não é frase bonita pra salvar e esquecer. Isso aqui é um <span class='text-brand-red font-bold'>sistema de responsabilidade</span>.",
      "Um método pra quem decidiu parar de se sabotar e assumir o controle da própria vida de verdade, sem desculpas, apenas aceitando o processo real da conquista do sucesso, sem processos 'milagrosos'.",
      "Se você procura atalhos, desculpas ou alguém pra te motivar todos os dias ... <span class='text-brand-red font-bold'>feche essa página agora</span>.",
      "Mas se essa frase faz sentido pra você:",
      "'Se você continuar fazendo o que sempre fez, vai continuar vivendo o que sempre viveu.'",
      "<b>É porque você sabe que precisa mudar.</b>"
    ],
    ctaText: "EU QUERO MUDAR!",
    redirectUrl: "https://codigodaevolucao-web-tan.vercel.app/"
  }
];