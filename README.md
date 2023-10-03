# To-Do list com Clean Architecture
Projeto para prática dos conceitos de Clean Architecture, utilizando como regra de negócio base uma lista de tarefas.

## Clean Architecture - Conceito
A Clean Architecture incentiva que qualquer sistema deve ser focado na regra de negócio. Para isso devemos permitir a manutenabilidade do que é mutável e isolamento do que é imutável.

A regra de negócio deve ser o core da aplicação (camada mais baixa) e os aspectos técnicos devem ser isolados dela, pemitindo sua substituição com o menor esforço possível ao longo do tempo.

_A tecnologia muda muito rápido, a regra de negócio provavelmente não._

## Fluxo de Dependência
Um dos pontos chaves da Clean Architecture é o fluxo de dependência.
Basicamente, as regras de negócio ficam em camadas mais profundas do sistema. Essas camadas tendem a mudar menos que as camadas mais superficiais, que definem temas técnicos como tecnologia utilizada, banco, interfaces, etc.

A regra diz que uma camada mais superficial tem conhecimento sobre uma camada mais profunda. Mas uma camada mais baixa não tem conhecimento da camada mais alta.
Dessa forma, uma entidade pode ser manipulada por diversos casos de usos. Casos de uso podem ser manipulados por adaptadores e controllers. Controllers podem ser acessados via web, app de celular ou até terminal de comando.

## Prática
Na prática, a intenção deste projeto é:
- Manter uma regra de negócio isolada dos conceitos técnicos.
- Utilizar injeção de dependência para manipular temas técnicos.
- Tornar banco de dados e interface "plugins" da aplicação e torná-los intercambiáveis.
