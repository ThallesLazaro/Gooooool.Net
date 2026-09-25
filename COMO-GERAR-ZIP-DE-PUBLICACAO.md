# Como publicar a V565 do Goooool.net

A arquitetura atual separa o jogo estático do backend. A publicação oficial de cada release possui **três ZIPs internos** e um ZIP principal que contém exatamente esses três arquivos.

## Pacotes

1. `goooool-vNUMERO-goooool-net-normal.zip` — cliente estático legível, com todos os arquivos diretamente na raiz.
2. `goooool-vNUMERO-goooool-net-publicacao-ofuscada.zip` — cliente estático para publicação em `goooool.net`, com JavaScript protegido e todos os arquivos diretamente na raiz.
3. `goooool-vNUMERO-db-goooool-net.zip` — backend legível para `db.goooool.net`, com PHP, Editor, Estatísticas, Biblioteca e suporte a SQLite. **Nunca é ofuscado.**
4. `goooool-vNUMERO-pacote-principal.zip` — contém exatamente os três ZIPs anteriores na raiz e nenhum outro arquivo.

Os dois pacotes do cliente incluem também, na própria raiz, os sites públicos independentes `sobre.goooool.net-VNUMERO.zip` e `jogue.goooool.net-VNUMERO.zip`. Eles não viram ZIPs extras na raiz do pacote principal; viajam junto do cliente para manter a distribuição organizada.

## Domínios

`goooool.net` é o jogo 100% estático. Não recebe PHP, SQLite, sessões, logs ou dados privados. `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` e `humans.txt` continuam no domínio principal.

`db.goooool.net` concentra Editor, Estatísticas, Biblioteca e endpoints PHP. Os caminhos públicos canônicos são:

- `https://db.goooool.net/editor`
- `https://db.goooool.net/estatisticas`
- `https://db.goooool.net/biblioteca/`

O `404.html` do cliente mantém compatibilidade com URLs antigas do domínio principal e redireciona essas três áreas para o backend.

## Banco estático fragmentado

O jogo não distribui `default-database.json`. O banco oficial público usa:

- `database-index.json`
- `database-core.json`
- `database-part-001.json`, `database-part-002.json`, ... conforme necessário
- `database-version.json`

Cada arquivo de banco deve ficar abaixo de **20 MB**, com alvo de aproximadamente 18 MB. O manifesto registra tamanho, SHA-256 e revisão de cada fragmento.

Na abertura normal, o jogo restaura primeiro a última revisão completa já validada no Cache Storage. Quando há internet, consulta em segundo plano apenas `database-version.json`. Os fragmentos só são baixados novamente quando a revisão do banco muda.

## Atualizar o banco depois de editar

Alterações aprovadas no Editor não são publicadas automaticamente no jogo. No `db.goooool.net/editor`, use **Exportar banco para goooool.net**. O ZIP gerado contém o manifesto, núcleo, fragmentos e descritor de versão prontos para substituir manualmente os arquivos correspondentes na raiz de `goooool.net`.

A publicação deve ser atômica sempre que possível: envie primeiro os novos fragmentos e o núcleo e publique `database-index.json` / `database-version.json` por último. Assim usuários não recebem uma revisão anunciada antes de todos os arquivos estarem disponíveis.

## Regras de segurança

- Nunca colocar PHP, SQLite, credenciais, logs, sessões, WAL/SHM ou dados privados no pacote estático.
- Nunca ofuscar o pacote `db.goooool.net`.
- Validar sintaxe de todo JavaScript antes da proteção e novamente após decodificar os wrappers protegidos.
- Se qualquer arquivo de banco exceder 20 MB ou falhar em tamanho/hash, abortar o build.
- O backend indisponível nunca deve impedir abrir, jogar ou salvar localmente.
- O banco anterior permanece válido até uma nova revisão ser totalmente baixada e validada.

## Continuidade

As regras técnicas permanentes e o estado atual da arquitetura ficam registradas em `ia.txt`. Em caso de continuação do projeto em outro chat, esse arquivo deve ser lido antes de qualquer nova alteração.
