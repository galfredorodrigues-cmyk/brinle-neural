# Como fazer Deploy do Brinle Neural na Hostinger

## ✅ Sua aplicação está pronta!

A aplicação Brinle Neural é **100% frontend** e pode ser hospedada na **Hostinger Shared Hosting** sem problemas.

## 📦 Arquivos prontos para upload

Todos os arquivos já foram compilados e estão na pasta: `dist/public/`

## 🚀 Passo a Passo para Deploy

### 1. Acesse o Painel da Hostinger
- Entre no [hPanel da Hostinger](https://hpanel.hostinger.com)
- Faça login com suas credenciais

### 2. Abra o Gerenciador de Arquivos
- No painel, clique em **"Gerenciador de Arquivos"** (File Manager)
- Navegue até a pasta `public_html`

### 3. Limpe a pasta public_html (se necessário)
- Se houver arquivos antigos, selecione todos e delete
- A pasta deve ficar vazia antes de fazer o upload

### 4. Faça o upload dos arquivos
- Dentro de `public_html`, clique em **"Upload"**
- Selecione **TODOS** os arquivos e pastas de dentro da pasta `dist/public/`
- **IMPORTANTE**: Faça upload do CONTEÚDO da pasta, não da pasta em si
- Certifique-se de que os seguintes arquivos estão em `public_html`:
  - `index.html`
  - `favicon.svg`
  - `favicon.png`
  - `.htaccess` (arquivo oculto - muito importante!)
  - pasta `assets/`
  - pasta `sounds/`

### 5. Verifique a estrutura final
A estrutura em `public_html` deve ficar assim:
```
public_html/
├── index.html
├── .htaccess
├── favicon.svg
├── favicon.png
├── assets/
│   ├── index-BPXLEdE5.js
│   ├── index-C46uWeCo.css
│   └── Neural_network_background_pattern_a0a300e6-B6MHsYzv.png
└── sounds/
    ├── ba-be-bi-bo-bu.mp3
    ├── ca-ce-ci-co-cu.mp3
    └── ... (outros arquivos de áudio)
```

### 6. Teste seu site
- Acesse seu domínio (ex: `https://seudominio.com`)
- A aplicação Brinle Neural deve aparecer funcionando perfeitamente!

## 🔧 Arquivo .htaccess

O arquivo `.htaccess` já foi criado automaticamente e está incluído no build. Ele é necessário para que o roteamento funcione corretamente.

**Nota**: Arquivos que começam com `.` (ponto) são ocultos. No gerenciador de arquivos da Hostinger, certifique-se de que a opção "Mostrar arquivos ocultos" está ativada.

## ⚠️ Observações Importantes

1. **Não precisa de Node.js**: Esta é uma aplicação estática, então funciona perfeitamente no Shared Hosting da Hostinger
2. **Sem banco de dados**: Toda a funcionalidade está no frontend, não precisa configurar banco de dados
3. **HTTPS automático**: A Hostinger geralmente fornece SSL gratuito, sua aplicação funcionará em HTTPS
4. **Cache do navegador**: Se fizer alterações e não aparecerem, limpe o cache do navegador (Ctrl + Shift + R)

## 🔄 Para fazer atualizações futuras

1. Rode `npm run build` novamente
2. Faça upload dos novos arquivos de `dist/public/` para `public_html`
3. Substitua todos os arquivos existentes

## 🎉 Pronto!

Sua aplicação Brinle Neural estará online e acessível para o mundo todo!

---

**Dúvidas?** Entre em contato com o suporte da Hostinger ou consulte a documentação deles sobre hospedagem de aplicações React.
