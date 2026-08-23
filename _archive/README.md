# _archive

Rotas de eventos descontinuados, retiradas do site em 22/08/2026.

**Liga da Firma** e **Healthy Hour** não acontecem mais, e `/eventos` era o hub que
listava os dois. O código foi movido pra cá em vez de deletado: continua no repositório,
legível e pronto pra voltar, mas fora de `app/` — então o Next não gera rota nem inclui
no bundle. O site fica mais leve sem perder nada.

Para reativar qualquer uma, basta mover a pasta de volta pra `app/` e remover o redirect
correspondente em `next.config.mjs`.

As três rotas hoje redirecionam para https://www.corporategamesbrasil.com

> Vale lembrar: mesmo se estas pastas fossem apagadas, o git guardaria tudo. O último
> commit com elas vivas em `app/` é o anterior a este arquivamento — recuperável com
> `git show <sha>:app/liga-da-firma/page.tsx`. Esta pasta é conveniência, não backup.
