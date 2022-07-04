# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias

**RN**
Não deve ser possível cadastrar um carro com a placa já existente
Não deve ser possível alterar a placa de um carro já existente
O carro deve ser cadastrado com disponibilidade ativa por padrão
Só um usuário admin pode cadastrar um novo carro.

# Listagem de carros

**RF**
Deve ser possível listar os carros disponíveis
Deve ser possível listar os carros disponíveis pela categoria
Deve ser possível listar os carros disponíveis pela marca

**RN**
Não é necessário estar logado no sistema

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Só um usuário admin pode cadastrar uma nova especificação.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carro

**RNF**
Utilizar o multer para upload de arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro de imagens deve ser um administrador

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo carro
