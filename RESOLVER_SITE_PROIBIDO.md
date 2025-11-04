# 🚨 COMO RESOLVER "SITE PROIBIDO" NA HOSTINGER

O erro **"Site Proibido"** (403 Forbidden) acontece por **permissões de arquivo incorretas** ou problemas com .htaccess.

---

## ✅ SOLUÇÃO RÁPIDA (Faça NESTA ORDEM)

### **PASSO 1: Corrija as Permissões Automaticamente**

A Hostinger tem uma ferramenta que resolve o problema automaticamente:

1. Entre no **hPanel da Hostinger**
2. Na barra de busca do hPanel, digite: **"Fix File Ownership"**
3. Clique na opção que aparecer
4. Marque a caixa de confirmação
5. Clique em **"Execute"** ou **"Executar"**
6. Aguarde alguns segundos
7. Teste seu site novamente

**Isso resolve em 90% dos casos!**

---

### **PASSO 2: Verifique a Estrutura de Pastas**

No Gerenciador de Arquivos da Hostinger:

✅ **ESTRUTURA CORRETA:**
```
public_html/
├── index.html          ← DEVE estar aqui (não dentro de subpasta!)
├── .htaccess           
├── favicon.svg
├── favicon.png
├── assets/             ← pasta
└── sounds/             ← pasta
```

❌ **ESTRUTURA ERRADA (NÃO FUNCIONA):**
```
public_html/
└── public/             ← ERRADO! Não crie esta pasta
    ├── index.html
    ├── assets/
    └── ...
```

❌ **OUTRO ERRO COMUM:**
```
public_html/
└── dist/               ← ERRADO! Não crie esta pasta
    └── public/
        ├── index.html
        └── ...
```

**REGRA DE OURO:** O arquivo `index.html` deve estar **diretamente** em `public_html/`, não dentro de nenhuma subpasta!

---

### **PASSO 3: DELETE TUDO e Faça Upload Correto**

Se ainda não funcionar:

1. **No Gerenciador de Arquivos:**
   - Abra a pasta `public_html`
   - Selecione TODOS os arquivos e pastas
   - Delete TUDO (sem medo!)
   - Certifique-se que `public_html` está vazia

2. **Faça Upload Correto:**
   - No seu computador, vá até a pasta deste projeto
   - Entre em `dist/public/`
   - Selecione TUDO que está DENTRO de `dist/public/`
   - Arraste para `public_html` na Hostinger
   
3. **Verifique:**
   - `index.html` está em `public_html/`? ✅
   - `assets/` está em `public_html/`? ✅
   - `.htaccess` está em `public_html/`? ✅

---

### **PASSO 4: Permissões Manuais (Se NADA Funcionar)**

Se a ferramenta automática não funcionou:

1. No Gerenciador de Arquivos
2. Clique com botão direito em `public_html`
3. Escolha **"Change Permissions"** ou **"Permissões"**
4. Configure assim:
   - **Pastas (assets/, sounds/)**: `755`
   - **Arquivos (index.html, etc)**: `644`

Como configurar:
- `755` para pastas = Ler ✓, Escrever ✓, Executar ✓ (Owner) + Ler ✓, Executar ✓ (Outros)
- `644` para arquivos = Ler ✓, Escrever ✓ (Owner) + Ler ✓ (Outros)

---

## 🔍 CHECKLIST FINAL

Antes de testar, confirme:

- [ ] Usei a ferramenta **"Fix File Ownership"** no hPanel
- [ ] `index.html` está em `public_html/` (não em subpasta)
- [ ] `.htaccess` está em `public_html/` 
- [ ] Pastas `assets/` e `sounds/` estão em `public_html/`
- [ ] Não criei pastas extras como `dist/` ou `public/` dentro de `public_html/`
- [ ] Limpei o cache do navegador (Ctrl + Shift + R)

---

## 🔧 TESTE EM MODO ANÔNIMO

Depois de fazer as correções:
1. Abra uma janela anônima/privada no navegador
2. Acesse seu site
3. Se funcionar = problema resolvido! 🎉
4. Se não funcionar = veja próxima seção

---

## 🆘 SE AINDA NÃO FUNCIONAR

Faça isso e me envie print:

1. **Abra o Console do Navegador:**
   - Pressione `F12` no teclado
   - Vá na aba "Console"
   - Tire um print dos erros vermelhos

2. **Tire Print da Estrutura:**
   - No File Manager da Hostinger
   - Mostre o que tem dentro de `public_html/`

3. **Me Envie:**
   - Print do console
   - Print da estrutura
   - O endereço do seu site

---

## 📌 ARQUIVO .htaccess CORRETO

Se precisar criar manualmente, use este conteúdo:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . index.html [L]
```

Salve como `.htaccess` (com o ponto no início) em `public_html/`

---

## 🎯 CAUSA MAIS COMUM DO ERRO

**90% das vezes** o problema é:

❌ Fazer upload da pasta `dist/` inteira  
❌ Fazer upload da pasta `public/` inteira  
❌ Criar subpastas desnecessárias  

✅ **CORRETO**: Fazer upload apenas do **CONTEÚDO** de `dist/public/`

**Pense assim:** O que está DENTRO de `dist/public/` deve ir DIRETAMENTE para `public_html/`

---

## 💡 DICA PRO

Depois de fazer upload, seu `public_html` deve ter exatamente isso na raiz:
- 1 arquivo `index.html`
- 1 arquivo `.htaccess` 
- 2 imagens (favicon.svg e favicon.png)
- 2 pastas (assets/ e sounds/)

**Se tiver mais ou menos que isso, está errado!**

---

Siga estes passos **NA ORDEM** e seu site vai funcionar! 🚀
