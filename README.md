<!-- # 🚀 TEMPLATE MESTRE - MODELO 1 (ESSENCE)
> Landing Page de Alta Conversão para Serviços Locais

---

## 📂 1. ESTRUTURA DE PASTAS (Mapa Mental)
Modelo 1/
│
├── index.html               (O arquivo principal - Onde está o texto e HTML)
│
├── assets/                  (Tudo que é visual fica aqui)
│   ├── css/
│   │   ├── main.css         (O CÉREBRO: Importa todos os outros CSS. Não edite aqui)
│   │   ├── variables.css    (AQUI É O SEGREDO: Mude as cores do cliente aqui!)
│   │   ├── reset.css        (NÃO TOQUE: Limpa as margens dos navegadores)
│   │   ├── sections.css     (LAYOUT: Margens, posições e visual dos cards)
│   │   └── responsive.css   (CELULAR: Se quebrar no mobile, arrume aqui)
│   │
│   ├── js/
│   │   └── script.js        (Lógica do Menu Mobile e fechar ao clicar)
│   │
│   ├── img/                 (Imagens organizadas)
│   │   ├── hero/            (Banner principal: Ideal 1920x1080 ou 800x600 leve)
│   │   ├── services/        (Ícones ou fotos pequenas: Ideal quadrados)
│   │   ├── about/           (Foto da equipe/dono)
│   │   └── placeholder.jpg  (Imagem tapa-buraco)
│   │
│   └── icons/               (Favicon.ico e SVGs soltos)
│
└── README.md                (Este arquivo)

---

## ⚡ 2. CHECKLIST DE PERSONALIZAÇÃO RÁPIDA (Venda em 10 min)

Para adaptar este template para um novo cliente, siga esta ordem exata:

### A. Trocar Identidade Visual (`assets/css/variables.css`)
1. Abra o `variables.css`.
2. Mude `--primary-color`: Cor principal da logo do cliente.
3. Mude `--secondary-color`: Uma cor de apoio (geralmente um tom mais claro ou complementar).
4. **Dica:** O site inteiro muda sozinho. Não precisa caçar cor no CSS.

### B. Editar Conteúdo (`index.html`)
1. **Título da Aba:** Mude a tag `<title>` (Isso é o SEO básico).
2. **Meta Description:** Adicione uma descrição curta na tag `<meta name="description">`.
3. **Logo:** No `<h1>`, troque "Polaris" pelo nome da empresa.
4. **Links do WhatsApp:**
   - Dê Ctrl+F e procure por `wa.me`.
   - Mude o DDD e o NÚMERO em todos os links (são 3 ou 4 botões).
   - **Atenção:** Mantenha o `55` do Brasil antes do DDD.

### C. Imagens (`assets/img/`)
1. Substitua as imagens nas pastas, mas **tente manter o mesmo nome** se quiser economizar tempo, ou atualize o `src` no HTML.
2. **IMPORTANTE:** Passe todas as imagens no [TinyPNG](https://tinypng.com) antes de subir. Imagem pesada deixa o site lento e o cliente reclama.

---

## ⚠️ 3. PONTOS DE ATENÇÃO (Não Esqueça!)

1. **Botão Flutuante:**
   - Ele está no final do `index.html` e estilizado no fim do `sections.css`.
   - **Regra Comercial:** Esse botão é promessa de venda do Plano Essence. Não retire.

2. **Menu Mobile:**
   - Se adicionar novos itens no menu (`<li>`), verifique se o menu mobile não está cortando na tela do celular.
   - O script `assets/js/script.js` fecha o menu automaticamente ao clicar no link. Teste isso.

3. **Formulário:**
   - **LEMBRETE:** Este modelo (Essence) NÃO TEM formulário de e-mail (PHP/Backend).
   - Todos os botões levam para o WhatsApp. Se o cliente pedir formulário de e-mail, é **Plano Authority** (Upsell).

---

## 🚀 4. COMO SUBIR (DEPLOY)

1. **Netlify / Vercel:**
   - Arraste a pasta `Modelo 1` inteira para o painel.
   - O site estará no ar em segundos.
2. **Domínio:**
   - Configure o DNS apenas depois que o cliente pagar os 50% finais.

---

## 🛠 5. MANUTENÇÃO FUTURA

- **Cliente pediu para mudar a cor do botão?** -> Vá em `variables.css`.
- **Cliente quer aumentar a letra do banner?** -> Vá em `sections.css` (classe `.hero`).
- **Site ficou torto no iPhone?** -> Vá em `responsive.css` (`@media`). -->
