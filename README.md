# Goooool.net — V563

Goooool.net é um jogo independente de gerenciamento de futebol desenvolvido por Thalles Lázaro, desenhado primeiro para celular e executado no navegador como PWA.

Este README descreve o **estado atual do projeto**. O histórico do que mudou em cada versão não é mantido aqui; a fonte oficial para isso é a página estática **Atualizações** (`https://goooool.net/atualizacoes.html`).

## V560 — prévia fiel do clube com IA, geografia segura e taças Canvas padronizadas

- A prévia de clubes criados com IA usa a mesma paleta e o mesmo `crestStyle` que serão usados depois de iniciar a carreira; o fallback azul/branco não aparece quando o JSON traz cores válidas.
- Em clubes brasileiros criados com IA, `/stateCode` passa a ser obrigatório no prompt e a validação resolve a UF de forma defensiva por identidade oficial, sigla, nome/cidade e JSON.
- Clubes históricos reconhecidos não herdam mais a UF do clube-base substituído na liga; conflitos evidentes como Atlético Mineiro/RJ são corrigidos para MG antes da criação da carreira.
- Cards Canvas com taça usam a imagem oficial quando disponível e sempre a encaixam com `contain` dentro de uma caixa total reservada, sem invadir `1º`, títulos, placares ou outros textos.
- A regra da caixa vale para campeão, troféu da carreira, resultado, próximo jogo, temporada/classificação e seleção.
- Save schema 178 e banco oficial 1050 / modelo 7 permanecem inalterados.

## Estado atual

- Aplicativo: V563.
- Save schema: 178.
- Banco oficial: revisão 1116 / modelo 7, com 174 ligas e 2.551 clubes.
- Interface: mobile-first; a Home inicial sem save permanece intocada, enquanto carreiras carregadas podem receber adaptações específicas em `telas-grandes.css` a partir de 960 px, sem alterar o CSS canônico mobile.
- Sem carreira carregada, a Home prioriza modo → clube → card do clube → nome do técnico em modal → começar; busca fica visível e filtros adicionais permanecem recolhidos para reduzir ruído.
- Guia, Atualizações, Sobre, Privacidade e Termos usam a mesma moldura visual inspirada na Wiki, com largura, navegação, painéis e rodapé consistentes.
- Distribuição V563: cliente estático em dois pacotes (normal e publicação protegida), backend legível separado para `db.goooool.net` e ZIP principal contendo exatamente os três pacotes.
- PWA: manifest + service worker, com funcionamento offline dos recursos armazenados e instalação guiada pelo navegador/Safari.
- Perfil nacional: todas as divisões cadastradas do país são ativadas; no Brasil, Série A/B/C/D. O catálogo não corta ligas acima de 20 clubes.
- Editor comunitário: a Copa do Mundo aparece em Copas e competições e permite personalizar a taça WebP.
- Ao Vivo: subabas por país ficam alinhadas ao painel, usam imagem oficial do país quando disponível e não causam salto de scroll ao trocar de aba.
- Banco da carreira e saves: locais ao navegador, com exportação/importação e proteções de integridade.
- Imagens oficiais em saves existentes: escudos de clubes e seleções e taças são resolvidos pela revisão oficial mais recente por ID; personalizações explícitas do próprio save têm prioridade. Isso não atualiza elenco, atributos, contratos, transferências ou a história esportiva da carreira.
- Países e nacionalidades: quando há `crestWebp` oficial da seleção correspondente, o escudo aparece antes do nome em contextos visuais; sem imagem, não existe placeholder nem espaço reservado. Escudos oficiais ou gerados nunca usam sombra.
- Nomes de jogadores gerados: elencos automáticos, categorias de base, times ACTIVE-lite e seleções usam pools por nacionalidade; todos os 118 países presentes nas ligas têm pool próprio, com fallback regional/global para ampliação e dados ausentes/legados.
- Prompts de IA que produzem jogadores distinguem `name` (nome real/completo ou profissional oficial) de `shirtName` (nome futebolístico/popular reconhecido pelos torcedores), respeitando culturas diferentes e sem inventar apelidos.
- Na interface do jogo, `shirtName` é a identidade pública do atleta em listas, escalações, mercado, eventos e prévias; `name` aparece como informação secundária em áreas de perfil/detalhe e continua disponível para edição e busca.
- A aba Eventos do Ao Vivo resume gols, cartões, substituições, lesões, VAR e decisões; é o padrão para novos usuários, preserva preferências já salvas e mantém os autores dos gols visíveis junto ao placar.
- Acesso e rebaixamento usam uma regra efetiva única entre divisões realmente conectadas; a zona exibida na tabela e no regulamento corresponde à quantidade que o motor movimenta na virada da temporada. Mudanças reais do clube controlado geram registro e notificação para replay; o Técnico automático não é interrompido.
- Áudios brutos de jogo são nivelados por loudness perceptivo (alvo aproximado de -16 LUFS, com exceção do efeito ultracurto tratado por RMS), preservando 44,1 kHz, mono e PCM 16-bit.
- Estatísticas anônimas: fila local persistente com espelho durável, IDs determinísticos por partida, confirmação individual do servidor, deduplicação e reenvio automático após interrupções. O dia do evento usa o calendário local e a página pública atualiza gráfico e cards de totais pela mesma fonte consolidada.
- Retomada mobile: finalizações de rodada paradas após suspensão longa são detectadas e recuperadas a partir do último estado persistido seguro.
- Sites públicos: pacotes auxiliares acompanham a versão do release quando reconstruídos.
- Atualizações do aplicativo: novas versões são detectadas em segundo plano e aplicadas silenciosamente apenas em estado seguro; não existe modal nem preferência de aviso de atualização. O histórico público fica em `atualizacoes.html`.

## Arquitetura principal

O projeto não depende de build para executar. A aplicação é composta principalmente por HTML, CSS, JavaScript e PHP simples.

- `index.html`: entrada do jogo.
- `app.js`: interface, renderizadores e interações.
- `engine.js`: motor principal da carreira.
- `international.js`: seleções e competições internacionais.
- `storage.js`: persistência e recuperação local.
- `database.js` / `global-database.js`: banco e catálogo esportivo.
- Páginas públicas: HTMLs independentes na raiz (`guia.html`, `wiki.html`, `atualizacoes.html`, `sobre.html`, `privacidade.html`, `termos.html` e 12 capítulos da Wiki).
- `styles.css`: estilos canônicos mobile-first do aplicativo.
- `editor.php`: Editor Comunitário e administração do banco, publicado somente em `db.goooool.net`.
- `stats.php`: estatísticas públicas/administrativas no backend `db.goooool.net`, confirmação de eventos e deduplicação da telemetria anônima.
- `tests/`: regressões e auditorias automatizadas.
- `scripts/build_packages.py`: validação e geração dos pacotes oficiais.
- `ia.txt`: memória técnica interna para continuidade do desenvolvimento.

## Regras permanentes do produto

O jogo é exclusivamente orientado a celular. Alterações de interface devem priorizar toque, telas estreitas, legibilidade e desempenho. Telas grandes preservam a mesma interface mobile e não recebem layout alternativo de desktop.

As cores de clubes e seleções podem personalizar superfícies temáticas, mas controles funcionais precisam manter contraste. **Jogar** é uma exceção de identidade: usa sempre o verde oficial do Goooool.net e não muda com tema, clube ou seleção. A experiência permanece orientada a celular; `telas-grandes.css` pode adaptar telas internas a partir de 960 px, mas nunca toca a Home inicial nem cria dependência de navegação desktop.

Textos visíveis devem ser naturais em português. Siglas técnicas de posições podem existir em áreas compactas, mas superfícies com espaço devem preferir nomes completos. Códigos internos do save não devem ser traduzidos ou regravados apenas por apresentação.

O banco padrão e o schema do save só devem mudar quando a alteração realmente exigir isso. Correções de interface não justificam reescrever dados esportivos nem invalidar carreiras existentes.

Todo placar numérico visível usa hífen ASCII com espaços, como **2 - 1**. Quando ainda não existe placar, confrontos textuais usam **vs** em minúsculo.

As **Assistências da carreira** ficam somente em Ajustes → Carreira. Toda carreira nova começa com as cinco opções desligadas; cada switch é salvo no próprio save e pode ser alterado a qualquer momento. Mudanças não reescrevem consequências já ocorridas.

## Desenvolvimento e testes

Para validar a release atual:

```bash
node tests/run-current.js
```

Auditorias específicas podem ser executadas separadamente. Testes visuais responsivos usam Chromium/Playwright quando disponíveis.

Para construir os pacotes oficiais:

```bash
python scripts/build_packages.py
```

O construtor valida sincronização de versão, cache, arquivos independentes, banco oficial e regras de empacotamento antes de gerar a saída.

## Publicação

A V560 gera três pacotes: `goooool.net` normal estático/legível, `goooool.net` estático protegido e `db.goooool.net` backend legível sem ofuscação. Um quarto ZIP principal contém exatamente esses três ZIPs. O cliente publicado não contém PHP/SQLite e todos os seus arquivos ficam diretamente na raiz.

Arquivos de runtime da hospedagem, bancos SQLite compartilhados, filas, locks, relatórios locais e artefatos temporários não devem entrar em uma nova distribuição.

## Documentação e histórico

- Estado técnico interno e decisões permanentes: `ia.txt`.
- Ajuda completa: `guia.html`, `wiki.html` e os 12 capítulos HTML independentes.
- Histórico público de versões: `atualizacoes.html`.
- Informações institucionais: `sobre.html`, `privacidade.html` e `termos.html`.
- `llms.txt` e `llms-full.txt` descrevem somente o produto atual e não funcionam como changelog.

## Autoria

Criador e desenvolvedor: **Thalles Lázaro**  
Jogo: https://goooool.net/  
Apresentação: https://jogue.goooool.net/


## Separação de domínios V560

`goooool.net` é um cliente 100% estático. Todos os arquivos do pacote de deploy ficam na raiz; o código-fonte continua organizado em pastas e é achatado apenas pelo builder. `db.goooool.net` concentra Editor, Estatísticas, Biblioteca, PHP e persistência SQLite. O backend não é requisito para abrir/jogar/salvar a carreira local.

Alterações aprovadas no Editor não publicam o banco automaticamente. O proprietário usa **Exportar banco para o jogo**, recebe `database-index.json`, `database-core.json`, os `database-part-XXX.json` necessários e `database-version.json`, todos abaixo de 20 MB, e faz o upload manual desses arquivos na raiz de `goooool.net`.

- V554: Técnico automático processa semanas em ciclos concluíveis; Eventos usa cores semânticas independentes do clube e compensa o cabeçalho sticky na rolagem.
