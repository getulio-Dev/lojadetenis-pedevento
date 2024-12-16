
// Função para adicionar ao carrinho
   
   function addToCart(productName, productPrice) {
    alert(`Produto: ${productName} foi adicionado ao carrinho por R$ ${productPrice.toFixed(2)}.`);
    // Aqui você pode integrar uma funcionalidade de carrinho
    console.log(`Adicionado ao carrinho: ${productName} - R$ ${productPrice}`);
}