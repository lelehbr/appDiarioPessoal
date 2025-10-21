Aplicativo mobile de controle de finanças pessoais desenvolvido com React Native, Expo e Supabase na aula de CODIFICAR APLICAÇÕES DISPOSITIVOS MOVEIS.

📋 Funcionalidades
✅ Sistema de autenticação (Login e Cadastro)
✅ Dashboard com resumo financeiro
✅ Gráficos de receitas e despesas
✅ Cadastro de receitas e despesas
✅ Anexar comprovantes
✅ Gerenciamento de categorias personalizadas
✅ Listagem e filtros de transações
✅ Design responsivo e moderno
1. Clone e instale as dependências
# Já está no diretório do projeto
cd C:\Users\lucas.flores\Documents\appFinancasDespesas

# Instalar dependências
npm install
2. Configurar o Supabase
2.1. Criar projeto no Supabase
Acesse https://supabase.com
Crie uma conta (se não tiver)
Clique em "New Project"
Preencha os dados:
Name: app-financas (ou o nome que preferir)
Database Password: Crie uma senha forte
Region: Escolha a região mais próxima
Aguarde a criação do projeto (pode levar alguns minutos)
2.2. Executar o Schema SQL
No painel do Supabase, vá em SQL Editor (menu lateral)
Clique em New Query
Copie todo o conteúdo do arquivo supabase-schema.sql
Cole no editor SQL
Clique em Run (ou pressione Ctrl+Enter)
Aguarde a execução (deve aparecer "Success")
2.3. Configurar as credenciais no app
No painel do Supabase, vá em Settings > API

Copie as seguintes informações:

Project URL (algo como: https://xxxxx.supabase.co)
anon public key (uma chave longa)
Abra o arquivo src/config/supabase.js

Substitua as variáveis:

const SUPABASE_URL = 'https://xxxxx.supabase.co'; // Cole sua URL aqui
const SUPABASE_ANON_KEY = 'sua-anon-key-aqui'; // Cole sua chave aqui
4. Executar o aplicativo
# Iniciar o Expo
npm start

# Ou para plataformas específicas:
npm run android  # Para Android
npm run ios      # Para iOS (apenas no macOS)
5. Testar no dispositivo
Instale o app Expo Go no seu celular:

Android - Google Play
iOS - App Store
Escaneie o QR Code que aparece no terminal ou navegador

O app será carregado no seu dispositivo!
