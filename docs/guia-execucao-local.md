# Guia De Execução Local — Museu TJSC

Passo a passo para clonar o repositório e rodar a aplicação no computador. O guia foi escrito com Windows em primeiro plano, mas os mesmos passos valem para macOS e Linux.

Atualizado em: 2026-05-20.

## Visão Geral

O projeto é uma aplicação React/Vite estática hospedada no GitHub como repositório **público**. Para ver tudo funcionando, basta:

1. Instalar Git e Node.js.
2. Clonar (sem autenticação).
3. Instalar dependências.
4. Rodar o servidor de desenvolvimento ou a pré-visualização.
5. Abrir o endereço local no navegador.

Tempo médio na primeira vez: 10 a 15 minutos.

## Pré-Requisitos

### Windows 10 ou 11

1. **Git**
   - Baixe em `https://git-scm.com/download/win`.
   - Instale com as opções padrão. Quando perguntar sobre o editor, pode deixar Notepad ou escolher VS Code se já tiver.
   - Após instalar, abra **Git Bash** ou o **PowerShell** e teste:
     ```powershell
     git --version
     ```
     Deve imprimir algo como `git version 2.4x.x`.

2. **Node.js LTS (recomendado 20.x ou superior)**
   - Baixe em `https://nodejs.org/en/download`.
   - Use o instalador `Windows Installer (.msi)`.
   - Marque a opção que adiciona ao `PATH`. Não é necessário marcar "ferramentas de compilação" para este projeto.
   - Teste no PowerShell:
     ```powershell
     node --version
     npm --version
     npx --version
     ```
     Deve imprimir as versões instaladas.

3. **Editor de código (opcional, mas recomendado)**
   - **Visual Studio Code**: `https://code.visualstudio.com/`.
   - Extensões úteis: `EditorConfig`, `ESLint`, `Tailwind CSS IntelliSense`, `PlantUML`, `Markdown All in One`.

4. **Terminal**
   - Use o **PowerShell** ou o **Windows Terminal**.
   - Se preferir Linux dentro do Windows, use o **WSL2** com Ubuntu (`wsl --install` em PowerShell elevado) e siga a seção Linux deste guia dentro do WSL.

### macOS

```bash
# Homebrew (caso ainda não tenha)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git node
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install -y git curl
# Node.js 20 LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Verifique:

```bash
git --version
node --version
npx --version
```

## Baixar O Projeto

O repositório é público. Não precisa de conta no GitHub nem de token para clonar.

### Opção A — Clonar Com Git (recomendado)

#### Windows (PowerShell)

```powershell
cd $env:USERPROFILE\Documentos
git clone https://github.com/guilhermespamplona-prog/museu-tjsc.git
cd museu-tjsc
```

#### macOS / Linux

```bash
cd ~/Documentos 2>/dev/null || cd ~
git clone https://github.com/guilhermespamplona-prog/museu-tjsc.git
cd museu-tjsc
```

### Opção B — Baixar O ZIP

Para quem quer apenas visualizar e não vai usar o Git:

1. Acesse `https://github.com/guilhermespamplona-prog/museu-tjsc`.
2. Clique no botão verde **Code** → **Download ZIP**.
3. Extraia o `museu-tjsc-main.zip` para uma pasta como `C:\Users\<voce>\Documentos\museu-tjsc`.
4. Abra o terminal nessa pasta:
   - Windows: shift + clique direito → `Abrir no Terminal`.
   - macOS/Linux: `cd /caminho/para/museu-tjsc-main`.

> A Opção B não permite `git pull` para atualizar depois. Para receber correções, baixe o ZIP novamente ou prefira a Opção A.

### Opcional — Autenticação Apenas Para Quem Vai Contribuir

A autenticação no GitHub só é necessária se você for **enviar mudanças** (`git push`). Para apenas visualizar e rodar localmente, ignore esta seção.

- Para HTTPS com Personal Access Token (PAT):
  1. GitHub → `Settings → Developer settings → Personal access tokens → Fine-grained tokens`.
  2. Conceda permissão de gravação no repositório.
  3. Use o token como senha quando o `git push` pedir credenciais.
- Para SSH:
  ```powershell
  ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
  # Cole o conteúdo de %USERPROFILE%\.ssh\id_ed25519.pub em GitHub → Settings → SSH and GPG keys
  ```

## Instalar Dependências

O projeto usa `pnpm 10.4.1`. Como `pnpm` pode não estar instalado globalmente, sempre execute via `npx pnpm@10.4.1` para garantir a versão correta.

```powershell
npx pnpm@10.4.1 install
```

O comando pode demorar alguns minutos na primeira vez. Ele cria a pasta `node_modules/` e atualiza o lockfile.

> Se aparecer aviso sobre `tar@7.5.1` ser deprecado, é apenas uma subdependência do Tailwind. Não bloqueia o uso.

## Rodar O Projeto Em Desenvolvimento

```powershell
npx pnpm@10.4.1 dev
```

Saída esperada (resumo):

```
VITE v7.x  ready in xxx ms

  ➜  Local:   http://127.0.0.1:3000/
```

Abra `http://127.0.0.1:3000/#/` no navegador. A aplicação carrega a home do Memória TJSC. Para parar, volte no terminal e pressione `Ctrl + C`.

## Pré-Visualizar O Build De Produção

Esse modo simula como a aplicação ficará quando publicada no Liferay.

```powershell
npx pnpm@10.4.1 build
npx pnpm@10.4.1 preview
```

A URL típica é `http://127.0.0.1:4173/#/`. Para parar, `Ctrl + C`.

## Servir Com O Express Opcional (Demonstração)

Útil para mostrar a aplicação sem depender da pré-visualização do Vite.

```powershell
npx pnpm@10.4.1 build
npx pnpm@10.4.1 start
```

Endereço padrão: `http://127.0.0.1:3000/`. Para mudar:

```powershell
$env:PORT=4000; $env:HOST="127.0.0.1"; npx pnpm@10.4.1 start
```

No PowerShell, defina as variáveis antes do comando como acima. No macOS/Linux:

```bash
PORT=4000 HOST=127.0.0.1 npx pnpm@10.4.1 start
```

## Verificar Que Está Tudo OK

```powershell
npx pnpm@10.4.1 check
npx pnpm@10.4.1 build
```

- `check` roda o TypeScript em modo somente verificação.
- `build` recompila a aplicação para `dist/public/`.

Se ambos terminarem sem erro, o ambiente está funcionando.

## Estrutura De Pastas Que O Usuário Vai Ver

```text
museu-tjsc/
├── client/              código-fonte da aplicação
├── docs/                documentação e diagramas
├── dist/                gerado pelo build (não versionado)
├── server/              servidor Express opcional
├── scripts/             utilidades de build
├── README.md            documento principal
└── package.json
```

## Atualizar O Repositório

Sempre que houver mudanças novas no GitHub:

```powershell
git pull origin main
npx pnpm@10.4.1 install
```

Depois rode `dev` ou `preview` novamente.

> Se você baixou o ZIP em vez de clonar, baixe o ZIP atualizado e substitua a pasta.

## Resolução De Problemas Comuns

### `npx` ou `node` não é reconhecido (Windows)

- Reabra o PowerShell após instalar o Node.js.
- Verifique se o instalador adicionou Node ao PATH.
- Se persistir, reinstale o Node escolhendo "Add to PATH".

### Porta `3000` já está em uso

- Outro processo está ocupando a porta. Encerre-o ou rode em outra porta:
  ```powershell
  $env:PORT=3100; npx pnpm@10.4.1 start
  ```
- Para o `dev`, basta pressionar `Ctrl + C` em qualquer outro Vite aberto.

### Tela em branco ao abrir `http://127.0.0.1:3000/`

- Sempre use o sufixo `/#/`. O roteamento é por hash:
  - `http://127.0.0.1:3000/#/`
  - `http://127.0.0.1:3000/#/exposicoes`

### Erro `EACCES` no Windows

- Feche o antivírus temporariamente ou autorize a pasta de trabalho.
- Não instale o projeto dentro de `Program Files`. Use `Documentos\museu-tjsc`.

### Clone retorna erro de rede ou DNS

- Verifique sua conexão e proxy corporativo.
- Tente o clone por outra rota:
  ```powershell
  git clone https://github.com/guilhermespamplona-prog/museu-tjsc.git
  ```
- Se o problema persistir, use a **Opção B — Baixar O ZIP**.

### `npx pnpm@10.4.1 install` muito lento ou falhando

- Verifique sua conexão.
- Limpe o cache do npm:
  ```powershell
  npm cache clean --force
  ```
- Tente novamente.

### O dev server abre mas as imagens não aparecem

- Confirme que está em `http://127.0.0.1:3000/#/`.
- Se editou `.env`, revise se `VITE_PUBLIC_ASSET_BASE` ficou apontando para uma URL incorreta.

## Para Apresentadores Em Reunião

- Antes de chamar o cliente, rode `npx pnpm@10.4.1 build && npx pnpm@10.4.1 preview` para garantir que a versão estável esteja no ar.
- Deixe o navegador aberto em `http://127.0.0.1:4173/#/`.
- Tenha uma segunda aba pronta com a documentação no GitHub (`https://github.com/guilhermespamplona-prog/museu-tjsc`).
- Veja também `docs/guia-apresentacao.md` para o roteiro completo de demonstração e geração de PDFs.

## Comandos Resumidos

```powershell
# Clonar (repositório público)
git clone https://github.com/guilhermespamplona-prog/museu-tjsc.git
cd museu-tjsc

# Instalar
npx pnpm@10.4.1 install

# Rodar desenvolvimento
npx pnpm@10.4.1 dev          # http://127.0.0.1:3000/#/

# Build + preview
npx pnpm@10.4.1 build
npx pnpm@10.4.1 preview      # http://127.0.0.1:4173/#/

# Servidor Express opcional
npx pnpm@10.4.1 start        # http://127.0.0.1:3000/

# Verificar
npx pnpm@10.4.1 check
```
