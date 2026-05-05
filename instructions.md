# Instruções para o Copilot - Portfólio Rafael Giorgi

## Overview

Projeto: Portfólio pessoal construído em Next.js (v14+)
Tipagem: TypeScript
Estilos: Tailwind CSS
Integração de dados: Dados estáticos locais (preparado para Supabase no futuro)
Animações: Framer Motion

## Instruções para o Copilot

### 1. Organização do Projeto

- Todas as páginas ficam em `/src/app`.
- Componentes reutilizáveis estão em `/src/components`.
- Hooks personalizados vão em `/src/hooks` (criar se necessário).
- Configurações do Supabase ficam em `/src/lib/supabase.ts` (preparado para futuro).
- Use o Client do `@supabase/supabase-js` versão 2.x (quando implementar).
- Dados estáticos estão em `/src/data`.
- Tipos TypeScript em `/src/types`.

### 2. Padrões

- Priorize componentes server-side onde possível.
- Use arrow functions para componentes React.
- Sempre utilize `export default` a menos que precise compartilhar múltiplos exports.
- Use Tailwind para estilização, evite CSS puro.
- Utilize `lucide-react` para ícones.
- Use Framer Motion para animações.

### 3. Dados

- Atualmente, todos os dados são estáticos em `/src/data/*.ts`.
- Para futuro: Use Supabase para dados dinâmicos.
- Exemplos (quando implementar):
  - Para buscar projetos: `supabase.from('projects').select('*')`
  - Para autenticação: `supabase.auth.signInWith...`
- Não armazene keys sensíveis no client.

### 4. Boas Práticas

- Sempre tipar os props dos componentes.
- Use os hooks do Next (useRouter, usePathname...) para navegação.
- Prefira animações com Framer Motion.
- Use `MotionFadeUp`, `MotionStagger` de `/src/components/ui/Motion`.

### 5. Convenções de Código

- Nomeie arquivos de componentes com PascalCase: `MyComponent.tsx`
- Nomeie hooks com `use`: `useAuth.ts`
- Variáveis de ambiente ficam em `.env.local` e são acessadas via `process.env.NOME_DA_VARIAVEL`
- Use os scripts do `package.json` para build/lint/testes
- Exemplos de arquitetura de pastas:
  - `/src/app` (páginas Next.js)
  - `/src/components` (componentes React)
  - `/src/hooks` (hooks customizados)
  - `/src/lib` (utilitários, configs)
  - `/src/data` (dados estáticos)
  - `/src/types` (tipos TypeScript)
  - `/public` (assets estáticos)

### Exemplo para inicializar Supabase Client (futuro)

```typescript
// /src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
```

## 📚 Dicas Gerais

- Sempre conferir nas docs oficiais do Next.js, Tailwind e Supabase.
- Se não souber alguma configuração, procure por exemplos em projetos similares.
- Dados estão em português, manter consistência.
- O projeto usa design tokens customizados no Tailwind config.</content>
  <parameter name="filePath">c:\Work\Portfolio\instructions.md
