# Portfólio Pessoal - Rafael Giorgi

## Visão Geral

Este é o portfólio pessoal de Rafael Giorgi, desenvolvido para apresentar seus projetos e habilidades como desenvolvedor. O projeto é construído com tecnologias modernas para garantir uma experiência de usuário fluida e responsiva, além de ser facilmente escalável para futuras integrações.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **Next.js (v14+):** Framework React para aplicações web com renderização no servidor e geração de sites estáticos.
*   **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript, melhorando a robustez e manutenibilidade do código.
*   **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
*   **Framer Motion:** Biblioteca para criação de animações fluidas e interativas.
*   **Lucide React:** Biblioteca de ícones para uso em projetos React.
*   **Supabase (preparado para futuro):** Plataforma de código aberto para banco de dados e autenticação, com integração futura planejada.

## Funcionalidades

*   **Design Responsivo:** Adaptação a diferentes tamanhos de tela e dispositivos.
*   **Animações Modernas:** Transições e interações visuais aprimoradas com Framer Motion.
*   **Estrutura Modular:** Organização clara de componentes, hooks e dados.
*   **Tipagem Estática:** Código mais seguro e fácil de manter com TypeScript.
*   **Dados Estáticos:** Atualmente, os dados são gerenciados localmente, com previsão de migração para Supabase.

## Estrutura do Projeto

A organização do projeto segue as melhores práticas para aplicações Next.js e React:

```
├── .next/                  # Arquivos de build do Next.js
├── public/                 # Assets estáticos (imagens, fontes, etc.)
├── src/
│   ├── app/                # Páginas da aplicação Next.js
│   ├── components/         # Componentes React reutilizáveis
│   ├── data/               # Dados estáticos da aplicação
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Utilitários e configurações (ex: Supabase client)
│   └── types/              # Definições de tipos TypeScript
├── .eslintrc.json          # Configurações do ESLint
├── .gitignore              # Arquivos e diretórios a serem ignorados pelo Git
├── instructions.md         # Instruções detalhadas para desenvolvimento (Copilot)
├── next-env.d.ts           # Definições de tipo para o ambiente Next.js
├── next.config.js          # Configurações do Next.js
├── package-lock.json       # Bloqueio de dependências do npm
├── package.json            # Metadados do projeto e dependências
├── postcss.config.js       # Configurações do PostCSS
├── tailwind.config.js      # Configurações do Tailwind CSS
├── tsconfig.json           # Configurações do TypeScript
└── README.md               # Este arquivo README
```

## Instalação e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/devraffles/Portfolio.git
    cd Portfolio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```

    O aplicativo estará disponível em `http://localhost:3000`.

4.  **Build para produção:**
    ```bash
    npm run build
    # ou yarn build
    ```

5.  **Inicie o servidor de produção:**
    ```bash
    npm run start
    # ou yarn start
    ```

## Padrões de Desenvolvimento

Este projeto segue as seguintes convenções e padrões de desenvolvimento:

*   **Componentes Server-Side:** Priorização de componentes server-side onde possível.
*   **Arrow Functions:** Utilização de arrow functions para componentes React.
*   **Export Default:** Sempre `export default` para componentes, a menos que múltiplos exports sejam necessários.
*   **Estilização:** Exclusivamente Tailwind CSS para estilização.
*   **Ícones:** Uso de `lucide-react` para todos os ícones.
*   **Animações:** Framer Motion para todas as animações, utilizando componentes como `MotionFadeUp` e `MotionStagger`.
*   **Tipagem:** Todos os `props` dos componentes são tipados com TypeScript.
*   **Navegação:** Uso dos hooks do Next.js (`useRouter`, `usePathname`) para navegação.

## Configuração do Supabase (Futuro)

O projeto está preparado para uma futura integração com o Supabase para gerenciamento de dados dinâmicos e autenticação. As configurações serão feitas em `/src/lib/supabase.ts`.

**Exemplo de inicialização do cliente Supabase:**

```typescript
// /src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
```

**Observação:** Chaves sensíveis devem ser armazenadas em variáveis de ambiente (`.env.local`) e acessadas via `process.env.NOME_DA_VARIAVEL`.

## Contribuição

Contribuições são bem-vindas! Para contribuir, por favor, siga os seguintes passos:

1.  Faça um fork do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -m 'feat: Adiciona nova funcionalidade'`).
4.  Envie para a branch (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

**Rafael Giorgi**

*   [GitHub](https://github.com/devraffles)
*   [LinkedIn](https://www.linkedin.com/in/rafael-giorgi/)
