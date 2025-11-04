# ⚡ GUIA RÁPIDO - Deploy no Render

## 🎯 3 PASSOS SIMPLES

### **PASSO 1: Criar Conta** (2 minutos)
1. Acesse: https://render.com
2. Clique em **"Get Started for Free"**
3. Faça login com GitHub (mais fácil)

---

### **PASSO 2: Enviar Código** (3 minutos)

#### **Usando Replit (mais fácil):**
1. Aqui no Replit, clique no ícone de **Version Control** (📁 lado esquerdo)
2. Se aparecer "Connect to GitHub":
   - Clique e autorize
   - Escolha "Create new repo"
   - Nome: `brinle-neural`
   - Clique em "Create"
3. Se já está conectado:
   - Clique em "Commit & Push"
   - Digite uma mensagem: "Deploy inicial"
   - Clique em "Commit & Push"

#### **OU Baixar e fazer upload:**
1. Baixe o projeto como ZIP
2. Crie repositório no GitHub: https://github.com/new
3. Faça upload dos arquivos

---

### **PASSO 3: Criar Web Service no Render** (5 minutos)

1. **Acesse:** https://dashboard.render.com
2. **Clique em:** "New +" → "Web Service"
3. **Conecte o GitHub** e escolha o repositório `brinle-neural`
4. **Configure assim:**

```
Name: brinle-neural
Region: Oregon (US West) ou Frankfurt
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm start
Plan: Free
```

5. **Adicione variável de ambiente:**
   - Clique em "Add Environment Variable"
   - Key: `NODE_ENV`
   - Value: `production`

6. **Clique em:** "Create Web Service"

---

## 🎉 PRONTO!

Aguarde 3-5 minutos e seu site estará no ar em:
```
https://brinle-neural.onrender.com
```

---

## ⚠️ Importante Saber

✅ **É 100% GRÁTIS**
⚠️ No plano grátis, o site "dorme" após 15 min sem uso
⏱️ Primeiro acesso demora ~30s para "acordar", depois funciona normal

---

## 🔄 Para Atualizar Depois

1. Faça mudanças no código aqui no Replit
2. Version Control → "Commit & Push"
3. Render atualiza automaticamente! 🚀

---

## 📖 Detalhes Completos

Veja: **DEPLOY_RENDER.md** (está na raiz do projeto)
