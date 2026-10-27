# TrovataCast, página de apresentação

Página estática para apresentar o TrovataCast a clientes, publicada em https://lourencohn.github.io/trovatacast-site/. É HTML, CSS e um JavaScript pequeno, sem etapa de build.

## Publicação

O GitHub Pages publica a branch `main`, pasta raiz. Cada push na `main` atualiza o site em um ou dois minutos. A configuração fica em Settings, Pages, Deploy from a branch.

A prévia do link no WhatsApp usa `assets/img/og.png` pelo endereço completo do site, declarado no `og:image` do `index.html`. Se o endereço mudar (domínio próprio, outro host), atualize o `og:url`, o `og:image` e o `canonical`.

Para ver localmente, rode `python3 -m http.server 8099` na pasta e abra `http://localhost:8099`.

## Contato

Telefone e endereço da Trovata estão no `index.html`, na seção `#contato` e no rodapé. Os botões de agendar levam para essa seção, e "Ligar" usa `tel:`, que no celular abre o discador.

## De onde vêm as telas

As imagens em `assets/img/telas` são capturas do app real rodando num Moto G22 e da vitrine do Catálogo Link aberta num Chrome, durante uma chamada de verdade entre os dois. Os dados são todos fictícios: a marca Vila Aurora Moda, a vendedora, as lojas clientes, os carrinhos e os pedidos foram inventados para a demonstração. As fotos dos produtos são do DummyJSON, um catálogo público de dados de teste. Para campanha paga, vale trocá-las por fotos próprias ou de banco com licença comercial.

O ambiente que gerou as telas (servidor mock, vitrine local, app de demonstração e roteiro da chamada) fica fora deste repositório, em `trovatacast-demo-local`.
